# 명동 야시장 서울 관광 가이드

한국어 독립 방문 안내입니다. 거리 음식 판매대·상가·식당과 별도 시설의 운영 범위를 구분하며 공식 운영자나 정부기관을 대리하지 않습니다.

## 실행

Node 24.19.0 / pnpm 11.23.0. `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`를 실행합니다. 기존 `/`, `/privacy/`, `/terms/`, `/cookie-settings/`를 보존하며 실제 404를 추가합니다. 모든 페이지는 정적 HTML로 출력합니다. 한국어 외 언어를 새로 만들지 않습니다.

확정 도메인은 `https://myeongdongmkt.com/`이며 canonical·OG·ko alternate·홈페이지 sitemap을 생성합니다. Cloudflare 실제 Worker 프로젝트는 `myeongdongmkt`입니다. ASSETS `run_worker_first`가 HTTP/www 301의 경로·쿼리를 보존하고 없는 주소에 실제 404/noindex를 적용합니다. `pnpm deploy`는 빌드 후 게시하므로 권한자가 별도 실행합니다.

`dist/`는 처음부터 추적하지 않던 빌드 결과로 유지합니다. 모든 원본·공개 자산과 잠금 파일을 제출하며 빌드의 로컬 참조, 원본과 결과의 바이트 일치 및 공개 자산의 커밋 포함을 검증합니다. 이전의 고정 파일 목록 checksum은 갱신되지 않은 전달용 파일이어서 제거합니다.

## 편집과 사진

Visit Seoul의 ‘명동 상권 매일 운영·점포별 시간 상이’ 설명을 거리 노점의 공통 시간표로 옮기지 않습니다. 특정 메뉴·가격·무료 이용·시설 운영·위생·음식 적합성을 보장하지 않습니다. FAQ는 화면과 JSON-LD가 같은 배열에서 생성됩니다. TouristAttraction에는 시간·평가·가격을 넣지 않습니다. [ATTRIBUTIONS.md](ATTRIBUTIONS.md)에 Sgroey의 2024년 사진 원본·CC BY-SA 4.0·사용 범위를 기록하고 화면에도 원본·라이선스·촬영일·변경 사항을 표시합니다.

## 개인정보

Google 지도는 선택해서 여는 외부 링크이며 자동 iframe이 없습니다. Google Analytics는 `/cookie-settings/`의 명시적 허용 후에만 로드합니다. 새 키 `myeongdongmkt_cookie_preferences`는 이전 허용을 가져오지 않습니다. 철회 저장 실패 시 즉시 분석을 끄고 가능한 세션 거부로 같은 탭의 이동·새로고침에 유지합니다. 자동 새로고침하지 않으며 두 저장소 실패 시 현재 페이지에만 적용되는 한계를 한국어로 알립니다. 계정·예약·문의 양식·이메일 창구나 사용하지 않는 환경설정 기능은 없습니다.

## 날짜 기준 장소 정보

2026.10.20 Google Maps 야시장 listing의 17:00–다음 날 01:00, 평점·리뷰 수와 충무로2가 8-3·37.5616685,126.9858438 핀을 출처와 함께 표시합니다. 이는 Visit Seoul의 더 넓은 명동 상권 참고 주소(명동8길 27)와 점포별 시간 안내를 대체하지 않습니다. 조건 없는 운영시간·평가 schema로 옮기지 않으며 사진 촬영 좌표를 장소 pin으로 사용하지 않습니다.
