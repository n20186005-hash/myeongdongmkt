// SEO 站点名统一格式：景点名称 + 城市 + 旅游指南
export const SITE_NAME = '명동 야시장 서울 관광 가이드';

// 子页标题统一附加「 | 站点名」后缀
export function withSiteName(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}
