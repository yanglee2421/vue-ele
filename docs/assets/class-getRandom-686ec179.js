import{r as a,w as i,a as l,u as c}from"./vue-0310cf6f.js";function f(n){const e=a(null);return i(s=>{const t=c(n);if(!(t instanceof Element)){console.error("elRef must sign a Element");return}const r=new ResizeObserver(([o])=>{e.value=o});r.observe(t),s(()=>{r.disconnect(),e.value=null})}),l(e)}class h{constructor(e,s){this.min=e,this.max=s}get(){return Math.random()*(this.max-this.min)+this.min}}export{h as G,f as u};
