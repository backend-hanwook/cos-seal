import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import KakaoChannelButton from "./KakaoChannelButton";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="container-x py-16 md:py-24">
      {/* 상단 경로 */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/products" className="hover:text-brand-red">
          제품소개
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* 이미지 */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-red/10">
              <span className="text-5xl font-black tracking-tight text-brand-blue/30">
                {product.nameEn}
              </span>
              <span className="mt-2 text-sm text-muted">이미지 준비 중</span>
            </div>
          )}
        </div>

        {/* 설명 */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {product.nameEn}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            {product.description}
          </p>

          <h2 className="mt-8 text-lg font-bold text-ink">주요 특징</h2>
          <ul className="mt-3 space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-bold text-ink">적용 분야</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.applications.map((a) => (
              <span
                key={a}
                className="rounded-full bg-surface px-4 py-1.5 text-sm text-ink"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-line bg-surface p-6">
            <p className="font-semibold text-ink">
              찾으시는 규격이 있으신가요?
            </p>
            <p className="mt-1 text-sm text-muted">
              필요한 사양을 알려주시면 적합한 제품을 안내해 드립니다.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <KakaoChannelButton />
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-line bg-white px-6 py-3 font-semibold text-ink transition-colors hover:border-brand-red/40"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
