import{d as S,B as a,E as r,m as F,k as y,I as k,J as t,z as b,H as n,A as l,K as i}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as s}from"./FSClickable-Bc_GnmK1.js";import{F as d}from"./FSCard-CoFTtRNJ.js";import{F as u}from"./FSIcon-Dy1KglKQ.js";import{F as v}from"./FSText-BvUMyUbP.js";import{_ as f}from"./FSRow-udQVJR1p.js";import{C as $}from"./useColors-CaMUbg8a.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./theme-CCooKRqg.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSCol-DIPgj7wU.js";import"./useSlots-BgbXyH5p.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:u,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function w(e,P,V,q,N,x){const C=k("FSText");return t(),a(y(e.$attrs.onClick?e.FSClickable:e.FSCard),F({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.icon),1)]),_:1},8,["color"])):n("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.label),1)]),_:1},8,["color"])):n("",!0)]),_:1})]),_:1},16,["height","width"])}const g=_(h,[["render",w]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Z={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
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
