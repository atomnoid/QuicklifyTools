export const site = {
  name: "QuicklifyTools",
  domain: "QuicklifyTools.com",
  url: "https://quicklifytools.com",
  title: "QuicklifyTools — Free Online Image & PDF Tools",
  description:
    "Compress images with Cloudinary, convert PDF to JPG with PDF.js, and merge JPGs into PDF — fast, free, and mobile-friendly at QuicklifyTools.com.",
} as const;

export const seoKeywords = [
  "free online tools",
  "compress image to 10kb",
  "compress image to 20kb",
  "compress image to 50kb",
  "image compressor",
  "reduce image size without losing quality",
  "image compressor online",
  "make image smaller for WhatsApp",
  "compress image for Instagram upload",
  "PDF converter",
  "pdf to jpg high quality free",
  "convert pdf to image without losing quality",
  "jpg to pdf in seconds",
  "QR code generator",
  "free online tools for students",
  "online file converter",
];

export type ToolSlug = "image-compressor" | "pdf-to-jpg" | "jpg-to-pdf";

export const tools: {
  slug: ToolSlug;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    slug: "image-compressor",
    title: "Image Compressor",
    description:
      "Shrink PNG, JPG, and WebP files while keeping quality using Cloudinary.",
    href: "/tools/image-compressor",
  },
  {
    slug: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Turn each PDF page into a high-quality JPEG in your browser.",
    href: "/tools/pdf-to-jpg",
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF",
    description: "Combine one or more JPEG images into a single PDF document.",
    href: "/tools/jpg-to-pdf",
  },
];
