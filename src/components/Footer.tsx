import Link from "next/link";
import { company } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold text-ink">{company.nameKo}</p>
            <p className="mt-1 text-sm text-muted">{company.nameEn}</p>
          </div>

          <div className="space-y-1 text-sm leading-relaxed text-muted">
            <p>
              <span className="inline-block w-16 text-ink">대표</span>
              {company.ceo}
            </p>
            <p>
              <span className="inline-block w-16 align-top text-ink">주소</span>
              <span className="inline-block max-w-xs align-top">
                {company.address}
              </span>
            </p>
            <p>
              <span className="inline-block w-16 text-ink">e-mail</span>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-brand-red"
              >
                {company.email}
              </a>
            </p>
            <p>
              <span className="inline-block w-16 text-ink">tel</span>
              <a href={`tel:${company.tel}`} className="hover:text-brand-red">
                {company.tel}
              </a>
              <span className="mx-2 text-line">|</span>
              fax {company.fax}
            </p>
            <p>
              <span className="inline-block w-16 text-ink">사업자번호</span>
              {company.bizNumber}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {company.copyrightYear} {company.nameKo} All Rights
            Reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/about" className="hover:text-brand-red">
              회사소개
            </Link>
            <Link href="/products" className="hover:text-brand-red">
              제품소개
            </Link>
            <Link href="/contact" className="hover:text-brand-red">
              오시는 길
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
