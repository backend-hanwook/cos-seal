// 회사 기본 정보 · 연락처 · 네비게이션 (실제 정보 반영)
// 실제 콘텐츠 교체 시 대부분 이 파일과 products.ts / partners.ts 만 수정하면 됩니다.

export const company = {
  nameKo: "(주)씨오에스씰",
  nameEn: "COS SEAL",
  ceo: "강남욱",
  tagline: "신뢰할 수 있는 오일씰 · 고무화학 실링 솔루션 파트너",
  description:
    "(주)씨오에스씰은 오일씰, 패킹, 오링 등 각종 산업용 실링 부품을 공급하는 전문 기업입니다. 국산 및 수입 유명 브랜드 씰을 폭넓게 취급하여 고객에게 최적의 실링 솔루션을 제공합니다.",
  address:
    "경기도 안양시 동안구 흥안대로427번길 47, 706호 (관양동, 인덕원 LDC비즈타워)",
  email: "nukang72@hotmail.com",
  tel: "031-424-1627",
  fax: "031-424-1628",
  bizNumber: "240-81-03389",
  copyrightYear: 2026,
};

// 카카오톡 채널 상담 링크 (placeholder)
// TODO: 실제 카카오톡 채널 공개 URL로 교체하세요. 예) https://pf.kakao.com/_abcdEF
export const kakaoChannelUrl = "https://pf.kakao.com/_replace_me";

// 오시는 길 지도
// TODO(선택): 인터랙티브 임베드를 원하면 Kakao Map JS 키로 MapEmbed.tsx 를 교체하세요.
// 현재는 주소 기반 외부 길찾기 링크를 사용합니다.
export const mapLinks = {
  kakao: `https://map.kakao.com/?q=${encodeURIComponent(company.address)}`,
  naver: `https://map.naver.com/v5/search/${encodeURIComponent(company.address)}`,
};

export const nav: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "회사소개", href: "/about" },
  {
    label: "제품소개",
    href: "/products",
    children: [
      { label: "오일씰 (Oil Seal)", href: "/products/oil-seal" },
      { label: "패킹 (Packing)", href: "/products/packing" },
      { label: "오링 (O-Ring)", href: "/products/oring" },
    ],
  },
  { label: "파트너 & 고객사", href: "/partners" },
  { label: "오시는 길", href: "/contact" },
];
