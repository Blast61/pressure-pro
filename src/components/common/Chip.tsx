type ChipProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export default function Chip({ children, title, className }: ChipProps) {
  return (
    <span
      title={title}
      className={
        "inline-flex items-center rounded px-2 py-0.5 text-xs " +
        "bg-neutral-100 text-neutral-800 ring-1 ring-black/5 " +
        "dark:bg-neutral-200 dark:text-neutral-900 " +
        (className ?? "")
      }
    >
      {children}
    </span>
  );
}
