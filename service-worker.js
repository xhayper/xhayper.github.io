if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),t={module:{uri:r},exports:a,require:o};s[r]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b61ea6e130f757b4e79e9eb38d41922a"},{url:"assets/404.05cb084d.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.96778826.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.09433bd5.js",revision:null},{url:"assets/index.html.73dad70f.js",revision:null},{url:"assets/index.html.90185ddd.js",revision:null},{url:"assets/index.html.90bcc7dc.js",revision:null},{url:"assets/index.html.be49bcc9.js",revision:null},{url:"assets/index.html.fbaa0289.js",revision:null},{url:"assets/Layout.d1f5ba94.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.0a2a550d.css",revision:null},{url:"assets/updating.html.163ece4b.js",revision:null},{url:"assets/updating.html.cf420c73.js",revision:null},{url:"guide/index.html",revision:"8c13bbfe32ff06c8d9095e4fda96510e"},{url:"images/icons/android-chrome-192x192.png",revision:"02b44d530665e45483eaf0892033d80b"},{url:"images/icons/android-chrome-384x384.png",revision:"540cc40b17fa09f8d53043de0bff579b"},{url:"images/icons/apple-touch-icon.png",revision:"80fc90c411bfd70c76cbf74e4b80744a"},{url:"images/icons/favicon-16x16.png",revision:"d0efb51001ebdc3c5ccacc9632c9f7a0"},{url:"images/icons/favicon-32x32.png",revision:"dcba1e9f62e1766459806f16f488c3c0"},{url:"images/icons/mstile-150x150.png",revision:"b8529896614da4b7bd41bcdf51a974a0"},{url:"images/icons/safari-pinned-tab.svg",revision:"a37a6e70d511ff19687f7a9f1275a4d9"},{url:"index.html",revision:"1045950e8c746875b945d5694dbc1f41"},{url:"rpg-maker-mv/index.html",revision:"3374e07e4f86c276872bab8b48f00c3e"},{url:"rpg-maker-mv/updating.html",revision:"5a148ee368ceeab7bfd40bf66a2bb406"}],{})}));
