import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl"
    >
      {/* 대표 이미지 영역 (이미지 없으면 placeholder) */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-red/10">
            <span className="text-4xl font-black tracking-tight text-brand-blue/30">
              {product.nameEn}
            </span>
            <span className="mt-1 text-xs text-muted">이미지 준비 중</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-bold text-ink">{product.name}</h3>
          <span className="text-sm text-muted">{product.nameEn}</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {product.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
          자세히 보기
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
