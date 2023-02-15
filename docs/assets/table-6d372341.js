var A=Object.defineProperty;var J=(o,r,i)=>r in o?A(o,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[r]=i;var U=(o,r,i)=>(J(o,typeof r!="symbol"?r+"":r,i),i);import{z as D,r as h,d as K,A as G,a as H,i as L,b as e,w as n,j as S,F as Q,f as g,o as R,e as x,B as W,E,C as X,_ as Y}from"./index-ae55e666.js";class Z{constructor(){U(this,"id",B());U(this,"site","");U(this,"user","");U(this,"pwd","")}}const ee=D("password",()=>{const o=h(te());return{state:o,find:async({site:w,user:m,pwd:f,page:a,size:_})=>{try{const y=o.filter(p=>{const u=p.site.includes(w||""),k=p.user.includes(m||""),z=p.pwd.includes(f||"");return u&&k&&z}),V=y.slice((a-1)*_,a*_);return M({total:y.length,rows:V})}catch{throw new Error("not found")}},findOne:async w=>{try{const m=o.find(f=>f.id===w);if(!m)throw new Error;return m}catch{throw new Error("not found")}},save:async({id:w,site:m,user:f,pwd:a})=>{const _=o.find(y=>y.id===w);try{if(_)return M(Object.assign(_,{site:m,user:f,pwd:a}));const V={id:B(),site:m,user:f,pwd:a};return o.push(V),M(V)}catch{throw new Error("save error")}},remove:async w=>{try{const m=o.findIndex(f=>f.id===w);if(m===-1)throw new Error;return o.splice(m,1)}catch{throw new Error("can`t delete this id")}}}});function B(){return crypto.randomUUID()}function te(){const o=[{id:B(),site:"4399",user:"4399",pwd:"4399"}];for(let r=0;r<100;r++){const i=new Z;i.site="site"+r,i.user="user"+r,i.pwd="pwd"+r,o.push(i)}return o}function M(o){return JSON.parse(JSON.stringify(o))}const le={class:"flex-column"},oe={class:"flex-1-hidden mt-1"},ne={inheritAttrs:!0},re=K({...ne,__name:"table",setup(o){const r=h({rows:[],total:0}),i=async s=>{try{await W.confirm("删除确认",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0}),await w(s),E({type:"success",message:"已删除"})}catch(t){const c=t==="cancel";E({type:c?"info":"error",message:c?"已取消":"删除失败"})}},b=h({site:"",user:"",pwd:"",page:1,size:20}),{find:F,remove:w,state:m,save:f}=ee();G([b,m],async([s],t,c)=>{try{const{rows:d,total:C}=await F(s);r.rows=d,r.total=C}catch(d){E.error(d.message)}},{immediate:!0,flush:"post"});const a=h({model:{site:"",user:"",pwd:""},rules:{}}),_=H(null),y=()=>{var s;(s=_.value)==null||s.validate(t=>{if(!t)return!1;Object.assign(b,a.model)})},V=()=>{var s;(s=_.value)==null||s.resetFields(),Object.assign(b,a.model,{page:1})},p=h({model:!1,title:"新增"}),u=h({model:{id:"",site:"",user:"",pwd:""},rules:{site:[{required:!0}],user:[{required:!0}],pwd:[{required:!0}]}}),k=H(null),z=()=>{var s;(s=k.value)==null||s.validate(async t=>{if(t)try{await f(u.model),E({message:"操作成功",type:"success"}),p.model=!1}catch{E({message:"操作失败",type:"error"})}})},j=({id:s,site:t,user:c,pwd:d})=>{p.model=!0,X(()=>{u.model={id:s,site:t,user:c,pwd:d}})},N=()=>{var s;(s=k.value)==null||s.resetFields(),u.model.id=""};return(s,t)=>{const c=g("el-input"),d=g("el-form-item"),C=g("el-form"),O=g("el-button"),q=g("el-dialog"),v=g("el-table-column"),I=g("el-link"),T=g("el-table"),$=g("el-pagination");return R(),L(Q,null,[e(q,{modelValue:p.model,"onUpdate:modelValue":t[4]||(t[4]=l=>p.model=l),title:p.title,onClose:N},{footer:n(()=>[e(O,{onClick:t[3]||(t[3]=l=>p.model=!1)},{default:n(()=>[x("Cancel")]),_:1}),e(O,{onClick:z,type:"primary"},{default:n(()=>[x("Ok")]),_:1})]),default:n(()=>[e(C,{ref:l=>k.value=l,model:u.model,rules:u.rules},{default:n(()=>[e(d,{label:"站点：",prop:"site"},{default:n(()=>[e(c,{modelValue:u.model.site,"onUpdate:modelValue":t[0]||(t[0]=l=>u.model.site=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"账户：",prop:"user"},{default:n(()=>[e(c,{modelValue:u.model.user,"onUpdate:modelValue":t[1]||(t[1]=l=>u.model.user=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"密码：",prop:"pwd"},{default:n(()=>[e(c,{modelValue:u.model.pwd,"onUpdate:modelValue":t[2]||(t[2]=l=>u.model.pwd=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),S("div",le,[e(C,{ref:l=>_.value=l,inline:"",model:a.model,rules:a.rules,class:"flex between-stretch"},{default:n(()=>[S("div",null,[e(d,{label:"站点：",prop:"site"},{default:n(()=>[e(c,{modelValue:a.model.site,"onUpdate:modelValue":t[5]||(t[5]=l=>a.model.site=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(d,{label:"账户：",prop:"user"},{default:n(()=>[e(c,{modelValue:a.model.user,"onUpdate:modelValue":t[6]||(t[6]=l=>a.model.user=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(d,{label:"密码：",prop:"pwd"},{default:n(()=>[e(c,{modelValue:a.model.pwd,"onUpdate:modelValue":t[7]||(t[7]=l=>a.model.pwd=l),modelModifiers:{trim:!0},maxlength:"9","show-word-limit":""},null,8,["modelValue"])]),_:1})]),e(d,null,{default:n(()=>[e(O,{onClick:y,type:"primary"},{default:n(()=>[x("查询")]),_:1}),e(O,{onClick:V},{default:n(()=>[x("重置")]),_:1})]),_:1})]),_:1},8,["model","rules"]),S("div",null,[e(O,{onClick:t[8]||(t[8]=l=>p.model=!0)},{default:n(()=>[x("添加")]),_:1})]),S("div",oe,[e(T,{data:r.rows,height:"100%",border:""},{default:n(()=>[e(v,{type:"selection",align:"center",width:"40",fixed:""}),e(v,{type:"index",label:"序号",align:"center",width:"60"}),e(v,{label:"Id",prop:"id",align:"center","show-overflow-tooltip":"",sortable:""}),e(v,{label:"站点",prop:"site",align:"center",sortable:""}),e(v,{label:"账户",prop:"user",align:"center",sortable:""}),e(v,{label:"密码",prop:"pwd",align:"center",sortable:""}),e(v,{label:"操作",align:"center",width:"100",fixed:"right"},{default:n(({row:l})=>[e(I,{onClick:P=>j(l),type:"primary"},{default:n(()=>[x("编辑")]),_:2},1032,["onClick"]),e(I,{onClick:P=>i(l.id),type:"danger"},{default:n(()=>[x("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),e($,{"current-page":b.page,"onUpdate:currentPage":t[9]||(t[9]=l=>b.page=l),"page-size":b.size,"onUpdate:pageSize":t[10]||(t[10]=l=>b.size=l),total:r.total,"page-sizes":[20,50,100],layout:"total,prev,pager,next,sizes,jumper"},null,8,["current-page","page-size","total"])])],64)}}});const de=Y(re,[["__scopeId","data-v-e4e26310"]]);export{de as default};