import{a as c}from"./chunk-MZXVCX43-5Xl3hSHf.js";import{F as I}from"./FSButton-B2X9DGvb.js";import{d as h,c as f,A as E,B as F,x as S,I as V}from"./vue.esm-bundler-CTTOvLCD.js";import{F as d}from"./FSEditImageUI-CVn8pSPF.js";import{u as v,a as b}from"./useImages-B6xLFcwg.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSIcon-yzGYQgqh.js";import"./FSButtonFileMini-DkbpoFFL.js";import"./useAppAuthToken-CysW3k_e.js";import"./base-CmdGny12.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./dimensions-DIR9-JzD.js";import"./elevation-CqdG4vF6.js";import"./locale-Guk_W035.js";import"./VImg-C1IcDibP.js";import"./rounded-5tkyiosR.js";import"./transition-C1y9a89u.js";import"./index-CK42gwlP.js";import"./FSText-zXSXSnZG.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";const s=h({name:"FSEditImage",components:{FSEditImageUI:d},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=v(),o=f(()=>e.imageId?b(e.imageId):null);return{image:t,source:o,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function y(e,a,t,o,l,_){const u=E("FSEditImageUI");return V(),F(u,S({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=g=>e.$emit("update:imageId",g))},e.$attrs),null,16,["source","blurHash","onError"])}const p=U(s,[["render",y]]);s.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const he={title:"Foundation/Shared/EditImage/EditImage",component:p,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:d},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":c("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:p,FSButton:I},props:Object.keys(a),setup(){return{args:e}},template:`
      <FSEditImage 
        :imageId="args.imageId"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />`})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageId: "1",
    modelValue: null,
    height: 96,
    width: 96,
    label: 'Edit Image',
    variant: 'standard',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue")
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEditImage,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSEditImage 
        :imageId="args.imageId"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />\`
  })
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fe=["Default"];export{r as Default,fe as __namedExportsOrder,he as default};
