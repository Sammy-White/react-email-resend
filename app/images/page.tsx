import facebookImage from "./assets/facebook.png";
import instagramImage from "./assets/instagram.png";
import linkedinImage from "./assets/linkedin.png";
import reachNewCustomerImage from "./assets/reach-new-customer-image.png";
import xImage from "./assets/x.png";

const images = [
  { src: xImage.src, alt: "X (Twitter)" },
  { src: linkedinImage.src, alt: "LinkedIn" },
  { src: facebookImage.src, alt: "Facebook" },
  { src: instagramImage.src, alt: "Instagram" },
  { src: reachNewCustomerImage.src, alt: "Reach new customers" },
  {
    src: "https://github.com/user-attachments/assets/537578be-e57e-4cba-9c49-561f80eac305",
    alt: "Preview",
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
          <div key={alt} className="flex flex-col items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} width={48} height={48} />
            <span className="text-sm text-gray-600">{alt}</span>
            <span className="text-xs text-gray-400 break-all max-w-[200px] text-center">{src}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
