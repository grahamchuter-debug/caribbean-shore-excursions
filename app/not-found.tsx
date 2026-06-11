import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container-wide max-w-lg mx-auto">
        <h1 className="font-display text-6xl font-bold text-caribbean-700">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
