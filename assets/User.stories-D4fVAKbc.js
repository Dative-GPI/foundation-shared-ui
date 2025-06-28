import{d as $,c as u,B as d,E as r,m as v,I as f,J as c,z as t,H as U,A as m,K as s}from"./vue.esm-bundler-BB--BfRN.js";import{F as q}from"./FSImage-D2nwrOf-.js";import{_ as a}from"./FSSpan-BndtI8AP.js";import{F}from"./FSTile-pg-_mccU.js";import{F as y}from"./FSCol-BU2zndN-.js";import{_ as I}from"./FSRow-Bdc52rY8.js";import{u as w}from"./useBreakpoints-f5uwzDhq.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,b as C}from"./properties-Qw-O9fbT.js";import{F as k}from"./FSCard-CiGLNn7K.js";import"./FSImageUI-B_bAqKap.js";import"./FSLoader-Cf5HtYZd.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./color-DIvEt_AX.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./VImg-DcLzuYY5.js";import"./rounded-BKWlZxOJ.js";import"./transition-GJJG9yri.js";import"./index--Ye8kcMr.js";import"./useImages-fX-VpO9W.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DmpXug6S.js";import"./useSlots-COLyvmal.js";import"./FSClickable-CwRD7A4m.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSCheckbox-ti2pWVdy.js";import"./FSIcon-BKav6CVU.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./density-Xpr_P7nk.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-8zgUIpZ9.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./index-9ysw5oGg.js";const N=$({name:"FSUserTileUI",components:{FSImage:q,FSSpan:a,FSTile:F,FSCol:y,FSRow:I},props:{imageId:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0},phoneNumber:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{isMobileSized:p}=w(),i=u(()=>e.imageId?p.value?90:100:0),l=u(()=>e.imageId?`calc(100% - ${i.value}px - 24px)`:"100%");return{imageSize:i,infoWidth:l}}});function B(e,p,i,l,D,x){const _=f("FSImage"),V=f("FSTile");return c(),d(V,v({width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:r(()=>[t(I,{wrap:!1,width:e.infoWidth,gap:"24px",height:"fill",align:"center-left"},{default:r(()=>[t(y,null,{default:r(()=>[t(a,{font:"text-button"},{default:r(()=>[m(s(`${e.$props.firstName} ${e.$props.lastName}`),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[m(s(e.$props.email),1)]),_:1}),t(a,{font:"text-overline"},{default:r(()=>[m(s(e.$props.phoneNumber),1)]),_:1})]),_:1}),e.$props.imageId?(c(),d(_,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):U("",!0)]),_:1},8,["width"])]),_:1},16,["width","modelValue"])}const n=T(N,[["render",B]]);N.__docgenInfo={displayName:"FSUserTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"firstName",type:{name:"string"},required:!0},{name:"lastName",type:{name:"string"},required:!0},{name:"email",type:{name:"string"},required:!0},{name:"phoneNumber",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserTileUI.vue"]};const Ce={title:"Foundation/Shared/Tiles/User",component:n,tags:["autodocs"],argTypes:{...C([F,k],n),...b(n)}},o={args:{firstName:"John",lastName:"Doe",email:"john.doe@example.com"},render:e=>({components:{FSUserTileUI:n},setup(){return{args:e}},template:`
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
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const ke=["Default"];export{o as Default,ke as __namedExportsOrder,Ce as default};
