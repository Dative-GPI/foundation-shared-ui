import{d as v,c as u,E as d,H as r,m as U,L as f,M as g,k as t,N as s,O as p,K as _}from"./vue.esm-bundler-C5-CUMHT.js";import{F as q}from"./FSImage-CTV3ARHO.js";import{_ as a}from"./FSSpan-D6aG51_c.js";import{F}from"./FSTile-DmLtcb1O.js";import{F as y}from"./FSCol-DedFW0nl.js";import{F as N}from"./FSRow-C8aYwBu-.js";import{u as T}from"./useBreakpoints-pPMhsL5T.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as w,b as C}from"./properties-Qw-O9fbT.js";import{F as k}from"./FSCard-DYe1QD8j.js";import"./FSImageUI-DrqF_CxM.js";import"./FSLoader-BTZOtjrt.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./color-D7ZCcSxD.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./useRender-_COxrB9K.js";import"./VImg-DXeUU_wB.js";import"./rounded-Ctowy803.js";import"./transition-CgRUW3r8.js";import"./index-B3ZVJx30.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./useSlots-ol4Nk6ew.js";import"./FSCheckbox-BwFpn-kB.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./index-pS3mXfMR.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";const I=v({name:"FSUserTileUI",components:{FSImage:q,FSSpan:a,FSTile:F,FSCol:y,FSRow:N},props:{imageId:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0},phoneNumber:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:n}=T(),m=u(()=>e.imageId?n.value?90:100:0),l=u(()=>e.imageId?`calc(100% - ${m.value}px - 24px)`:"100%");return{imageSize:m,infoWidth:l}}});function D(e,n,m,l,x,B){const V=f("FSImage"),$=f("FSTile");return g(),d($,U({width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(N,{wrap:!1,gap:"24px",height:"fill",align:"center-left"},{default:r(()=>[t(y,{width:e.infoWidth},{default:r(()=>[t(a,{font:"text-button"},{default:r(()=>[s(p(`${e.$props.firstName} ${e.$props.lastName}`),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[s(p(e.$props.email),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[s(p(e.$props.phoneNumber),1)]),_:1})]),_:1},8,["width"]),e.$props.imageId?(g(),d(V,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):_("",!0)]),_:1})]),_:1},16,["width","modelValue"])}const i=b(I,[["render",D]]);I.__docgenInfo={displayName:"FSUserTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"firstName",type:{name:"string"},required:!0},{name:"lastName",type:{name:"string"},required:!0},{name:"email",type:{name:"string"},required:!0},{name:"phoneNumber",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserTileUI.vue"]};const Be={title:"Shared/Components/Tiles/User",component:i,tags:["autodocs"],argTypes:{...C([F,k],i),...w(i)}},o={args:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},render:e=>({components:{FSUserTileUI:i},setup(){return{args:e}},template:`
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
