(() => {
  const key = 'myeongdongmkt_cookie_preferences', deniedKey = 'myeongdongmkt_analytics_denied', gaId = 'G-HXM22WWPKP', deniedMark = '|myeongdongmkt-analytics-denied|';
  const messages = {
    on: '이 브라우저에서 분석을 허용했습니다.', off: '이 브라우저에서 분석을 거부했습니다.',
    session: '분석이 이 탭에서 꺼졌으며 페이지 이동과 새로고침에도 유지됩니다. 영구 선택을 저장하지 못해 이전 허용이 남아 있을 수 있습니다. 브라우저 설정에서 사이트 데이터를 삭제해 저장된 허용을 제거하세요.',
    inactive: '선택은 저장했지만 브라우저 저장소를 확인할 수 없어 이 탭의 Google Analytics는 비활성 상태입니다.',
    page: '분석이 이 페이지에서 꺼졌습니다. 저장소를 사용할 수 없으므로 이동하거나 새로고침하기 전에 브라우저 설정에서 사이트 데이터를 삭제하세요.'
  };
  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || 'null');
      const denied = window.__myeongdongmktDenied || sessionStorage.getItem(deniedKey) === '1' || window.name.includes(deniedMark);
      return { analytics: !denied && raw?.analytics === true, decided: denied || typeof raw?.analytics === 'boolean' };
    } catch { return { analytics: false, decided: false }; }
  }
  function denySession() {
    window.__myeongdongmktDenied = true; window['ga-disable-' + gaId] = true;
    let retained = false;
    try { sessionStorage.setItem(deniedKey, '1'); retained = sessionStorage.getItem(deniedKey) === '1'; } catch {}
    try { window.name = window.name.split(deniedMark).join('') + deniedMark; retained = window.name.includes(deniedMark) || retained; } catch {}
    return retained;
  }
  function clearDenial() {
    // A shared grant must not precede verified removal of this tab's refusal.
    sessionStorage.removeItem(deniedKey);
    if (sessionStorage.getItem(deniedKey) === '1') throw Error('Session refusal remains');
    window.name = window.name.split(deniedMark).join('');
    if (window.name.includes(deniedMark)) throw Error('Tab refusal remains');
  }
  function apply() {
    const state = read(), allowed = state.analytics; window['ga-disable-' + gaId] = !allowed;
    if (!allowed) {
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      for (const part of document.cookie.split(';')) {
        const name = part.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) for (const domain of ['', '; domain=' + location.hostname, '; domain=.myeongdongmkt.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
      }
      return state;
    }
    if (window.__myeongdongmktLoaded) { window.gtag('consent', 'update', { analytics_storage: 'granted' }); return state; }
    window.__myeongdongmktLoaded = true; window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date()); window.gtag('config', gaId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId; document.head.appendChild(script);
    return state;
  }
  function save(value) {
    value = value === true; let sessionDenied = false, saved = false;
    if (!value) { sessionDenied = denySession(); apply(); }
    try {
      if (value) {
        clearDenial();
        localStorage.getItem(key);
        localStorage.setItem(key + '_write_check', '1'); localStorage.removeItem(key + '_write_check');
      }
      localStorage.setItem(key, JSON.stringify({ analytics: value }));
      if (value) window.__myeongdongmktDenied = false;
      saved = true;
    } catch { sessionDenied = denySession() || sessionDenied; }
    const analytics = apply().analytics;
    const result = { saved, analytics, message: saved ? (analytics ? messages.on : value ? messages.inactive : messages.off) : (sessionDenied ? messages.session : messages.page) };
    document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = result.message; });
    const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = result.analytics;
    const banner = document.getElementById('cookie-banner'); if (saved) banner?.classList.add('hidden');
    return result;
  }
  window.MyeongdongmktConsent = { read, save };
  const initial = apply();
  const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = initial.analytics;
  if (!initial.decided) document.getElementById('cookie-banner')?.classList.remove('hidden');
  document.querySelectorAll('[data-cookie-accept]').forEach(node => node.addEventListener('click', () => save(true)));
  document.querySelectorAll('[data-cookie-reject]').forEach(node => node.addEventListener('click', () => save(false)));
  document.getElementById('cookie-settings')?.addEventListener('submit', event => { event.preventDefault(); save(checkbox?.checked === true); });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    let grant = false; try { grant = JSON.parse(event.newValue || 'null')?.analytics === true; } catch {}
    if (!grant) denySession();
    const state = apply(); if (checkbox) checkbox.checked = state.analytics;
    document.querySelectorAll('[data-consent-status]').forEach(node => {
      node.textContent = state.analytics ? messages.on : grant ? '이 탭의 분석 거부는 유지됩니다. 허용하려면 이 페이지에서 선택을 저장하세요.' : '다른 탭의 설정 변경에 따라 이 탭의 분석을 비활성화했습니다.';
    });
  });
})();
