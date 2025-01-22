import{d as S,A as F,B as a,D as r,j as y,v as k,I as t,P as b,J as n,K as l,G as i}from"./vue.esm-bundler-0BaZj8Cy.js";import{F as s}from"./FSClickable-CbOr5F2S.js";import{F as d}from"./FSCard-Dlw97Dqr.js";import{F as u}from"./FSIcon-BwW5Hq8i.js";import{F as v}from"./FSText-BX0Tt0y-.js";import{_ as f}from"./FSRow-CAJM3FZ0.js";import{C as $}from"./useColors-SBQj5l4a.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./theme-DvDKaioG.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSCol-D35grUmj.js";import"./useSlots-I9K15ysi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:u,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function _(e,w,V,q,N,x){const C=F("FSText");return t(),a(k(e.$attrs.onClick?e.FSClickable:e.FSCard),y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.icon),1)]),_:1},8,["color"])):i("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.label),1)]),_:1},8,["color"])):i("",!0)]),_:1})]),_:1},16,["height","width"])}const g=P(h,[["render",_]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Z={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
        />
    </div>`})};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSCardPlaceholder
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
        />
    </div>\`
  })
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ee=["Variations"];export{o as Variations,ee as __namedExportsOrder,Z as default};
