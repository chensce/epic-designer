"use strict";var e={};Object.defineProperty(e,"__esModule",{value:!0});e.createValOptMap=e.filterOptions=e.createTmOptions=e.patternMatched=e.getIgnored=e.getIsGroup=void 0;function o(r){return r.type==="group"}e.getIsGroup=o;function f(r){return r.type==="ignored"}e.getIgnored=f;function g(r,n){try{return!!(1+n.toString().toLowerCase().indexOf(r.trim().toLowerCase()))}catch{return!1}}e.patternMatched=g;function d(r,n){return{getIsGroup:o,getIgnored:f,getKey(t){return o(t)?t.name||t.key||"key-required":t[r]},getChildren(t){return t[n]}}}e.createTmOptions=d;function l(r,n,u,t){if(!n)return r;function s(i){if(!Array.isArray(i))return[];const c=[];for(const a of i)if(o(a)){const p=s(a[t]);p.length&&c.push(Object.assign({},a,{[t]:p}))}else{if(f(a))continue;n(u,a)&&c.push(a)}return c}return s(r)}e.filterOptions=l;function O(r,n,u){const t=new Map;return r.forEach(s=>{o(s)?s[u].forEach(i=>{t.set(i[n],i)}):t.set(s[n],s)}),t}e.createValOptMap=O;exports.utils=e;
