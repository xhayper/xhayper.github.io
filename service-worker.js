if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"69982300421ef6c229554dd946e9d58b"},{url:"assets/404.85b4a6fd.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.f54d200a.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.3c59377b.js",revision:null},{url:"assets/index.html.67b2f953.js",revision:null},{url:"assets/index.html.6d5c5529.js",revision:null},{url:"assets/index.html.772ee024.js",revision:null},{url:"assets/index.html.781f7634.js",revision:null},{url:"assets/index.html.7ac1d314.js",revision:null},{url:"assets/Layout.5f8f8685.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/scripts.html.8e09c38d.js",revision:null},{url:"assets/scripts.html.97b2a523.js",revision:null},{url:"assets/style.0a2a550d.css",revision:null},{url:"assets/updating.html.1620e2b2.js",revision:null},{url:"assets/updating.html.207beb85.js",revision:null},{url:"assets/using-node-module.html.9c129159.js",revision:null},{url:"assets/using-node-module.html.dc99a43f.js",revision:null},{url:"guide/index.html",revision:"23adfd2f35e8ce8952477ba9feda4a37"},{url:"images/icons/android-chrome-192x192.png",revision:"02b44d530665e45483eaf0892033d80b"},{url:"images/icons/android-chrome-384x384.png",revision:"540cc40b17fa09f8d53043de0bff579b"},{url:"images/icons/apple-touch-icon.png",revision:"80fc90c411bfd70c76cbf74e4b80744a"},{url:"images/icons/favicon-16x16.png",revision:"d0efb51001ebdc3c5ccacc9632c9f7a0"},{url:"images/icons/favicon-32x32.png",revision:"dcba1e9f62e1766459806f16f488c3c0"},{url:"images/icons/mstile-150x150.png",revision:"b8529896614da4b7bd41bcdf51a974a0"},{url:"images/icons/safari-pinned-tab.svg",revision:"a37a6e70d511ff19687f7a9f1275a4d9"},{url:"index.html",revision:"899a047bbd6b148840bffd5bdb73cd0a"},{url:"rpg-maker-mv/index.html",revision:"f0ecac943505aa9f19c3c3729665dec3"},{url:"rpg-maker-mv/scripts.html",revision:"25a77646f1509c50198f27e8484fcfc8"},{url:"rpg-maker-mv/updating.html",revision:"e362203fa653162e2d218ba88c7bd807"},{url:"rpg-maker-mv/using-node-module.html",revision:"a75cd3d4719f88cdd5f0615f080a488e"}],{})}));