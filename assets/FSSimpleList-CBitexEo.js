import{d as v,z as a,A as t,m as I,y as s,C as i,K as k,N as g,F as f,H,I as A,b as O,c as T,w as G,E as u,O as m,G as p}from"./vue.esm-bundler-l-siv0w9.js";import{_ as y}from"./FSRow-CbEgVN08.js";import{F as b}from"./FSCol-BvqytbKT.js";import{F as z}from"./FSLoader-kY4Od3NB.js";import{_ as q}from"./FSFadeOut-K3Ty9hFX.js";import{_ as B}from"./FSSlideGroup-BC2CNv0p.js";import{F as U}from"./FSSearchField-wkNlBvKw.js";import{F as R}from"./FSIcon-uIr9VdFq.js";import{_ as V}from"./FSSpan-Di50moR2.js";import{F as j}from"./FSImage-CcZagSLS.js";import{F as K}from"./FSTile-D5AdGt7U.js";import{F as J}from"./FSButtonEditIcon-BNqtsvgz.js";import{F as E}from"./FSButton-v1WOpc1k.js";import{C}from"./useColors-Bs2u1_6J.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSButtonRemoveIcon-LNYAmkZx.js";import{f as Q}from"./filter-C1K_d8Vd.js";const D=v({name:"FSButtonCopyIcon",components:{FSButton:E},setup(){return{ColorEnum:C}}});function W(e,r,l,S,F,d){return a(),t(E,I({icon:"mdi-drag",variant:"icon"},e.$attrs),null,16)}const X=$(D,[["render",W]]);D.__docgenInfo={displayName:"FSButtonCopyIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonDragIcon.vue"]};const L=v({name:"FSSimpleListItem",components:{FSRow:y,FSTile:K,FSIcon:R,FSSpan:V,FSImage:j,FSButtonEditIcon:J,FSButtonDragIcon:X,FSButtonRemoveIcon:M},props:{tileProps:{type:Object,required:!1,default:()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:void 0},id:{type:String,required:!0},label:{type:String,required:!0},icon:{type:String,required:!1},imageId:{type:String,required:!1}},emits:["click:edit","click:remove"]});function Y(e,r,l,S,F,d){const w=s("FSButtonDragIcon"),c=s("FSImage"),h=s("FSButtonEditIcon"),o=s("FSButtonRemoveIcon"),n=s("FSTile");return a(),t(n,I(e.$props.tileProps,{width:e.$props.width,height:"fit-content",editable:!1}),{default:i(()=>[k(e.$slots,"item",{item:{label:e.label,icon:e.icon,imageId:e.imageId,id:e.id}},()=>[g(y,{align:"center-left",height:"24px",wrap:!1},{default:i(()=>[e.showDraggable?(a(),t(w,{key:0})):f("",!0),k(e.$slots,"itemContent",{item:{label:e.label,icon:e.icon,imageId:e.imageId,id:e.id}},()=>[e.$props.imageId?(a(),t(c,{key:0,width:"24px",height:"24px",imageId:e.$props.imageId,thumbnail:!0},null,8,["imageId"])):e.$props.icon?(a(),t(R,{key:1,size:"24px",icon:e.$props.icon},null,8,["icon"])):f("",!0),g(V,{font:"text-overline"},{default:i(()=>[H(A(e.$props.label),1)]),_:1})]),e.showEdit||e.showRemove?(a(),t(y,{key:1,align:"center-right",wrap:!1},{default:i(()=>[e.showEdit?(a(),t(h,{key:0,onClick:r[0]||(r[0]=N=>e.$emit("click:edit",e.$props.id))})):f("",!0),e.showRemove?(a(),t(o,{key:1,onClick:r[1]||(r[1]=N=>e.$emit("click:remove",e.$props.id))})):f("",!0)]),_:1})):f("",!0)]),_:3})])]),_:3},16,["width"])}const Z=$(L,[["render",Y]]);L.__docgenInfo={displayName:"FSSimpleListItem",exportName:"default",description:"",tags:{},props:[{name:"tileProps",type:{name:"Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"imageId",type:{name:"string | null"},required:!1}],events:[{name:"click:edit"},{name:"click:remove"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"itemContent",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleListItem.vue"]};const P=v({name:"FSSimpleList",components:{FSRow:y,FSCol:b,FSFadeOut:q,FSLoader:z,FSSlideGroup:B,FSSearchField:U,FSSimpleListItem:Z},props:{items:{type:Array,required:!0},tileProps:{type:Function,required:!1},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},searchable:{type:Boolean,required:!1,default:!1},search:{type:String,required:!1,default:""},noFilter:{type:Boolean,required:!1,default:!1},maxHeight:{type:[Array,String,Number],required:!1,default:void 0},direction:{type:String,required:!1,default:"column"},itemLabel:{type:String,required:!1,default:"label"},loading:{type:Boolean,required:!1,default:!1}},emits:["click:edit","click:remove","update:search"],setup(e,{emit:r}){const l=O(e.search),S=T(()=>l.value?Q(e.items,l.value):e.items),F=d=>{e.noFilter?r("update:search",d):l.value=d};return G(()=>e.search,d=>{l.value=d}),{actualSearch:l,filteredItems:S,ColorEnum:C,onSearch:F}}});function _(e,r,l,S,F,d){const w=s("FSSearchField"),c=s("FSLoader"),h=s("FSSimpleListItem");return a(),t(b,{gap:"12px"},{default:i(()=>[e.$props.searchable?(a(),t(w,{key:0,hideHeader:!0,modelValue:e.actualSearch,"onUpdate:modelValue":e.onSearch},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.$props.direction=="column"?(a(),t(q,{key:1,maxHeight:e.$props.maxHeight,maskHeight:0},{default:i(()=>[g(b,null,{default:i(()=>[e.$props.loading?(a(),u(p,{key:0},m(4,o=>g(c,{key:o,width:"100%",height:"50px"})),64)):(a(!0),u(p,{key:1},m(e.filteredItems,o=>(a(),t(h,{key:o.id,id:o.id,label:o[e.$props.itemLabel??"label"],icon:o.icon,imageId:o.imageId,showEdit:e.$props.showEdit,showRemove:e.$props.showRemove,showDraggable:e.$props.showDraggable,tileProps:e.$props.tileProps?e.$props.tileProps(o):void 0,width:"100%","onClick:edit":r[0]||(r[0]=n=>e.$emit("click:edit",n)),"onClick:remove":r[1]||(r[1]=n=>e.$emit("click:remove",n))},null,8,["id","label","icon","imageId","showEdit","showRemove","showDraggable","tileProps"]))),128))]),_:1})]),_:1},8,["maxHeight"])):e.$props.direction=="row"?(a(),t(y,{key:2},{default:i(()=>[e.$props.loading?(a(),u(p,{key:0},m(4,o=>g(c,{key:o,width:"100%",height:"50px"})),64)):(a(!0),u(p,{key:1},m(e.filteredItems,o=>(a(),t(h,{key:o.id,id:o.id,label:o[e.$props.itemLabel??"label"],icon:o.icon,imageId:o.imageId,showEdit:e.$props.showEdit,showRemove:e.$props.showRemove,showDraggable:e.$props.showDraggable,tileProps:e.$props.tileProps?e.$props.tileProps(o):void 0,width:"fit-content","onClick:edit":r[2]||(r[2]=n=>e.$emit("click:edit",n)),"onClick:remove":r[3]||(r[3]=n=>e.$emit("click:remove",n))},null,8,["id","label","icon","imageId","showEdit","showRemove","showDraggable","tileProps"]))),128))]),_:1})):(a(),t(B,{key:3},{default:i(()=>[e.$props.loading?(a(),u(p,{key:0},m(4,o=>g(c,{key:o,width:"100%",height:"50px"})),64)):(a(!0),u(p,{key:1},m(e.filteredItems,o=>(a(),t(h,{key:o.id,id:o.id,label:o[e.$props.itemLabel??"label"],icon:o.icon,imageId:o.imageId,showEdit:e.$props.showEdit,showRemove:e.$props.showRemove,showDraggable:e.$props.showDraggable,tileProps:e.$props.tileProps?e.$props.tileProps(o):void 0,width:"fit-content","onClick:edit":r[4]||(r[4]=n=>e.$emit("click:edit",n)),"onClick:remove":r[5]||(r[5]=n=>e.$emit("click:remove",n))},null,8,["id","label","icon","imageId","showEdit","showRemove","showDraggable","tileProps"]))),128))]),_:1}))]),_:1})}const he=$(P,[["render",_]]);P.__docgenInfo={displayName:"FSSimpleList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{id: string, label?: string, icon?: string, imageId?: string | null, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"search",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"noFilter",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"direction",values:["row","column","slided"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"column"'}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:edit"},{name:"click:remove"},{name:"update:search"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleList.vue"]};export{he as F};