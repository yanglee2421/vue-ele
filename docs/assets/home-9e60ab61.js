import{d,s as p,t as f,o as m,c as h,k as u,x as k,f as _,i as x,b as e,w as o,e as v,_ as w}from"./index-5bd82c16.js";const V={inheritAttrs:!0},b=d({...V,__name:"dark-switch",setup(i){const{state:c,actIsDark:r}=p(),t=f({get:()=>c.isDark,set:n=>r(n)});return(n,s)=>{const a=_("el-switch");return m(),h(a,{modelValue:u(t),"onUpdate:modelValue":s[0]||(s[0]=l=>k(t)?t.value=l:null)},null,8,["modelValue"])}}}),y={class:"home-box"},B={inheritAttrs:!0},C=d({...B,__name:"home",setup(i){return(c,r)=>{const t=_("el-card"),n=_("el-form-item"),s=_("el-link"),a=_("router-link"),l=_("el-form");return m(),x("div",y,[e(t),e(t),e(t,{header:"主题"},{default:o(()=>[e(l,null,{default:o(()=>[e(n,{label:"黑夜模式"},{default:o(()=>[e(u(b))]),_:1}),e(n,{label:"雪飘"},{default:o(()=>[e(a,{to:"/demo"},{default:o(()=>[e(s,{type:"primary"},{default:o(()=>[v("snow")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(t),e(t),e(t),e(t)])}}});const A=w(C,[["__scopeId","data-v-1df039a3"]]);export{A as default};
