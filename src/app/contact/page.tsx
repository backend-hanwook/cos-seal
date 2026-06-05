import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactInfo from "@/components/ContactInfo";
import MapEmbed from "@/components/MapEmbed";
import KakaoChannelButton from "@/components/KakaoChannelButton";

export const metadata: Metadata = {
  title: "오시는 길",
  description:
    "(주)씨오에스씰 오시는 길 및 연락처 안내. 카카오톡 상담으로 빠르게 문의하실 수 있습니다.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-blue py-16 text-white md:py-20">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">오시는 길</h1>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* 지도 */}
          <div>
            <h2 className="mb-5 text-xl font-bold text-ink">위치 안내</h2>
            <MapEmbed />
          </div>

          {/* 연락처 + 카카오 */}
          <div>
            <h2 className="mb-5 text-xl font-bold text-ink">연락처</h2>
            <ContactInfo />

            <div className="mt-8 rounded-xl border border-line bg-surface p-6">
              <p className="font-semibold text-ink">카카오톡으로 빠른 상담</p>
              <p className="mt-1 text-sm text-muted">
                필요한 제품 규격이나 견적을 카카오톡으로 편하게 문의하세요.
              </p>
              <KakaoChannelButton className="mt-4" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
