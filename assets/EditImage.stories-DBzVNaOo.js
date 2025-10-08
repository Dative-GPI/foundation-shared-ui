import{a as I}from"./chunk-MZXVCX43-CvRfcaG5.js";import{F as h}from"./FSButton-VjwKfCr9.js";import{d as f,c as E,B as F,m as S,I as V,J as v}from"./vue.esm-bundler-CocPPKUI.js";import{F as s}from"./FSEditImageUI-CSV-2-6E.js";import{u as b,a as U}from"./useImages-ImHO88Nc.js";import{u as y}from"./useAppAuthToken-DuOSULz9.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./FSCard-JQNJPDhp.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./VProgressCircular-BMkR7ln7.js";import"./color-yBCdco2I.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-CKNHHVc2.js";import"./FSButtonFileMini-C7ozO9I2.js";import"./useFiles-h-y93sQm.js";import"./base-CmdGny12.js";import"./FSImageUI-CFqUtuMS.js";import"./FSLoader-BeIlBGG_.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./VImg-BaN5zAl6.js";import"./rounded-Cjf6r1y4.js";import"./transition-BuKnRONq.js";import"./index-lkzvYdnq.js";import"./FSText-U805njuH.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";const p=f({name:"FSEditImage",components:{FSEditImageUI:s},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=b(),{authToken:o}=y(),n=E(()=>e.imageId?U(e.imageId,o.value):null);return{image:t,source:n,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function w(e,a,t,o,n,u){const g=V("FSEditImageUI");return v(),F(g,S({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=c=>e.$emit("update:imageId",c))},e.$attrs),null,16,["source","blurHash","onError"])}const l=_(p,[["render",w]]);p.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const Ee={title:"Foundation/Shared/EditImage/EditImage",component:l,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:s},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":I("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:l,FSButton:h},props:Object.keys(a),setup(){return{args:e}},template:`
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
      />`})};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Fe=["Default"];export{r as Default,Fe as __namedExportsOrder,Ee as default};
