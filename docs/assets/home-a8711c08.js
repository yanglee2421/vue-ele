import{u as p}from"./usePinia-d2010259.js";import{x as m,f,y as u,H as h,u as d,m as k,a7 as _,z as x,P as e,I as o,M as v}from"./runtime-core.esm-bundler-780f1e82.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-76e44084.js";const w={inheritAttrs:!0},y=m({...w,__name:"dark-switch",setup(i){const{state:r,actIsDark:c}=p(),t=f({get:()=>r.isDark,set:n=>c(n)});return(n,s)=>{const a=_("el-switch");return u(),h(a,{modelValue:d(t),"onUpdate:modelValue":s[0]||(s[0]=l=>k(t)?t.value=l:null)},null,8,["modelValue"])}}}),V={class:"home-box"},B={inheritAttrs:!0},C=m({...B,__name:"home",setup(i){return(r,c)=>{const t=_("el-card"),n=_("el-form-item"),s=_("el-link"),a=_("router-link"),l=_("el-form");return u(),x("div",V,[e(t),e(t),e(t,{header:"主题"},{default:o(()=>[e(l,null,{default:o(()=>[e(n,{label:"黑夜模式"},{default:o(()=>[e(d(y))]),_:1}),e(n,{label:"雪飘"},{default:o(()=>[e(a,{to:"/demo"},{default:o(()=>[e(s,{type:"primary"},{default:o(()=>[v("snow")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(t),e(t),e(t),e(t)])}}});const N=b(C,[["__scopeId","data-v-57344db8"]]);export{N as default};
