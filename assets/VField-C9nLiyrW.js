import{c as r,v as a,Z as K,a0 as N,b as F,t as le,w as ne,F as te,m as ie}from"./vue.esm-bundler-BwDfg4wG.js";import{V as oe,a as re}from"./index-h4Pvk0JI.js";import{m as B,g as p,u as L,c as se,a as de}from"./color-BnvS3YzF.js";import{m as ue,M as ce}from"./transition-DbaVUv7M.js";import{p as w,E as x,n as fe,s as ve,e as me,c as ye,D as ge,F as be}from"./theme-DkbGhe4v.js";import{V as Ce}from"./VLabel-BAbVzo-k.js";import{a as ke,u as he,b as Ve}from"./VInput-Bb_DU4hJ.js";import{I as S}from"./VIcon-D-JUvW-a.js";import{m as Ie,u as _e,L as Pe}from"./loader-ecE02KGk.js";import{a as Fe}from"./locale-DTc71_bq.js";import{m as xe,u as Se}from"./rounded-NuUWeCiM.js";import{V as Be}from"./VDefaultsProvider-_csoeOf7.js";import{n as pe,a as Le,s as we}from"./forwardRefs-DWGaNmQL.js";const $e=w({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...B(),...ue({transition:{component:oe}})},"VCounter"),Ge=p()({name:"VCounter",functional:!0,props:$e(),setup(e,s){let{slots:i}=s;const _=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return L(()=>a(ce,{transition:e.transition},{default:()=>[K(a("div",{class:["v-counter",e.class],style:e.style},[i.default?i.default({counter:_.value,max:e.max,value:e.value}):_.value]),[[N,e.active]])]})),{}}}),Re=w({floating:Boolean,...B()},"VFieldLabel"),I=p()({name:"VFieldLabel",props:Re(),setup(e,s){let{slots:i}=s;return L(()=>a(Ce,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),Te=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Ee=w({appendInnerIcon:S,bgColor:String,clearable:Boolean,clearIcon:{type:S,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:S,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Te.includes(e)},"onClick:clear":x(),"onClick:appendInner":x(),"onClick:prependInner":x(),...B(),...Ie(),...xe(),...fe()},"VField"),De=p()({name:"VField",inheritAttrs:!1,props:{id:String,...ke(),...Ee()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:i,emit:_,slots:l}=s;const{themeClasses:U}=ve(e),{loaderClasses:W}=_e(e),{focusClasses:j,isFocused:$,focus:m,blur:y}=he(e),{InputIcon:P}=Ve(e),{roundedClasses:q}=Se(e),{rtlClasses:X}=Fe(),g=r(()=>e.dirty||e.active),b=r(()=>!e.singleLine&&!!(e.label||l.label)),Y=me(),d=r(()=>e.id||`input-${Y}`),Z=r(()=>`${d.value}-messages`),R=F(),C=F(),T=F(),E=r(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:z,backgroundColorStyles:G}=se(le(e,"bgColor")),{textColorClasses:D,textColorStyles:A}=de(r(()=>e.error||e.disabled?void 0:g.value&&$.value?e.color:e.baseColor));ne(g,n=>{if(b.value){const t=R.value.$el,u=C.value.$el;requestAnimationFrame(()=>{const c=pe(t),o=u.getBoundingClientRect(),k=o.x-c.x,h=o.y-c.y-(c.height/2-o.height/2),v=o.width/.75,V=Math.abs(v-c.width)>1?{maxWidth:ye(v)}:void 0,J=getComputedStyle(t),O=getComputedStyle(u),Q=parseFloat(J.transitionDuration)*1e3||150,ee=parseFloat(O.getPropertyValue("--v-field-label-scale")),ae=O.getPropertyValue("color");t.style.visibility="visible",u.style.visibility="hidden",Le(t,{transform:`translate(${k}px, ${h}px) scale(${ee})`,color:ae,...V},{duration:Q,easing:we,direction:n?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),u.style.removeProperty("visibility")})})}},{flush:"post"});const f=r(()=>({isActive:g,isFocused:$,controlRef:T,blur:y,focus:m}));function H(n){n.target!==document.activeElement&&n.preventDefault()}function M(n){var t;n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),(t=e["onClick:clear"])==null||t.call(e,new MouseEvent("click")))}return L(()=>{var k,h,v;const n=e.variant==="outlined",t=!!(l["prepend-inner"]||e.prependInnerIcon),u=!!(e.clearable||l.clear),c=!!(l["append-inner"]||e.appendInnerIcon||u),o=()=>l.label?l.label({...f.value,label:e.label,props:{for:d.value}}):e.label;return a("div",ie({class:["v-field",{"v-field--active":g.value,"v-field--appended":c,"v-field--center-affix":e.centerAffix??!E.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!o(),[`v-field--variant-${e.variant}`]:!0},U.value,z.value,j.value,W.value,q.value,X.value,e.class],style:[G.value,e.style],onClick:H},i),[a("div",{class:"v-field__overlay"},null),a(Pe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),t&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(P,{key:"prepend-icon",name:"prependInner"},null),(k=l["prepend-inner"])==null?void 0:k.call(l,f.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&a(I,{key:"floating-label",ref:C,class:[D.value],floating:!0,for:d.value,style:A.value},{default:()=>[o()]}),a(I,{ref:R,for:d.value},{default:()=>[o()]}),(h=l.default)==null?void 0:h.call(l,{...f.value,props:{id:d.value,class:"v-field__input","aria-describedby":Z.value},focus:m,blur:y})]),u&&a(re,{key:"clear"},{default:()=>[K(a("div",{class:"v-field__clearable",onMousedown:V=>{V.preventDefault(),V.stopPropagation()}},[a(Be,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[l.clear?l.clear({...f.value,props:{onKeydown:M,onFocus:m,onBlur:y,onClick:e["onClick:clear"]}}):a(P,{name:"clear",onKeydown:M,onFocus:m,onBlur:y},null)]})]),[[N,e.dirty]])]}),c&&a("div",{key:"append",class:"v-field__append-inner"},[(v=l["append-inner"])==null?void 0:v.call(l,f.value),e.appendInnerIcon&&a(P,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",D.value],style:A.value},[n&&a(te,null,[a("div",{class:"v-field__outline__start"},null),b.value&&a("div",{class:"v-field__outline__notch"},[a(I,{ref:C,floating:!0,for:d.value},{default:()=>[o()]})]),a("div",{class:"v-field__outline__end"},null)]),E.value&&b.value&&a(I,{ref:C,floating:!0,for:d.value},{default:()=>[o()]})])])}),{controlRef:T}}});function He(e){const s=Object.keys(De.props).filter(i=>!ge(i)&&i!=="class"&&i!=="style");return be(e,s)}export{De as V,Ge as a,He as f,Ee as m};