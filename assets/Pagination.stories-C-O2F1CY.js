import{d as S,c as u,z as o,A as x,B as w,O as c,C as g,N as V,P as _,F as B}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as b}from"./FSRow-CVY2l52N.js";import{C as n,u as C}from"./useColors-DlnF7i6T.js";import{s as d}from"./css-DLfrm0pR.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSButton-BNq-0lOE.js";import{F as q}from"./FSText-DyldgdXP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./FSCol-YmDykHL-.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-D23Cpf0F.js";import"./VIcon-BIpY_noq.js";const v=S({name:"FSPagination",components:{FSRow:b},props:{width:{type:[Array,String,Number],required:!1,default:null},gap:{type:[Array,String,Number],required:!1,default:"4px"},pages:{type:Number,required:!1,default:1},modelValue:{type:Number,required:!1,default:0},color:{type:String,required:!1,default:n.Dark}},setup(e){const{getColors:a}=C(),r=u(()=>a(e.color)),i=a(n.Light),l=a(n.Dark);return{style:u(()=>{switch(e.color){case n.Light:case n.Dark:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":i.dark,"--fs-pagination-active-background-color":l.base};default:return{"--fs-pagination-page-width":`calc(100% / ${e.pages} - ${d(e.gap)}`,"--fs-pagination-background-color":r.value.light,"--fs-pagination-active-background-color":r.value.base}}}),classes:t=>{const p=["fs-pagination-page"];return t<=e.modelValue&&p.push("fs-pagination-active-page"),p}}}});function N(e,a,r,i,l,k){return o(),x(b,{class:"fs-pagination",align:"center-center",width:e.$props.width,gap:e.$props.gap,style:c(e.style)},{default:w(()=>[(o(!0),g(B,null,V(e.$props.pages,(F,t)=>(o(),g("div",{class:_(e.classes(t)),style:c(e.style),key:t},null,6))),128))]),_:1},8,["width","gap","style"])}const h=P(v,[["render",N]]);v.__docgenInfo={displayName:"FSPagination",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"4px"'}},{name:"pages",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"modelValue",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPagination.vue"]};const Z={title:"Foundation/Shared/Pagination",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{page1:0,pages1:3}},render:(e,{argTypes:a})=>({components:{FSPagination:h,FSButton:$,FSText:q},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    `})};var m,f,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      page1: 0,
      pages1: 3
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPagination,
      FSButton,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ee=["Variations"];export{s as Variations,ee as __namedExportsOrder,Z as default};