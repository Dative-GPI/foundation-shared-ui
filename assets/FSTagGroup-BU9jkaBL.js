import{d as c,z as a,E as t,A as o,C as u,L as p,m as i,F as d,G as n,O as f,K as m}from"./vue.esm-bundler-l-siv0w9.js";import{F as v}from"./FSWrapGroup-cmIYWMlH.js";import{F as s}from"./FSTag-ErOwxBbY.js";import{C as $}from"./useColors-Bs2u1_6J.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as b}from"./FSSlideGroup-BC2CNv0p.js";const g=c({name:"FSTagGroup",components:{FSWrapGroup:v,FSTag:s},props:{tags:{type:Array,required:!1,default:()=>[]},variant:{type:String,required:!1,default:"wrap"},tagVariant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:$.Light},editable:{type:Boolean,required:!1,default:!0}}});function F(e,S,q,V,h,k){return a(),t(n,null,[e.$props.variant==="wrap"?(a(),o(v,p(i({key:0},e.$attrs)),{default:u(()=>[(a(!0),t(n,null,f(e.$props.tags,(r,l)=>(a(),o(s,{variant:e.$props.tagVariant,editable:e.$props.editable,color:e.$props.color,label:r,key:l,onRemove:()=>e.$emit("remove",r)},null,8,["variant","editable","color","label","onRemove"]))),128)),m(e.$slots,"default")]),_:3},16)):d("",!0),e.$props.variant==="slide"?(a(),o(b,p(i({key:1},e.$attrs)),{default:u(()=>[(a(!0),t(n,null,f(e.$props.tags,(r,l)=>(a(),o(s,{variant:e.$props.tagVariant,editable:e.$props.editable,color:e.$props.color,label:r,key:l,onRemove:()=>e.$emit("remove",r)},null,8,["variant","editable","color","label","onRemove"]))),128)),m(e.$slots,"default")]),_:3},16)):d("",!0)],64)}const L=y(g,[["render",F]]);g.__docgenInfo={displayName:"FSTagGroup",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"variant",values:["wrap","slide"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"wrap"'}},{name:"tagVariant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTagGroup.vue"]};export{L as F};