import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

type CustomerVoice = {
  href: string;
  image: string;
  company: string;
  title: string;
};

const customerVoices: CustomerVoice[] = [
  {
    href: "/",
    image: "/customer-voice-global.avif",
    company: "グローバル・マネジメント様",
    title:
      " お客さまの声:3年ぶりに2度目のリニューアル。上場企業グローバル・マネジメント様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-will.avif",
    company: "ウィル・ワーク様",
    title:
      "お客さまの声:ブランディングとマーケティングを高次元で融合。人材サービスのウィル・ワークが実現したコーポレートサイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-info.avif",
    company: "インフォブレイン様",
    title:
      "お客さまの声:ブランディングとマーケティングを高次元で融合。インフォブレインが実現したコーポレートサイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-green.avif",
    company: "グリーンマネジメント様",
    title:
      "お客さまの声:事業成長に伴い強みを再整理し問い合わせの質が向上。グリーンマネジメント様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-techbiz.avif",
    company: "TechBiz様",
    title: "お客さまの声:業界をリードするTechBiz様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-stock.avif",
    company: "iLight様",
    title:
      "お客さまの声:&quot;光と空気感&quot;を映し出す。iLightリブランディングプロジェクト事例紹介",
  },
];

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    slidesToScroll: 2,
    containScroll: "trimSnaps",
    loop: false,
  };
  return (
    <>
      <main className={cn("px-5 pt-60 xl:pr-20 2xl:pr-48")}>
        <EmblaCarousel
          slides={customerVoices.map((voice, i) => (
            <Link key={i} href="/" className="group flex flex-col gap-5">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={voice.image}
                  alt={voice.company}
                  width={480}
                  height={270}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="text-[15px] font-normal text-neutral-400">
                {voice.company}
              </p>

              <h2 className="text-[20px] leading-7 font-medium group-hover:underline">
                {voice.title}
              </h2>
            </Link>
          ))}
          options={OPTIONS}
        />
      </main>
    </>
  );
}
