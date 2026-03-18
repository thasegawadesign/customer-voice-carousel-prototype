import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
  return (
    <>
      <main>
        <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={OPTIONS} />
      </main>
    </>
  );
}
