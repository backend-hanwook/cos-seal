import type { Metadata } from "next";
import Section from "@/components/Section";
import PartnerGrid from "@/components/PartnerGrid";
import { partnerBrands, partnerNote, clients } from "@/data/partners";

export const metadata: Metadata = {
  title: "파트너 & 고객사",
  description:
    "NAK, NOK, MEIWA, MORISEI, SAKAGAMI, FREUDENBERG, SKF 등 (주)씨오에스씰이 취급하는 파트너 브랜드와 주요 고객사를 소개합니다.",
};

export default function PartnersPage() {
  return (
    <>
      <div className="bg-brand-blue py-16 text-white md:py-20">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Partners &amp; Clients
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            파트너 &amp; 고객사
          </h1>
        </div>
      </div>

      {/* 파트너 브랜드 */}
      <Section
        title="파트너 브랜드"
        description={`${partnerNote} 국내외 유명 브랜드의 정품 씰을 공급합니다.`}
      >
        <PartnerGrid brands={partnerBrands} />
        <p className="mt-8 rounded-lg bg-surface px-5 py-4 text-center text-sm text-muted">
          {partnerNote}
        </p>
      </Section>

      {/* 고객사 */}
      <Section surface title="주요 고객사">
        <div className="mx-auto max-w-md">
          <PartnerGrid brands={clients} />
        </div>
      </Section>
    </>
  );
}
