import{d as g,r as _,a as b,c as i,f as a,b as y,w as R,I as f,J as B,e as k,o as d,g as C,M as v}from"./main-02695eb2.js";const w={class:"text-center"},S=g({inheritAttrs:!1,__name:"page-flip",setup(M){const c=_(),p=()=>{const e=k(c);e&&(u(e),m(e),h(e))};function u(e){if(e)for(let r=0,n=e.children.length;r<n;r++){const t=e.children[r],s=t.getBoundingClientRect();Reflect.set(t,"startX",s.left),Reflect.set(t,"startY",s.top)}}function m(e){if(!e)return;const r=[...e.children];for(let n=0,t=r.length;n<t;n++){const s=r[n],o=Math.floor(Math.random()*t);if(n!==o){const l=s.nextElementSibling;e.insertBefore(s,r[o]),e.insertBefore(r[o],l)}}}function h(e){if(e)for(let r=0,n=e.children.length;r<n;r++){const t=e.children[r],{left:s,top:o}=t.getBoundingClientRect(),l=Reflect.get(t,"startX"),x=Reflect.get(t,"startY");t.animate([{transform:`translate(${l-s}px, ${x-o}px)`},{transform:"translate(0px, 0px)"}],{duration:600})}}return(e,r)=>{const n=b("el-button");return d(),i(f,null,[a("div",w,[y(n,{onClick:p,size:"large",type:"primary",class:"bg-sky-500 uppercase",id:"sort"},{default:R(()=>[C("random order")]),_:1})]),a("div",{ref_key:"boxRef",ref:c,class:"p-2 overflow-hidden mx-auto mt-6 border flex gap-2 flex-wrap"},[(d(),i(f,null,B(50,t=>a("div",{key:t,class:"basis-1/6 sm:basis-1/12 flex-1 bg-red-300 flex justify-center items-center h-16 border rounded text-white text-2xl"},v(t),1)),64))],512)],64)}}});export{S as default};