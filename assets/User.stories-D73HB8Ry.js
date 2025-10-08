import{d as $,c as u,B as d,E as r,m as v,I as f,J as c,k as t,H as U,A as m,K as s}from"./vue.esm-bundler-CocPPKUI.js";import{F as q}from"./FSImage-BWKdCiW7.js";import{_ as a}from"./FSSpan-DrSEJIpr.js";import{F}from"./FSTile-Cm9Anp65.js";import{F as y}from"./FSCol-79-COv64.js";import{_ as I}from"./FSRow-BvJ7lU5E.js";import{u as w}from"./useBreakpoints-DZlz3-56.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,b as C}from"./properties-Qw-O9fbT.js";import{F as k}from"./FSCard-JQNJPDhp.js";import"./FSImageUI-CFqUtuMS.js";import"./FSLoader-BeIlBGG_.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./color-yBCdco2I.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./VImg-BaN5zAl6.js";import"./rounded-Cjf6r1y4.js";import"./transition-BuKnRONq.js";import"./index-lkzvYdnq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./useSlots-D4bv69lA.js";import"./FSClickable-6FPdriKA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSCheckbox-ChCYq6Yz.js";import"./FSIcon-CKNHHVc2.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./density-DZuLaB-B.js";import"./proxiedModel-DvocDLKO.js";import"./index-BgX1FNqJ.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./index-DfBdMsnv.js";const N=$({name:"FSUserTileUI",components:{FSImage:q,FSSpan:a,FSTile:F,FSCol:y,FSRow:I},props:{imageId:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0},phoneNumber:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:p}=w(),i=u(()=>e.imageId?p.value?90:100:0),l=u(()=>e.imageId?`calc(100% - ${i.value}px - 24px)`:"100%");return{imageSize:i,infoWidth:l}}});function B(e,p,i,l,D,x){const _=f("FSImage"),V=f("FSTile");return c(),d(V,v({width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(I,{wrap:!1,gap:"24px",height:"fill",align:"center-left"},{default:r(()=>[t(y,{width:e.infoWidth},{default:r(()=>[t(a,{font:"text-button"},{default:r(()=>[m(s(`${e.$props.firstName} ${e.$props.lastName}`),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[m(s(e.$props.email),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[m(s(e.$props.phoneNumber),1)]),_:1})]),_:1},8,["width"]),e.$props.imageId?(c(),d(_,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):U("",!0)]),_:1})]),_:1},16,["width","modelValue"])}const n=T(N,[["render",B]]);N.__docgenInfo={displayName:"FSUserTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"firstName",type:{name:"string"},required:!0},{name:"lastName",type:{name:"string"},required:!0},{name:"email",type:{name:"string"},required:!0},{name:"phoneNumber",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserTileUI.vue"]};const ke={title:"Foundation/Shared/Tiles/User",component:n,tags:["autodocs"],argTypes:{...C([F,k],n),...b(n)}},o={args:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},render:e=>({components:{FSUserTileUI:n},setup(){return{args:e}},template:`
    <FSUserTileUI
      v-model="args.modelValue"
      v-bind="args"
    />`})};var g,S,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const Be=["Default"];export{o as Default,Be as __namedExportsOrder,ke as default};
