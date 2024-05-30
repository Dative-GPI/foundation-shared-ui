import{f as ye,g as i,J as $,K as B,L as m,V as L,A as a,Z as I,O as P,P as R,N as x,C as Z,a6 as G,j as T,x as pe,w as be,F as ge,B as Ce}from"./vue.esm-bundler-cd768bc3.js";import{_ as p}from"./FSSpan-da6dde8e.js";import{_ as ee}from"./FSCol-ff457bc3.js";import{_ as ae}from"./FSRow-1d7c2545.js";import{u as he,C as E}from"./useColors-91ab292c.js";import{u as ke}from"./useSlots-2af30a3d.js";import{_ as Fe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ve}from"./VSpacer-a30a0a7c.js";import{b as _e,c as Se}from"./index-b97c70d5.js";import{m as N,g as K,u as M}from"./useRender-d216bc3f.js";import{m as $e,M as Be}from"./transition-2948fa2b.js";import{p as O,H as A,J as Ie,K as Pe,s as xe,c as we,X as qe,Q as Le}from"./theme-33f5ac1a.js";import{V as Re}from"./VLabel-ac265b88.js";import{d as Te,u as Ee,e as Ae}from"./VInput-28424714.js";import{b as De,a as Ne}from"./color-4e667524.js";import{I as D}from"./tag-f5ad2c5e.js";import{m as Ke,u as Me,L as Oe}from"./loader-e29f326e.js";import{u as He}from"./locale-d1b7e37d.js";import{m as je,u as Ue}from"./rounded-c9c22222.js";import{V as Je}from"./VDefaultsProvider-ff78bc14.js";import{n as We,a as Xe,s as ze}from"./forwardRefs-e658ad70.js";const le=ye({name:"FSBaseField",components:{FSSpan:p,FSCol:ee,FSRow:ae},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},messages:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{getColors:n}=he(),{slots:t}=ke();delete t.label,delete t.description;const c=n(E.Error),l=n(E.Light),b=n(E.Dark);return{style:i(()=>e.editable?{"--fs-base-field-color":b.base,"--fs-base-field-error-color":c.base}:{"--fs-base-field-color":l.dark}),slots:t}}});function Qe(e,n,t,c,l,b){return $(),B(ee,null,{default:m(()=>[e.$props.hideHeader?x("",!0):L(e.$slots,"label",{key:0},()=>[a(ae,{wrap:!1},{default:m(()=>[a(p,{class:"fs-base-field-label",font:"text-overline",style:I(e.style)},{default:m(()=>[P(R(e.$props.label),1)]),_:1},8,["style"]),e.$props.label&&e.$props.required?($(),B(p,{key:0,class:"fs-base-field-label",style:I([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:m(()=>[P(" * ")]),_:1},8,["style"])):x("",!0),a(Ve,{style:{"min-width":"40px"}}),e.$props.messages.length>0?($(),B(p,{key:1,class:"fs-base-field-messages",font:"text-overline",style:I(e.style)},{default:m(()=>[P(R(e.$props.messages.join(", ")),1)]),_:1},8,["style"])):x("",!0)]),_:1})]),L(e.$slots,"default"),L(e.$slots,"description",{},()=>[e.$props.description?($(),B(p,{key:0,class:"fs-base-field-description",font:"text-underline",style:I(e.style)},{default:m(()=>[P(R(e.$props.description),1)]),_:1},8,["style"])):x("",!0)])]),_:3})}const Va=Fe(le,[["render",Qe]]);le.__docgenInfo={displayName:"FSBaseField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"messages",type:{name:"array"},required:!1,defaultValue:{func:!1,value:"[]"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"label"},{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSBaseField.vue"]};const Ye=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...N(),...$e({transition:{component:_e}})},"VCounter"),_a=K()({name:"VCounter",functional:!0,props:Ye(),setup(e,n){let{slots:t}=n;const c=i(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return M(()=>a(Be,{transition:e.transition},{default:()=>[Z(a("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[t.default?t.default({counter:c.value,max:e.max,value:e.value}):c.value]),[[G,e.active]])]})),{}}});const Ze=O({floating:Boolean,...N()},"VFieldLabel"),w=K()({name:"VFieldLabel",props:Ze(),setup(e,n){let{slots:t}=n;return M(()=>a(Re,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}}),Ge=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ea=O({appendInnerIcon:D,bgColor:String,clearable:Boolean,clearIcon:{type:D,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:D,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ge.includes(e)},"onClick:clear":A(),"onClick:appendInner":A(),"onClick:prependInner":A(),...N(),...Ke(),...je(),...Ie()},"VField"),aa=K()({name:"VField",inheritAttrs:!1,props:{id:String,...Te(),...ea()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:t,emit:c,slots:l}=n;const{themeClasses:b}=Pe(e),{loaderClasses:H}=Me(e),{focusClasses:te,isFocused:j,focus:g,blur:C}=Ee(e),{InputIcon:q}=Ae(e),{roundedClasses:ne}=Ue(e),{rtlClasses:se}=He(),h=i(()=>e.dirty||e.active),k=i(()=>!e.singleLine&&!!(e.label||l.label)),oe=xe(),d=i(()=>e.id||`input-${oe}`),re=i(()=>`${d.value}-messages`),U=T(),F=T(),J=T(),W=i(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:ie,backgroundColorStyles:de}=De(pe(e,"bgColor")),{textColorClasses:X,textColorStyles:z}=Ne(i(()=>e.error||e.disabled?void 0:h.value&&j.value?e.color:e.baseColor));be(h,s=>{if(k.value){const o=U.value.$el,u=F.value.$el;requestAnimationFrame(()=>{const f=We(o),r=u.getBoundingClientRect(),V=r.x-f.x,_=r.y-f.y-(f.height/2-r.height/2),y=r.width/.75,S=Math.abs(y-f.width)>1?{maxWidth:we(y)}:void 0,fe=getComputedStyle(o),Y=getComputedStyle(u),ce=parseFloat(fe.transitionDuration)*1e3||150,me=parseFloat(Y.getPropertyValue("--v-field-label-scale")),ve=Y.getPropertyValue("color");o.style.visibility="visible",u.style.visibility="hidden",Xe(o,{transform:`translate(${V}px, ${_}px) scale(${me})`,color:ve,...S},{duration:ce,easing:ze,direction:s?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),u.style.removeProperty("visibility")})})}},{flush:"post"});const v=i(()=>({isActive:h,isFocused:j,controlRef:J,blur:C,focus:g}));function ue(s){s.target!==document.activeElement&&s.preventDefault()}function Q(s){var o;s.key!=="Enter"&&s.key!==" "||(s.preventDefault(),s.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return M(()=>{var V,_,y;const s=e.variant==="outlined",o=!!(l["prepend-inner"]||e.prependInnerIcon),u=!!(e.clearable||l.clear),f=!!(l["append-inner"]||e.appendInnerIcon||u),r=()=>l.label?l.label({...v.value,label:e.label,props:{for:d.value}}):e.label;return a("div",Ce({class:["v-field",{"v-field--active":h.value,"v-field--appended":f,"v-field--center-affix":e.centerAffix??!W.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},b.value,ie.value,te.value,H.value,ne.value,se.value,e.class],style:[de.value,e.style],onClick:ue},t),[a("div",{class:"v-field__overlay"},null),a(Oe,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),o&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(q,{key:"prepend-icon",name:"prependInner"},null),(V=l["prepend-inner"])==null?void 0:V.call(l,v.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&k.value&&a(w,{key:"floating-label",ref:F,class:[X.value],floating:!0,for:d.value,style:z.value},{default:()=>[r()]}),a(w,{ref:U,for:d.value},{default:()=>[r()]}),(_=l.default)==null?void 0:_.call(l,{...v.value,props:{id:d.value,class:"v-field__input","aria-describedby":re.value},focus:g,blur:C})]),u&&a(Se,{key:"clear"},{default:()=>[Z(a("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[a(Je,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[l.clear?l.clear({...v.value,props:{onKeydown:Q,onFocus:g,onBlur:C,onClick:e["onClick:clear"]}}):a(q,{name:"clear",onKeydown:Q,onFocus:g,onBlur:C},null)]})]),[[G,e.dirty]])]}),f&&a("div",{key:"append",class:"v-field__append-inner"},[(y=l["append-inner"])==null?void 0:y.call(l,v.value),e.appendInnerIcon&&a(q,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",X.value],style:z.value},[s&&a(ge,null,[a("div",{class:"v-field__outline__start"},null),k.value&&a("div",{class:"v-field__outline__notch"},[a(w,{ref:F,floating:!0,for:d.value},{default:()=>[r()]})]),a("div",{class:"v-field__outline__end"},null)]),W.value&&k.value&&a(w,{ref:F,floating:!0,for:d.value},{default:()=>[r()]})])])}),{controlRef:J}}});function Sa(e){const n=Object.keys(aa.props).filter(t=>!qe(t)&&t!=="class"&&t!=="style");return Le(e,n)}export{Va as F,aa as V,_a as a,Sa as f,ea as m};