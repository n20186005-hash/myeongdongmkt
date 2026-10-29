// 명동 야시장 40개 장문 주제 등록표(한국어 단일 언어, 데이터 기반)
// 각 slug는 하나의 독립 인덱싱 페이지에 대응하며, 방문 결정·먹거리·주변·쇼핑·동선을 다룹니다.

export type TopicGroup = 'guides' | 'transport' | 'food' | 'nearby' | 'shopping' | 'routes';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string; // 전체 경로, 예: 'guides/market-vs-night-market'
  group: TopicGroup;
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export const AS_OF = '2026.10.29';

export const TOPIC_GROUP_LABELS: Record<TopicGroup, string> = {
  guides: '방문 기본 가이드',
  transport: '교통·이동',
  food: '명동 먹거리',
  nearby: '주변 명소·문화',
  shopping: '쇼핑·관광 서비스',
  routes: '여행 동선·코스',
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = [
  'guides',
  'transport',
  'food',
  'nearby',
  'shopping',
  'routes',
];

// ── A. 명소 자체와 방문 결정(10페이지) ──────────────────────────────
const guidesMarketVsNightMarket: Topic = {
  slug: 'guides/market-vs-night-market',
  group: 'guides',
  kicker: '명동시장·명동 야시장',
  h1: '명동시장과 명동 야시장은 같은 곳일까?',
  metaTitle: '명동시장과 명동 야시장 차이 | 명동 야시장 가이드',
  metaDescription:
    '명동시장, 명동 시장, 명동 야시장은 검색어마다 다르게 쓰입니다. 명동 쇼핑 상권, 거리 음식 판매대, 전통 시장의 범위를 구분해 안내합니다.',
  lead: '‘명동시장’과 ‘명동 야시장’은 같은 장소를 가리키기도 하지만, 문맥에 따라 전혀 다른 범위를 뜻하기도 합니다. 검색 intent를 정리하면 방문 준비에 도움이 됩니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '검색어별로 쓰이는 범위',
      paragraphs: [
        '‘명동시장’·‘명동 시장’은 보통 명동 전체 쇼핑 상권을 뜻합니다. 비짓서울은 명동을 소매점과 거리 판매대가 함께 있는 상권으로 소개합니다.',
        '‘명동 야시장’·‘명동야시장’은 그중 밤에 열리는 거리 음식 판매대를 가리키는 경우가 많습니다. 하지만 하나의 실내 시장 건물이나 단일 운영자를 의미하지는 않습니다.',
      ],
    },
    {
      heading: '세 가지를 구분하면 좋습니다',
      bullets: [
        '쇼핑 상권: 일반 상가, 화장품·잡화 매장, 지하상가가 섞인 거리 전체',
        '거리 음식 판매대: 야간에 보행로에 나오는 꼬치·떡볶이 등 이동형 판매',
        '전통 시장: 남대문시장 등 명동과 별개로 운영되는 재래시장',
      ],
    },
    {
      heading: '방문 전에 정리할 것',
      paragraphs: [
        '목적이 ‘쇼핑’인지 ‘야간 거리 음식’인지 먼저 정하세요. 둘은 같은 건물이나 같은 운영 시간을 공유하지 않습니다.',
      ],
      callout:
        '이 가이드는 독립 비영리 안내이며 공식 운영자 사이트가 아닙니다. 각 판매대·매장의 당일 운영과 가격은 현장에서 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '명동 야시장은 실내 시장인가요?',
      a: '아닙니다. 명동 야시장은 보행로에 나오는 거리 음식 판매대를 가리키는 말이며, 하나의 실내 시장 건물을 뜻하지 않습니다.',
    },
    {
      q: '명동시장과 명동 야시장 위치가 같나요?',
      a: '겹치는 구역이 있지만 같은 출입구나 주소를 공유하지 않습니다. 목적 점포와 만날 위치를 따로 정하세요.',
    },
    {
      q: '영업시간은 같게 적용되나요?',
      a: '아닙니다. 상가, 식당, 거리 판매대는 각각 운영 조건이 다릅니다. 개별 운영을 확인하세요.',
    },
  ],
  related: ['guides/opening-hours', 'guides/best-time-to-visit', 'guides/prices-budget'],
};

const guidesOpeningHours: Topic = {
  slug: 'guides/opening-hours',
  group: 'guides',
  kicker: '영업시간·운영 확인',
  h1: '명동 야시장 영업시간·노점 운영 확인법',
  metaTitle: '명동 야시장 영업시간·노점 운영 확인 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장은 고정 폐점 시간이 없습니다. Google Maps listing 표기와 상권 안내를 구분하고, 판매대별 당일 운영을 확인하는 방법을 정리합니다.',
  lead: '명동 야시장은 하나의 시장 건물이 아니라 거리 음식 판매대들이 모인 구역입니다. 그래서 ‘몇 시에 문을 닫는가’를 한 곳에 적용할 수 없습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '제3자 listing의 표기',
      paragraphs: [
        'Google Maps의 명동 야시장 listing은 2026년 10월 29일 기준 매일 17:00–다음 날 01:00로 표시됩니다.',
        '이는 제3자 표기이며 모든 명동 상가·식당·거리 판매대의 운영을 보장하지 않습니다.',
      ],
    },
    {
      heading: '상권 안내와 범위 구분',
      paragraphs: [
        '비짓서울의 명동 상권 안내(2026.05.04 수정)는 ‘매일 운영, 점포별 시간 상이’입니다. 이것만으로 모든 거리 판매대가 같은 시각에 열고 닫는다고 판단할 수 없습니다.',
      ],
      callout: '판매대 참여 여부·위치·당일 운영과 주문 마감은 해당 판매대에 직접 확인하세요.',
    },
    {
      heading: '확인 방법',
      bullets: [
        '방문 당일 Google Maps에서 목적 판매대·매장의 운영 표기 확인',
        '기상(비·강풍)에 따라 야간 판매대 참여가 줄어들 수 있음',
        '식당은 매장별 주문 마감과 휴일 일정 별도 확인',
      ],
    },
  ],
  faqs: [
    {
      q: '명동 야시장은 몇 시까지인가요?',
      a: '고정 폐점 시간은 없습니다. 제3자 listing은 17:00–익일 01:00로 표기하지만 전체 구역의 보장이 아닙니다.',
    },
    {
      q: '비 오는 날에도 열리나요?',
      a: '날씨나 늦은 시간에도 모든 노점이 참여한다고 보장할 수 없습니다. 기상과 현장 안내를 확인하세요.',
    },
    {
      q: '상가와 거리 판매대 시간이 같은가요?',
      a: '다릅니다. 상가 안내 시간이 거리 노점에 자동 적용되지 않습니다.',
    },
  ],
  related: ['guides/market-vs-night-market', 'transport/subway-exits', 'guides/payments'],
};

const guidesBestTime: Topic = {
  slug: 'guides/best-time-to-visit',
  group: 'guides',
  kicker: '방문 시기',
  h1: '명동 야시장 언제 가면 좋을까?',
  metaTitle: '명동 야시장 언제 가면 좋을까 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장은 목적에 따라 좋은 시간대가 다릅니다. 거리 음식, 사진, 쇼핑, 한적한 통행을 고려한 방문 시기를 정리합니다.',
  lead: '야간 거리 음식이 주목적이라면 해가 진 뒤가 기본이지만, 인파·조명·매장 운영을 함께 고려하면 더 편하게 둘러볼 수 있습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '목적별 추천 시간',
      bullets: [
        '거리 음식 중심: 해 질 무렵~밤 9시 전후, 판매대가 가장 많음',
        '사진·조명: 완전히 어두워진 뒤의 네온 거리',
        '쇼핑 위주: 저녁보다 오후 시간대가 상가 선택이 넓음',
        '한적한 통행: 주중·비 오지 않은 날이 혼잡 적음',
      ],
    },
    {
      heading: '혼잡과 계절',
      paragraphs: [
        '주말·공휴일 저녁은 보행로가 매우 혼잡할 수 있습니다. 겨울은 춥지만 조명 분위기가 강하고, 여름은 덥고 소나기 가능성이 있습니다.',
      ],
    },
    {
      heading: '도착 전 확인',
      callout: '판매대 참여와 매장 운영은 당일 기상과 현장 상황에 따라 달라집니다. 방문 전 Google Maps에서 목적 곳의 운영을 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '가장 활기찬 시간은 언제인가요?',
      a: '해 진 뒤부터 밤 9시 전후가 판매대와 인파가 가장 많습니다.',
    },
    {
      q: '사진 찍기 좋은 시간은?',
      a: '완전히 어두워진 뒤의 간판 조명이 좋습니다. 삼각대 사용은 보행로 혼잡을 고려하세요.',
    },
    {
      q: '한적하게 보고 싶으면?',
      a: '주중 오후나 비 오지 않은 날, 성수기가 아닌 시기가 상대적으로 여유롭습니다.',
    },
  ],
  related: ['guides/opening-hours', 'routes/night-market-2-hour', 'food/street-food'],
};

