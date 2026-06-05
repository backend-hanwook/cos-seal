import Link from "next/link";
import { company } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      {/* 배경 데코 */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-red blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-x relative py-24 md:py-36">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium">
            오일씰 · 패킹 · 오링 전문 기업
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl md:leading-[1.15]">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            국산부터 NAK · NOK 등 수입 유명 브랜드까지, 다양한 산업용 실링
            부품을 안정적으로 공급합니다. 사용 환경에 꼭 맞는 최적의 솔루션을
            제안드립니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              제품 보러가기
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              문의 · 오시는 길
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
