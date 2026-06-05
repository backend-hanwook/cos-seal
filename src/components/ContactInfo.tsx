import { company } from "@/data/site";

const rows: { label: string; value: string; href?: string }[] = [
  { label: "대표", value: company.ceo },
  { label: "주소", value: company.address },
  { label: "이메일", value: company.email, href: `mailto:${company.email}` },
  { label: "전화", value: company.tel, href: `tel:${company.tel}` },
  { label: "팩스", value: company.fax },
  { label: "사업자등록번호", value: company.bizNumber },
];

export default function ContactInfo() {
  return (
    <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6"
        >
          <dt className="w-32 shrink-0 text-sm font-semibold text-muted">
            {row.label}
          </dt>
          <dd className="text-ink">
            {row.href ? (
              <a href={row.href} className="hover:text-brand-red">
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
