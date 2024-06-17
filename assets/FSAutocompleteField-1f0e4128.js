import{f as Ke,j as z,g as V,w as Y,s as J,n as Fe,P as u,J as N,A as D,K as ae,D as Q,E as S,F as q,G as m,H as pe,U as ce,V as le,I as ve,Q as P,R as B,S as M,L as ge}from"./vue.esm-bundler-6f923154.js";import{F as je}from"./FSSearchField-ec495859.js";import{F as ze}from"./FSDialogMenu-7aaa5a49.js";import{F as qe}from"./FSRadioGroup-52f2d9ef.js";import{F as We}from"./FSToggleSet-294c6bb8.js";import{F as Ge}from"./VField-d1f54092.js";import{_ as Ae,m as Je,V as ke}from"./FSTextField-add61627.js";import{F as be,V as Qe}from"./FSCheckbox-4fa3808a.js";import{F as Pe}from"./FSFadeOut-1de34239.js";import{F as te}from"./FSButton-ff673895.js";import{F as Xe}from"./FSLoader-6b86cc0d.js";import{_ as Z}from"./FSSpan-7bb94541.js";import{_ as ye}from"./FSCol-5ed907ac.js";import{_ as oe}from"./FSRow-64caadb9.js";import{u as Ye}from"./css-0cf2e273.js";import{u as Ze}from"./useRules-8e3c4a4a.js";import{u as _e,C as X}from"./useColors-9144d90e.js";import{u as xe}from"./useSlots-21493751.js";import{_ as el}from"./_plugin-vue_export-helper-c27b6911.js";import{m as ll,u as al,b as tl,c as ol,V as he,d as ul,e as nl,f as rl}from"./VSelect-b637e5b8.js";import{a as sl}from"./color-a262cadc.js";import{m as il,u as dl}from"./filter-e9cedeb6.js";import{b as ml}from"./VInput-125993fa.js";import{f as fl}from"./forwardRefs-e658ad70.js";import{a as pl}from"./locale-577543b5.js";import{u as Ve}from"./proxiedModel-c8904091.js";import{m as cl}from"./transition-e76cd387.js";import{V as vl}from"./VMenu-31bd6e5f.js";import{V as Ce}from"./VIcon-d1c19518.js";import{V as gl}from"./VDefaultsProvider-a08a9a42.js";import{p as Vl,A as bl,I as yl,N as hl,O as Sl,w as $l,P as we}from"./theme-a8226b2e.js";import{g as Fl,u as kl}from"./useRender-1cb09274.js";const Te=Ke({name:"FSAutocompleteField",components:{FSSearchField:je,FSDialogMenu:ze,FSRadioGroup:qe,FSBaseField:Ge,FSTextField:Ae,FSToggleSet:We,FSCheckbox:be,FSFadeOut:Pe,FSButton:te,FSLoader:Xe,FSSpan:Z,FSCol:ye,FSRow:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search"],setup:(e,{emit:n})=>{const{isExtraSmall:r,isMobileSized:H}=Ye(),{validateOn:$,getMessages:w}=Ze(),{getColors:y}=_e(),{slots:F}=xe();delete F.label,delete F.description;const K=y(X.Background),O=y(X.Error),T=y(X.Light),a=y(X.Dark),o=z(!1),p=z(""),I=V(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":K.base,"--fs-autocomplete-field-border-color":T.dark,"--fs-autocomplete-field-color":a.base,"--fs-autocomplete-field-active-border-color":a.dark,"--fs-autocomplete-field-error-color":O.base,"--fs-autocomplete-field-error-border-color":O.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":T.base,"--fs-autocomplete-field-color":T.dark,"--fs-autocomplete-field-active-border-color":T.base}),_=V(()=>Object.keys(F).filter(t=>t.startsWith("autocomplete-")).reduce((t,v)=>(t[v.substring(13)]=F[v],t),{})),ue=V(()=>Object.keys(F).filter(t=>t.startsWith("toggle-set-")).reduce((t,v)=>(t[v.substring(11)]=F[v],t),{})),ne=V(()=>({style:I.value})),re=V(()=>{const t=["fs-autocomplete-field"];return e.multiple&&t.push("fs-autocomplete-multiple-field"),t}),se=V(()=>e.messages??w(e.modelValue,e.rules)),c=V(()=>e.items.filter(t=>t[e.itemTitle].toLowerCase().includes(p.value.toLowerCase()))),i=V(()=>`calc(100vh - 40px - ${16+(H?36:40)+8}px)`),ie=V(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(t=>{const v=e.items.find(G=>G[e.itemValue]===t);if(v)return v[e.itemTitle]}).filter(t=>!!t).join(", ");if(e.modelValue){const t=e.items.find(v=>v[e.itemValue]===e.modelValue);if(t)return t[e.itemTitle]}return null}),R=V(()=>{const t=e.items.find(v=>v[e.itemValue]===e.modelValue);return t?{item:{title:"",value:t[e.itemValue],props:{title:t[e.itemTitle],value:t[e.itemValue]},raw:{...t}},font:"text-body"}:null}),W=(t,v)=>({item:{title:"",value:t[e.itemValue],props:{title:t[e.itemTitle],value:t[e.itemValue]},raw:{...t}},font:v}),de=()=>{e.editable&&(o.value=!0)},A=t=>{n("update:modelValue",t),o.value=!1},j=t=>{Array.isArray(e.modelValue)?e.modelValue.includes(t)?n("update:modelValue",e.modelValue.filter(v=>v!==t)):n("update:modelValue",[...e.modelValue,t]):e.modelValue===t?n("update:modelValue",[]):n("update:modelValue",[e.modelValue,t])},L=()=>{e.modelValue&&(p.value="",n("update:search",p.value),n("update:modelValue",null))};return Y(p,()=>{n("update:search",p.value)}),{mobileSelectionProps:R,autocompleteSlots:_,toggleSetSlots:ue,isExtraSmall:r,mobileValue:ie,searchItems:c,validateOn:$,ColorEnum:X,listStyle:ne,messages:se,classes:re,dialog:o,height:i,search:p,slots:F,style:I,openMobileOverlay:de,onCheckboxChange:j,mobileItemProps:W,onRadioChange:A,onClick:L}}});function Cl(e,n,r){if(n==null)return e;if(Array.isArray(n))throw new Error("Multiple matches is not implemented");return typeof n=="number"&&~n?u(N,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,n)]),u("span",{class:"v-autocomplete__mask"},[e.substr(n,r)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(n+r)])]):e}const wl=Vl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...il({filterKeys:["title"]}),...ll(),...bl(Je({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...cl({transition:!1})},"VAutocomplete"),ql=Fl()({name:"VAutocomplete",props:wl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,n){let{slots:r}=n;const{t:H}=pl(),$=z(),w=J(!1),y=J(!0),F=J(!1),K=z(),O=z(),T=Ve(e,"menu"),a=V({get:()=>T.value,set:l=>{var s;T.value&&!l&&((s=K.value)!=null&&s.ΨopenChildren)||(T.value=l)}}),o=J(-1),p=V(()=>{var l;return(l=$.value)==null?void 0:l.color}),I=V(()=>a.value?e.closeText:e.openText),{items:_,transformIn:ue,transformOut:ne}=al(e),{textColorClasses:re,textColorStyles:se}=sl(p),c=Ve(e,"search",""),i=Ve(e,"modelValue",[],l=>ue(l===null?[null]:$l(l)),l=>{const s=ne(l);return e.multiple?s:s[0]??null}),ie=V(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:i.value.length),R=ml(),{filteredItems:W,getMatches:de}=dl(e,_,()=>y.value?"":c.value),A=V(()=>e.hideSelected?W.value.filter(l=>!i.value.some(s=>s.value===l.value)):W.value),j=V(()=>!!(e.chips||r.chip)),L=V(()=>j.value||!!r.selection),t=V(()=>i.value.map(l=>l.props.value)),v=V(()=>{var s;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&c.value===((s=A.value[0])==null?void 0:s.title))&&A.value.length>0&&!y.value&&!F.value}),G=V(()=>e.hideNoData&&!A.value.length||e.readonly||(R==null?void 0:R.isReadonly.value)),me=z(),{onListScroll:Ie,onListKeydown:De}=tl(me,$);function Re(l){e.openOnClear&&(a.value=!0),c.value=""}function Be(){G.value||(a.value=!0)}function Me(l){G.value||(w.value&&(l.preventDefault(),l.stopPropagation()),a.value=!a.value)}function Oe(l){var d,f,k;if(e.readonly||R!=null&&R.isReadonly.value)return;const s=$.value.selectionStart,g=i.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(a.value=!0),["Escape"].includes(l.key)&&(a.value=!1),v.value&&["Enter","Tab"].includes(l.key)&&!i.value.some(b=>{let{value:h}=b;return h===A.value[0].value})&&U(A.value[0]),l.key==="ArrowDown"&&v.value&&((d=me.value)==null||d.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&L.value&&i.value.length>0&&!c.value)return U(i.value[0],!1);if(~o.value){const b=o.value;U(i.value[o.value],!1),o.value=b>=g-1?g-2:b}else l.key==="Backspace"&&!c.value&&(o.value=g-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(o.value<0&&s>0)return;const b=o.value>-1?o.value-1:g-1;i.value[b]?o.value=b:(o.value=-1,$.value.setSelectionRange((f=c.value)==null?void 0:f.length,(k=c.value)==null?void 0:k.length))}if(l.key==="ArrowRight"){if(o.value<0)return;const b=o.value+1;i.value[b]?o.value=b:(o.value=-1,$.value.setSelectionRange(0,0))}}}function Le(l){if(we($.value,":autofill")||we($.value,":-webkit-autofill")){const s=_.value.find(g=>g.title===l.target.value);s&&U(s)}}function Ue(){var l;w.value&&(y.value=!0,(l=$.value)==null||l.focus())}function Ee(l){w.value=!0,setTimeout(()=>{F.value=!0})}function Ne(l){F.value=!1}function He(l){(l==null||l===""&&!e.multiple&&!L.value)&&(i.value=[])}const fe=J(!1);function U(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const g=i.value.findIndex(f=>e.valueComparator(f.value,l.value)),d=s??!~g;if(~g){const f=d?[...i.value,l]:[...i.value];f.splice(g,1),i.value=f}else d&&(i.value=[...i.value,l]);e.clearOnSelect&&(c.value="")}else{const g=s!==!1;i.value=g?[l]:[],c.value=g&&!L.value?l.title:"",Fe(()=>{a.value=!1,y.value=!0})}}return Y(w,(l,s)=>{var g;l!==s&&(l?(fe.value=!0,c.value=e.multiple||L.value?"":String(((g=i.value.at(-1))==null?void 0:g.props.title)??""),y.value=!0,Fe(()=>fe.value=!1)):(!e.multiple&&c.value==null&&(i.value=[]),a.value=!1,i.value.some(d=>{let{title:f}=d;return f===c.value})||(c.value=""),o.value=-1))}),Y(c,l=>{!w.value||fe.value||(l&&(a.value=!0),y.value=!l)}),Y(a,()=>{if(!e.hideSelected&&a.value&&i.value.length){const l=A.value.findIndex(s=>i.value.some(g=>s.value===g.value));yl&&window.requestAnimationFrame(()=>{var s;l>=0&&((s=O.value)==null||s.scrollToIndex(l))})}}),Y(()=>e.items,(l,s)=>{a.value||w.value&&!s.length&&l.length&&(a.value=!0)}),kl(()=>{const l=!!(!e.hideNoData||A.value.length||r["prepend-item"]||r["append-item"]||r["no-data"]),s=i.value.length>0,g=ke.filterProps(e);return u(ke,D({ref:$},g,{modelValue:c.value,"onUpdate:modelValue":[d=>c.value=d,He],focused:w.value,"onUpdate:focused":d=>w.value=d,validationValue:i.externalValue,counterValue:ie.value,dirty:s,onChange:Le,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":a.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!L.value,"v-autocomplete--selecting-index":o.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":Re,"onMousedown:control":Be,onKeydown:Oe}),{...r,default:()=>u(N,null,[u(vl,D({ref:K,modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,activator:"parent",contentClass:"v-autocomplete__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ue},e.menuProps),{default:()=>[l&&u(ol,D({ref:me,selected:t.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:d=>d.preventDefault(),onKeydown:De,onFocusin:Ee,onFocusout:Ne,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var d,f,k;return[(d=r["prepend-item"])==null?void 0:d.call(r),!A.value.length&&!e.hideNoData&&(((f=r["no-data"])==null?void 0:f.call(r))??u(he,{title:H(e.noDataText)},null)),u(ul,{ref:O,renderless:!0,items:A.value},{default:b=>{var $e;let{item:h,index:E,itemRef:C}=b;const Se=D(h.props,{ref:C,key:E,active:v.value&&E===0?!0:void 0,onClick:()=>U(h,null)});return(($e=r.item)==null?void 0:$e.call(r,{item:h,index:E,props:Se}))??u(he,D(Se,{role:"option"}),{prepend:x=>{let{isSelected:ee}=x;return u(N,null,[e.multiple&&!e.hideSelected?u(Qe,{key:h.value,modelValue:ee,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependAvatar&&u(nl,{image:h.props.prependAvatar},null),h.props.prependIcon&&u(Ce,{icon:h.props.prependIcon},null)])},title:()=>{var x,ee;return y.value?h.title:Cl(h.title,(x=de(h))==null?void 0:x.title,((ee=c.value)==null?void 0:ee.length)??0)}})}}),(k=r["append-item"])==null?void 0:k.call(r)]}})]}),i.value.map((d,f)=>{function k(C){C.stopPropagation(),C.preventDefault(),U(d,!1)}const b={"onClick:close":k,onKeydown(C){C.key!=="Enter"&&C.key!==" "||(C.preventDefault(),C.stopPropagation(),k(C))},onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},h=j.value?!!r.chip:!!r.selection,E=h?hl(j.value?r.chip({item:d,index:f,props:b}):r.selection({item:d,index:f})):void 0;if(!(h&&!E))return u("div",{key:d.value,class:["v-autocomplete__selection",f===o.value&&["v-autocomplete__selection--selected",re.value]],style:f===o.value?se.value:{}},[j.value?r.chip?u(gl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:d.title}}},{default:()=>[E]}):u(rl,D({key:"chip",closable:e.closableChips,size:"small",text:d.title,disabled:d.props.disabled},b),null):E??u("span",{class:"v-autocomplete__selection-text"},[d.title,e.multiple&&f<i.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[ae(",")])])])})]),"append-inner":function(){var b;for(var d=arguments.length,f=new Array(d),k=0;k<d;k++)f[k]=arguments[k];return u(N,null,[(b=r["append-inner"])==null?void 0:b.call(r,...f),e.menuIcon?u(Ce,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:Sl,"aria-label":H(I.value),title:H(I.value),tabindex:"-1"},null):void 0])}})}),fl({isFocused:w,isPristine:y,menu:a,search:c,filteredItems:W,select:U},$)}});function Al(e,n,r,H,$,w){const y=Q("FSLoader"),F=Q("FSSearchField"),K=Q("FSDialogMenu"),O=Q("FSToggleSet"),T=Q("FSBaseField");return e.$props.loading?(S(),q(ye,{key:0},{default:m(()=>[e.$props.hideHeader?ve("",!0):(S(),q(y,{key:0,variant:"text-overline"})),e.$props.loading?(S(),q(y,{key:1,width:"100%",height:["40px","36px"]})):ve("",!0)]),_:1})):(S(),pe(N,{key:1},[e.isExtraSmall?(S(),pe(N,{key:0},[u(Ae,D({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a)),onClick:e.openMobileOverlay},e.$attrs),ce({"append-inner":m(()=>[P(e.$slots,"append-inner",{},()=>[u(te,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[le(e.$slots,(a,o)=>({name:o,fn:m(p=>[P(e.$slots,o,B(M(p)))])})),e.mobileSelectionProps?{name:"prepend-inner",fn:m(()=>[P(e.$slots,"selection-mobile",B(M(e.mobileSelectionProps)))]),key:"0"}:void 0]),1040,["validationValue","description","hideHeader","clearable","editable","required","label","rules","messages","modelValue","onClick"]),u(K,{modelValue:e.dialog,"onUpdate:modelValue":n[2]||(n[2]=a=>e.dialog=a)},{body:m(()=>[u(F,{modelValue:e.search,"onUpdate:modelValue":n[1]||(n[1]=a=>e.search=a)},null,8,["modelValue"]),u(Pe,{height:e.height},{default:m(()=>[e.$props.multiple?(S(),q(ye,{key:0,gap:"12px"},{default:m(()=>[(S(!0),pe(N,null,le(e.searchItems,(a,o)=>(S(),q(oe,{key:o},{default:m(()=>{var p;return[u(be,{label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},{label:m(({font:I})=>[P(e.$slots,"item-label",D({ref_for:!0},e.mobileItemProps(a,I)))]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128))]),_:3})):(S(),q(qe,{key:1,gap:"12px",values:e.searchItems.map(a=>({value:a[e.$props.itemValue],label:a[e.$props.itemTitle],item:a})),editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onRadioChange},{label:m(({item:a,font:o})=>[P(e.$slots,"item-label",B(M(e.mobileItemProps(a,o))))]),_:3},8,["values","editable","modelValue","onUpdate:modelValue"]))]),_:3},8,["height"])]),_:3},8,["modelValue"])],64)):(S(),q(T,{key:1,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:m(()=>[e.$props.toggleSet?(S(),q(O,D({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[3]||(n[3]=a=>e.$emit("update:modelValue",a))},e.$attrs),ce({_:2},[le(e.toggleSetSlots,(a,o)=>({name:o,fn:m(p=>[P(e.$slots,`toggle-set-${o}`,B(M(p)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(S(),q(ql,D({key:1,class:["fs-autocomplete-field",e.classes],variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,autoSelectFirst:!0,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[5]||(n[5]=a=>e.$emit("update:modelValue",a)),onClick:e.onClick,search:e.search,"onUpdate:search":n[6]||(n[6]=a=>e.search=a)},e.$attrs),ce({item:m(({props:a,item:o})=>[u(he,B(M({...a,title:""})),{default:m(()=>[u(oe,{align:"center-left"},{default:m(()=>{var p;return[e.$props.multiple?(S(),q(be,{key:0,modelValue:(p=e.$props.modelValue)==null?void 0:p.includes(o.raw[e.$props.itemValue]),onClick:a.onClick},{label:m(({font:I})=>[P(e.$slots,"item-label",B(M({item:o,font:I})),()=>[u(Z,{font:I},{default:m(()=>[ae(ge(o.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1032,["modelValue","onClick"])):(S(),q(Z,{key:1},{default:m(()=>[P(e.$slots,"item-label",B(M({item:o})),()=>[u(Z,null,{default:m(()=>[ae(ge(o.raw[e.$props.itemTitle]),1)]),_:2},1024)])]),_:2},1024))]}),_:2},1024)]),_:2},1040)]),clear:m(()=>[P(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(S(),q(te,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:n[4]||(n[4]=a=>e.$emit("update:modelValue",null))},null,8,["color"])):ve("",!0)])]),"append-inner":m(()=>[P(e.$slots,"append-inner",{},()=>[u(te,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":m(()=>[u(oe,{padding:"17px"},{default:m(()=>[u(Z,null,{default:m(()=>[ae(ge(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1})]),_:2},[le(e.autocompleteSlots,(a,o)=>({name:o,fn:m(p=>[P(e.$slots,`autocomplete-${o}`,B(M(p)))])}))]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","class","style","modelValue","onClick","search"]))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))],64))}const ra=el(Te,[["render",Al]]);Te.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"selection-mobile",scoped:!0,bindings:[]},{name:"append-inner"},{name:"item-label",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{ra as F};