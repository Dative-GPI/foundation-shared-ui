import{d as Ke,b as K,c as v,s as G,w as ae,n as ke,I as u,F as U,m as D,E as oe,y as J,z as V,A as k,B as m,C as fe,M as pe,N as te,D as ce,J as T,K as R,L as M,G as ve}from"./vue.esm-bundler-DC82FEWN.js";import{F as ze}from"./FSSearchField-sblczEUa.js";import{F as je}from"./FSDialogMenu-pfqo0k-B.js";import{F as qe}from"./FSRadioGroup-T3X6pXbd.js";import{F as We}from"./FSToggleSet-VpCD6ANQ.js";import{F as Ge}from"./FSBaseField-Df_egr4c.js";import{F as Ae,m as Je,V as Fe}from"./FSTextField-PC8aXZax.js";import{F as be,V as Qe}from"./FSCheckbox-BfYUALJm.js";import{F as Pe}from"./FSFadeOut-CvvHY5il.js";import{F as X}from"./FSButton-DRPhZ-n9.js";import{F as Xe}from"./FSLoader-06X_hY2B.js";import{_ as Y}from"./FSSpan-CwfDYIua.js";import{_ as Ve}from"./FSCol-B7HQy3FB.js";import{_ as Z}from"./FSRow-DoCXWKDP.js";import{u as Ye}from"./css-DYOPUjjE.js";import{u as Ze}from"./useRules-DS9e5-1Q.js";import{u as _e,C as Q}from"./useColors-C2RWUFtR.js";import{u as xe}from"./useSlots-V2mVelz6.js";import{_ as el}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as ll,u as al,a as tl,b as ol}from"./VSelect-CZx4UoO8.js";import{g as ul,b as nl,u as rl}from"./color-DvJT0EEa.js";import{m as il,u as sl}from"./filter-C5_KLKIH.js";import{b as dl}from"./VInput-ClkK-yNd.js";import{f as ml}from"./forwardRefs-DWGaNmQL.js";import{u as fl,a as pl,V as ye,b as cl}from"./VList-BzWIdAYG.js";import{a as vl}from"./locale-BC9z6YbT.js";import{u as ge}from"./proxiedModel-slW9zgh3.js";import{m as gl}from"./transition-yl3lVN6J.js";import{V as bl}from"./VMenu-Cn6sY4-s.js";import{V as Ce}from"./VIcon-Dc-dFojD.js";import{V as Vl}from"./VDefaultsProvider-4deG1Ppv.js";import{p as yl,o as hl,w as Sl,I as $l,z as kl,A as Fl,B as we}from"./theme-B5x8xkbY.js";const Te=Ke({name:"FSAutocompleteField",inheritAttrs:!1,components:{FSSearchField:ze,FSDialogMenu:je,FSRadioGroup:qe,FSBaseField:Ge,FSTextField:Ae,FSToggleSet:We,FSCheckbox:be,FSFadeOut:Pe,FSButton:X,FSLoader:Xe,FSSpan:Y,FSCol:Ve,FSRow:Z},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Object],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1},showSearch:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:search","add:item"],setup:(e,{emit:n})=>{const{isExtraSmall:r,isMobileSized:N}=Ye(),{validateOn:F,getMessages:q}=Ze(),{getColors:y}=_e(),{slots:S}=xe();delete S.label,delete S.description;const H=y(Q.Background),O=y(Q.Error),A=y(Q.Light),a=y(Q.Dark),t=K(!1),b=K(""),I=v(()=>e.editable?{"--fs-autocomplete-field-cursor":"text","--fs-autocomplete-field-background-color":H.base,"--fs-autocomplete-field-no-data-background-color":A.light,"--fs-autocomplete-field-border-color":A.dark,"--fs-autocomplete-field-color":a.base,"--fs-autocomplete-field-active-border-color":a.dark,"--fs-autocomplete-field-error-color":O.base,"--fs-autocomplete-field-error-border-color":O.base}:{"--fs-autocomplete-field-cursor":"default","--fs-autocomplete-field-border-color":A.base,"--fs-autocomplete-field-color":A.dark,"--fs-autocomplete-field-active-border-color":A.base}),_=v(()=>Object.keys(S).filter(o=>o.startsWith("autocomplete-")).reduce((o,f)=>(o[f.substring(13)]=S[f],o),{})),ue=v(()=>Object.keys(S).filter(o=>o.startsWith("toggle-set-")).reduce((o,f)=>(o[f.substring(11)]=S[f],o),{})),ne=v(()=>({style:I.value})),re=v(()=>{const o=["fs-autocomplete-field"];return e.multiple&&o.push("fs-autocomplete-multiple-field"),o}),ie=v(()=>e.messages??q(e.modelValue,e.rules)),g=v(()=>e.items.filter(o=>o[e.itemTitle].toLowerCase().includes(b.value.toLowerCase()))),d=v(()=>`calc(100vh - 40px - ${16+(N?36:40)+8}px)`),se=v(()=>{if(e.multiple&&Array.isArray(e.modelValue))return e.modelValue.map(o=>{const f=e.items.find(W=>W[e.itemValue]===o);if(f)return f[e.itemTitle]}).filter(o=>!!o).join(", ");if(e.modelValue){const o=e.items.find(f=>f[e.itemValue]===e.modelValue);if(o)return o[e.itemTitle]}return null});return{mobileSelectionProps:v(()=>{const o=e.items.find(f=>f[e.itemValue]===e.modelValue);return o?{item:{title:"",value:o[e.itemValue],props:{title:o[e.itemTitle],value:o[e.itemValue]},raw:{...o}},font:"text-body"}:null}),autocompleteSlots:_,toggleSetSlots:ue,isExtraSmall:r,mobileValue:se,searchItems:g,validateOn:F,ColorEnum:Q,listStyle:ne,messages:ie,classes:re,dialog:t,height:d,search:b,slots:S,style:I,openMobileOverlay:()=>{e.editable&&(t.value=!0)},onCheckboxChange:o=>{Array.isArray(e.modelValue)?e.modelValue.includes(o)?n("update:modelValue",e.modelValue.filter(f=>f!==o)):n("update:modelValue",[...e.modelValue,o]):e.modelValue!=null?e.modelValue===o?n("update:modelValue",[]):n("update:modelValue",[e.modelValue,o]):n("update:modelValue",[o])},mobileItemProps:(o,f)=>({item:{title:"",value:o[e.itemValue],props:{title:o[e.itemTitle],value:o[e.itemValue]},raw:{...o}},font:f}),onRadioChange:o=>{n("update:modelValue",o),t.value=!1},onClick:()=>{e.modelValue&&!e.multiple&&(b.value="")}}}});function Cl(e,n,r){if(n==null)return e;if(Array.isArray(n))throw new Error("Multiple matches is not implemented");return typeof n=="number"&&~n?u(U,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,n)]),u("span",{class:"v-autocomplete__mask"},[e.substr(n,r)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(n+r)])]):e}const wl=yl({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...il({filterKeys:["title"]}),...ll(),...hl(Je({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...gl({transition:!1})},"VAutocomplete"),ql=ul()({name:"VAutocomplete",props:wl(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,n){let{slots:r}=n;const{t:N}=vl(),F=K(),q=G(!1),y=G(!0),S=G(!1),H=K(),O=K(),A=ge(e,"menu"),a=v({get:()=>A.value,set:l=>{var i;A.value&&!l&&((i=H.value)!=null&&i.ΨopenChildren)||(A.value=l)}}),t=G(-1),b=v(()=>{var l;return(l=F.value)==null?void 0:l.color}),I=v(()=>a.value?e.closeText:e.openText),{items:_,transformIn:ue,transformOut:ne}=fl(e),{textColorClasses:re,textColorStyles:ie}=nl(b),g=ge(e,"search",""),d=ge(e,"modelValue",[],l=>ue(l===null?[null]:Sl(l)),l=>{const i=ne(l);return e.multiple?i:i[0]??null}),se=v(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),E=dl(),{filteredItems:x,getMatches:he}=sl(e,_,()=>y.value?"":g.value),P=v(()=>e.hideSelected?x.value.filter(l=>!d.value.some(i=>i.value===l.value)):x.value),z=v(()=>!!(e.chips||r.chip)),j=v(()=>z.value||!!r.selection),o=v(()=>d.value.map(l=>l.props.value)),f=v(()=>{var i;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&g.value===((i=P.value[0])==null?void 0:i.title))&&P.value.length>0&&!y.value&&!S.value}),W=v(()=>e.hideNoData&&!P.value.length||e.readonly||(E==null?void 0:E.isReadonly.value)),de=K(),{onListScroll:Ie,onListKeydown:De}=al(de,F);function Be(l){e.openOnClear&&(a.value=!0),g.value=""}function Re(){W.value||(a.value=!0)}function Me(l){W.value||(q.value&&(l.preventDefault(),l.stopPropagation()),a.value=!a.value)}function Oe(l){var s,p,C;if(e.readonly||E!=null&&E.isReadonly.value)return;const i=F.value.selectionStart,c=d.value.length;if((t.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(a.value=!0),["Escape"].includes(l.key)&&(a.value=!1),f.value&&["Enter","Tab"].includes(l.key)&&B(P.value[0]),l.key==="ArrowDown"&&f.value&&((s=de.value)==null||s.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&j.value&&d.value.length>0)return B(d.value[0],!1);if(t.value<0){l.key==="Backspace"&&!g.value&&(t.value=c-1);return}const h=t.value;B(d.value[t.value],!1),t.value=h>=c-1?c-2:h}if(e.multiple){if(l.key==="ArrowLeft"){if(t.value<0&&i>0)return;const h=t.value>-1?t.value-1:c-1;d.value[h]?t.value=h:(t.value=-1,F.value.setSelectionRange((p=g.value)==null?void 0:p.length,(C=g.value)==null?void 0:C.length))}if(l.key==="ArrowRight"){if(t.value<0)return;const h=t.value+1;d.value[h]?t.value=h:(t.value=-1,F.value.setSelectionRange(0,0))}}}function Ee(l){if(we(F.value,":autofill")||we(F.value,":-webkit-autofill")){const i=_.value.find(c=>c.title===l.target.value);i&&B(i)}}function Le(){var l;q.value&&(y.value=!0,(l=F.value)==null||l.focus())}function Ue(l){q.value=!0,setTimeout(()=>{S.value=!0})}function Ne(l){S.value=!1}function He(l){(l==null||l===""&&!e.multiple)&&(d.value=[])}const me=G(!1);function B(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const c=d.value.findIndex(p=>e.valueComparator(p.value,l.value)),s=i??!~c;if(~c){const p=s?[...d.value,l]:[...d.value];p.splice(c,1),d.value=p}else s&&(d.value=[...d.value,l]);e.clearOnSelect&&(g.value="")}else{const c=i!==!1;d.value=c?[l]:[],g.value=c&&!j.value?l.title:"",ke(()=>{a.value=!1,y.value=!0})}}return ae(q,(l,i)=>{var c;l!==i&&(l?(me.value=!0,g.value=e.multiple||j.value?"":String(((c=d.value.at(-1))==null?void 0:c.props.title)??""),y.value=!0,ke(()=>me.value=!1)):(!e.multiple&&g.value==null?d.value=[]:f.value&&!S.value&&!d.value.some(s=>{let{value:p}=s;return p===P.value[0].value})&&B(P.value[0]),a.value=!1,g.value="",t.value=-1))}),ae(g,l=>{!q.value||me.value||(l&&(a.value=!0),y.value=!l)}),ae(a,()=>{if(!e.hideSelected&&a.value&&d.value.length){const l=P.value.findIndex(i=>d.value.some(c=>i.value===c.value));$l&&window.requestAnimationFrame(()=>{var i;l>=0&&((i=O.value)==null||i.scrollToIndex(l))})}}),ae(()=>e.items,(l,i)=>{a.value||q.value&&!i.length&&l.length&&(a.value=!0)}),rl(()=>{const l=!!(!e.hideNoData||P.value.length||r["prepend-item"]||r["append-item"]||r["no-data"]),i=d.value.length>0,c=Fe.filterProps(e);return u(Fe,D({ref:F},c,{modelValue:g.value,"onUpdate:modelValue":[s=>g.value=s,He],focused:q.value,"onUpdate:focused":s=>q.value=s,validationValue:d.externalValue,counterValue:se.value,dirty:i,onChange:Ee,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":a.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!j.value,"v-autocomplete--selecting-index":t.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:i?void 0:e.placeholder,"onClick:clear":Be,"onMousedown:control":Re,onKeydown:Oe}),{...r,default:()=>u(U,null,[u(bl,D({ref:H,modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,activator:"parent",contentClass:"v-autocomplete__content",disabled:W.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Le},e.menuProps),{default:()=>[l&&u(pl,D({ref:de,selected:o.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:De,onFocusin:Ue,onFocusout:Ne,onScrollPassive:Ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var s,p,C;return[(s=r["prepend-item"])==null?void 0:s.call(r),!P.value.length&&!e.hideNoData&&(((p=r["no-data"])==null?void 0:p.call(r))??u(ye,{title:N(e.noDataText)},null)),u(tl,{ref:O,renderless:!0,items:P.value},{default:h=>{var $e;let{item:$,index:L,itemRef:w}=h;const Se=D($.props,{ref:w,key:L,active:f.value&&L===0?!0:void 0,onClick:()=>B($,null)});return(($e=r.item)==null?void 0:$e.call(r,{item:$,index:L,props:Se}))??u(ye,D(Se,{role:"option"}),{prepend:ee=>{let{isSelected:le}=ee;return u(U,null,[e.multiple&&!e.hideSelected?u(Qe,{key:$.value,modelValue:le,ripple:!1,tabindex:"-1"},null):void 0,$.props.prependAvatar&&u(cl,{image:$.props.prependAvatar},null),$.props.prependIcon&&u(Ce,{icon:$.props.prependIcon},null)])},title:()=>{var ee,le;return y.value?$.title:Cl($.title,(ee=he($))==null?void 0:ee.title,((le=g.value)==null?void 0:le.length)??0)}})}}),(C=r["append-item"])==null?void 0:C.call(r)]}})]}),d.value.map((s,p)=>{function C(w){w.stopPropagation(),w.preventDefault(),B(s,!1)}const h={"onClick:close":C,onKeydown(w){w.key!=="Enter"&&w.key!==" "||(w.preventDefault(),w.stopPropagation(),C(w))},onMousedown(w){w.preventDefault(),w.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},$=z.value?!!r.chip:!!r.selection,L=$?kl(z.value?r.chip({item:s,index:p,props:h}):r.selection({item:s,index:p})):void 0;if(!($&&!L))return u("div",{key:s.value,class:["v-autocomplete__selection",p===t.value&&["v-autocomplete__selection--selected",re.value]],style:p===t.value?ie.value:{}},[z.value?r.chip?u(Vl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[L]}):u(ol,D({key:"chip",closable:e.closableChips,size:"small",text:s.title,disabled:s.props.disabled},h),null):L??u("span",{class:"v-autocomplete__selection-text"},[s.title,e.multiple&&p<d.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[oe(",")])])])})]),"append-inner":function(){var h;for(var s=arguments.length,p=new Array(s),C=0;C<s;C++)p[C]=arguments[C];return u(U,null,[(h=r["append-inner"])==null?void 0:h.call(r,...p),e.menuIcon?u(Ce,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:Me,onClick:Fl,"aria-label":N(I.value),title:N(I.value)},null):void 0])}})}),ml({isFocused:q,isPristine:y,menu:a,search:g,filteredItems:x,select:B},F)}});function Al(e,n,r,N,F,q){const y=J("FSLoader"),S=J("FSSearchField"),H=J("FSDialogMenu"),O=J("FSToggleSet"),A=J("FSBaseField");return e.$props.loading?(V(),k(Ve,{key:0},{default:m(()=>[e.$props.hideHeader?ce("",!0):(V(),k(y,{key:0,variant:"text-overline"})),e.$props.loading?(V(),k(y,{key:1,width:"100%",height:["40px","36px"]})):ce("",!0)]),_:1})):(V(),fe(U,{key:1},[e.isExtraSmall?(V(),fe(U,{key:0},[u(Ae,D({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a)),onClick:e.openMobileOverlay},e.$attrs),pe({"append-inner":m(()=>[T(e.$slots,"append-inner",{},()=>[u(X,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])])]),_:2},[te(e.$slots,(a,t)=>({name:t,fn:m(b=>[T(e.$slots,t,R(M(b)))])})),e.mobileSelectionProps?{name:"prepend-inner",fn:m(()=>[T(e.$slots,"selection-mobile",R(M(e.mobileSelectionProps)))]),key:"0"}:void 0]),1040,["validationValue","description","hideHeader","clearable","editable","required","label","rules","messages","modelValue","onClick"]),u(H,{modelValue:e.dialog,"onUpdate:modelValue":n[2]||(n[2]=a=>e.dialog=a)},{body:m(()=>[u(S,{hideHeader:!0,modelValue:e.search,"onUpdate:modelValue":n[1]||(n[1]=a=>e.search=a)},null,8,["modelValue"]),u(Pe,{height:e.height},{default:m(()=>[e.$props.multiple?(V(),k(Ve,{key:0,gap:"12px"},{default:m(()=>[(V(!0),fe(U,null,te(e.searchItems,(a,t)=>(V(),k(Z,{key:t},{default:m(()=>{var b;return[u(be,{label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(b=e.$props.modelValue)==null?void 0:b.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},{label:m(({font:I})=>[T(e.$slots,"item-label",D({ref_for:!0},e.mobileItemProps(a,I)))]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])]}),_:2},1024))),128))]),_:3})):(V(),k(qe,{key:1,gap:"12px",values:e.searchItems.map(a=>({value:a[e.$props.itemValue],label:a[e.$props.itemTitle],item:a})),editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onRadioChange},{label:m(({item:a,font:t})=>[T(e.$slots,"item-label",R(M(e.mobileItemProps(a,t))))]),_:3},8,["values","editable","modelValue","onUpdate:modelValue"]))]),_:3},8,["height"])]),_:3},8,["modelValue"])],64)):(V(),k(A,{key:1,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:m(()=>[e.$props.toggleSet?(V(),k(O,D({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[3]||(n[3]=a=>e.$emit("update:modelValue",a))},e.$attrs),pe({_:2},[te(e.toggleSetSlots,(a,t)=>({name:t,fn:m(b=>[T(e.$slots,`toggle-set-${t}`,R(M(b)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(V(),k(ql,D({key:1,class:["fs-autocomplete-field",e.classes],variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,autoSelectFirst:!0,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[6]||(n[6]=a=>e.$emit("update:modelValue",a)),onClick:e.onClick,search:e.search,"onUpdate:search":n[7]||(n[7]=a=>e.search=a)},e.$attrs),pe({item:m(({props:a,item:t})=>[u(ye,R(M({...a,title:""})),{default:m(()=>[u(Z,{align:"center-left"},{default:m(()=>{var b;return[e.$props.multiple?(V(),k(be,{key:0,modelValue:(b=e.$props.modelValue)==null?void 0:b.includes(t.raw[e.$props.itemValue]),onClick:a.onClick},{label:m(({font:I})=>[T(e.$slots,"item-label",R(M({item:t,font:I})),()=>[u(Y,{font:I},{default:m(()=>[oe(ve(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1032,["modelValue","onClick"])):(V(),k(Y,{key:1},{default:m(()=>[T(e.$slots,"item-label",R(M({item:t,font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"})),()=>[u(Y,{font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:m(()=>[oe(ve(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])])]),_:2},1024))]}),_:2},1024)]),_:2},1040)]),clear:m(()=>[T(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(V(),k(X,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:n[4]||(n[4]=a=>e.$emit("update:modelValue",null))},null,8,["color"])):ce("",!0)])]),"append-inner":m(()=>[T(e.$slots,"append-inner",{},()=>[u(X,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":m(()=>[e.showSearch?(V(),k(Z,{key:0,padding:"17px"},{default:m(()=>[u(X,{variant:"icon",label:e.$tr("ui.common.add","Add this item"),color:e.ColorEnum.Primary,onClick:n[5]||(n[5]=a=>e.$emit("add:item",e.search))},null,8,["label","color"])]),_:1})):(V(),k(Z,{key:1,padding:"17px"},{default:m(()=>[u(Y,null,{default:m(()=>[oe(ve(e.$tr("ui.common.no-data","No data")),1)]),_:1})]),_:1}))]),_:2},[te(e.autocompleteSlots,(a,t)=>({name:t,fn:m(b=>[T(e.$slots,`autocomplete-${t}`,R(M(b)))])}))]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","class","style","modelValue","onClick","search"]))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))],64))}const ra=el(Te,[["render",Al]]);Te.__docgenInfo={displayName:"FSAutocompleteField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"string[] | string | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showSearch",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"add:item"},{name:"update:search"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"selection-mobile",scoped:!0,bindings:[]},{name:"append-inner"},{name:"item-label",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"font",title:"binding"}]},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`autocomplete-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"clear"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteField.vue"]};export{ra as F};