import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    slidesToScroll: 2,
    containScroll: "trimSnaps",
    loop: false,
  };
  return (
    <>
      <main className={cn("pt-60")}>
        <EmblaCarousel
          slides={[
            <Link key="1" href="/" className="flex flex-col gap-5">
              <Image
                src="/customer-voice-global.avif"
                alt="1"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                グローバル・マネジメント様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:3年ぶりに2度目のリニューアル。上場企業グローバル・マネジメント様サイトリニューアル事例紹介
              </h2>
            </Link>,
            <Link key="2" href="/" className={cn("flex flex-col gap-5")}>
              <Image
                src="/customer-voice-will.avif"
                alt="2"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                ウィル・ワーク様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:ブランディングとマーケティングを高次元で融合。人材サービスのウィル・ワークが実現したコーポレートサイトリニューアル事例紹介
              </h2>
            </Link>,
            <Link key="3" href="/" className={cn("flex flex-col gap-5")}>
              <Image
                src="/customer-voice-info.avif"
                alt="1"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                インフォブレイン様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:ブランディングとマーケティングを高次元で融合。インフォブレインが実現したコーポレートサイトリニューアル事例紹介
              </h2>
            </Link>,
            <Link key="4" href="/" className={cn("flex flex-col gap-5")}>
              <Image
                src="/customer-voice-green.avif"
                alt="2"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                グリーンマネジメント様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:事業成長に伴い強みを再整理し問い合わせの質が向上。グリーンマネジメント様サイトリニューアル事例紹介
              </h2>
            </Link>,
            <Link key="5" href="/" className={cn("flex flex-col gap-5")}>
              <Image
                src="/customer-voice-techbiz.avif"
                alt="1"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                TechBiz様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:業界をリードするTechBiz様サイトリニューアル事例紹介
              </h2>
            </Link>,
            <Link key="6" href="/" className={cn("flex flex-col gap-5")}>
              <Image
                src="/customer-voice-stock.avif"
                alt="2"
                width={480}
                height={270}
                className={cn("rounded-lg")}
              />
              <p className={cn("text-[15px] font-normal text-neutral-400")}>
                iLight様
              </p>
              <h2 className={cn("text-[20px] leading-7 font-medium")}>
                お客さまの声:&quot;光と空気感&quot;を映し出す。iLightリブランディングプロジェクト事例紹介
              </h2>
            </Link>,
          ]}
          options={OPTIONS}
        />
      </main>
    </>
  );
}
