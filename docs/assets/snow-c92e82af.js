var m=Object.defineProperty;var w=(e,t,s)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(w(e,typeof t!="symbol"?t+"":t,s),s),f=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var c=(e,t,s)=>(f(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},u=(e,t,s,a)=>(f(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{d as x,a as g,h as p,i as y,j as b,k as R,o as k,_ as A}from"./index-ae55e666.js";import{G as _}from"./class-getRandom-e7b7b8ef.js";const B=new _(-.5,.5),C=new _(2,3),S=new _(1,4);var d,v;class I{constructor(t){l(this,d);i(this,"x",0);i(this,"y",0);i(this,"xv",0);i(this,"yv",2);i(this,"r",0);i(this,"color","");this.canvas=t,this.reset(),this.y=Math.random()*this.canvas.height}reset(){this.x=Math.random()*this.canvas.width,this.y=0,this.xv=B.get(),this.yv=C.get(),this.r=S.get(),this.color=`rgba(255,255,255,${.5+this.r/4})`}draw(){const t=this.canvas.getContext("2d");t.beginPath(),t.arc(this.x,this.y,this.r,0,Math.PI*2),t.closePath(),t.fillStyle=this.color,t.shadowColor="#fff",t.shadowBlur=10,t.fill()}update(){c(this,d,v)||this.reset(),this.x+=this.xv,this.y+=this.yv,this.draw()}}d=new WeakSet,v=function(){const t=this.x>0&&this.x<this.canvas.width,s=this.y>0&&this.y<this.canvas.height;return t&&s};var h,r;class M{constructor(t,s=100){l(this,h,[]);l(this,r,0);this.canvas=t;for(let a=0;a<s;a++)c(this,h).push(new I(t))}animation(){u(this,r,requestAnimationFrame(this.animation.bind(this)));const t=this.canvas.getContext("2d"),{width:s,height:a}=this.canvas;t.clearRect(0,0,s,a),c(this,h).forEach(n=>n.update())}abortAnimation(){cancelAnimationFrame(c(this,r))}}h=new WeakMap,r=new WeakMap;const P={inheritAttrs:!0},V=x({...P,__name:"snow",setup(e){const t=g(),s=p(a=>{const n=R(t);if(!n)return;Object.assign(n,a);const o=new M(n,a.width/1920*200);return o.animation(),()=>{o.abortAnimation()}});return(a,n)=>(k(),y("div",{ref:o=>s.value=o,class:"box"},[b("canvas",{ref:o=>t.value=o,class:"cvs"},null,512)],512))}});const F=A(V,[["__scopeId","data-v-87acf3d7"]]);export{F as default};
