if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const a=e=>i(e,r),o={module:{uri:r},exports:d,require:a};s[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(l(...e),d)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"5eade75fe28db1fffaaeec103a41fddb"},{url:"assets/404.6ca57c89.js",revision:null},{url:"assets/404.html.beaa804c.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.9ebe269a.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.380c2584.js",revision:null},{url:"assets/index.html.3cfc542c.js",revision:null},{url:"assets/index.html.794dc927.js",revision:null},{url:"assets/index.html.86dd469c.js",revision:null},{url:"assets/index.html.96e8bc67.js",revision:null},{url:"assets/index.html.da879366.js",revision:null},{url:"assets/Layout.af6a6c03.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.0a2a550d.css",revision:null},{url:"assets/updating.html.1a235c78.js",revision:null},{url:"assets/updating.html.3e22f888.js",revision:null},{url:"assets/using-node-module.html.892b45f8.js",revision:null},{url:"assets/using-node-module.html.dc18eb47.js",revision:null},{url:"guide/index.html",revision:"b734aefe68e82d93b698c073f70b3079"},{url:"images/icons/android-chrome-192x192.png",revision:"02b44d530665e45483eaf0892033d80b"},{url:"images/icons/android-chrome-384x384.png",revision:"540cc40b17fa09f8d53043de0bff579b"},{url:"images/icons/apple-touch-icon.png",revision:"80fc90c411bfd70c76cbf74e4b80744a"},{url:"images/icons/favicon-16x16.png",revision:"d0efb51001ebdc3c5ccacc9632c9f7a0"},{url:"images/icons/favicon-32x32.png",revision:"dcba1e9f62e1766459806f16f488c3c0"},{url:"images/icons/mstile-150x150.png",revision:"b8529896614da4b7bd41bcdf51a974a0"},{url:"images/icons/safari-pinned-tab.svg",revision:"a37a6e70d511ff19687f7a9f1275a4d9"},{url:"index.html",revision:"bf690b3d47d3854d678ebd892cda00cd"},{url:"rpg-maker-mv/index.html",revision:"df55607a7564d1fa919dcc2d18dd0422"},{url:"rpg-maker-mv/updating.html",revision:"7e4a3ad7028e7bb70315e7bbd7cd70b2"},{url:"rpg-maker-mv/using-node-module.html",revision:"e57349425aa6f70edd8df3c762d0c32d"}],{})}));