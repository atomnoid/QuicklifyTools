import { Readable } from "stream";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import { NextResponse } from "next/server";

function isConfigured() {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  );
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "Image compression is not configured. Add Cloudinary credentials to .env" },
      { status: 503 }
    );
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const file = form.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No image file provided." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "File must be an image." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "quicklify-uploads",
        resource_type: "image",
        use_filename: true,
        unique_filename: true,
      },
      (err, result) => {
        if (err || !result) reject(err ?? new Error("Upload failed"));
        else resolve(result);
      }
    );
    Readable.from(buffer).pipe(uploadStream);
  });

  const url = cloudinary.url(uploadResult.public_id, {
    secure: true,
    resource_type: "image",
    transformation: [{ quality: "auto:good", fetch_format: "auto" }],
  });

  let compressedSize: number | null = null;
  try {
    const head = await fetch(url, { method: "HEAD" });
    const len = head.headers.get("content-length");
    if (len) compressedSize = parseInt(len, 10);
  } catch {
    compressedSize = null;
  }

  return NextResponse.json({
    url,
    originalSize: file.size,
    compressedSize: compressedSize ?? uploadResult.bytes ?? file.size,
  });
}

export const runtime = "nodejs";
