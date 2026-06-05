import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import PartnerGrid from "@/components/PartnerGrid";
import KakaoChannelButton from "@/components/KakaoChannelButton";
import { products } from "@/data/products";
import { partnerBrands, partnerNote, clients } from "@/data/partners";
import { company } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 회사소개 요약 */}
      <Section eyebrow="About Us" title="씨오에스씰을 소개합니다" center>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted">
          {company.description}
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 font-semibold text-brand-red hover:underline"
          >
            회사소개 자세히 보기 →
          </Link>
        </div>
      </Section>

      {/* 제품 */}
      <Section
        surface
        eyebrow="Products"
        title="취급 제품"
        description="오일씰, 패킹, 오링 등 다양한 산업용 실링 부품을 공급합니다."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* 파트너 & 고객사 */}
      <Section
        eyebrow="Partners & Clients"
        title="파트너 브랜드 & 주요 고객사"
        description={partnerNote}
      >
        <PartnerGrid brands={partnerBrands} />

        <h3 className="mb-5 mt-14 text-center text-sm font-bold uppercase tracking-widest text-brand-blue">
          Clients
        </h3>
        <div className="mx-auto max-w-md">
          <PartnerGrid brands={clients} />
        </div>
      </Section>

      {/* 연락 CTA */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="container-x text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            필요한 실링 부품, 편하게 문의하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            카카오톡으로 빠르게 상담하거나, 오시는 길을 확인하실 수 있습니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <KakaoChannelButton />
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              오시는 길 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