const transportSubwayExits: Topic = {
  slug: 'transport/subway-exits',
  group: 'transport',
  kicker: '지하철·출구',
  h1: '명동 야시장 지하철 출구별 가는 길',
  metaTitle: '명동역 출구별 가는 길 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장은 4호선 명동역 5–10번 출구 권역과 가깝습니다. 출구별 동선, 엘리베이터, 목적 점포까지의 접근을 정리합니다.',
  lead: '비짓서울은 명동 상권 접근 지점으로 4호선 명동역 5–10번 출구를 안내합니다. 특정 출구가 오늘 열려 있거나 목적 판매대까지 무단차로 이어진다는 보장은 아닙니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '기준 역과 출구',
      paragraphs: [
        '4호선 명동역 5–10번 출구 권역이 명동 상권 접근에 자주 쓰입니다. 회현역·을지로입구역에서도 걸어올 수 있습니다.',
      ],
    },
    {
      heading: '출구별 동선 팁',
      bullets: [
        '명동역 6·7·8번 출구: 상가와 거리 음식 밀집 구역 방향',
        '엘리베이터 위치는 역마다 다르며 당일 운영 여부 확인 필요',
        '목적 점포 주소를 미리 정해 가장 가까운 출구 선택',
      ],
    },
    {
      heading: '현장에서 확인할 것',
      callout: '개통·환승·운임·막차와 목적 점포까지의 동선은 서울교통공사 등 실제 교통 운영기관 안내에서 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '몇 호선 어디서 내려야 하나요?',
      a: '4호선 명동역 5–10번 출구 권역이 기본입니다. 회현역·을지로입구역에서도 접근 가능합니다.',
    },
    {
      q: '엘리베이터는 어디에 있나요?',
      a: '역마다 다르고 당일 운영 여부도 다릅니다. 역 안내표에서 확인하세요.',
    },
    {
      q: '공항에서 바로 가나요?',
      a: '공항철도·지하철 환승 동선은 노선과 시간대에 따라 다릅니다. 별도 정리인 ‘서울역에서 명동 야시장’을 참고하세요.',
    },
  ],
  related: ['transport/from-seoul-station', 'transport/parking', 'guides/opening-hours'],
};

const transportFromSeoulStation: Topic = {
  slug: 'transport/from-seoul-station',
  group: 'transport',
  kicker: '서울역 출발',
  h1: '서울역에서 명동 야시장 가는 법',
  metaTitle: '서울역에서 명동 야시장 가는 법 | 명동 야시장 가이드',
  metaDescription:
    '서울역에서 명동 야시장까지 지하철, 버스, 택시를 비교합니다. 소요 시간과 비용의 대략적 기준과 환승 포인트를 정리합니다.',
  lead: '서울역에서 명동 상권까지는 지하철 환승이 가장 일반적입니다. 짐이 많거나 늦은 시간이라면 택시·공항버스 정류장 위치도 함께 고려하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '지하철',
      paragraphs: [
        '서울역(1·4호선)에서 4호선 명동역 방향으로 환승하는 동선이 일반적입니다. 정확한 환승 동선과 운임은 당일 교통 안내에서 확인하세요.',
      ],
    },
    {
      heading: '버스·택시',
      bullets: [
        '버스: 노선과 배차는 날짜·시간대에 따라 다르며 실시간 안내 확인',
        '택시: 정문·택시 승강장 위치와 거리에 따른 요금 변동 있음',
      ],
    },
    {
      heading: '도착 후',
      callout: '명동역 하차 후에는 목적 점포까지의 출구와 도보 동선을 ‘지하철 출구별 가는 길’에서 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '서울역에서 지하철로 얼마 걸리나요?',
      a: '환승 포함 대략 20–30분대일 수 있으나 열차 간격·환승 동선에 따라 달라집니다. 당일 안내로 확인하세요.',
    },
    {
      q: '택시가 나을까요?',
      a: '짐이 많거나 늦은 시간에는 택시가 편할 수 있으나 요금·교통체증 변동이 있습니다.',
    },
    {
      q: '공항철도와 같이 이용하나요?',
      a: '공항철도 이용자는 서울역 환승 지점에서 4호선 방향으로 갈아타는 동선을 고려하세요.',
    },
  ],
  related: ['transport/subway-exits', 'transport/late-night-return', 'transport/parking'],
};

const transportParking: Topic = {
  slug: 'transport/parking',
  group: 'transport',
  kicker: '주차·자동차',
  h1: '명동 야시장 공영주차장·자동차 접근',
  metaTitle: '명동 야시장 주차장·자동차 접근 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 주변 공영주차장과 요금, 주차 후 도보 동선을 정리합니다. 혼잡 시간대 대중교통 이용을 권장합니다.',
  lead: '명동은 도심 번화가라 주차 면적이 한정적이고 혼잡이 잦습니다. 공영주차장 위치와 요금을 미리 확인하고, 가급적 대중교통을 권장합니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '공영주차장',
      paragraphs: [
        '서울 중구 일대에 공영주차장이 여러 곳 있습니다. 정확한 위치·잔여 면수·요금은 중구 교통 안내나 주차 앱에서 당일 확인하세요.',
      ],
    },
    {
      heading: '요금과 주차 후 동선',
      bullets: [
        '요금은 구역·시간대별로 다르며 현장 표지판 기준',
        '주차장에서 명동 상권까지 도보로 수 분~수십 분 소요 가능',
        '목적 점포와 가장 가까운 주차장을 미리 정하세요',
      ],
    },
    {
      heading: '권장 사항',
      callout: '저녁·주말 혼잡 시간대에는 진입과 주차 대기가 길 수 있습니다. 대중교통 이용을 권장합니다.',
    },
  ],
  faqs: [
    {
      q: '명동에 공영주차장이 있나요?',
      a: '중구 일대에 여러 공영주차장이 있으나 위치와 잔여 면수는 당일 안내로 확인하세요.',
    },
    {
      q: '주차 요금은 얼마인가요?',
      a: '구역·시간대별로 다릅니다. 현장 표지판과 공식 안내를 따르세요.',
    },
    {
      q: '차보다 지하철이 나은가요?',
      a: '혼잡 시간대에는 주차 대기와 진입 부담이 커 대중교통이 편할 수 있습니다.',
    },
  ],
  related: ['transport/subway-exits', 'transport/late-night-return', 'shopping/underground-market'],
};

const guidesPricesBudget: Topic = {
  slug: 'guides/prices-budget',
  group: 'guides',
  kicker: '가격·예산',
  h1: '명동 야시장 먹거리 가격과 예산 계획',
  metaTitle: '명동 야시장 먹거리 가격·예산 계획 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 거리 음식 예산을 세우는 기준과 가격 확인 방법을 정리합니다. 인원수별 지출 예시와 현장 확인 수칙을 안내합니다.',
  lead: '거리 음식 판매대는 메뉴·수량·중량·추가 비용이 판매자마다 다릅니다. 공통 가격표를 보장하지 않으므로 사전 예산과 현장 확인이 모두 필요합니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '예산의 기준',
      paragraphs: [
        '거리 음식은 품목에 따라 가격 차이가 큽니다. 몇 가지를 나눠 먹는 방식이 일반적이므로, 인원수와 시도할 품목 수로 예산을 잡으세요.',
      ],
    },
    {
      heading: '인원수별 예시(대략)',
      bullets: [
        '1인 가벼운 코스: 소수 품목 위주, 현장 표지판 기준',
        '2인 나눠 먹기: 여러 품목 공유 시 1인분보다 효율적',
        '가족: 아동용·비매운 옵션 추가 고려',
      ],
      callout: '위 수치는 계획용 대략 기준이며 실제 가격은 판매자 표지판에서 확인하세요.',
    },
    {
      heading: '가격 확인 수칙',
      bullets: [
        '주문 전 수량·중량·추가 비용·결제 수단 확인',
        '세트·추가 토핑 여부 확인',
        '환전·카드 수수료를 예산에 포함',
      ],
    },
  ],
  faqs: [
    {
      q: '공통 가격표가 있나요?',
      a: '없습니다. 상품·음식의 가격은 판매자마다 다르므로 주문 전에 확인하세요.',
    },
    {
      q: '예산은 어떻게 잡나요?',
      a: '시도할 품목 수와 인원수로 잡고, 현장 표지판 가격을 합산하세요.',
    },
    {
      q: '카드로 결제되나요?',
      a: '판매대마다 다릅니다. 현금과 카드를 모두 준비하고 주문 전 확인하세요.',
    },
  ],
  related: ['food/street-food', 'food/stalls-or-restaurants', 'routes/budget-walk'],
};

const guidesPayments: Topic = {
  slug: 'guides/payments',
  group: 'guides',
  kicker: '결제·환전',
  h1: '명동 야시장 현금·카드·환전 준비',
  metaTitle: '명동 야시장 현금·카드·환전 준비 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 방문 전 결제 수단 준비와 환전, ATM, 주문 전 확인 사항을 정리합니다. 판매대별 지원 방식이 다릅니다.',
  lead: '거리 음식 판매대와 매장은 지원하는 결제 수단이 다릅니다. 모든 판매자가 카드·현금·간편결제를 받는다고 보장할 수 없으므로 미리 준비하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '결제 수단',
      paragraphs: [
        '신용·체크카드, 현금, 간편결제가 혼용됩니다. 판매대별 지원 방식이 다르므로 주문 전에 가격과 결제 수단을 확인하세요.',
      ],
    },
    {
      heading: '환전과 ATM',
      bullets: [
        '외국인 방문자는 환전소·은행 ATM 위치와 수수료를 미리 확인',
        '환전 영수증 보관으로 세금 환급 자격 대비 가능',
        '현금은 소액 위주로 준비해 잔돈 부담 줄이기',
      ],
    },
    {
      heading: '주문 전 확인',
      callout: '가격, 수량·중량, 추가 비용, 결제 수단을 각 판매자에게 확인한 뒤 주문하세요.',
    },
  ],
  faqs: [
    {
      q: '현금만 받는 곳이 있나요?',
      a: '판매대에 따라 현금만 가능할 수 있습니다. 카드와 현금을 함께 준비하세요.',
    },
    {
      q: '어디서 환전하나요?',
      a: '환전소와 은행 ATM이 명동 인근에 있습니다. 수수료와 환율은 당일 확인하세요.',
    },
    {
      q: '영수증이 필요한 이유는?',
      a: '세금 환급 대상 구매라면 영수증이 필요할 수 있으니 보관하세요.',
    },
  ],
  related: ['guides/prices-budget', 'food/stalls-or-restaurants', 'shopping/tax-refund'],
};

