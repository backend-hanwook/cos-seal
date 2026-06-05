import { company, mapLinks } from "@/data/site";

// 오시는 길 지도
// 현재: 주소 기반 외부 길찾기 링크 (API 키 불필요)
// TODO(선택): 인터랙티브 임베드를 원하면 Kakao Map JS SDK 로 이 컴포넌트를 교체하세요.
//   1) https://apis.map.kakao.com 에서 JavaScript 키 발급
//   2) "use client" 컴포넌트로 전환 후 SDK 스크립트 로드 + new kakao.maps.Map(...) 렌더
export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      {/* 지도 placeholder */}
      <div className="relative flex aspect-[16/10] flex-col items-center justify-center bg-surface text-center md:aspect-[16/7]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-red"
          aria-hidden="true"
        >
          <path
            d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="10"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <p className="mt-3 px-6 font-medium text-ink">{company.address}</p>
        <p className="mt-1 text-xs text-muted">
          지도 미리보기 (Kakao Map 연동 예정)
        </p>
      </div>

      {/* 길찾기 링크 */}
      <div className="flex divide-x divide-line border-t border-line">
        <a
          href={mapLinks.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface"
        >
          카카오맵에서 보기
        </a>
        <a
          href={mapLinks.naver}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface"
        >
          네이버지도에서 보기
        </a>
      </div>
    </div>
  );
}
