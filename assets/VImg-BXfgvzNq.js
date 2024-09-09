import{d as ee,c as v,t as j,L as n,z as te,A as ae,O as re,s as p,b as ne,w as z,a6 as le,n as ie,v as se,X as E,Y as oe,F as ue,m as ce,a5 as de}from"./vue.esm-bundler-Vj2X7okO.js";import{u as me,s as h}from"./css-CbCR1nbl.js";import{u as ge,C as ve}from"./useColors-ClJ5KOuK.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as R,c as M,a as B,m as O}from"./color-Dk23S21P.js";import{m as D,u as H}from"./dimensions-CBrtQk_X.js";import{m as he,u as be}from"./elevation-DH7kyzD7.js";import{u as ye}from"./locale-CMOn_BOp.js";import{p as T,s as Se,x as pe,w as xe,a as _e,S as ke,c as we}from"./theme-DqOMA9k1.js";import{m as Ce,u as Ve}from"./rounded-B-50KYhN.js";import{m as ze,M as k}from"./transition-Cs7QtK7U.js";import{I as Re}from"./index-DQeMThUY.js";const X=ee({name:"FSLoader",props:{height:{type:[Array,String,Number],required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:null},padding:{type:[Array,String,Number],required:!1,default:"0"},variant:{type:String,required:!1,default:"standard"},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(e){const{isMobileSized:t}=me(),{getColors:a}=ge(),i=a(ve.Background),d=v(()=>({"--fs-loader-background-color":i.base,"--fs-loader-border-radius":["chip"].includes(e.variant)?"50px":h(e.borderRadius),"--fs-loader-padding":h(e.padding),"--fs-loader-height":h(c.value),"--fs-loader-width":h(b.value)})),c=v(()=>{switch(e.variant){case"standard":return h(e.height);case"button":case"input":case"field":return t.value?"36px":"40px";case"chip":return t.value?"20px":"24px";case"text-h1":return t.value?"32px":"40px";case"text-h2":return t.value?"24px":"32px";case"text-h3":return t.value?"20px":"24px";case"text-h4":return t.value?"16px":"20px";case"text-body":case"text-button":return t.value?"14px":"16px";case"text-overline":return"16px"}}),b=v(()=>{switch(e.variant){case"standard":return h(e.width);case"button":return t?"36px":"40px";case"input":return t?"calc(50% - 124px)":"calc(50% - 132px)";case"field":return"100%";case"chip":return"8vw";case"text-h1":return"calc(50% - 32px)";case"text-h2":return"calc(60% - 32px)";case"text-h3":return"calc(65% - 32px)";default:return"calc(75% - 32px)"}});return{style:d}}}),Be={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function U(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>w(t))}function w(e){let t=[];if(!e)return t;const a=Be[e];if(e!==a){if(e.includes(","))return W(e);if(e.includes("@"))return U(e);a.includes(",")?t=W(a):a.includes("@")?t=U(a):a&&t.push(w(a))}return[Te(e,t)]}function W(e){return e.replace(/\s/g,"").split(",").map(w)}const Pe=T({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...D(),...he(),...Se()},"VSkeletonLoader"),Ie=R()({name:"VSkeletonLoader",props:Pe(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:i,backgroundColorStyles:d}=M(j(e,"color")),{dimensionStyles:c}=H(e),{elevationClasses:b}=be(e),{themeClasses:f}=pe(e),{t:x}=ye(),s=v(()=>w(xe(e.type).join(",")));return B(()=>{var m;const l=!a.default||e.loading;return n("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},f.value,i.value,b.value],style:[d.value,l?c.value:{}],"aria-busy":e.boilerplate?void 0:l,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:x(e.loadingText),role:e.boilerplate?void 0:"alert"},[l?s.value:(m=a.default)==null?void 0:m.call(a)])}),{}}});function Le(e,t,a,i,d,c){return te(),ae(Ie,{class:"fs-loader",type:"image",style:re(e.style)},null,8,["style"])}const Ye=fe(X,[["render",Le]]);X.__docgenInfo={displayName:"FSLoader",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"variant",values:["standard","button","input","field","chip","text-h1","text-h2","text-h3","text-h4","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLoader.vue"]};function Ne(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Y=T({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...O(),...D()},"VResponsive"),$=R()({name:"VResponsive",props:Y(),setup(e,t){let{slots:a}=t;const{aspectStyles:i}=Ne(e),{dimensionStyles:d}=H(e);return B(()=>{var c;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[d.value,e.style]},[n("div",{class:"v-responsive__sizer",style:i.value},null),(c=a.additional)==null?void 0:c.call(a),a.default&&n("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),qe=T({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Y(),...O(),...Ce(),...ze()},"VImg"),Ge=R()({name:"VImg",directives:{intersect:Re},props:qe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:i}=t;const{backgroundColorClasses:d,backgroundColorStyles:c}=M(j(e,"color")),{roundedClasses:b}=Ve(e),f=_e("VImg"),x=p(""),s=ne(),l=p(e.eager?"loading":"idle"),m=p(),_=p(),u=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=v(()=>u.value.aspect||m.value/_.value||0);z(()=>e.src,()=>{C(l.value!=="idle")}),z(y,(r,o)=>{!r&&o&&s.value&&S(s.value)}),le(()=>C());function C(r){if(!(e.eager&&r)&&!(ke&&!r&&!e.eager)){if(l.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,S(o,null)}u.value.src&&ie(()=>{var o;a("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var g;if(!f.isUnmounted)if((g=s.value)!=null&&g.complete){if(s.value.naturalWidth||I(),l.value==="error")return;y.value||S(s.value,null),l.value==="loading"&&P()}else y.value||S(s.value),L()})})}}function P(){var r;f.isUnmounted||(L(),S(s.value),l.value="loaded",a("load",((r=s.value)==null?void 0:r.currentSrc)||u.value.src))}function I(){var r;f.isUnmounted||(l.value="error",a("error",((r=s.value)==null?void 0:r.currentSrc)||u.value.src))}function L(){const r=s.value;r&&(x.value=r.currentSrc||r.src)}let V=-1;se(()=>{clearTimeout(V)});function S(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{if(clearTimeout(V),f.isUnmounted)return;const{naturalHeight:F,naturalWidth:A}=r;F||A?(m.value=A,_.value=F):!r.complete&&l.value==="loading"&&o!=null?V=window.setTimeout(g,o):(r.currentSrc.endsWith(".svg")||r.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,_.value=1)};g()}const N=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var g;if(!u.value.src||l.value==="idle")return null;const r=n("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:P,onError:I},null),o=(g=i.sources)==null?void 0:g.call(i);return n(k,{transition:e.transition,appear:!0},{default:()=>[E(o?n("picture",{class:"v-img__picture"},[o,r]):r,[[de,l.value==="loaded"]])]})},J=()=>n(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>i.placeholder?n(k,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!i.error)&&n("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,Q=()=>i.error?n(k,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[i.error()])]}):null,Z=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,q=p(!1);{const r=z(y,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{q.value=!0})}),r())})}return B(()=>{const r=$.filterProps(e);return E(n($,ce({class:["v-img",{"v-img--booting":!q.value},d.value,b.value,e.class],style:[{width:we(e.width==="auto"?m.value:e.width)},c.value,e.style]},r,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ue,null,[n(G,null,null),n(J,null,null),n(Z,null,null),n(K,null,null),n(Q,null,null)]),default:i.default}),[[oe("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:x,image:s,state:l,naturalWidth:m,naturalHeight:_}}});export{Ye as F,Ge as V,Ie as a};