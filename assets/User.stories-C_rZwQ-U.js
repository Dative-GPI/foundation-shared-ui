import{d as $,c as u,B as d,D as r,m as q,I as f,J as c,q as t,K as n,L as s,H as v}from"./vue.esm-bundler-D5n7z5qz.js";import{F as U}from"./FSImage-EC-hlP5h.js";import{_ as a}from"./FSSpan-BN7wkmby.js";import{F}from"./FSTile-BiFTCuMc.js";import{F as y}from"./FSCol-D_lbFmZy.js";import{_ as I}from"./FSRow-DIk8KFbG.js";import{u as w}from"./useBreakpoints-CEzKC_o8.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,b as C}from"./properties-Qw-O9fbT.js";import{F as D}from"./FSCard-DENSLTM_.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./color-CUHqxR_J.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./useRender-Dce1Ng4u.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./useSlots-CoecqEnp.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";const N=$({name:"FSUserTileUI",components:{FSImage:U,FSSpan:a,FSTile:F,FSCol:y,FSRow:I},props:{imageId:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0},phoneNumber:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:p}=w(),m=u(()=>e.imageId?p.value?90:100:0),l=u(()=>e.imageId?`calc(100% - ${m.value}px - 24px)`:"100%");return{imageSize:m,infoWidth:l}}});function k(e,p,m,l,B,x){const _=f("FSImage"),V=f("FSTile");return c(),d(V,q({width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(I,{wrap:!1,gap:"24px",height:"fill",align:"center-left"},{default:r(()=>[t(y,{width:e.infoWidth},{default:r(()=>[t(a,{font:"text-button"},{default:r(()=>[n(s(`${e.$props.firstName} ${e.$props.lastName}`),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[n(s(e.$props.email),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[n(s(e.$props.phoneNumber),1)]),_:1})]),_:1},8,["width"]),e.$props.imageId?(c(),d(_,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):v("",!0)]),_:1})]),_:1},16,["width","modelValue"])}const i=T(N,[["render",k]]);N.__docgenInfo={displayName:"FSUserTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"firstName",type:{name:"string"},required:!0},{name:"lastName",type:{name:"string"},required:!0},{name:"email",type:{name:"string"},required:!0},{name:"phoneNumber",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserTileUI.vue"]};const Be={title:"Foundation/Shared/Tiles/User",component:i,tags:["autodocs"],argTypes:{...C([F,D],i),...b(i)}},o={args:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},render:e=>({components:{FSUserTileUI:i},setup(){return{args:e}},template:`
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
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const xe=["Default"];export{o as Default,xe as __namedExportsOrder,Be as default};
