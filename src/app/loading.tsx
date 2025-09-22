export default function LoadingHome() {
  return (
    <div className="space-y-6">
      <div className="h-7 w-64 animate-pulse rounded bg-neutral-200" />
      <div className="h-10 w-full animate-pulse rounded bg-neutral-200" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-40 animate-pulse rounded border bg-neutral-100" />
        ))}
      </div>
    </div>
  );
}
