import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "회사소개",
  description: company.description,
};

const strengths = [
  {
    title: "폭넓은 제품 라인업",
    desc: "오일씰 · 패킹 · 오링 등 산업 전반의 실링 부품을 한 곳에서 공급합니다.",
  },
  {
    title: "국산 · 수입 브랜드",
    desc: "NAK, NOK, FREUDENBERG, SKF 등 신뢰받는 국내외 브랜드를 취급합니다.",
  },
  {
    title: "맞춤 솔루션 제안",
    desc: "사용 환경(온도 · 압력 · 유체)에 맞는 최적의 재질과 규격을 제안합니다.",
  },
  {
    title: "빠른 상담 · 대응",
    desc: "카카오톡 상담으로 필요한 규격을 신속하게 확인하고 안내해 드립니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <div className="bg-brand-blue py-16 text-white md:py-20">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            About Us
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">회사소개</h1>
        </div>
      </div>

      <Section title={`${company.nameKo}는`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>{company.description}</p>
            <p>
              씨오에스씰은 오랜 현장 경험을 바탕으로 고객이 필요로 하는 정확한
              규격의 실링 부품을 신속하게 공급하는 것을 가장 중요한 가치로
              생각합니다. 단순 판매를 넘어, 사용 환경에 가장 적합한 제품을 함께
              찾아드리는 파트너가 되겠습니다.
            </p>
            <p className="text-sm text-muted/80">
              ※ 본 소개 문구는 예시(placeholder)입니다. 실제 회사 소개 내용으로
              교체 예정입니다.
            </p>
          </div>

          {/* 회사 개요 카드 */}
          <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line">
            <div className="flex gap-6 px-5 py-4">
              <dt className="w-24 shrink-0 text-sm font-semibold text-muted">
                상호
              </dt>
              <dd className="text-ink">{company.nameKo}</dd>
            </div>
            <div className="flex gap-6 px-5 py-4">
              <dt className="w-24 shrink-0 text-sm font-semibold text-muted">
                대표
              </dt>
              <dd className="text-ink">{company.ceo}</dd>
            </div>
            <div className="flex gap-6 px-5 py-4">
              <dt className="w-24 shrink-0 text-sm font-semibold text-muted">
                취급품목
              </dt>
              <dd className="text-ink">
                오일씰, 패킹, 오링 등 산업용 실링 부품
              </dd>
            </div>
            <div className="flex gap-6 px-5 py-4">
              <dt className="w-24 shrink-0 text-sm font-semibold text-muted">
                소재지
              </dt>
              <dd className="text-ink">{company.address}</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* 강점 */}
      <Section surface title="씨오에스씰의 강점">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-white p-6"
            >
              <span className="text-2xl font-black text-brand-red/30">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            제품 보러가기
          </Link>
        </div>
      </Section>
    </>
  );
}
