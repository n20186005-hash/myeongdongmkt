import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 실제 운영 도메인. 설정하면 canonical·OG 절대 URL·sitemap·JSON-LD url/image가 활성화됩니다.
const SITE: string = 'https://myeongdongmkt.com';

export default defineConfig({
  site: SITE,
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
