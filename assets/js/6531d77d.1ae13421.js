"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[3101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?l.createElement(h,c(c({ref:t},d),{},{components:n})):l.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,c[1]=r;for(var i=2;i<o;i++)c[i]=n[i];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const o={},c="Wallet Connect",r={unversionedId:"reference-designs/wallet-connect",id:"reference-designs/wallet-connect",title:"Wallet Connect",description:'Nostr clients have the option of showing connected lightning wallet balances in the interface. The process of connecting wallets is called one of several things: "Nostr Wallet Connect (NWC)", "Bitcoin Connect" or "Wallet Connect". For the sake of simplicity, and if the community approves, we\'ll refer to this process as "Wallet Connect" in this document.',source:"@site/docs/reference-designs/wallet-connect.md",sourceDirName:"reference-designs",slug:"/reference-designs/wallet-connect",permalink:"/docs/reference-designs/wallet-connect",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/reference-designs/wallet-connect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shells",permalink:"/docs/reference-designs/shells"},next:{title:"Zaps",permalink:"/docs/reference-designs/zaps"}},s={},i=[{value:"Empty Wallet",id:"empty-wallet",level:2},{value:"Connect a Wallet Modal",id:"connect-a-wallet-modal",level:2},{value:"Connected Successfully",id:"connected-successfully",level:2},{value:"Connected Wallet View",id:"connected-wallet-view",level:2},{value:"Wallet with Balance Example",id:"wallet-with-balance-example",level:2},{value:"FAQ Modal",id:"faq-modal",level:2}],d={toc:i},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet-connect"},"Wallet Connect"),(0,a.kt)("p",null,'Nostr clients have the option of showing connected lightning wallet balances in the interface. The process of connecting wallets is called one of several things: "Nostr Wallet Connect (NWC)", "Bitcoin Connect" or "Wallet Connect". For the sake of simplicity, and if the community approves, we\'ll refer to this process as "Wallet Connect" in this document. '),(0,a.kt)("h2",{id:"empty-wallet"},"Empty Wallet"),(0,a.kt)("p",null,"We limit the interface to be simple and inviting."),(0,a.kt)("img",{src:n(1806).Z}),(0,a.kt)("h2",{id:"connect-a-wallet-modal"},"Connect a Wallet Modal"),(0,a.kt)("p",null,'When the user clicks the "Connect Wallet" button, a modal appears with a list of wallets to choose from. Each option has a hover state. '),(0,a.kt)("img",{src:n(3407).Z}),(0,a.kt)("h2",{id:"connected-successfully"},"Connected Successfully"),(0,a.kt)("p",null,'There are some steps with each option, but once finished the user would see a successful connection screen. The button can be customized to say anything such as "View Wallet" or "Done". Notice that we customize the app name within the copy below the heading. '),(0,a.kt)("img",{src:n(9715).Z}),(0,a.kt)("h2",{id:"connected-wallet-view"},"Connected Wallet View"),(0,a.kt)("p",null,"Here we show that the Alby wallet is connected. If users wish to add a different one, they'll have to disconnect the current wallet to see the connect button. New wallet users might show a 0 balance, while people with existing wallet balances would see their balance here. "),(0,a.kt)("img",{src:n(886).Z}),(0,a.kt)("h2",{id:"wallet-with-balance-example"},"Wallet with Balance Example"),(0,a.kt)("img",{src:n(2241).Z}),(0,a.kt)("h2",{id:"faq-modal"},"FAQ Modal"),(0,a.kt)("p",null,"The info button pops up a modal with some helpful information about wallets, sats, zaps and more. The current answers are just placeholders."),(0,a.kt)("img",{src:n(807).Z}))}u.isMDXComponent=!0},1806:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-1-a3e063b7ac20e2fad73ebcdbcfd9fafa.png"},3407:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-2-8ad9a5c434778646d234d098ee472d4a.png"},9715:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-3-e27fef82baa73f7adfc4ea56e1efe7e9.png"},886:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-4-7678aba3e84182fecf4d3622c0186b22.png"},2241:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-5-98ec152af6047632a870e0d5f80b3ecb.png"},807:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wallet-connect-6-02460da62f67ac06795f14ec4f19a972.png"}}]);