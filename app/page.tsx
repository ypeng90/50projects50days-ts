import { PreviewCard } from "@/components/previewCard";
import { previewCardsData } from "./preview-cards-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {previewCardsData.map((data, index) => (
          <PreviewCard key={index} index={index} title={data.title} href={data.href} imageSrc={data.imageSrc} />
        ))}
      </div>
    </main>
  );
}
