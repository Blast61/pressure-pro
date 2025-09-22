import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl space-y-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-neutral-600">
        We couldn’t find what you were looking for.
      </p>
      <Link href="/" className="inline-block rounded border px-4 py-2">
        Back to Home
      </Link>
    </div>
  );
}
