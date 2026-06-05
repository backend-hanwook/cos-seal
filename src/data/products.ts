// 제품 데이터 (플레이스홀더)
// TODO: 실제 제품 설명/이미지로 교체하세요. image 는 public/ 기준 경로 또는 외부 URL.

export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  // 대표 이미지 (현재는 placeholder. public/products/ 에 실제 이미지를 넣고 경로 교체)
  image?: string;
};

export const products: Product[] = [
  {
    slug: "oil-seal",
    name: "오일씰",
    nameEn: "Oil Seal",
    summary:
      "회전축의 윤활유 누유를 방지하고 외부 이물질 유입을 차단하는 회전용 실링 부품입니다.",
    description:
      "오일씰은 회전하는 축과 하우징 사이를 밀봉하여 오일·그리스의 누유를 막고 먼지·수분 등 외부 오염을 차단합니다. 자동차, 산업기계, 감속기, 펌프 등 회전부가 있는 거의 모든 기계에 사용되며, 사용 환경(온도·압력·유체)에 맞는 재질과 타입 선정이 중요합니다. (주)씨오에스씰은 국산 및 NAK·NOK 등 수입 브랜드의 다양한 규격을 공급합니다.",
    features: [
      "윤활유 누유 방지 및 외부 이물질 차단",
      "NBR·FKM(바이톤)·실리콘 등 용도별 재질 선택",
      "TC·SC·TB 등 다양한 립(Lip) 타입 대응",
      "국산 / 수입(NAK, NOK 등) 규격 폭넓게 보유",
    ],
    applications: [
      "자동차 부품",
      "감속기 · 기어박스",
      "산업용 펌프 · 모터",
      "건설 · 농기계",
    ],
  },
  {
    slug: "packing",
    name: "패킹",
    nameEn: "Packing",
    summary:
      "유압·공압 실린더 등 왕복운동부의 유체 누설을 막는 밀봉 부품입니다.",
    description:
      "패킹은 유압·공압 실린더의 피스톤 및 로드 등 왕복(직선) 운동부에서 유체의 누설을 방지하는 실링 부품입니다. U-패킹, V-패킹, 더스트씰 등 형상과 재질이 다양하며 압력·속도·온도 조건에 따라 적합한 제품 선정이 필요합니다. SAKAGAMI 등 유압·공압 전용 씰을 포함해 다양한 규격을 취급합니다.",
    features: [
      "왕복운동부 유체 누설 방지",
      "U-패킹 · V-패킹 · 더스트씰 등 형상별 대응",
      "고압 · 고속 환경용 재질 선택 가능",
      "유압 · 공압 전용 브랜드(SAKAGAMI 등) 공급",
    ],
    applications: [
      "유압 실린더",
      "공압 기기",
      "건설 중장비",
      "산업 자동화 설비",
    ],
  },
  {
    slug: "oring",
    name: "오링",
    nameEn: "O-Ring",
    summary:
      "단면이 원형인 가장 범용적인 밀봉 부품으로, 정적·동적 실링에 폭넓게 사용됩니다.",
    description:
      "오링은 원형 단면의 링 형태 밀봉재로, 홈(그루브)에 장착되어 두 면 사이의 기체·액체 누설을 막습니다. 구조가 단순하고 규격(KS, AS568 등)이 표준화되어 있어 가장 널리 쓰이는 실링 부품입니다. NBR·FKM·EPDM·실리콘·FFKM 등 사용 유체와 온도에 맞는 다양한 재질을 보유하고 있습니다.",
    features: [
      "정적 · 동적 양쪽 밀봉에 사용 가능",
      "O-ring · X-ring · V-ring 등 형상별 대응",
      "KS · AS568 등 표준 규격 대응",
      "NBR · FKM · EPDM · 실리콘 · FFKM 등 다양한 재질",
      "소량 다품종부터 대량 공급까지 대응",
    ],
    applications: [
      "밸브 · 배관 연결부",
      "펌프 · 컴프레서",
      "반도체 · 화학 설비",
      "각종 산업기계",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
