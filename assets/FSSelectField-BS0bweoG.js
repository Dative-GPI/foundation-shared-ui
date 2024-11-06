import{d as x,b as ee,c as V,y as q,z as s,A as n,C as l,F as m,N as o,B as L,O as v,K as i,L as g,M as C,m as d,E as B,H as y,I as c,G as O}from"./vue.esm-bundler-l-siv0w9.js";import{F as le,V as ae}from"./VList-ByZS85Zy.js";import{_ as N}from"./FSSlideGroup-BC2CNv0p.js";import{F as re}from"./FSToggleSet-CIA7S_a2.js";import{F as oe}from"./FSBaseField-CpNJbDpF.js";import{F as j}from"./FSTextField-CUJPYjwS.js";import{F as R}from"./FSCheckbox-BlsFOPfN.js";import{_ as z}from"./FSFadeOut-K3Ty9hFX.js";import{F}from"./FSButton-v1WOpc1k.js";import{F as te}from"./FSLoader-kY4Od3NB.js";import{_ as G}from"./FSRadio-CqjI9hQz.js";import{F as se}from"./FSCard-DL4SLpmS.js";import{_ as $}from"./FSSpan-Di50moR2.js";import{F as T}from"./FSCol-BvqytbKT.js";import{_ as f}from"./FSRow-CbEgVN08.js";import{u as ne}from"./useBreakpoints-C5IzU8MC.js";import{u as ie}from"./useRules-QHk8iD4m.js";import{u as ue,C as w}from"./useColors-Bs2u1_6J.js";import{u as de}from"./useSlots-C_N_WAus.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as me}from"./VSelect-kPgNBBHc.js";const W=x({name:"FSSelectField",components:{FSDialogMenu:le,FSSlideGroup:N,FSBaseField:oe,FSTextField:j,FSToggleSet:re,FSCheckbox:R,FSFadeOut:z,FSButton:F,FSLoader:te,FSRadio:G,FSCard:se,FSSpan:$,FSCol:T,FSRow:f},props:{label:{type:String,required:!1,default:null},placeholder:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},items:{type:Array,required:!0},itemValue:{type:String,required:!1,default:"id"},itemTitle:{type:String,required:!1,default:"label"},modelValue:{type:[Array,String,Number],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},toggleSet:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const{fontStyles:E,isExtraSmall:U,isMobileSized:H}=ne(),{validateOn:P,getMessages:A}=ie(),{getColors:k}=ue(),{slots:S}=de();delete S.label,delete S.description;const I=k(w.Background),D=k(w.Error),a=k(w.Light),t=k(w.Dark),u=ee(!1),h=V(()=>e.editable?{"--fs-select-field-cursor":"pointer","--fs-select-field-background-color":I.base,"--fs-select-field-border-color":a.dark,"--fs-select-field-color":t.base,"--fs-select-field-active-border-color":t.dark,"--fs-select-field-error-border-color":D.base,"--fs-base-field-input-height":H.value?"34px":"38px",...E.value}:{"--fs-select-field-cursor":"default","--fs-select-field-border-color":a.base,"--fs-select-field-color":a.dark,"--fs-select-field-active-border-color":a.base,"--fs-base-field-input-height":H.value?"34px":"38px",...E.value}),K=V(()=>Object.keys(S).filter(r=>r.startsWith("select-")).reduce((r,b)=>(r[b.substring(7)]=S[b],r),{})),J=V(()=>Object.keys(S).filter(r=>r.startsWith("toggle-set-")).reduce((r,b)=>(r[b.substring(11)]=S[b],r),{})),Q=V(()=>({style:h.value})),X=V(()=>e.messages??A(e.modelValue,e.rules)),M=V(()=>e.multiple?null:Array.isArray(e.modelValue)&&e.modelValue.length>0?e.items.find(r=>r[e.itemValue]===e.modelValue[0])??null:e.modelValue?e.items.find(r=>r[e.itemValue]===e.modelValue)??null:null),Y=V(()=>{if(Array.isArray(e.modelValue)&&e.modelValue.length>0)return e.items.filter(r=>e.modelValue.includes(r[e.itemValue]));if(e.modelValue){const r=e.items.find(b=>b[e.itemValue]===e.modelValue);if(r)return[r]}return[]}),Z=V(()=>"calc(100vh - 40px - 16px)"),_=V(()=>e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0?e.placeholder:M.value?M.value[e.itemTitle]:null);return{toggleSetSlots:J,selectedItems:Y,isExtraSmall:U,selectedItem:M,mobileValue:_,selectSlots:K,validateOn:P,ColorEnum:w,listStyle:Q,maxHeight:Z,messages:X,dialog:u,style:h,openMobileOverlay:()=>{e.editable&&(u.value=!0)},onCheckboxChange:r=>{Array.isArray(e.modelValue)?e.modelValue.includes(r)?p("update:modelValue",e.modelValue.filter(b=>b!==r)):p("update:modelValue",[...e.modelValue,r]):e.modelValue!=null?e.modelValue===r?p("update:modelValue",[]):p("update:modelValue",[e.modelValue,r]):p("update:modelValue",[r])},onSingleChange:r=>{p("update:modelValue",r)},onRadioChange:r=>{p("update:modelValue",r),u.value=!1},onClear:()=>{p("update:modelValue",null)}}}});function fe(e,p,E,U,H,P){const A=q("FSLoader"),k=q("FSCard"),S=q("FSDialogMenu"),I=q("FSToggleSet"),D=q("FSBaseField");return e.$props.loading?(s(),n(T,{key:0},{default:l(()=>[e.$props.hideHeader?m("",!0):(s(),n(A,{key:0,variant:"text-overline"})),e.$props.loading?(s(),n(A,{key:1,width:"100%",height:["40px","36px"]})):m("",!0)]),_:1})):e.isExtraSmall?(s(),n(T,{key:1},{default:l(()=>[o(j,d({validationValue:e.$props.modelValue,description:e.$props.description,hideHeader:e.$props.hideHeader,clearable:e.$props.clearable,editable:e.$props.editable,required:e.$props.required,validateOn:e.validateOn,label:e.$props.label,rules:e.$props.rules,messages:e.messages,readonly:!0,modelValue:e.mobileValue,onClick:e.openMobileOverlay},e.$attrs),L({"prepend-inner":l(()=>[e.selectedItem?i(e.$slots,"item-prepend",g(d({key:0},{item:e.selectedItem}))):m("",!0)]),clear:l(()=>[o(f,{wrap:!1},{default:l(()=>[e.selectedItem?i(e.$slots,"item-append",g(d({key:0},{item:e.selectedItem}))):m("",!0),i(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(s(),n(F,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):m("",!0)])]),_:3})]),"append-inner":l(()=>[o(F,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.openMobileOverlay},null,8,["editable","color","onClick"])]),_:2},[v(e.$slots,(a,t)=>({name:t,fn:l(u=>[i(e.$slots,t,g(C(u)))])}))]),1040,["validationValue","description","hideHeader","clearable","editable","required","validateOn","label","rules","messages","modelValue","onClick"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(s(),n(N,{key:0},{default:l(()=>[(s(!0),B(O,null,v(e.$props.items.filter(a=>e.$props.modelValue.includes(a[e.$props.itemValue])),(a,t)=>(s(),n(k,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:t},{default:l(()=>[o(f,{align:"center-left",padding:"0 8px",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",d({ref_for:!0},{item:a})),o($,null,{default:l(()=>[y(c(a[e.$props.itemTitle]),1)]),_:2},1024),i(e.$slots,"item-append",d({ref_for:!0},{item:a})),o(F,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(a[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):m("",!0),o(S,{modelValue:e.dialog,"onUpdate:modelValue":p[0]||(p[0]=a=>e.dialog=a)},{body:l(()=>[o(z,{maxHeight:e.maxHeight},{default:l(()=>[o(T,{gap:"12px"},{default:l(()=>[(s(!0),B(O,null,v(e.$props.items,(a,t)=>(s(),n(f,{key:t},{default:l(()=>{var u;return[e.$props.multiple?(s(),n(R,{key:0,label:a[e.$props.itemTitle],editable:e.$props.editable,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(a[e.$props.itemValue]),"onUpdate:modelValue":()=>e.onCheckboxChange(a[e.$props.itemValue])},{label:l(({font:h})=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",d({ref_for:!0},{item:a})),o($,{font:h},{default:l(()=>[y(c(a[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["label","editable","modelValue","onUpdate:modelValue"])):(s(),n(G,{key:1,selected:e.$props.modelValue===a[e.$props.itemValue],label:a[e.$props.itemTitle],editable:e.$props.editable,item:a,modelValue:a[e.$props.itemValue],"onUpdate:modelValue":()=>e.onRadioChange(a[e.$props.itemValue])},{label:l(({font:h})=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>[i(e.$slots,"item-prepend",d({ref_for:!0},{item:a})),o($,{font:h},{default:l(()=>[y(c(a[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1024)]),_:2},1032,["selected","label","editable","item","modelValue","onUpdate:modelValue"])),o(f,{align:"center-right"},{default:l(()=>[i(e.$slots,"item-append",d({ref_for:!0},{item:a}))]),_:2},1024)]}),_:2},1024))),128))]),_:3})]),_:3},8,["maxHeight"]),!e.$props.items||e.$props.items.length===0?(s(),n(f,{key:0,padding:"4px 3px"},{default:l(()=>[o($,null,{default:l(()=>[y(c(e.$tr("ui.select-field.no-data","No data")),1)]),_:1})]),_:1})):m("",!0)]),_:3},8,["modelValue"])]),_:3})):(s(),n(D,{key:2,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:l(()=>[e.$props.toggleSet?(s(),n(I,d({key:0,editable:e.$props.editable,multiple:e.$props.multiple,required:e.$props.required,values:e.$props.items,rules:e.$props.rules,modelValue:e.$props.modelValue,"onUpdate:modelValue":p[1]||(p[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),L({_:2},[v(e.toggleSetSlots,(a,t)=>({name:t,fn:l(u=>[i(e.$slots,`toggle-set-${t}`,g(C(u)))])}))]),1040,["editable","multiple","required","values","rules","modelValue"])):(s(),n(T,{key:1},{default:l(()=>[o(me,d({class:"fs-select-field",variant:"outlined",clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,itemTitle:e.$props.itemTitle,itemValue:e.$props.itemValue,readonly:!e.$props.editable,multiple:e.$props.multiple,validateOn:e.validateOn,persistentClear:!0,listProps:e.listStyle,returnObject:!1,items:e.$props.items,rules:e.$props.rules,hideDetails:!0,menuIcon:null,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onSingleChange},e.$attrs),L({item:l(({props:a,item:t})=>[o(ae,g(C({...a,title:""})),{default:l(()=>[o(f,{align:"center-left",wrap:!1},{default:l(()=>{var u;return[e.$props.multiple?(s(),n(R,{key:0,modelValue:(u=e.$props.modelValue)==null?void 0:u.includes(t.raw[e.$props.itemValue]),onClick:a.onClick},{label:l(({font:h})=>[i(e.$slots,"item-prepend",g(C({item:t.raw}))),o($,{font:h},{default:l(()=>[y(c(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])]),_:2},1032,["modelValue","onClick"])):(s(),B(O,{key:1},[i(e.$slots,"item-prepend",g(C({item:t.raw}))),o($,{font:e.$props.modelValue===t.raw[e.$props.itemTitle]?"text-button":"text-body"},{default:l(()=>[y(c(t.raw[e.$props.itemTitle]),1)]),_:2},1032,["font"])],64)),o(f,{align:"center-right"},{default:l(()=>[i(e.$slots,"item-append",g(C({item:t.raw})))]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"prepend-inner":l(()=>[e.selectedItem?i(e.$slots,"item-prepend",g(d({key:0},{item:e.selectedItem}))):m("",!0)]),clear:l(()=>[o(f,{wrap:!1},{default:l(()=>[e.selectedItem?i(e.$slots,"item-append",g(d({key:0},{item:e.selectedItem}))):m("",!0),i(e.$slots,"clear",{},()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(s(),n(F,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:e.onClear},null,8,["color","onClick"])):m("",!0)])]),_:3})]),"append-inner":l(()=>[i(e.$slots,"append-inner",{},()=>[o(F,{icon:"mdi-chevron-down",variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark},null,8,["editable","color"])])]),"no-data":l(()=>[!e.$props.items||e.$props.items.length===0?(s(),n(f,{key:0,padding:"15px"},{default:l(()=>[o($,null,{default:l(()=>[y(c(e.$tr("ui.select-field.no-data","No data")),1)]),_:1})]),_:1})):m("",!0)]),_:2},[v(e.selectSlots,(a,t)=>({name:t,fn:l(u=>[i(e.$slots,`select-${t}`,g(C(u)))])})),e.$props.multiple?{name:"selection",fn:l(({index:a})=>[a===e.$props.modelValue.length-1?(s(),n($,{key:0},{default:l(()=>[y(c(e.$props.placeholder),1)]),_:1})):m("",!0)]),key:"0"}:void 0]),1040,["clearable","itemTitle","itemValue","readonly","multiple","validateOn","listProps","items","rules","style","modelValue","onUpdate:modelValue"]),e.$props.multiple&&Array.isArray(e.$props.modelValue)?(s(),n(N,{key:0},{default:l(()=>[(s(!0),B(O,null,v(e.$props.items.filter(a=>e.$props.modelValue.includes(a[e.$props.itemValue])),(a,t)=>(s(),n(k,{variant:"standard",height:["40px","36px"],color:e.ColorEnum.Light,border:!1,key:t},{default:l(()=>[o(f,{align:"center-left",padding:"0 8px"},{default:l(()=>[i(e.$slots,"item-prepend",d({ref_for:!0},{item:a})),o($,null,{default:l(()=>[y(c(a[e.$props.itemTitle]),1)]),_:2},1024),i(e.$slots,"item-append",d({ref_for:!0},{item:a})),o(F,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:()=>e.onCheckboxChange(a[e.$props.itemValue])},null,8,["color","onClick"])]),_:2},1024)]),_:2},1032,["color"]))),128))]),_:3})):m("",!0)]),_:3}))]),_:3},8,["description","hideHeader","required","editable","label","messages"]))}const Ue=pe(W,[["render",fe]]);W.__docgenInfo={displayName:"FSSelectField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"any[]"},required:!0},{name:"itemValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"id"'}},{name:"itemTitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"modelValue",type:{name:"(string | number)[] | string | number | null | any"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSet",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"item-prepend",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"item-append",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"clear"},{name:"`toggle-set-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"`select-${name}`",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSelectField.vue"]};export{Ue as F};