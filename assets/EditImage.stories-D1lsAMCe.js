import{a as I}from"./index-B-lxVbXh.js";import{F as h}from"./FSButton-BqreeKOn.js";import{d as f,c as E,E as F,m as S,L as V,M as v}from"./vue.esm-bundler-NVdFPFZB.js";import{F as n}from"./FSEditImageUI-L6Nkqyoz.js";import{u as b,a as U}from"./useImages-CuuQm3J3.js";import{u as y}from"./useAppAuthToken-CxB5IoRP.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CtRu48qb.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./FSIcon-BcHBVf_o.js";import"./css-CUVOJ3aO.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSCol-KRtq6OYO.js";import"./FSButtonFileMini-DbALTWMI.js";import"./useFiles-CvsF8d0a.js";import"./base-CmdGny12.js";import"./FSCardPlaceholder-IEPkdBMs.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";const p=f({name:"FSEditImage",components:{FSEditImageUI:n},props:{imageId:{type:String,required:!1,default:null}},emits:["update:imageId"],setup(e){const{get:a,entity:t}=b(),{authToken:o}=y(),i=E(()=>e.imageId?U(e.imageId,o.value):null);return{image:t,source:i,onError:()=>{e.imageId&&(console.error("Error loading image",e.imageId),a(e.imageId))}}}});function w(e,a,t,o,i,u){const g=V("FSEditImageUI");return v(),F(g,S({source:e.source,blurHash:e.image,onError:e.onError,"onUpdate:source":a[0]||(a[0]=c=>e.$emit("update:imageId",c))},e.$attrs),null,16,["source","blurHash","onError"])}const l=_(p,[["render",w]]);p.__docgenInfo={displayName:"FSEditImage",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:imageId"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSEditImage.vue"]};const be={title:"Shared/Components/EditImage/EditImage",component:l,parameters:{docs:{description:{component:"EditImage will fetch the image from Foundation API by asking the gateway."}}},subcomponents:{FSEditImageUI:n},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"}}},r={args:{imageId:"1",modelValue:null,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":I("onUpdate:modelValue")},render:(e,{argTypes:a})=>({components:{FSEditImage:l,FSButton:h},props:Object.keys(a),setup(){return{args:e}},template:`
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
