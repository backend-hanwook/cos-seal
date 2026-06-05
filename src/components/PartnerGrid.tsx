import Image from "next/image";
import { Brand } from "@/data/partners";

export default function PartnerGrid({ brands }: { brands: Brand[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="flex h-24 items-center justify-center rounded-xl border border-line bg-white px-4 transition-colors hover:border-brand-blue/40"
        >
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              width={140}
              height={48}
              className="max-h-12 w-auto object-contain"
            />
          ) : (
            <span className="text-lg font-bold tracking-wide text-ink/70">
              {brand.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