const transportLateNightReturn: Topic = {
  slug: 'transport/late-night-return',
  group: 'transport',
  kicker: '막차·심야 귀가',
  h1: '명동 야시장 막차·심야 귀가 방법',
  metaTitle: '명동 야시장 막차·심야 귀가 방법 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 방문 후 지하철 막차 확인, 심야 버스, 택시 이용을 정리합니다. 귀가 교통은 방문 전에 계획하세요.',
  lead: '야간 거리 음식을 즐긴 뒤 귀가할 때는 지하철 막차 시간이 가장 중요합니다. 늦은 시간에는 심야 버스와 택시를 함께 고려하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '지하철 막차',
      paragraphs: [
        '4호선 명동역 등의 막차 시간은 요일·노선별로 다릅니다. 당일 교통 안내에서 정확한 막차를 확인하고 동선을 계획하세요.',
      ],
    },
    {
      heading: '심야 버스·택시',
      bullets: [
        '심야 버스(N버스) 노선·배차는 실시간 안내 확인',
        '택시는 승강장 위치와 앱 호출 가능 여부 확인',
        '주말·공휴일은 배차 간격이 다를 수 있음',
      ],
    },
    {
      heading: '계획 수칙',
      callout: '막차를 놓치면 대안이 제한됩니다. 방문 전 귀가 교통을 미리 정해두세요.',
    },
  ],
  faqs: [
    {
      q: '명동역 막차는 몇 시인가요?',
      a: '요일·노선별로 다릅니다. 당일 교통 운영기관 안내에서 확인하세요.',
    },
    {
      q: '막차를 놓치면 어떻게 하나요?',
      a: '심야 버스나 택시를 고려하세요. 다만 배차와 호출 가능 여부는 당일 상황에 따릅니다.',
    },
    {
      q: '심야 버스가 명동을 지나나요?',
      a: '노선별 경로가 다릅니다. 실시간 노선 안내로 확인하세요.',
    },
  ],
  related: ['transport/subway-exits', 'guides/opening-hours', 'routes/night-market-2-hour'],
};

const guidesFacilitiesAccessibility: Topic = {
  slug: 'guides/facilities-accessibility',
  group: 'guides',
  kicker: '편의시설·무장애',
  h1: '명동 야시장 화장실·짐보관·무장애 안내',
  metaTitle: '명동 야시장 화장실·짐보관·무장애 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 방문 시 화장실, 짐 보관, 유아차·휠체어 접근성 등 편의시설 확인 방법을 정리합니다. 실측 안내가 아닌 위치 확인 수칙입니다.',
  lead: '화장실, 수유 공간, 보관함, 엘리베이터는 건물·시설 운영자에게 위치와 이용 조건을 확인하세요. 전체 거리의 문턱·경사·혼잡도를 실측한 안내는 아닙니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '화장실·수유 공간',
      paragraphs: [
        '공공 화장실과 대형 시설 화장실 위치는 구역마다 다릅니다. 당일 현장 표지판과 지도 앱에서 확인하세요.',
      ],
    },
    {
      heading: '짐 보관',
      bullets: [
        '호텔·역·민간 보관 서비스 위치와 요금은 제공자별 상이',
        '보관 가능 크기와 운영 시간을 미리 확인',
      ],
    },
    {
      heading: '무장애 접근',
      callout: '휠체어·유아차 동선은 목적 점포와 건물의 경사·계단·엘리베이터를 각각 확인하세요. 이 가이드는 현장 실측 안내가 아닙니다.',
    },
  ],
  faqs: [
    {
      q: '유아차로 갈 수 있나요?',
      a: '보행로는 가능하나 경사·계단·혼잡이 구역마다 다릅니다. 목적 건물의 시설을 확인하세요.',
    },
    {
      q: '짐을 맡길 곳이 있나요?',
      a: '역·호텔·민간 보관 서비스가 있을 수 있으나 위치와 요금은 제공자별로 다릅니다.',
    },
    {
      q: '장애인 화장실은 어디에 있나요?',
      a: '공공·대형 시설에 있을 수 있으나 위치는 당일 현장 안내로 확인하세요.',
    },
  ],
  related: ['transport/subway-exits', 'nearby/myeongdong-cathedral', 'routes/family-trip'],
};

// ── B. 명동 먹거리·카페·식이 요구(8페이지) ──────────────────────────
const foodStreetFood: Topic = {
  slug: 'food/street-food',
  group: 'food',
  kicker: '길거리 음식',
  h1: '명동 길거리 음식 종류와 주문 팁',
  metaTitle: '명동 길거리 음식 종류·주문 팁 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 거리 음식의 주요 종류와 주문 시 확인할 점을 정리합니다. 메뉴 선택과 판매자 확인 수칙을 안내합니다.',
  lead: '명동 거리 음식은 꼬치·떡볶이·호떡 등 다양합니다. 오늘의 재고나 가격을 확인한 목록은 아니므로, 메뉴와 조건을 판매자에게 직접 물어보세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '자주 보이는 종류',
      bullets: [
        '꼬치류: 닭꼬치, 어묵꼬치 등',
        '분식: 떡볶이, 순대, 튀김',
        '간식: 호떡, 붕어빵, 토스트',
        '음료: 과일 주스, 떡볶이 음료 등',
      ],
    },
    {
      heading: '주문 팁',
      paragraphs: [
        '주문 전 수량·중량·추가 비용과 결제 수단을 확인하세요. 알레르기 원재료와 보관 방식도 궁금하다면 판매자에게 묻는 것이 안전합니다.',
      ],
      callout: '특정 음식의 위생·알레르기 적합성이나 건강 효과를 이 사이트가 보장하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '무엇을 먹어볼까요?',
      a: '꼬치·떡볶이·호떡 등이 자주 보입니다. 메뉴는 판매대마다 다릅니다.',
    },
    {
      q: '가격은 어떻게 확인하나요?',
      a: '판매대 표지판을 보거나 판매자에게 직접 물어보세요. 공통 가격표는 없습니다.',
    },
    {
      q: '알레르기가 있으면?',
      a: '원재료와 보관 방식을 판매자에게 확인하세요. 이 사이트가 적합성을 보장하지 않습니다.',
    },
  ],
  related: ['food/traditional-snacks', 'food/stalls-or-restaurants', 'guides/prices-budget'],
};

const foodTraditionalSnacks: Topic = {
  slug: 'food/traditional-snacks',
  group: 'food',
  kicker: '한국 간식',
  h1: '명동에서 먹어볼 한국 길거리 간식',
  metaTitle: '명동 한국 길거리 간식 추천 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장에서 시도해 볼 한국 전통 길거리 간식과 계절·재료 차이를 정리합니다. 위생과 알레르기 확인 수칙을 안내합니다.',
  lead: '호떡, 붕어빵, 떡볶이 등 한국 길거리 간식은 명동 거리에서도 쉽게 볼 수 있습니다. 재료와 계절에 따라 맛과 종류가 조금씩 다릅니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '추천 간식',
      bullets: [
        '호떡: 견과·설탕 소가 들어간 팬케이크형 간식',
        '붕어빵: 팥·크림 소를 넣은 붕어 모양 붕어빵',
        '떡볶이: 고추장 기반 매운 소스의 떡 요리',
        '군고구마·군밤: 겨울철 자주 보이는 간식',
      ],
    },
    {
      heading: '계절과 재료',
      paragraphs: [
        '겨울에는 군고구마·붕어빵이, 여름에는 과일 주스류가 자주 보입니다. 재고는 당일 판매대에 따라 다릅니다.',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '알레르기 원재료와 보관 방식은 판매자에게 확인하세요. 이 사이트가 적합성을 보장하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '비매운 간식도 있나요?',
      a: '호떡·붕어빵·군고구마 등 매운 맛이 아닌 간식이 많습니다.',
    },
    {
      q: '계절별로 다른가요?',
      a: '네, 겨울 간식과 여름 음료류가 계절에 따라 달라집니다.',
    },
    {
      q: '안전하게 먹으려면?',
      a: '원재료와 보관 방법을 판매자에게 묻고, 조리 상태를 확인하세요.',
    },
  ],
  related: ['food/street-food', 'food/non-spicy-options', 'food/dietary-restrictions'],
};

const foodNonSpicy: Topic = {
  slug: 'food/non-spicy-options',
  group: 'food',
  kicker: '매운 음식 대안',
  h1: '매운 음식 못 먹는 사람을 위한 명동 먹거리',
  metaTitle: '매운 음식 못 먹는 분을 위한 명동 먹거리 | 명동 야시장 가이드',
  metaDescription:
    '매운 음식을 잘 못 드시는 분과 아동이 선택할 수 있는 명동 거리 음식과 주문 표현을 정리합니다. 알레르기 확인도 안내합니다.',
  lead: '명동 거리 음식에는 매운 떡볶이 등이 많지만, 매운 맛이 아닌 간식도 충분합니다. 아이와 함께하거나 매운 음식을 피하는 분도 골라 먹을 수 있습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '매운 맛이 적은 선택',
      bullets: [
        '호떡·붕어빵 등 단 간식',
        '군고구마·군밤',
        '과일 꼬치·주스',
        '계란이 들어간 토스트류',
      ],
    },
    {
      heading: '주문 표현',
      paragraphs: [
        '‘매운 것 빼주세요’·‘안 매운 것으로 주세요’ 같은 짧은 표현으로 요청할 수 있습니다. 영어로는 ‘not spicy, please’라고 하세요.',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '소스나 재료에 매운 성분이 섞일 수 있으니, 판매자에게 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '아이가 먹을 수 있는 것이 있나요?',
      a: '호떡·붕어빵·군고구마 등 매운 맛이 아닌 간식이 많습니다.',
    },
    {
      q: '매운 것 없이 주문하려면?',
      a: '‘안 매운 것으로 주세요’라고 하거나 영어로 ‘not spicy’라고 요청하세요.',
    },
    {
      q: '알레르기 걱정은 어떻게 하나요?',
      a: '원재료를 판매자에게 직접 확인하는 것이 가장 안전합니다.',
    },
  ],
  related: ['food/street-food', 'food/dietary-restrictions', 'food/stalls-or-restaurants'],
};

