import{a as I}from"./index-B-lxVbXh.js";import{F as h}from"./FSButton-CxA5c6KR.js";import{d as f,c as E,B as F,m as S,I as V,J as v}from"./vue.esm-bundler-B9lxvfDw.js";import{F as n}from"./FSEditImageUI-bj9opnjy.js";import{u as b,a as U}from"./useImages-CXY-OT-0.js";import{u as y}from"./useAppAuthToken-Cnww6a6j.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";import"./FSButtonFileMini-BBor-vgL.js";import"./useFiles-DMwS4DK9.js";import"./base-CmdGny12.js";import"./FSImageUI-Dstvh29N.js";import"./FSLoader-FkDR4IbG.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./VImg-UzuohEtG.js";import"./rounded-BrvRf1BO.js";import"./transition-Dh_EAQcC.js";import"./index-Dli51uy9.js";import"./FSText-DZJhh1AD.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";const p=f({name:"FSEditImage",components:{FSEditImageUI:n},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=b(),{authToken:o}=y(),i=E(()=>e.imageId?U(e.imageId,o.value):null);return{image:t,source:i,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function w(e,a,t,o,i,u){const g=V("FSEditImageUI");return v(),F(g,S({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=c=>e.$emit("update:imageId",c))},e.$attrs),null,16,["source","blurHash","onError"])}const l=_(p,[["render",w]]);p.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const Se={title:"Foundation/Shared/EditImage/EditImage",component:l,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:n},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":I("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:l,FSButton:h},props:Object.keys(a),setup(){return{args:e}},template:`
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
      />`})};var m,d,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Ve=["Default"];export{r as Default,Ve as __namedExportsOrder,Se as default};
