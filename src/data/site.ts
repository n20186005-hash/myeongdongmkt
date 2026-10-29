// SEO 사이트명 통일 형식: 명소명 + 도시 + 여행 가이드
export const SITE_NAME = '명동 야시장 서울 관광 가이드';

// 짧은 브랜드명: 페이지 <title> 접미사용, 제목 과장 방지
export const SHORT_BRAND = '명동 야시장 가이드';

// 하위 페이지 제목에 「 | 짧은 브랜드」 접미사 통일 부여
export function withBrand(pageTitle: string): string {
  return `${pageTitle} | ${SHORT_BRAND}`;
}

// 실체 사실(홈페이지와 일치, 제3자 Google Maps 스냅샷)
export const ATTRACTION = {
  name: '명동 야시장',
  alternateName: 'Myeongdong Night Market',
  ratingValue: 4.4,
  reviewCount: 6974,
  asOf: '2026.10.29',
  streetAddress: '충무로2가 8-3',
  addressLocality: '중구',
  addressRegion: '서울특별시',
  geo: { latitude: 37.5616685, longitude: 126.9858438 },
  mapsUrl: 'https://maps.app.goo.gl/4LPuyxVc6t3NmSTA8',
} as const;
