import{d as F,z as l,A as t,B as a,C as r,m as y,v as k,G as i,H as s,E as d}from"./vue.esm-bundler-BwDfg4wG.js";import{F as b}from"./FSClickable-Y_T-Cq-9.js";import{F as m}from"./FSIcon-ChaYv6Le.js";import{F as v}from"./FSText-CwwFvnOv.js";import{F as f}from"./FSRow-k5pgBhR1.js";import{C as $}from"./useColors-tmPxRJAs.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./tag-Ceq3l71M.js";import"./VIcon-D-JUvW-a.js";import"./useSlots-2JqallzA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const h=F({name:"FSCardPlaceholder",components:{FSClickable:b,FSIcon:m,FSText:v,FSRow:f},props:{height:{type:[Array,String,Number],required:!1,default:"fit-content"},width:{type:[Array,String,Number],required:!1,default:"100%"},icon:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["click"],setup(){return{ColorEnum:$}}});function V(e,n,_,q,w,x){const C=l("FSText"),S=l("FSClickable");return t(),a(S,y({borderStyle:"dashed",padding:"24px",height:e.$props.height,width:e.$props.width,border:!0,onClick:n[0]||(n[0]=N=>e.$emit("click"))},e.$attrs),{default:r(()=>[k(f,{align:"center-center"},{default:r(()=>[e.$props.icon?(t(),a(m,{key:0,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.icon),1)]),_:1},8,["color"])):d("",!0),e.$props.label?(t(),a(C,{key:1,color:e.ColorEnum.Light,variant:"dark"},{default:r(()=>[i(s(e.$props.label),1)]),_:1},8,["color"])):d("",!0)]),_:1})]),_:1},16,["height","width"])}const g=P(h,[["render",V]]);h.__docgenInfo={displayName:"FSCardPlaceholder",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCardPlaceholder.vue"]};const W={title:"Foundation/Shared/CardPlaceholder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSCardPlaceholder:g},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`})};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSCardPlaceholder
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>\`
  })
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const X=["Variations"];export{o as Variations,X as __namedExportsOrder,W as default};