const foodDietaryRestrictions: Topic = {
  slug: 'food/dietary-restrictions',
  group: 'food',
  kicker: '식이 제한',
  h1: '명동 야시장 채식·할랄·알레르기 확인법',
  metaTitle: '명동 야시장 채식·할랄·알레르기 확인 | 명동 야시장 가이드',
  metaDescription:
    '명동 거리 음식에서 채식, 할랄, 알레르기 적합성을 확인하는 방법과 한국어 소통 표현을 정리합니다. 보장이 아닌 확인 수칙입니다.',
  lead: '거리 음식은 조리환경과 재료가 판매대마다 다릅니다. 채식·할랄 적합성이나 알레르기 안전을 이 사이트가 보장하지 않으므로, 판매자에게 직접 확인하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '채식·할랄',
      paragraphs: [
        '모든 판매대가 채식·할랄 인증이나 적합성을 보장하지 않습니다. 육수·소스에 사용된 재료를 판매자에게 묻고, 의심되면 섭취를 피하세요.',
      ],
    },
    {
      heading: '알레르기',
      bullets: [
        '계란·밀·견과·갑각류 등 주요 알레르기 유발 식품 확인',
        '조리 기구·기름 공유 가능성 고려',
        '증상이 있으면 섭취 전 전문가 상담',
      ],
    },
    {
      heading: '소통 표현',
      callout: '‘알레르기 있어요’·‘고기 들어갔나요?’ 같은 짧은 한국어 표현이나 번역 앱을 활용하세요.',
    },
  ],
  faqs: [
    {
      q: '채식 음식이 확실히 있나요?',
      a: '보장할 수 없습니다. 재료와 육수를 판매자에게 확인하세요.',
    },
    {
      q: '할랄 인증이 되어 있나요?',
      a: '판매대별로 다릅니다. 인증이나 적합성을 직접 묻고 판단하세요.',
    },
    {
      q: '알레르기 안전을 어떻게 확인하나요?',
      a: '원재료와 조리 환경을 판매자에게 묻는 것이 가장 안전합니다.',
    },
  ],
  related: ['food/non-spicy-options', 'food/street-food', 'guides/payments'],
};

const foodStallsOrRestaurants: Topic = {
  slug: 'food/stalls-or-restaurants',
  group: 'food',
  kicker: '노점 vs 식당',
  h1: '명동 야시장 노점 vs 식당 저녁 선택',
  metaTitle: '명동 노점 vs 식당 저녁 선택 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장 거리 판매대와 식당의 좌석, 비용, 날씨·시간에 따른 선택을 비교합니다. 목적에 맞는 저녁 선택을 돕습니다.',
  lead: '야간 거리 음식은 분위기와 가격 면에서 매력적이지만, 좌석·날씨·시간 면에서는 식당이 유리할 때도 있습니다. 목적에 맞춰 고르세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '거리 판매대의 장단점',
      bullets: [
        '장점: 이동식, 가볍게 여러 가지 시도, 야간 조명 분위기',
        '단점: 좌석 부족, 기상 영향, 운영 변동',
      ],
    },
    {
      heading: '식당의 장단점',
      bullets: [
        '장점: 좌석·에어컨·화장실 이용, 메뉴 폭',
        '단점: 대기 시간, 상대적 비용',
      ],
    },
    {
      heading: '선택 기준',
      callout: '날씨가 불안정하거나 좌석이 필요하면 식당, 가볍게 둘러보며 먹고 싶으면 거리 판매대를 권합니다.',
    },
  ],
  faqs: [
    {
      q: '노점은 앉아서 먹나요?',
      a: '판매대에 따라 간이 좌석이 있기도 하지만 보장되지 않습니다.',
    },
    {
      q: '비 오면 어디서 먹나요?',
      a: '실내 식당이나 지하상가가 대안입니다. ‘비 오는 날 명동 대체 코스’를 참고하세요.',
    },
    {
      q: '비용 차이는?',
      a: '거리 음식이 가볍게 여러 가지 시도하기에 유리하나, 식당은 좌석과 서비스를 포함합니다.',
    },
  ],
  related: ['food/street-food', 'food/myeongdong-kyoja', 'guides/prices-budget'],
};

const foodMyeongdongKyoja: Topic = {
  slug: 'food/myeongdong-kyoja',
  group: 'food',
  kicker: '명동교자',
  h1: '명동교자에서 야시장까지 식사 코스',
  metaTitle: '명동교자에서 야시장까지 식사 코스 | 명동 야시장 가이드',
  metaDescription:
    '명동교자의 위치와 대표 메뉴, 식사 후 명동 야시장으로 이어지는 동선을 정리합니다. 최신 주소는 운영자 발표를 확인하세요.',
  lead: '명동교자는 칼국수·만두로 알려진 명동의 대표 식당입니다. 식사 후 바로 거리 음식 동선으로 이어지기 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '위치와 메뉴',
      paragraphs: [
        '명동교자 본점은 최근 퇴계로 129로 이전한 것으로 알려져 있습니다. 최신 주소와 영업은 운영자 발표를 다시 확인하세요.',
        '칼국수와 만두가 대표 메뉴로, 앉아서 식사하기 좋은 곳입니다.',
      ],
    },
    {
      heading: '야시장 연결 동선',
      bullets: [
        '식사 후 도보로 명동 상권 거리 음식 구역 이동',
        '이동 거리는 짧으나 혼잡 시간대 고려',
        '야간 판매대 운영은 당일 확인',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '영업 시간·대기·메뉴 가격은 운영자 공식 채널에서 당일 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '명동교자 본점 주소가 바뀌었나요?',
      a: '퇴계로 129로 이전한 정보가 있습니다. 최신 주소는 운영자 발표로 확인하세요.',
    },
    {
      q: '무엇이 유명한가요?',
      a: '칼국수와 만두가 대표 메뉴입니다.',
    },
    {
      q: '야시장까지 어떻게 가나요?',
      a: '식사 후 도보로 명동 상권 거리 음식 구역으로 이동하면 됩니다.',
    },
  ],
  related: ['food/stalls-or-restaurants', 'food/cafe-breaks', 'routes/cathedral-nanta-evening'],
};

const foodCafeBreaks: Topic = {
  slug: 'food/cafe-breaks',
  group: 'food',
  kicker: '카페·휴식',
  h1: '명동 야시장 근처 카페와 쉬어갈 곳',
  metaTitle: '명동 야시장 근처 카페·쉬어갈 곳 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장을 둘러보다 쉴 수 있는 카페와 휴식 공간, 위치와 이동 동선을 정리합니다. 영업은 점포마다 확인하세요.',
  lead: '야간 거리를 걷다 지치면 카페에서 잠시 쉬는 것이 좋습니다. 커피 중심인 곳과 디저트 중심인 곳을 구분해 선택하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '어디서 쉴까요',
      bullets: [
        '커피 중심: 짧게 휴식하며 음료',
        '디저트 중심: 케이크·와플 등 함께 즐기기',
        '체인·개인 카페 혼재, 위치와 운영은 각각 다름',
      ],
    },
    {
      heading: '이동 동선',
      paragraphs: [
        '명동 상권 내에 카페가 많이 흩어져 있습니다. 거리 음식 구역에서 도보로 가까운 곳을 선택하세요.',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '영업 시간·대기·좌석은 점포마다 다릅니다. 방문 전 안내를 확인하세요. 이 가이드는 특정 매장을 추천하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '줄서야 하나요?',
      a: '인기 카페는 대기 있을 수 있습니다. 시간대에 따라 다릅니다.',
    },
    {
      q: '야시장에서 카페까지 멀나요?',
      a: '명동 상권 내에 많아 대부분 도보로 가깝습니다.',
    },
    {
      q: '디저트 중심 카페를 찾으면?',
      a: '와플·케이크 등을 다루는 곳을 메뉴표로 확인하세요.',
    },
  ],
  related: ['food/dessert-walk', 'food/myeongdong-kyoja', 'routes/date-night'],
};

const foodDessertWalk: Topic = {
  slug: 'food/dessert-walk',
  group: 'food',
  kicker: '디저트 산책',
  h1: '명동 야시장 디저트 산책 코스',
  metaTitle: '명동 야시장 디저트 산책 코스 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장과 주변에서 디저트를 곁들인 산책 코스, 예산과 먹는 순서를 정리합니다. 점포 운영은 당일 확인하세요.',
  lead: '거리 간식과 카페 디저트를 섞어 천천히 산책하는 코스입니다. 예산과 순서만 미리 정해두면 편합니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '코스 구성',
      bullets: [
        '거리 간식(호떡·붕어빵)으로 시작',
        '카페에서 음료·디저트 휴식',
        '이동식으로 여러 곳 가볍게',
      ],
    },
    {
      heading: '예산과 순서',
      paragraphs: [
        '디저트 위주라 1인 가벼운 예산으로 시작하고, 너무 배부르지 않게 간식을 나눠 먹는 순서를 추천합니다.',
      ],
      callout: '점포 위치와 영업은 당일 안내로 확인하세요. 이 가이드는 특정 매장을 우대하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '디저트만으로 코스가 되나요?',
      a: '네, 거리 간식과 카페 디저트를 섞으면 충분한 산책 코스가 됩니다.',
    },
    {
      q: '예산은 얼마쯤?',
      a: '가볍게 여러 곳을 옮겨 먹는 방식이므로 현장 표지판 가격을 합산하세요.',
    },
    {
      q: '어디서 시작하나요?',
      a: '거리 간식이 많은 명동 상권 보행로에서 시작하는 것이 자연스럽습니다.',
    },
  ],
  related: ['food/cafe-breaks', 'food/street-food', 'routes/date-night'],
};

