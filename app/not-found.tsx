import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-xl mx-auto py-24 px-6 text-center">
      <h1 className="font-fraunces text-5xl text-deep-green mb-4">404</h1>
      <h2 className="font-fraunces text-2xl mb-4">Page Not Found</h2>
      <p className="text-ink/70 mb-8">
        The page you&apos;re looking for doesn&apos;t exist, or the link may
        be incorrect.
      </p>
      <Link
        href="/"
        className="inline-block bg-deep-green text-paper px-6 py-3 rounded-lg font-semibold"
      >
        Back to Home
      </Link>
    </main>
  );
}