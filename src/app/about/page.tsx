import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { company, companyIntro, strengths } from "@/data/site";

export const metadata: Metadata = {
  title: "회사소개",
  description: company.description,
};

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
            {companyIntro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
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
                업력
              </dt>
              <dd className="text-ink">
                씰링 분야 {company.experienceYears}년
              </dd>
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
                주요 협력사
              </dt>
              <dd className="text-ink">{company.partnerNote}</dd>
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
        <div className="grid gap-6 md:grid-cols-3">
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
