import{o as c,j as f,r as a,u as i}from"./runtime-core.esm-bundler-a475101a.js";function m(s){const r=new AbortController,{signal:o}=r;c(()=>{const n=matchMedia("(prefers-color-scheme: dark)");n.addEventListener("change",()=>s(n),{signal:o}),s(n)}),f(()=>r.abort())}function d(s){const r=a();let o;const n=new ResizeObserver(([{contentBoxSize:[{inlineSize:e,blockSize:t}]}])=>{typeof o=="function"&&o(),o=s({width:e,height:t})});return c(()=>{const e=i(r);if(e instanceof HTMLElement){n.observe(e);return}if(e.$el instanceof HTMLElement){n.observe(e.$el);return}throw new Error("resizeRef必须指向一个htmlelement")}),f(()=>{typeof o=="function"&&o();const e=l=>{n.unobserve(l),n.disconnect()},t=i(r);if(t instanceof HTMLElement){e(t);return}if(t.$el instanceof HTMLElement){e(t.$el);return}throw new Error("resizeRef必须指向一个htmlelement")}),r}export{d as a,m as u};
