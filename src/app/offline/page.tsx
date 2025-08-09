export const dynamic = "force-static";

export default function Offline() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">You are offline</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Please check your connection. Some features may be unavailable.
        </p>
      </div>
    </main>
  );
}
