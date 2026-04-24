import Image from "next/image";
import facebookImage from "./assets/facebook.png";
import instagramImage from "./assets/instagram.png";
import linkedinImage from "./assets/linkedin.png";
import xImage from "./assets/x.png";

const images = [
  { src: xImage, alt: "X (Twitter)" },
  { src: linkedinImage, alt: "LinkedIn" },
  { src: facebookImage, alt: "Facebook" },
  { src: instagramImage, alt: "Instagram" },
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
          <div key={alt} className="flex flex-col items-center gap-2">
            <Image src={src} alt={alt} width={48} height={48} />
            <span className="text-sm text-gray-600">{alt}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
