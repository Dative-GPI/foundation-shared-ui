import{d as S,z as a,C as r,m as F,k as y,G as k,H as t,P as b,E as n,I as l,J as i}from"./vue.esm-bundler-PTWG9x2X.js";import{F as s}from"./FSClickable-TnS9e2Ej.js";import{F as d}from"./FSCard-DkDNRB06.js";import{F as u}from"./FSIcon-Df5FR-8G.js";import{F as v}from"./FSText-CMVh5ns4.js";import{_ as f}from"./FSRow-DPcQMiM9.js";import{C as $}from"./useColors-CHEA4ij4.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./theme-D6MQh39g.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSCol-qfATdd_b.js";import"./useSlots-BG_ZhEqK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:u,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function _(e,w,V,q,N,x){const C=k("FSText");return t(),a(y(e.$attrs.onClick?e.FSClickable:e.FSCard),F({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(u,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.icon),1)]),_:1},8,["color"])):n("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[l(i(e.$props.label),1)]),_:1},8,["color"])):n("",!0)]),_:1})]),_:1},16,["height","width"])}const g=P(h,[["render",_]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const Z={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
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
