import{d as $,c as f,y as p,z as m,A as c,M as F,N as C,B as l,P as _,I as g,J as h,K as b,L as n,E as V,G as S,D as A,m as T}from"./vue.esm-bundler-DjjVIdVI.js";import{F as q}from"./FSButton-DS0wrBKk.js";import{F as z}from"./FSCard-C9IdgJNY.js";import{F as P}from"./FSText-Der-WemT.js";import{F as v}from"./FSRow-CpogXLW8.js";import{C as y}from"./useColors-CdvgF10X.js";import{u as D,s as I}from"./css-BkQhD285.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSCol-TPWSQPHs.js";import{V as R}from"./VSpacer-CrqXaTz-.js";import{V as U}from"./VDialog-BtZGJwxx.js";const N=$({name:"FSDialogContent",components:{FSButton:q,FSCard:z,FSText:P,FSRow:v},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:y.Dark}},emits:["update:modelValue"],setup(e){const{isExtraSmall:a}=D(),t=f(()=>{const o=[];return a.value?o.push("fs-dialog-mobile"):o.push("fs-dialog"),o}),d=f(()=>a.value?"100%":I(e.width));return{isExtraSmall:a,cardWidth:d,ColorEnum:y,classes:t}}});function W(e,a,t,d,o,B){const r=p("FSText"),s=p("FSCard");return m(),c(s,{padding:"24px 8px 24px 24px",gap:"24px",class:_(e.$props.cardClasses),color:e.$props.color,width:e.cardWidth},F({header:l(()=>[n(L,{padding:"0 16px 0 0"},{default:l(()=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[n(r,{font:"text-h2"},{default:l(()=>[V(S(e.$props.title),1)]),_:1}),n(R),n(q,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:a[0]||(a[0]=u=>e.$emit("update:modelValue",!1))},null,8,["color"])]),_:1}),e.$props.subtitle?(m(),c(r,{key:0},{default:l(()=>[V(S(e.$props.subtitle),1)]),_:1})):A("",!0)]),_:1})]),_:2},[C(e.$slots,(u,i)=>({name:i,fn:l(E=>[g(e.$slots,i,h(b(E)))])}))]),1032,["class","color","width"])}const G=w(N,[["render",W]]);N.__docgenInfo={displayName:"FSDialogContent",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogContent.vue"]};const k=$({name:"FSDialog",components:{FSDialogContent:G},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isExtraSmall:e}=D();return{classes:f(()=>{const t=[];return e.value?t.push("fs-dialog-mobile"):t.push("fs-dialog"),t})}}});function J(e,a,t,d,o,B){const r=p("FSDialogContent");return m(),c(U,T({transition:"dialog-bottom-transition",class:e.classes,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=s=>e.$emit("update:modelValue",s))},e.$attrs),{default:l(()=>[g(e.$slots,"default",{},()=>[n(r,{title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.$emit("update:modelValue",s))},F({_:2},[C(e.$slots,(s,u)=>({name:u,fn:l(i=>[g(e.$slots,u,h(b(i)))])}))]),1032,["title","subtitle","width","modelValue"])])]),_:3},16,["class","modelValue"])}const ae=w(k,[["render",J]]);k.__docgenInfo={displayName:"FSDialog",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialog.vue"]};export{ae as F};