export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-blue-500" />

        <p className="mt-5 text-sm text-gray-400">
          Loading...
        </p>
      </div>
    </main>
  );
}