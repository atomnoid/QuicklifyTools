type AdPlaceholderProps = {
  label?: string;
  className?: string;
};

export function AdPlaceholder({ label = "Ad space", className = "" }: AdPlaceholderProps) {
  return (
    <div
      className={`rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-center ${className}`}
      role="complementary"
      aria-label={label}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Advertisement</p>
      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </div>
  );
}
