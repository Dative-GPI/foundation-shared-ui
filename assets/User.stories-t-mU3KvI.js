import{d as v,c as u,E as d,H as r,m as U,L as f,M as g,k as t,N as s,O as p,K as _}from"./vue.esm-bundler-NVdFPFZB.js";import{F as q}from"./FSImage-BlYox72k.js";import{_ as a}from"./FSSpan-B28b2m0n.js";import{F}from"./FSTile-D4h9K5XP.js";import{F as y}from"./FSCol-KRtq6OYO.js";import{F as N}from"./FSRow-Dg2RhQyl.js";import{u as T}from"./useBreakpoints-DO2FQykY.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as w,b as C}from"./properties-Qw-O9fbT.js";import{F as k}from"./FSCard-ghpSlWxI.js";import"./FSImageUI-CdvzmuqZ.js";import"./FSLoader-DOgbrYCd.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./useSlots-DEXetpJf.js";import"./FSCheckbox-D5kCrb66.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./index-ByfGjSW7.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";const I=v({name:"FSUserTileUI",components:{FSImage:q,FSSpan:a,FSTile:F,FSCol:y,FSRow:N},props:{imageId:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0},phoneNumber:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:n}=T(),m=u(()=>e.imageId?n.value?90:100:0),l=u(()=>e.imageId?`calc(100% - ${m.value}px - 24px)`:"100%");return{imageSize:m,infoWidth:l}}});function D(e,n,m,l,x,B){const V=f("FSImage"),$=f("FSTile");return g(),d($,U({width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(N,{wrap:!1,gap:"24px",height:"fill",align:"center-left"},{default:r(()=>[t(y,{width:e.infoWidth},{default:r(()=>[t(a,{font:"text-button"},{default:r(()=>[s(p(`${e.$props.firstName} ${e.$props.lastName}`),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[s(p(e.$props.email),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[s(p(e.$props.phoneNumber),1)]),_:1})]),_:1},8,["width"]),e.$props.imageId?(g(),d(V,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):_("",!0)]),_:1})]),_:1},16,["width","modelValue"])}const i=b(I,[["render",D]]);I.__docgenInfo={displayName:"FSUserTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"firstName",type:{name:"string"},required:!0},{name:"lastName",type:{name:"string"},required:!0},{name:"email",type:{name:"string"},required:!0},{name:"phoneNumber",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserTileUI.vue"]};const Be={title:"Shared/Components/Tiles/User",component:i,tags:["autodocs"],argTypes:{...C([F,k],i),...w(i)}},o={args:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},render:e=>({components:{FSUserTileUI:i},setup(){return{args:e}},template:`
    <FSUserTileUI
      v-model="args.modelValue"
      v-bind="args"
    />`})};var c,S,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  render: args => ({
    components: {
      FSUserTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSUserTileUI
      v-model="args.modelValue"
      v-bind="args"
    />\`
  })
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const ze=["Default"];export{o as Default,ze as __namedExportsOrder,Be as default};
