import { kakaoChannelUrl } from "@/data/site";

// 카카오톡 채널 상담 버튼
// TODO: src/data/site.ts 의 kakaoChannelUrl 을 실제 채널 URL로 교체하세요.
export default function KakaoChannelButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <a
      href={kakaoChannelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-6 py-3 font-semibold text-[#191600] transition-opacity hover:opacity-90 ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.9 5.35 4.76 6.76-.21.77-.76 2.78-.87 3.21-.14.54.2.53.41.39.17-.11 2.69-1.83 3.78-2.57.62.09 1.26.14 1.92.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
      </svg>
      카카오톡 상담하기
    </a>
  );
}
