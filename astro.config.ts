import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 실제 도메인이 정해지면 이 값 하나만 입력하세요. 미설정 상태에서도 정상 빌드됩니다.
const SITE: string | undefined = undefined;

export default defineConfig({
  site: SITE,
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
