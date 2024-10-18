import{d as S,y as F,z as a,A as t,C as r,m as y,q as k,N as b,H as n,I as l,F as i}from"./vue.esm-bundler-l-siv0w9.js";import{F as s}from"./FSClickable-B8_y_vmt.js";import{F as d}from"./FSCard-Cocsqd0c.js";import{F as m}from"./FSIcon-DfqW6nqQ.js";import{F as v}from"./FSText-4yVUx1mI.js";import{_ as f}from"./FSRow-BjeBkMPV.js";import{C as $}from"./useColors-Bs2u1_6J.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSCol-DD5MeAoT.js";import"./useSlots-C_N_WAus.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=S({name:"FSCardPlaceholder",components:{FSClickable:s,FSCard:d,FSIcon:m,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},setup(){return{ColorEnum:$,FSClickable:s,FSCard:d}}});function q(e,w,P,V,N,x){const C=F("FSText");return a(),t(k(e.$attrs.onClick?e.FSClickable:e.FSCard),y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0},e.$attrs),{default:r(()=>[b(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(a(),t(m,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.icon),1)]),_:1},8,["color"])):i("",!0),e.$props.label?(a(),t(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[n(l(e.$props.label),1)]),_:1},8,["color"])):i("",!0)]),_:1})]),_:1},16,["height","width"])}const g=_(h,[["render",q]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const X={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
            @click="console.log('clicked')"
        />
    </div>`})};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Y=["Variations"];export{o as Variations,Y as __namedExportsOrder,X as default};