import type { Metadata } from "next";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import KakaoChannelButton from "@/components/KakaoChannelButton";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "제품소개",
  description:
    "오일씰, 패킹, 오링 등 (주)씨오에스씰이 취급하는 산업용 실링 부품을 소개합니다.",
};

export default function ProductsPage() {
  return (
    <>
      <div className="bg-brand-blue py-16 text-white md:py-20">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Products
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">제품소개</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            사용 환경에 맞는 다양한 산업용 실링 부품을 공급합니다. 각 제품을
            선택하면 상세 정보를 확인하실 수 있습니다.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-surface p-8 text-center">
          <h2 className="text-xl font-bold text-ink">
            원하시는 규격을 찾기 어려우신가요?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            국산 및 수입 브랜드의 폭넓은 재고를 보유하고 있습니다. 필요한 사양을
            알려주시면 적합한 제품을 안내해 드립니다.
          </p>
          <div className="mt-6 flex justify-center">
            <KakaoChannelButton />
          </div>
        </div>
      </Section>
    </>
  );
}
