import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">

        <p className="text-8xl font-bold text-blue-500">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}