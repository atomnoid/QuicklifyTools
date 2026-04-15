import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolVisitTracker } from "@/components/ToolVisitTracker";

type ToolPageLayoutProps = {
  title: string;
  description: string;
  toolHref: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function ToolPageLayout({ title, description, toolHref, icon, children }: ToolPageLayoutProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
      <ToolVisitTracker toolHref={toolHref} />
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-zinc-800">
            {icon}
          </div>
        ) : null}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{title}</h1>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{description}</p>
      <div className="card-soft mt-8 p-6 sm:p-8">
        {children}
      </div>
      <div className="mt-8">
        <AdPlaceholder label="In-content ad slot (responsive)" />
      </div>
    </div>
  );
}
