import{d as i,j as _,r as u,k as p,l as d,m as f,c as h,e as n,a as v,w as m,b as w,o as b,n as x,P as g,_ as y}from"./index-e962bd8b.js";const B={class:"particle-content"},E={inheritAttrs:!0},k=i({...E,__name:"particle",setup(C){_(()=>{console.log("before")});const t=u({width:0,height:0}),l=p(({width:o,height:c})=>{t.width=o,t.height=c}),a=d();let e=null;return f(()=>{!a.value||(e&&(e.abortAnimate(),e.abortEvent()),a.value.width=t.width,a.value.height=t.height,e=new g(a.value),e.animate(),e.bindEvent())}),(o,c)=>{const r=w("ly-counter");return b(),h("div",{ref:s=>l.value=s,class:"particle-box"},[n("canvas",{ref:s=>a.value=s,class:"particle-canvas"},null,512),n("div",B,[v(r,null,{default:m(()=>[n("p",{style:x({height:t.width})},null,4)]),_:1})])],512)}}});const R=y(k,[["__scopeId","data-v-4f93589a"]]);export{R as default};