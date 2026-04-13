import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

export function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <article className="card-soft flex h-full flex-col p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-zinc-800">
        {icon}
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{description}</p>
      <Link
        href={href}
        className="btn-primary mt-5 w-fit"
      >
        Open tool
      </Link>
    </article>
  );
}
