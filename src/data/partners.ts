// 파트너 브랜드 & 고객사 (플레이스홀더)
// TODO: 로고 이미지 확보 시 public/partners/ 에 넣고 logo 경로를 채우세요.
// 현재 logo 가 없으면 PartnerGrid 가 텍스트 배지로 표시합니다.

export type Brand = {
  name: string;
  logo?: string; // 예: "/partners/nak.png"
};

// 취급 파트너 브랜드
export const partnerBrands: Brand[] = [
  { name: "NAK" },
  { name: "NOK" },
  { name: "MEIWA" },
  { name: "MORISEI" },
  { name: "SAKAGAMI" },
  { name: "FREUDENBERG" },
  { name: "SKF" },
];

// 안내 문구
export const partnerNote = "그 외 각종 국산 / 수입 씰을 폭넓게 취급합니다.";

// 주요 고객사
export const clients: Brand[] = [{ name: "SPG" }, { name: "IGB" }];
