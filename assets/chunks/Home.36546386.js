import{_ as x,h as w,u as H,i as v,j as e,o as r,c as n,a as _,k as B,l as c,t as $,m as E,N,F as V,r as D,d as j,n as q,f as O,e as k,p as T,q as A}from"../app.fcd151f8.js";const X={key:0,class:"home-hero"},Y={key:0,class:"figure"},z=["src","alt"],M={key:1,id:"main-title",class:"title"},P={key:2,class:"tagline"},U=w({setup(I){const{site:s,frontmatter:t}=H(),u=v(()=>{const{heroImage:o,heroText:a,tagline:l,actionLink:b,actionText:y}=t.value;return o||a||l||b&&y}),i=v(()=>t.value.heroText||s.value.title),d=v(()=>t.value.tagline||s.value.description);return(o,a)=>e(u)?(r(),n("header",X,[e(t).heroImage?(r(),n("figure",Y,[_("img",{class:"image",src:e(B)(e(t).heroImage),alt:e(t).heroAlt},null,8,z)])):c("",!0),e(i)?(r(),n("h1",M,$(e(i)),1)):c("",!0),e(d)?(r(),n("p",P,$(e(d)),1)):c("",!0),e(t).actionLink&&e(t).actionText?(r(),E(N,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):c("",!0),e(t).altActionLink&&e(t).altActionText?(r(),E(N,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):c("",!0)])):c("",!0)}});var W=x(U,[["__scopeId","data-v-4f5b100e"]]);const G={key:0,class:"home-features"},J={class:"wrapper"},K={class:"container"},Q={class:"features"},R={key:0,class:"title"},Z={key:1,class:"details"},ee=w({setup(I){const{frontmatter:s}=H(),t=v(()=>s.value.features&&s.value.features.length>0),u=v(()=>s.value.features?s.value.features:[]);return(i,d)=>e(t)?(r(),n("div",G,[_("div",J,[_("div",K,[_("div",Q,[(r(!0),n(V,null,D(e(u),(o,a)=>(r(),n("section",{key:a,class:"feature"},[o.title?(r(),n("h2",R,$(o.title),1)):c("",!0),o.details?(r(),n("p",Z,$(o.details),1)):c("",!0)]))),128))])])])])):c("",!0)}});var te=x(ee,[["__scopeId","data-v-202f3df0"]]);const ae={key:0,class:"footer"},oe={class:"container"},se={class:"text"},re=w({setup(I){const{frontmatter:s}=H();return(t,u)=>e(s).footer?(r(),n("footer",ae,[_("div",oe,[_("p",se,$(e(s).footer),1)])])):c("",!0)}});var ne=x(re,[["__scopeId","data-v-788cebc6"]]);const ie={class:"home-content"},le=w({setup(I){const{theme:s}=H(),{bgImg:t,flashEnable:u,featuresColor:i,parallaxEnable:d}=s.value;let{bgColor:o,flashColor:a,bgOpacity:l}=s.value,b="",y="",m=.3,L="background:rgba(255,255,255,0.8);";typeof i=="string"?L=`background:${i}`:typeof i=="object"&&i.length>=2&&(L=`
      background: linear-gradient(
        to right,
        ${i[0]},
        ${i[1]}
      );
    `),o===void 0&&(o="0,0,0"),l===void 0&&(l=.6),a===void 0&&(a=["0,0,0","0,0,0"]),typeof a=="string"&&(a=[a,a]),m=l-.3<=0?0:l-.3,t&&(b=`
    -webkit-linear-gradient(top,
      rgba(${o},${l}) 0%,
      rgba(${o},${m}) 20%,
      rgba(${o},${m}) 80%,
      rgba(${o},${l}) 100%
    ),
    -webkit-linear-gradient(left,
      rgba(${o},${l}) 0%,
      rgba(${o},${m}) 20%,
      rgba(${o},${m}) 80%,
      rgba(${o},${l}) 100%),
    url(${t})
  `),t&&u&&(y=`
    -webkit-linear-gradient(top,
      rgba(${a[0]}, 0.8) 0%,
      rgba(${a[0]}, 0.2) 20%,
      rgba(${a[0]}, 0) 80%,
      rgba(${a[0]}, 0) 100%
    ),
    -webkit-linear-gradient(left, 
      rgba(${a[1]}, 0) 0%, 
      rgba(${a[1]}, 0) 20%, 
      rgba(${a[1]}, 0.2) 80%, 
      rgba(${a[1]}, 0.8) 100%),
      url(${t})
  `);const C=g=>{document.querySelectorAll(`
      .home-hero div,
      .home-hero a,
      .home-hero h1,
      .home-hero p,
      .home-features
    `).forEach(F=>{const h=F,S=h.getAttribute("data-speed")||10;let p=(window.innerWidth-g.pageX*S)/100,f=(window.innerHeight-g.pageY*S)/100;switch(h.tagName){case"DIV":p/=6,f/=6;break;case"A":p/=5,f/=5;break;case"P":p/=4,f/=4;break;case"H1":p/=1,f/=1;break}h.style.transform=`translateX(${p}px) translateY(${f}px)`,h.style.transition="transform 0.2s ease-out"})};return j(()=>{d&&window.addEventListener("mousemove",C)}),q(()=>{d&&window.removeEventListener("mousemove",C)}),(g,F)=>{const h=O("Content");return r(),n("main",{class:"home","aria-labelledby":"main-title",style:T({"background-image":e(b)})},[k(W,{style:T({"--vt-bg-light":e(y)})},null,8,["style"]),A(g.$slots,"hero",{},void 0,!0),k(te,{style:T(e(L))},null,8,["style"]),_("div",ie,[k(h)]),A(g.$slots,"features",{},void 0,!0),k(ne),A(g.$slots,"footer",{},void 0,!0)],4)}}});var _e=x(le,[["__scopeId","data-v-59aae082"]]);export{_e as default};