// ── C. 주변 명소와 문화 활동(9페이지) ────────────────────────────────
const nearbyCathedral: Topic = {
  slug: 'nearby/myeongdong-cathedral',
  group: 'nearby',
  kicker: '명동성당',
    h1: '명동성당과 야시장 함께 둘러보기',
  metaTitle: '명동성당과 야시장 둘러보기 | 명동 야시장 가이드',
  metaDescription:
    '명동성당의 역사와 관람 예절, 야시장과 연결하는 동선을 정리합니다. 미사·관람 시간은 당일 확인하세요.',
  lead: '명동성당은 명동 상권 인근의 역사적 건축물입니다. 낮에 조용히 둘러본 뒤 저녁 거리 음식으로 이어지기 좋은 조합입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '역사와 건축',
      paragraphs: [
        '명동성당은 한국 근대 천주교 역사와 관련된 대표적 성당 건축물로, 서울의 랜드마크 중 하나입니다. 정확한 연혁은 운영자 안내를 참고하세요.',
      ],
    },
    {
      heading: '관람 예절',
      bullets: [
        '미사·예배 시간에는 소음 자제',
        '사진 촬영은 예절과 안내 준수',
        '내부 개방 여부는 당일 확인',
      ],
    },
    {
      heading: '야시장 연결',
      callout: '성당 관람 후 도보로 명동 상권 거리 음식 구역으로 이동하면 자연스러운 저녁 동선이 됩니다.',
    },
  ],
  faqs: [
    {
      q: '입장료가 있나요?',
      a: '성당 내부는 통상 무료 개방이나, 정확한 운영은 운영자 안내로 확인하세요.',
    },
    {
      q: '야시장까지 멀나요?',
      a: '명동 상권 내에 위치해 도보로 가깝습니다.',
    },
    {
      q: '언제 가면 좋나요?',
      a: '낮의 조용한 관람 뒤 저녁 거리 음식 동선이 자연스럽습니다.',
    },
  ],
  related: ['routes/cathedral-nanta-evening', 'guides/facilities-accessibility', 'nearby/nanta'],
};

const nearbyNamdaemun: Topic = {
  slug: 'nearby/namdaemun-market',
  group: 'nearby',
  kicker: '남대문시장',
  h1: '남대문시장과 명동 야시장 비교·연계',
  metaTitle: '남대문시장과 명동 야시장 비교·연계 | 명동 야시장 가이드',
  metaDescription:
    '남대문시장(재래시장)과 명동 야시장(거리 음식)의 차이와 둘을 묶는 쇼핑·먹거리 동선을 정리합니다.',
  lead: '남대문시장은 명동과 별개로 운영되는 큰 재래시장입니다. 전통 시장 쇼핑과 명동 거리 음식을 하루에 묶어보세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '두 곳의 차이',
      bullets: [
        '남대문시장: 도매·소매 혼합 재래시장, 다양 품목',
        '명동 야시장: 명동 상권의 야간 거리 음식',
        '운영 시간·범위가 서로 다름',
      ],
    },
    {
      heading: '연계 동선',
      paragraphs: [
        '두 곳은 도보·지하철로 연결됩니다. 남대문시장에서 명동 야시장까지 반나절 코스를 별도 정리했습니다.',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '각 시장의 영업 시간과 휴일은 운영자·공식 안내에서 당일 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '남대문시장과 명동은 같은 곳인가요?',
      a: '아닙니다. 남대문시장은 별개 재래시장이며 명동과 따로 운영됩니다.',
    },
    {
      q: '둘을 같이 돌아볼 수 있나요?',
      a: '네, 도보·지하철로 연결되며 반나절 코스로 묶을 수 있습니다.',
    },
    {
      q: '어디서 더 저렴한가요?',
      a: '품목별로 다릅니다. 공통된 가격 기준은 없으니 현장에서 비교하세요.',
    },
  ],
  related: ['routes/namdaemun-half-day', 'nearby/sungnyemun', 'food/stalls-or-restaurants'],
};

const nearbySungnyemun: Topic = {
  slug: 'nearby/sungnyemun',
  group: 'nearby',
  kicker: '숭례문',
  h1: '숭례문에서 명동 야시장까지 걷기',
  metaTitle: '숭례문에서 명동 야시장까지 걷기 | 명동 야시장 가이드',
  metaDescription:
    '숭례문의 역사와 명동 야시장까지의 문화 산책 동선을 정리합니다. 거리는 도보로 이동 가능합니다.',
  lead: '숭례문은 서울의 대표적 문화유산입니다. 주변을 천천히 걷고 명동 상권 거리 음식으로 마무리하는 동선이 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '숭례문',
      paragraphs: [
        '숭례문은 서울 성곽의 남대문으로, 한국의 중요한 문화유산입니다. 관람 안내는 운영기관을 확인하세요.',
      ],
    },
    {
      heading: '산책 동선',
      bullets: [
        '숭례문 → 남대문시장 인근 → 명동 상권',
        '도보 거리는 구간별로 다름, 현장 안내 확인',
        '저녁 거리 음식으로 마무리',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '각 지점의 개방·운영은 당일 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '숭례문에서 명동까지 얼마나 걸리나요?',
      a: '구간별 도보 거리가 다릅니다. 현장 지도로 확인하세요.',
    },
    {
      q: '문화유산 관람 비용이 있나요?',
      a: '숭례문 외부 관람은 통상 무료이나 정확한 안내는 운영기관을 확인하세요.',
    },
    {
      q: '야시장과 어떻게 묶나요?',
      a: '남대문시장 인근을 지나 명동 상권으로 이어지는 산책이 자연스럽습니다.',
    },
  ],
  related: ['nearby/namdaemun-market', 'routes/namdaemun-half-day', 'transport/subway-exits'],
};

const nearbyNamsanCableCar: Topic = {
  slug: 'nearby/namsan-cable-car',
  group: 'nearby',
  kicker: '남산 케이블카',
  h1: '남산 케이블카 타고 명동 야시장 가는 법',
  metaTitle: '남산 케이블카 타고 명동 야시장 가는 법 | 명동 야시장 가이드',
  metaDescription:
    '남산 케이블카 탑승, 요금, 대기, 명동 야시장으로의 복귀 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '남산 케이블카는 남산과 명동을 잇는 대표적 이동 수단입니다. 케이블카로 내려온 뒤 명동 상권 거리 음식으로 이어지기 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '탑승과 요금',
      paragraphs: [
        '케이블카 요금과 운영 시간은 계절·요일별로 다릅니다. 운영자 공식 안내에서 당일 확인하세요.',
      ],
    },
    {
      heading: '대기와 동선',
      bullets: [
        '성수기·주말 대기 발생 가능',
        '하차 후 명동 상권까지 도보 이동',
        '복귀 시 케이블카·도보·대중교통 선택',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '운영 중단·기상 영향 가능성을 고려해 대안 동선을 미리 생각해두세요.',
    },
  ],
  faqs: [
    {
      q: '요금은 얼마인가요?',
      a: '왕복·편도 요금이 다르고 계절별 변동이 있습니다. 운영자 안내로 확인하세요.',
    },
    {
      q: '명동까지 어떻게 가나요?',
      a: '케이블카 하차 후 도보로 명동 상권 거리 음식 구역으로 이동합니다.',
    },
    {
      q: '줄 길게 서나요?',
      a: '주말·성수기 대기가 있을 수 있습니다.',
    },
  ],
  related: ['nearby/n-seoul-tower', 'routes/namsan-sunset', 'transport/subway-exits'],
};

const nearbyNSeoulTower: Topic = {
  slug: 'nearby/n-seoul-tower',
  group: 'nearby',
  kicker: 'N서울타워',
  h1: '남산서울타워 야경 후 명동 야시장',
  metaTitle: 'N서울타워 야경 후 명동 야시장 | 명동 야시장 가이드',
  metaDescription:
    'N서울타워의 전망과 관람 선택, 야경 후 명동 야시장으로 이어지는 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: 'N서울타워는 서울 야경 명소입니다. 전망 관람 뒤 명동 상권 거리 음식으로 내려오는 동선이 인기입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '전망과 관람',
      paragraphs: [
        '전망대 이용과 요금은 운영자 안내에 따릅니다. 야경 시간대는 혼잡할 수 있습니다.',
      ],
    },
    {
      heading: '야시장 연결',
      bullets: [
        '케이블카 또는 도보로 명동 상권 하강',
        '저녁 거리 음식으로 마무리',
        '복귀 교통은 미리 계획',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '운영 시간·요금·대기는 당일 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '전망대 입장료가 있나요?',
      a: '요금은 운영자 안내에 따릅니다. 당일 확인하세요.',
    },
    {
      q: '야경 후 명동까지 어떻게 가나요?',
      a: '케이블카나 도보로 명동 상권으로 내려와 거리 음식을 즐길 수 있습니다.',
    },
    {
      q: '혼잡한 시간대는?',
      a: '해 질 무렵과 밤 시간대가 가장 붐빕니다.',
    },
  ],
  related: ['nearby/namsan-cable-car', 'routes/namsan-sunset', 'routes/date-night'],
};

const nearbyNamsangolHanok: Topic = {
  slug: 'nearby/namsangol-hanok',
  group: 'nearby',
  kicker: '남산골한옥마을',
  h1: '남산골한옥마을과 명동 야시장 하루 코스',
  metaTitle: '남산골한옥마을과 명동 야시장 코스 | 명동 야시장 가이드',
  metaDescription:
    '남산골한옥마을의 전통 건축과 문화 체험, 명동 야시장과의 하루 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '남산골한옥마을은 한국 전통 건축과 문화를 체험할 수 있는 공간입니다. 낮에 둘러본 뒤 명동 거리 음식으로 마무리하기 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '한옥마을',
      paragraphs: [
        '전통 한옥과 정원, 문화 체험 프로그램이 있는 공간입니다. 운영 시간과 체험 내용은 운영자 안내로 확인하세요.',
      ],
    },
    {
      heading: '동선',
      bullets: [
        '한옥마을 관람 후 명동 상권 이동',
        '도보·대중교통 혼용',
        '저녁 거리 음식으로 마무리',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '체험 프로그램 예약·운영은 당일 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '입장료가 있나요?',
      a: '야외 마을은 통상 무료이나 일부 체험은 별도일 수 있습니다. 운영자 안내로 확인하세요.',
    },
    {
      q: '명동까지 어떻게 가나요?',
      a: '도보 또는 대중교통으로 명동 상권까지 이동합니다.',
    },
    {
      q: '언제 가면 좋나요?',
      a: '낮의 문화 체험 뒤 저녁 거리 음식 동선이 자연스럽습니다.',
    },
  ],
  related: ['routes/namdaemun-half-day', 'nearby/cheonggyecheon', 'routes/family-trip'],
};

