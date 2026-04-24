import Image from "next/image";

const images = [
  { src: "/x.png", alt: "X (Twitter)" },
  { src: "/linkedin.png", alt: "LinkedIn" },
  { src: "/facebook.png", alt: "Facebook" },
  { src: "/instagram.png", alt: "Instagram" },
  {
    src: "https://github.com/user-attachments/assets/ec77163d-06fe-4b3c-94fc-d656ebf7900b",
    alt: "Social Icon",
  },
];

export const metadata = {
  title: "Images",
  description: "Social media icons",
};

export default function ImagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Images</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {images.map(({ src, alt }) => (
          <div key={src} className="flex flex-col items-center gap-2">
            <Image src={src} alt={alt} width={48} height={48} />
            <span className="text-sm text-gray-600">{alt}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
