if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),u={module:{uri:r},exports:a,require:o};s[r]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"14258d213a62333ccd0f251fa2b3b4d9"},{url:"assets/404.ce4cc651.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.a2161ee5.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0cadcd0c.js",revision:null},{url:"assets/index.html.589a2ae3.js",revision:null},{url:"assets/index.html.9f81823b.js",revision:null},{url:"assets/index.html.ab2d609b.js",revision:null},{url:"assets/index.html.ca03ca04.js",revision:null},{url:"assets/index.html.f4e3a409.js",revision:null},{url:"assets/Layout.ee8f24ae.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.0a2a550d.css",revision:null},{url:"assets/updating.html.19191416.js",revision:null},{url:"assets/updating.html.1e6a4c54.js",revision:null},{url:"assets/using-node-module.html.9236df5a.js",revision:null},{url:"assets/using-node-module.html.9c926530.js",revision:null},{url:"guide/index.html",revision:"c521e150fefe08d51bde261dd39de7c3"},{url:"images/icons/android-chrome-192x192.png",revision:"02b44d530665e45483eaf0892033d80b"},{url:"images/icons/android-chrome-384x384.png",revision:"540cc40b17fa09f8d53043de0bff579b"},{url:"images/icons/apple-touch-icon.png",revision:"80fc90c411bfd70c76cbf74e4b80744a"},{url:"images/icons/favicon-16x16.png",revision:"d0efb51001ebdc3c5ccacc9632c9f7a0"},{url:"images/icons/favicon-32x32.png",revision:"dcba1e9f62e1766459806f16f488c3c0"},{url:"images/icons/mstile-150x150.png",revision:"b8529896614da4b7bd41bcdf51a974a0"},{url:"images/icons/safari-pinned-tab.svg",revision:"a37a6e70d511ff19687f7a9f1275a4d9"},{url:"index.html",revision:"8b1485ca0f6357a604ed7168b1a86158"},{url:"rpg-maker-mv/index.html",revision:"390f0f88be7007a5ba7d25f1690c8104"},{url:"rpg-maker-mv/updating.html",revision:"10705679bf5664c0f19ff33fa1d36cf4"},{url:"rpg-maker-mv/using-node-module.html",revision:"c82b9a3652a0d1fe9a57027be2ae62ea"}],{})}));