const nearbyMoneyMuseum: Topic = {
  slug: 'nearby/money-museum',
  group: 'nearby',
  kicker: '화폐박물관',
  h1: '한국은행 화폐박물관에서 명동 야시장까지',
  metaTitle: '한국은행 화폐박물관에서 명동 야시장까지 | 명동 야시장 가이드',
  metaDescription:
    '한국은행 화폐박물관의 전시와 실내 관람, 명동 야시장까지의 주변 도보 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '한국은행 화폐박물관은 실내 문화 활동과 비 오는 날 대안으로 좋은 장소입니다. 관람 후 명동 상권으로 이어지기 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '전시와 관람',
      paragraphs: [
        '화폐 관련 전시를 무료 또는 저렴하게 관람할 수 있는 실내 공간입니다. 예약·운영은 운영자 안내로 확인하세요.',
      ],
    },
    {
      heading: '주변 도보',
      bullets: [
        '박물관 → 명동 상권 인근',
        '실내 활동 후 거리 음식',
        '비 오는 날 대안 코스로 적합',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '휴관일·예약 여부는 운영자 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '입장료가 있나요?',
      a: '통상 무료이나 정확한 안내는 운영자 채널을 확인하세요.',
    },
    {
      q: '명동까지 어떻게 가나요?',
      a: '도보 또는 대중교통으로 명동 상권까지 이동합니다.',
    },
    {
      q: '비 오는 날 가기 좋나요?',
      a: '실내 전시라 날씨 영향이 적어 대안 코스로 적합합니다.',
    },
  ],
  related: ['nearby/sungnyemun', 'nearby/namdaemun-market', 'routes/rainy-day'],
};

const nearbyNanta: Topic = {
  slug: 'nearby/nanta',
  group: 'nearby',
  kicker: '난타 공연',
  h1: '명동 난타 공연 전후 야시장 동선',
  metaTitle: '명동 난타 공연 전후 야시장 동선 | 명동 야시장 가이드',
  metaDescription:
    '명동 난타 공연의 극장 위치와 회차, 공연 전후 식사·야시장 동선을 정리합니다. 예매와 운영은 당일 확인하세요.',
  lead: '난타는 명동 인근 극장에서 공연되는 대표적 공연입니다. 공연 전후로 식사와 거리 음식을 묶기 좋은 동선입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '공연 정보',
      paragraphs: [
        '극장 위치와 회차·예매는 운영자 공식 채널에서 확인하세요. 공연 시간대에 따라 식사 동선을 짜야 합니다.',
      ],
    },
    {
      heading: '전후 동선',
      bullets: [
        '공연 전: 명동 상권에서 가볍게 식사',
        '공연 후: 저녁 거리 음식 또는 카페',
        '극장과 명동 상권은 도보로 가까움',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '회차·잔여석·운영은 당일 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '극장이 명동에 있나요?',
      a: '명동 인근 극장에서 공연됩니다. 정확한 위치는 운영자 안내로 확인하세요.',
    },
    {
      q: '공연 전에 먹을 수 있나요?',
      a: '네, 공연 전 명동 상권에서 가볍게 식사한 뒤 이동하기 좋습니다.',
    },
    {
      q: '예매는 어디서?',
      a: '운영자 공식 채널에서 회차와 잔여석을 확인하세요.',
    },
  ],
  related: ['routes/cathedral-nanta-evening', 'nearby/myeongdong-cathedral', 'food/myeongdong-kyoja'],
};

const nearbyCheonggyecheon: Topic = {
  slug: 'nearby/cheonggyecheon',
  group: 'nearby',
  kicker: '청계천',
  h1: '청계천에서 명동 야시장까지 야간 산책',
  metaTitle: '청계천에서 명동 야시장까지 야간 산책 | 명동 야시장 가이드',
  metaDescription:
    '청계천 광장의 야간 산책과 명동 야시장까지의 동선을 정리합니다. 조명과 도보로 이어지는 저녁 코스입니다.',
  lead: '청계천은 서울 도심의 산책로로, 야간 조명이 아름답습니다. 천천히 걸으며 명동 상권 거리 음식으로 이어지는 저녁 동선이 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '청계천 산책',
      paragraphs: [
        '청계천 광장과 산책로는 무료로 이용할 수 있는 도심 휴식 공간입니다. 구간별 조명과 분수 운영은 당일 확인하세요.',
      ],
    },
    {
      heading: '명동 연결',
      bullets: [
        '청계천 → 명동 상권 인근 도보',
        '야간 조명 산책 뒤 거리 음식',
        '복귀 교통 미리 계획',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '분수·조명 운영과 보행 환경은 당일 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '입장료가 있나요?',
      a: '산책로는 통상 무료입니다.',
    },
    {
      q: '명동까지 도보로 가나요?',
      a: '네, 청계천에서 명동 상권까지 도보로 이어집니다.',
    },
    {
      q: '밤에 안전한가요?',
      a: '도심 보행로이나 늦은 시간 귀가 교통은 미리 계획하세요.',
    },
  ],
  related: ['routes/rainy-day', 'nearby/namsangol-hanok', 'routes/namsan-sunset'],
};

// ── D. 명동 쇼핑과 관광 서비스(5페이지) ───────────────────────────────
const shoppingKbeauty: Topic = {
  slug: 'shopping/kbeauty',
  group: 'shopping',
  kicker: '화장품 쇼핑',
  h1: '명동 화장품 쇼핑과 야시장 동선',
  metaTitle: '명동 화장품 쇼핑과 야시장 동선 | 명동 야시장 가이드',
  metaDescription:
    '명동 화장품 쇼핑 구역과 점포 확인, 야시장과 묶는 동선을 정리합니다. 행사·운영은 점포마다 확인하세요.',
  lead: '명동은 화장품·잡화 매장이 밀집한 쇼핑 상권입니다. 낮에 쇼핑하고 저녁 거리 음식으로 마무리하는 동선이 자연스럽습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '쇼핑 구역',
      paragraphs: [
        '명동 상권에는 화장품·잡화 매장이 많이 있습니다. 행사와 품목은 점포마다 다르므로 현장에서 확인하세요.',
      ],
    },
    {
      heading: '야시장 연결',
      bullets: [
        '쇼핑 뒤 거리 음식 구역 이동',
        '시간대별 혼잡 고려',
        '세금 환급 대상 구매 시 영수증 보관',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '점포 행사·운영·가격은 각 매장 안내를 따르세요. 이 가이드는 특정 매장을 추천하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '화장품 매장이 많은가요?',
      a: '명동은 화장품·잡화 매장이 밀집한 상권입니다.',
    },
    {
      q: '야시장과 어떻게 묶나요?',
      a: '낮 쇼핑 뒤 저녁 거리 음식 동선이 자연스럽습니다.',
    },
    {
      q: '세금 환급은?',
      a: '대상 구매는 영수증을 보관하고 ‘택스리펀드’ 정리를 참고하세요.',
    },
  ],
  related: ['shopping/souvenirs', 'shopping/underground-market', 'shopping/tax-refund'],
};

const shoppingSouvenirs: Topic = {
  slug: 'shopping/souvenirs',
  group: 'shopping',
  kicker: '기념품',
  h1: '명동 기념품 쇼핑 가이드',
  metaTitle: '명동 기념품 쇼핑 가이드 | 명동 야시장 가이드',
  metaDescription:
    '명동 기념품의 종류, 가격 표시, 포장과 구매 수칙을 정리합니다. 점포마다 확인하세요.',
  lead: '명동 상권에는 한국 기념품·잡화를 파는 매장이 많습니다. 가격 표시와 포장, 세금 환급 대상 여부를 확인하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '기념품 종류',
      bullets: [
        '한국 잡화·악세서리',
        '식품·간식 선물 세트',
        '캐릭터·관광 기념품',
      ],
    },
    {
      heading: '구매 수칙',
      paragraphs: [
        '가격 표시와 환불 정책은 점포마다 다릅니다. 세금 환급 대상 구매는 영수증을 보관하세요.',
      ],
      callout: '이 가이드는 특정 매장을 추천하거나 우대하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '어떤 기념품이 있나요?',
      a: '잡화·식품 선물 세트·관광 기념품 등 다양합니다.',
    },
    {
      q: '가격은 표시되어 있나요?',
      a: '점포마다 다릅니다. 구매 전 가격과 환불 정책을 확인하세요.',
    },
    {
      q: '포장은 해주나요?',
      a: '매장별로 다르므로 문의하세요.',
    },
  ],
  related: ['shopping/kbeauty', 'shopping/tax-refund', 'shopping/department-stores'],
};

const shoppingUnderground: Topic = {
  slug: 'shopping/underground-market',
  group: 'shopping',
  kicker: '지하상가',
  h1: '명동 지하상가와 야시장 비교',
  metaTitle: '명동 지하상가와 야시장 비교 | 명동 야시장 가이드',
  metaDescription:
    '명동 지하상가와 야간 거리 음식의 차이와 비 오는 날 대안으로서의 지하상가를 정리합니다.',
  lead: '명동 지하상가는 실내 쇼핑 공간으로, 비 오는 날이나 더운 날 대안이 됩니다. 야간 거리 음식과 목적을 나누어 고르세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '차이',
      bullets: [
        '지하상가: 실내·날씨 영향 적음·쇼핑 중심',
        '거리 음식: 야간·조명 분위기·먹거리 중심',
      ],
    },
    {
      heading: '비 오는 날 대안',
      paragraphs: [
        '날씨가 불안정하면 지하상가와 실내 식당을 중심으로 동선을 짜세요. ‘비 오는 날 명동 대체 코스’도 참고하세요.',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '지하상가 점포 운영과 영업은 각 매장 안내를 따르세요.',
    },
  ],
  faqs: [
    {
      q: '비 오면 어디서 쇼핑하나요?',
      a: '지하상가와 실내 매장이 대안입니다.',
    },
    {
      q: '지하상가도 명동인가요?',
      a: '명동 상권 내 실내 쇼핑 공간으로, 야간 거리 음식과는 성격이 다릅니다.',
    },
    {
      q: '야시장 대신 갈 곳이 있나요?',
      a: '날씨 영향이 적은 지하상가·실내 식당을 고려하세요.',
    },
  ],
  related: ['shopping/kbeauty', 'transport/parking', 'routes/rainy-day'],
};

