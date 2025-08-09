import Image from "next/image";

const images = [
  "/screens/Screenshot 2025-08-08 at 07.45.19.png",
  "/screens/Screenshot 2025-08-08 at 07.46.43.png",
  "/screens/Screenshot 2025-08-08 at 07.47.04.png",
  "/screens/Screenshot 2025-08-08 at 07.47.23.png",
  "/screens/Screenshot 2025-08-08 at 07.48.31.png",
  "/screens/Screenshot 2025-08-08 at 07.48.51.png",
  "/screens/Screenshot 2025-08-08 at 07.49.22.png",
  "/screens/Screenshot 2025-08-08 at 07.49.46.png",
];

export function Screenshots() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">Design reference</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {images.map((src, i) => (
            <div key={src} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image src={src} alt={`Design ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
