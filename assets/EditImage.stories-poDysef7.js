import{a as I}from"./index-B-lxVbXh.js";import{F as h}from"./FSButton-DHeuA-BH.js";import{d as f,c as E,E as F,m as S,L as V,M as v}from"./vue.esm-bundler-D_gXonxt.js";import{F as n}from"./FSEditImageUI-Dgnqvl-x.js";import{u as b,a as U}from"./useImages-ns1hGlq_.js";import{u as y}from"./useAppAuthToken-DU8AzEWU.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./FSSpan-ap0CpdXZ.js";import"./FSIcon-B9MXbR5l.js";import"./css-Bznx04uW.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSCol-C3EJfcJX.js";import"./FSButtonFileMini-BwPB2m74.js";import"./useFiles-Cn1jDlTP.js";import"./base-CmdGny12.js";import"./FSCardPlaceholder-CabEqpKY.js";import"./FSImageUI-C_EkTaPS.js";import"./FSLoader-CdctsmAF.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./VImg-ufpttNgj.js";import"./rounded-yhlSUX6x.js";import"./transition-CHyhkthg.js";import"./index-CpkyVf-S.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";const p=f({name:"FSEditImage",components:{FSEditImageUI:n},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=b(),{authToken:o}=y(),i=E(()=>e.imageId?U(e.imageId,o.value):null);return{image:t,source:i,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function w(e,a,t,o,i,u){const g=V("FSEditImageUI");return v(),F(g,S({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=c=>e.$emit("update:imageId",c))},e.$attrs),null,16,["source","blurHash","onError"])}const l=_(p,[["render",w]]);p.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const be={title:"Foundation/Shared/EditImage/EditImage",component:l,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:n},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":I("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:l,FSButton:h},props:Object.keys(a),setup(){return{args:e}},template:`
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
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Ue=["Default"];export{r as Default,Ue as __namedExportsOrder,be as default};