const shoppingDepartmentStores: Topic = {
  slug: 'shopping/department-stores',
  group: 'shopping',
  kicker: '백화점',
  h1: '롯데·신세계백화점에서 명동 야시장까지',
  metaTitle: '롯데·신세계백화점에서 명동 야시장까지 | 명동 야시장 가이드',
  metaDescription:
    '명동 인근 백화점 위치와 쇼핑 후 명동 야시장으로 이어지는 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '명동 인근에는 롯데·신세계 등 대형 백화점이 있습니다. 백화점 쇼핑을 마친 뒤 명동 상권 거리 음식으로 이어지기 좋습니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '백화점 위치',
      paragraphs: [
        '명동 인근 백화점은 지하철과 도보로 연결됩니다. 정확한 위치와 운영은 각 백화점 안내를 확인하세요.',
      ],
    },
    {
      heading: '야시장 연결',
      bullets: [
        '백화점 쇼핑 후 명동 상권 이동',
        '지하상가·지하철 환승 활용',
        '저녁 거리 음식으로 마무리',
      ],
    },
    {
      heading: '확인 수칙',
      callout: '백화점 운영 시간과 세금 환급 서비스는 각 매장 안내를 따르세요.',
    },
  ],
  faqs: [
    {
      q: '명동에 백화점이 있나요?',
      a: '인근에 롯데·신세계 등 대형 백화점이 있습니다. 위치는 안내로 확인하세요.',
    },
    {
      q: '야시장까지 어떻게 가나요?',
      a: '지하철·도보로 명동 상권 거리 음식 구역으로 이동합니다.',
    },
    {
      q: '백화점에서 환급받나요?',
      a: '백화점 환급 서비스는 각 매장 안내를 따르세요.',
    },
  ],
  related: ['shopping/kbeauty', 'shopping/souvenirs', 'transport/from-seoul-station'],
};

const shoppingTaxRefund: Topic = {
  slug: 'shopping/tax-refund',
  group: 'shopping',
  kicker: '택스리펀드',
  h1: '명동 택스리펀드·영수증 체크리스트',
  metaTitle: '명동 택스리펀드·영수증 체크리스트 | 명동 야시장 가이드',
  metaDescription:
    '외국인 방문자를 위한 한국 세금 환급 개요와 영수증 체크리스트를 정리합니다. 기준은 한국관광공사 최신 안내를 따르세요.',
  lead: '한국을 방문하는 외국인은 일정 요건을 충족하면 부가세 환급을 받을 수 있습니다. 환급 기준은 변동되므로 한국관광공사 등 최신 안내를 확인하세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '개요',
      paragraphs: [
        '세금 환급은 가맹점·최소 금액·환급 방식 등 요건이 있습니다. 기준은 한국관광공사 ‘Duty Free & Tax Refunds’ 등 공식 안내를 따르세요.',
      ],
    },
    {
      heading: '영수증 체크리스트',
      bullets: [
        '환급 대상 가맹점 표시 확인',
        '영수증 분실 방지·보관',
        '여권 정보 일치 확인',
        '환급 창구·기계 위치 미리 파악',
      ],
    },
    {
      heading: '주의',
      callout: '환급 기준(최소 금액·비율)은 수시로 바뀔 수 있으니 방문 시 최신 공식 안내를 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '누가 환급받나요?',
      a: '요건을 충족하는 외국인 방문자가 대상입니다. 정확한 요건은 공식 안내를 따르세요.',
    },
    {
      q: '영수증은 왜 필요한가요?',
      a: '환급 처리에 필요하므로 분실하지 않게 보관하세요.',
    },
    {
      q: '기준이 바뀌나요?',
      a: '네, 최소 금액과 비율 등은 변동될 수 있으니 최신 안내를 확인하세요.',
    },
  ],
  related: ['shopping/kbeauty', 'shopping/souvenirs', 'guides/payments'],
};

// ── E. 방문객 유형별 동선 조합(8페이지) ────────────────────────────
const routesNightMarket2Hour: Topic = {
  slug: 'routes/night-market-2-hour',
  group: 'routes',
  kicker: '2시간 코스',
  h1: '명동 야시장 2시간 먹거리·쇼핑 코스',
  metaTitle: '명동 야시장 2시간 코스 | 명동 야시장 가이드',
  metaDescription:
    '명동 야시장을 2시간 안에 둘러보는 실제 동선, 머무는 시간과 예산을 정리합니다. 운영은 당일 확인하세요.',
  lead: '시간이 부족한 방문자를 위한 2시간 동선입니다. 거리 음식 위주로 가볍게 보고 쇼핑도 곁들이세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '동선 예시',
      bullets: [
        '0–30분: 명동 상권 보행로 거리 음식 둘러보기',
        '30–70분: 2–3곳 가볍게 시식',
        '70–120분: 잡화·화장품 가볍게 쇼핑 후 마무리',
      ],
    },
    {
      heading: '예산과 시간',
      paragraphs: [
        '2시간은 이동보다 머무는 시간을 짧게 가져야 합니다. 예산은 시도할 품목 수에 맞춰 현장 표지판으로 합산하세요.',
      ],
      callout: '판매대 운영은 당일 기상·현장 상황에 따라 달라집니다.',
    },
  ],
  faqs: [
    {
      q: '2시간이면 충분한가요?',
      a: '거리 음식 위주 가볍게 보기엔 충분합니다. 깊이 둘러보려면 더 여유가 필요합니다.',
    },
    {
      q: '어디서 시작하나요?',
      a: '명동역 인근 보행로에서 시작하는 것이 자연스럽습니다.',
    },
    {
      q: '예산은?',
      a: '현장 표지판 가격을 기준으로 시도 품목 수에 맞춰 잡으세요.',
    },
  ],
  related: ['guides/best-time-to-visit', 'food/street-food', 'routes/budget-walk'],
};

const routesCathedralNantaEvening: Topic = {
  slug: 'routes/cathedral-nanta-evening',
  group: 'routes',
  kicker: '저녁 코스',
  h1: '명동성당·난타·야시장 저녁 코스',
  metaTitle: '명동성당·난타·야시장 저녁 코스 | 명동 야시장 가이드',
  metaDescription:
    '명동성당 관람, 난타 공연, 명동 야시장을 잇는 저녁 시간 연결 코스를 정리합니다. 회차와 운영은 당일 확인하세요.',
  lead: '낮에 명동성당을 보고, 저녁 난타 공연을 관람한 뒤 거리 음식으로 마무리하는 동선입니다. 시간 연결이 핵심입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '시간 연결',
      bullets: [
        '오후: 명동성당 관람',
        '저녁: 난타 공연 회차 맞춰 이동',
        '공연 후: 거리 음식',
      ],
    },
    {
      heading: '주의',
      paragraphs: [
        '난타 회차와 성당 관람 시간을 먼저 확정하세요. 공연 전후 식사 동선을 그에 맞춰 짜야 합니다.',
      ],
      callout: '회차·잔여석·운영은 운영자 안내로 확인하세요.',
    },
  ],
  faqs: [
    {
      q: '순서가 어떻게 되나요?',
      a: '성당 관람 → 난타 공연 → 거리 음식 순이 자연스럽습니다.',
    },
    {
      q: '시간이 빠듯하지 않나요?',
      a: '공연 회차를 먼저 정하고 그에 맞춰 동선을 짜면 여유롭습니다.',
    },
    {
      q: '식사는 어디서?',
      a: '공연 전 명동 상권 가벼운 식사 또는 공연 후 거리 음식이 좋습니다.',
    },
  ],
  related: ['nearby/myeongdong-cathedral', 'nearby/nanta', 'food/myeongdong-kyoja'],
};

const routesNamdaemunHalfDay: Topic = {
  slug: 'routes/namdaemun-half-day',
  group: 'routes',
  kicker: '반나절 코스',
  h1: '남대문시장부터 명동 야시장까지 반나절',
  metaTitle: '남대문시장에서 명동 야시장 반나절 코스 | 명동 야시장 가이드',
  metaDescription:
    '남대문시장 쇼핑, 점심, 명동 야시장을 잇는 반나절 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '낮에 남대문시장에서 쇼핑과 식사, 저녁 무렵 명동 상권 거리 음식으로 이어지는 반나절 코스입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '동선',
      bullets: [
        '오후: 남대문시장 쇼핑·식사',
        '이동: 도보·지하철로 명동',
        '저녁: 명동 상권 거리 음식',
      ],
    },
    {
      heading: '주의',
      paragraphs: [
        '두 시장의 영업 시간과 휴일이 다릅니다. 당일 안내로 확인하세요.',
      ],
      callout: '거리 음식 운영은 기상·현장 상황에 따라 달라집니다.',
    },
  ],
  faqs: [
    {
      q: '반나절로 가능한가요?',
      a: '네, 낮 남대문시장과 저녁 명동 거리 음식을 묶으면 알맞습니다.',
    },
    {
      q: '두 곳 사이 이동은?',
      a: '도보·지하철로 연결됩니다.',
    },
    {
      q: '점심은 어디서?',
      a: '남대문시장 인근 식당이나 명동 상권에서 해결하세요.',
    },
  ],
  related: ['nearby/namdaemun-market', 'nearby/sungnyemun', 'food/stalls-or-restaurants'],
};

