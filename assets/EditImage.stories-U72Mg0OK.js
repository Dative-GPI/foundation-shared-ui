import{a as c}from"./chunk-MZXVCX43-CvRfcaG5.js";import{F as I}from"./FSButton-CqjbOz0n.js";import{d as h,c as f,z as E,m as F,G as S,H as V}from"./vue.esm-bundler-PTWG9x2X.js";import{F as d}from"./FSEditImageUI-Dbj_Oh3L.js";import{u as v,a as b}from"./useImages-B58XKdkx.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./FSCard-CRoBY3gL.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSRow-DPcQMiM9.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSIcon-DQMOs0-E.js";import"./FSButtonFileMini-Cn1qtM5y.js";import"./useAppAuthToken-3n1rBHGl.js";import"./base-CmdGny12.js";import"./FSImageUI-Cd9yfhhj.js";import"./FSLoader-DnFcYh1x.js";import"./dimensions-v18atrWI.js";import"./elevation-CrSwNJwg.js";import"./locale-Cz_4DTJh.js";import"./VImg-CBGPWIu-.js";import"./rounded-BbPXzFqc.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./FSText-Da5isN0I.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";const s=h({name:"FSEditImage",components:{FSEditImageUI:d},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=v(),o=f(()=>e.imageId?b(e.imageId):null);return{image:t,source:o,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function y(e,a,t,o,l,_){const u=S("FSEditImageUI");return V(),E(u,F({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=g=>e.$emit("update:imageId",g))},e.$attrs),null,16,["source","blurHash","onError"])}const p=U(s,[["render",y]]);s.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const he={title:"Foundation/Shared/EditImage/EditImage",component:p,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:d},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":c("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:p,FSButton:I},props:Object.keys(a),setup(){return{args:e}},template:`
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
