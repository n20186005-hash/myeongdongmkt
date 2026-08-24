# 명동 야시장 관광 가이드

서울특별시 중구 명동 야시장을 위한 독립 비영리 관광 안내 사이트입니다. 하나의 상설 시장 건물처럼 홍보하지 않고, 명동 보행 상권의 역사와 저녁 노점 풍경을 구분해 설명하며 방문자가 교통·편의·안전 정보를 한 번에 확인할 수 있도록 구성했습니다.

## 기술 구성

- Astro 7.2.4
- Tailwind CSS 4.3.3
- TypeScript 6.0.3
- pnpm 11.23.0
- Node.js 24.19.0
- Cloudflare Workers 정적 자산 배포
- 데이터베이스, 로그인, CMS 없음

모든 직접 의존성은 `package.json`에 정확한 버전으로 고정합니다. Node.js 버전은 `engines`와 `.node-version`, pnpm 버전은 `packageManager`와 `engines`에서 고정합니다. 단일 패키지 프로젝트이므로 `pnpm-workspace.yaml`을 만들지 않습니다.

## 로컬 실행

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

## 사이트 도메인 설정

도메인은 `astro.config.ts`의 `SITE` 한 곳에서만 설정합니다. 도메인이 아직 없으면 `undefined` 상태로 그대로 빌드할 수 있습니다.

- `SITE` 미설정: canonical 및 절대 Open Graph URL을 출력하지 않고 sitemap 통합도 활성화하지 않습니다.
- `SITE` 설정: canonical, Open Graph, JSON-LD 이미지·URL 및 `@astrojs/sitemap`이 모두 같은 설정값에서 파생됩니다.

도메인을 넣은 뒤 다시 빌드하면 sitemap이 자동 생성됩니다. `lastmod`는 임의로 만들지 않습니다.

## Cloudflare Workers 배포

`wrangler.jsonc`는 `dist`를 정적 자산 디렉터리로 사용합니다.

```bash
pnpm deploy
```

Cloudflare 계정 인증과 실제 Worker 이름/도메인 연결은 배포 계정에서 진행합니다.

## 개인정보와 분석

GA4 측정 ID는 요청된 `G-HXM22WWPKP`를 사용합니다. 분석 스크립트는 사용자가 `/cookie-settings/`에서 분석형 저장에 동의한 경우에만 로드합니다. 개인화 광고용 마케팅 저장은 사용하지 않습니다.

법적 안내는 각각 독립 경로입니다.

- `/privacy/` 개인정보처리방침
- `/terms/` 서비스 이용약관
- `/cookie-settings/` 쿠키 설정

## 지도

메인 페이지의 구글 지도 iframe은 대한민국 현지화 매개변수 `ko` / `kr`을 사용합니다. 중국어 지역 매개변수는 포함하지 않습니다.

## 사진과 저작권

메인 페이지의 현장 사진은 실제 명동 야시장 사진이며 사이트 내부 `public/images/`에 저장했습니다. 원본은 위키미디어 공용의 Sgroey 촬영 사진이며 CC BY-SA 4.0 조건을 따릅니다. 자세한 원본 링크와 표시 정보는 메인 페이지의 `자료 기준` 영역과 `ATTRIBUTIONS.md`에서 확인할 수 있습니다.

## 배포 전 점검

권장 최종 점검 순서:

```bash
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
grep -RniE 'example\\.com|localhost|chrome-extension://' dist || true
```

실제 도메인을 `SITE`에 넣은 빌드에서는 생성된 sitemap의 모든 URL이 같은 실제 도메인에서 파생되는지 추가 확인합니다.