const routesNamsanSunset: Topic = {
  slug: 'routes/namsan-sunset',
  group: 'routes',
  kicker: '남산 야경',
  h1: '남산 야경·명동 야시장 저녁 코스',
  metaTitle: '남산 야경·명동 야시장 저녁 코스 | 명동 야시장 가이드',
  metaDescription:
    '남산 케이블카·N서울타워 야경과 명동 야시장을 잇는 저녁 동선을 정리합니다. 운영은 당일 확인하세요.',
  lead: '해 질 무렵 남산에서 야경을 보고, 명동 상권 거리 음식으로 내려오는 저녁 코스입니다.',
  updated: AS_OF,
  sections: [
    {
      heading: '동선',
      bullets: [
        '해 질 무렵: 남산 케이블카 또는 도보',
        'N서울타워 전망',
        '하강 후 명동 상권 거리 음식',
      ],
    },
    {
      heading: '주의',
      paragraphs: [
        '케이블카·전망대 운영과 대기는 당일 안내로 확인하세요. 야경 시간대 혼잡을 고려하세요.',
      ],
      callout: '복귀 교통은 미리 계획하세요.',
    },
  ],
  faqs: [
    {
      q: '남산은 어떻게 올라가나요?',
      a: '케이블카나 도보로 올라갈 수 있습니다.',
    },
    {
      q: '야경 후 명동까지?',
      a: '케이블카 또는 도보로 명동 상권으로 내려와 거리 음식을 즐길 수 있습니다.',
    },
    {
      q: '혼잡한 시간대는?',
      a: '해 질 무렵과 밤이 가장 붐빕니다.',
    },
  ],
  related: ['nearby/n-seoul-tower', 'nearby/namsan-cable-car', 'routes/date-night'],
};

const routesRainyDay: Topic = {
  slug: 'routes/rainy-day',
  group: 'routes',
  kicker: '비 오는 날',
  h1: '비 오는 날 명동 실내·야시장 대체 코스',
  metaTitle: '비 오는 날 명동 대체 코스 | 명동 야시장 가이드',
  metaDescription:
    '비 오는 날 명동 방문 시 실내 명소, 식당, 대체 동선을 정리합니다. 거리 음식 운영은 기상에 따라 달라집니다.',
  lead: '비 오는 날에는 야간 거리 판매대 운영이 줄어들 수 있습니다. 실내 명소와 식당을 중심으로 동선을 바꾸세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '실내 대안',
      bullets: [
        '한국은행 화폐박물관 등 실내 문화',
        '명동 지하상가 쇼핑',
        '실내 식당에서 식사',
      ],
    },
    {
      heading: '야시장 운영',
      paragraphs: [
        '기상에 따라 야간 판매대 참여가 줄어들 수 있습니다. 방문 전 Google Maps에서 목적 곳의 운영을 확인하세요.',
      ],
      callout: '비 오는 날에도 모든 노점이 영업한다고 보장할 수 없습니다.',
    },
  ],
  faqs: [
    {
      q: '비 오면 야시장은?',
      a: '기상에 따라 참여가 줄어들 수 있습니다. 당일 운영을 확인하세요.',
    },
    {
      q: '실내에서 할 곳은?',
      a: '박물관·지하상가·실내 식당을 중심으로 동선을 짜세요.',
    },
    {
      q: '우산은 어디서?',
      a: '편의점·매장에서 구입 가능하나 위치는 현장 확인하세요.',
    },
  ],
  related: ['shopping/underground-market', 'nearby/money-museum', 'nearby/cheonggyecheon'],
};

const routesFamilyTrip: Topic = {
  slug: 'routes/family-trip',
  group: 'routes',
  kicker: '아이와 함께',
  h1: '아이와 함께하는 명동 반나절 코스',
  metaTitle: '아이와 함께하는 명동 반나절 코스 | 명동 야시장 가이드',
  metaDescription:
    '아이와 함께하는 명동 방문 시 식사, 휴식, 편의시설, 비교적 이른 귀가를 고려한 동선을 정리합니다.',
  lead: '아이와 함께라면 무리한 일정보다 휴식과 편의시설, 비교적 이른 마무리를 중심으로 짜세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '동선',
      bullets: [
        '아이-friendly 간식(비매운 옵션) 위주',
        '카페·화장실 등 휴식 지점 포함',
        '너무 늦지 않게 마무리',
      ],
    },
    {
      heading: '편의 확인',
      paragraphs: [
        '유아차 동선과 화장실·수유 공간은 건물·시설별로 확인하세요. ‘화장실·짐보관·무장애 안내’도 참고하세요.',
      ],
      callout: '이 가이드는 현장 실측 안내가 아닙니다.',
    },
  ],
  faqs: [
    {
      q: '아이가 먹을 것이 있나요?',
      a: '호떡·붕어빵 등 비매운 간식이 많습니다. ‘매운 음식 못 먹는 분’ 정리를 참고하세요.',
    },
    {
      q: '유아차로 가나요?',
      a: '보행로는 가능하나 경사·계단은 구역마다 다릅니다. 건물 시설을 확인하세요.',
    },
    {
      q: '너무 늦게 끝내지 않으려면?',
      a: '일정을 가볍게 잡고 이른 마무리를 권합니다.',
    },
  ],
  related: ['guides/facilities-accessibility', 'nearby/namsangol-hanok', 'food/non-spicy-options'],
};

const routesDateNight: Topic = {
  slug: 'routes/date-night',
  group: 'routes',
  kicker: '데이트·야경',
  h1: '명동 야시장 데이트·야경 코스',
  metaTitle: '명동 야시장 데이트·야경 코스 | 명동 야시장 가이드',
  metaDescription:
    '커플을 위한 명동 저녁 동선, 카페, 야경과 사진 명소를 정리합니다. 운영은 당일 확인하세요.',
  lead: '저녁 거리 음식과 카페, 남산 야경을 묶은 데이트 동선입니다. 사진 명소도 곁들이세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '동선',
      bullets: [
        '저녁: 명동 상권 거리 음식',
        '카페에서 휴식·디저트',
        '남산 야경 또는 거리 조명 사진',
      ],
    },
    {
      heading: '주의',
      paragraphs: [
        '주말·공휴일 저녁은 혼잡합니다. 남산 전망대 운영은 당일 안내로 확인하세요.',
      ],
      callout: '복귀 교통은 미리 계획하세요.',
    },
  ],
  faqs: [
    {
      q: '데이트 코스 추천은?',
      a: '거리 음식 → 카페 → 남산 야경 순이 인기입니다.',
    },
    {
      q: '사진 명소는?',
      a: '명동 거리 조명과 남산 야경이 대표적입니다.',
    },
    {
      q: '조용히 쉴 곳은?',
      a: '카페에서 휴식과 디저트를 곁들이세요.',
    },
  ],
  related: ['nearby/n-seoul-tower', 'food/cafe-breaks', 'routes/namsan-sunset'],
};

const routesBudgetWalk: Topic = {
  slug: 'routes/budget-walk',
  group: 'routes',
  kicker: '저예산',
  h1: '돈 적게 쓰는 명동 하루 코스',
  metaTitle: '저예산 명동 하루 코스 | 명동 야시장 가이드',
  metaDescription:
    '무료 명소, 저비용 거리 간식, 도보 중심 동선으로 명동을 저예산으로 즐기는 코스를 정리합니다.',
  lead: '명동은 무료로 둘러볼 명소와 가벼운 거리 간식이 많아 저예산 여행도 충분합니다. 도보 중심으로 짜세요.',
  updated: AS_OF,
  sections: [
    {
      heading: '무료·저비용',
      bullets: [
        '명동성당 외부·청계천 산책 등 무료',
        '거리 간식 가볍게 나눠 먹기',
        '도보 이동으로 교통비 절약',
      ],
    },
    {
      heading: '예산',
      paragraphs: [
        '거리 음식은 소수 품목 위주로 가볍게, 인원수로 나눠 먹으면 효율적입니다. 실제 가격은 현장 표지판으로 확인하세요.',
      ],
      callout: '이 가이드는 공통 가격표를 보장하지 않습니다.',
    },
  ],
  faqs: [
    {
      q: '무료로 할 곳이 있나요?',
      a: '명동성당 외부 관람, 청계천 산책 등이 무료입니다.',
    },
    {
      q: '저비용으로 먹으려면?',
      a: '거리 간식을 소수 품목으로 나눠 먹는 방식이 효율적입니다.',
    },
    {
      q: '교통비는?',
      a: '도보 중심 동선으로 이동 비용을 줄이세요.',
    },
  ],
  related: ['guides/prices-budget', 'routes/night-market-2-hour', 'food/street-food'],
};

export const TOPICS: Topic[] = [
  guidesMarketVsNightMarket,
  guidesOpeningHours,
  guidesBestTime,
  transportSubwayExits,
  transportFromSeoulStation,
  transportParking,
  guidesPricesBudget,
  guidesPayments,
  transportLateNightReturn,
  guidesFacilitiesAccessibility,
  foodStreetFood,
  foodTraditionalSnacks,
  foodNonSpicy,
  foodDietaryRestrictions,
  foodStallsOrRestaurants,
  foodMyeongdongKyoja,
  foodCafeBreaks,
  foodDessertWalk,
  nearbyCathedral,
  nearbyNamdaemun,
  nearbySungnyemun,
  nearbyNamsanCableCar,
  nearbyNSeoulTower,
  nearbyNamsangolHanok,
  nearbyMoneyMuseum,
  nearbyNanta,
  nearbyCheonggyecheon,
  shoppingKbeauty,
  shoppingSouvenirs,
  shoppingUnderground,
  shoppingDepartmentStores,
  shoppingTaxRefund,
  routesNightMarket2Hour,
  routesCathedralNantaEvening,
  routesNamdaemunHalfDay,
  routesNamsanSunset,
  routesRainyDay,
  routesFamilyTrip,
  routesDateNight,
  routesBudgetWalk,
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

export function groupLabel(group: TopicGroup): string {
  return TOPIC_GROUP_LABELS[group];
}
