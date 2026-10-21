import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://myeongdongmkt.com',output:'static',integrations:[sitemap({filter:page=>page==='https://myeongdongmkt.com/'})],vite:{plugins:[tailwindcss()]}});
