// 회사 기본 정보 · 연락처 · 네비게이션 (실제 정보 반영)
// 실제 콘텐츠 교체 시 대부분 이 파일과 products.ts / partners.ts 만 수정하면 됩니다.

export const company = {
  nameKo: "(주)씨오에스씰",
  nameEn: "COS SEAL",
  ceo: "강남욱",
  tagline: "신뢰할 수 있는 오일씰 · 고무화학 실링 솔루션 파트너",
  description:
    "(주)씨오에스씰은 지난 20년간 중장비·산업기계용 오일씰·패킹·오링을 설계·개발하고 공급해 온 통합 씰링 파트너입니다. NAK 등 수입 브랜드와 국산 제품을 폭넓게 취급하며, 단순 납품을 넘어 연구·개발부터 양산까지 최적의 실링 솔루션을 제공합니다.",
  // 업력(년). 회사소개 등에서 사용.
  experienceYears: 20,
  // 국내 주요 협력업체
  partnerNote: "SPG 외 다수",
  address:
    "경기도 안양시 동안구 흥안대로427번길 47, 706호 (관양동, 인덕원 LDC비즈타워)",
  email: "nukang72@hotmail.com",
  tel: "031-424-1627",
  fax: "031-424-1628",
  bizNumber: "240-81-03389",
  copyrightYear: 2026,
};

// 회사 소개 본문 (회사 PR 자료 기반)
export const companyIntro: string[] = [
  "(주)씨오에스씰은 지난 20년간 중장비와 산업기계에 사용되는 각종 씰링 제품을 설계·제작 및 취급해 온 통합 씰링 파트너입니다. 수입품을 비롯하여 국산 제품에 이르기까지, 고객이 만족할 수 있는 품질과 납기를 위해 항상 노력하고 있습니다.",
  "단순 납품을 넘어 제품에 사용되는 씰의 연구·개발 단계부터 양산까지 함께하며, 적용 환경에 맞는 씰링 솔루션과 기술 자료·정보를 제공합니다. 국내 주요 협력업체로 SPG 외 다수와 공급을 이어가고 있습니다.",
  "견적부터 발주 완료까지 고객과의 소통을 통해 납기·금액·문의사항 등 요청을 적극 반영하여, 최적의 맞춤 솔루션을 제공하는 신뢰할 수 있는 파트너가 되겠습니다.",
];

// 핵심 강점 3가지 (회사 PR 자료 기반)
export const strengths: { title: string; desc: string }[] = [
  {
    title: "비용 절감 대비 높은 품질",
    desc: "수입 브랜드 NAK는 유명 씰·패킹 기업과 견주어도 뒤떨어지지 않는 품질을 갖추면서, 가격은 낮춘 가성비 브랜드입니다.",
  },
  {
    title: "씰 연구·개발 및 솔루션 제공",
    desc: "기존 씰 정보력과 기술력을 바탕으로 솔루션을 제공하고, 고객사의 신규 개발 제품에 맞춘 제작 씰을 양산하는 올인원 협력이 가능합니다.",
  },
  {
    title: "NAK 금형 개발비 절감",
    desc: "NAK는 국내외 브랜드 대비 뛰어난 가격 경쟁력으로 신규 씰 금형 제작비를 절감하며, 검사성적서·품질보증서 등 필요 서류도 신속히 제공합니다.",
  },
];

// 취급 대표 브랜드(NAK) 공식 사이트
export const nakUrl = "https://www.nak.com.tw/";

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
