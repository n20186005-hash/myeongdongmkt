import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// 홈페이지 + 40개 주제 페이지만 사이트맵에 포함(법률·404 페이지는 제외)
const excluded = ['/privacy/', '/terms/', '/cookie-settings/', '/404/'];
export default defineConfig({site:'https://myeongdongmkt.com',output:'static',integrations:[sitemap({filter:page=>!excluded.some(p=>page.endsWith(p))})],vite:{plugins:[tailwindcss()]}});
