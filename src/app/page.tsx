import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

type CustomerVoice = {
  href: string;
  image: string;
  company: string;
  title: React.ReactNode | string;
};

const customerVoices: CustomerVoice[] = [
  {
    href: "/",
    image: "/customer-voice-global.avif",
    company: "グローバル・マネジメント様",
    title:
      " お客様の声:3年ぶりに2度目のリニューアル。上場企業グローバル・マネジメント様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-will.avif",
    company: "ウィル・ワーク様",
    title:
      "お客様の声:ブランディングとマーケティングを高次元で融合。人材サービスのウィル・ワークが実現したコーポレートサイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-info.avif",
    company: "インフォブレイン様",
    title:
      "お客様の声:ブランディングとマーケティングを高次元で融合。インフォブレインが実現したコーポレートサイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-green.avif",
    company: "グリーンマネジメント様",
    title:
      "お客様の声:事業成長に伴い強みを再整理し問い合わせの質が向上。グリーンマネジメント様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-techbiz.avif",
    company: "TechBiz様",
    title: "お客様の声:業界をリードするTechBiz様サイトリニューアル事例紹介",
  },
  {
    href: "/",
    image: "/customer-voice-stock.avif",
    company: "iLight様",
    title: (
      <>
        お客様の声:&quot;光と空気感&quot;を映し出す。iLightリブランディングプロジェクト事例紹介
      </>
    ),
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
      <main className={cn("bg-neutral-100 px-4 py-20 xl:pr-20 2xl:pr-48")}>
        <div className={cn("mb-10 space-y-5")}>
          <h1
            className={cn(
              "font-regular relative pl-2 text-sm leading-4 tracking-wide text-neutral-700 underline",
              "before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-neutral-700 before:content-['']",
            )}
          >
            お客様の声
          </h1>
          <p
            className={cn(
              "text-2xl font-normal tracking-wider text-neutral-700",
            )}
          >
            様々な業種の成功事例
          </p>
          <p
            className={cn("text-xs font-normal tracking-wide text-neutral-700")}
          >
            ここでは、私たちのアプローチがどのように
            <br />
            お客様のビジネスに貢献したかを、実際の声とともにご紹介します。
          </p>
        </div>
        <div className={cn("flex flex-col gap-10 md:hidden")}>
          {customerVoices.map((voice, i) => (
            <Link key={i} href="/" className="flex flex-col gap-2">
              <div className={cn("overflow-hidden rounded-lg")}>
                <Image
                  src={voice.image}
                  alt={voice.company}
                  width={480}
                  height={270}
                  className="w-full"
                />
              </div>

              <p className={cn("text-xs font-normal text-neutral-500")}>
                {voice.company}
              </p>

              <h2
                className={cn(
                  "text-base leading-5 font-medium text-neutral-700 underline",
                )}
              >
                {voice.title}
              </h2>
            </Link>
          ))}
        </div>
        <div className={cn("hidden md:block")}>
          <EmblaCarousel
            slides={customerVoices.map((voice, i) => (
              <Link
                key={i}
                href="/"
                className={cn("group flex flex-col gap-5")}
              >
                <div className={cn("overflow-hidden rounded-lg")}>
                  <Image
                    src={voice.image}
                    alt={voice.company}
                    width={480}
                    height={270}
                    className={cn(
                      "w-full transition-transform duration-300 group-hover:scale-105",
                    )}
                  />
                </div>

                <p className={cn("text-[15px] font-normal text-neutral-500")}>
                  {voice.company}
                </p>

                <h2
                  className={cn(
                    "text-[20px] leading-7 font-medium text-neutral-700 group-hover:underline",
                  )}
                >
                  {voice.title}
                </h2>
              </Link>
            ))}
            options={OPTIONS}
          />
        </div>
      </main>
    </>
  );
}
