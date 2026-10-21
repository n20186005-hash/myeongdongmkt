import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.resolve('wrangler'));
const {Miniflare,convertV4MiniflareOptions}=require('miniflare');
const {transformSync}=require('esbuild');
const script=transformSync(fs.readFileSync('src/worker.ts','utf8'),{loader:'ts',format:'esm'}).code;
const mf=new Miniflare(convertV4MiniflareOptions({name:'myeongdong-review',modules:true,script,compatibilityDate:'2026-08-01',assets:{directory:'dist',binding:'ASSETS',run_worker_first:true,routerConfig:{has_user_worker:true,invoke_user_worker_ahead_of_assets:true},assetConfig:{not_found_handling:'404-page'}}}));
try{
 for(const path of ['/404','/404/','/404.html','/404.html/','/unknown-check/'])for(const method of ['GET','HEAD'])for(const query of ['','?q=a%2Fb&x=1&x=2']){
  const r=await mf.dispatchFetch('https://myeongdongmkt.com'+path+query,{method,redirect:'manual'});assert.equal(r.status,404,method+path+query);assert.match(r.headers.get('X-Robots-Tag'),/noindex/);assert.equal(r.headers.get('Location'),null);const body=await r.text();assert(method==='HEAD'?body==='':body.includes('noindex'));
 }
 for(const path of ['/','/privacy/','/terms/','/cookie-settings/','/js/consent.js',...Array.from({length:4},(_,i)=>`/images/myeongdong-night-${i+1}.webp`)]){
  const r=await mf.dispatchFetch('https://myeongdongmkt.com'+path,{redirect:'manual'});assert.equal(r.status,200,path);assert.equal(r.headers.get('X-Robots-Tag'),null);const bytes=Buffer.from(await r.arrayBuffer());assert(bytes.equals(fs.readFileSync('dist'+(path.endsWith('/')?path+'index.html':path))));
 }
 for(const host of ['http://myeongdongmkt.com','http://www.myeongdongmkt.com','https://www.myeongdongmkt.com'])for(const method of ['GET','HEAD']){
  const r=await mf.dispatchFetch(host+'/404/?q=a%2Fb&x=1&x=2',{method,redirect:'manual'});assert.equal(r.status,301);assert.equal(r.headers.get('Location'),'https://myeongdongmkt.com/404/?q=a%2Fb&x=1&x=2');await r.arrayBuffer();
 }
 console.log('PASS unchanged actual Worker with real local Assets:20 explicit/unknown GET/HEAD/query404/noindex cases;4existing Korean pages/current consent/4photos200 exact bytes;6canonical method/protocol/host priority and query-preserving301 cases. Exact production compatibility date2026-08-01. No live alias binding or browser claim.');
}finally{await mf.dispose();}
