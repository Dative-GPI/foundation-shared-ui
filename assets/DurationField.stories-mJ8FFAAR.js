import{r as Y,V as d,g as V,aa as z,j as G,ac as h,Y as y,P as J,p as c,o as K}from"./vue.esm-bundler-DR0_aU9U.js";import{a as L,b as Q}from"./properties-Qw-O9fbT.js";import E from"./FSNumberField-CgKAjoME.js";import{F as X}from"./FSBaseField-y2QkcP3h.js";import{_ as k}from"./FSSpan-9E7WYB2n.js";import{_ as A}from"./FSRow-C8VtPvPz.js";import{u as Z}from"./useRules-2yt7KWSA.js";import{N as q}from"./rules-tbTkbybW.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ae}from"./FSCol-B2uM4vFw.js";import"./FSTextField-tianF0jI.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./FSIcon-CBwOL1p5.js";import"./css-B9c0ZZC5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./time-DuowFvgO.js";import"./useTranslations-CDmrxgqt.js";import"./times-CqUFey1a.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-DAnuesY2.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./startOfDay-C4pDH4rb.js";const I=Y({name:"FSDurationField",components:{FSNumberField:E,FSBaseField:X,FSSpan:k,FSRow:A},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},maxDuration:{type:Number,required:!1,default:null},minDuration:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const{getMessages:p}=Z(),r=60*1e3,n=60*r,o=d(null),t=d(null),f=V(()=>{const a=[...e.rules];if(e.required&&a.push(q.required()),e.minDuration!=null){const l=Math.floor(e.minDuration/n),i=Math.floor(e.minDuration%n/r),S=l>0?`${l}h${i.toString().padStart(2,"0")}`:`${i}min`;a.push(m=>m!=null&&m>=e.minDuration||`Min. ${S}`)}if(e.maxDuration!=null){const l=Math.floor(e.maxDuration/n),i=Math.floor(e.maxDuration%n/r),S=l>0?`${l}h${i.toString().padStart(2,"0")}`:`${i}min`;a.push(m=>m!=null&&m<=e.maxDuration||`Max. ${S}`)}return a}),P=V(()=>e.messages??p(e.modelValue,f.value)),O=()=>{if(e.modelValue==null){o.value=null,t.value=null;return}o.value=Math.floor(e.modelValue/n),t.value=Math.floor(e.modelValue%n/r)},D=()=>{const a=o.value??0,l=t.value??0;s("update:modelValue",a*n+l*r)},W=a=>{o.value=a,D()},j=a=>{a=Math.min(59,Math.max(0,a??0)),t.value=a,D()};return z(()=>e.modelValue,()=>{const a=o.value??0,l=t.value??0;a*n+l*r!==(e.modelValue??0)&&O()},{immediate:!0}),{NumberRules:q,innerHours:o,innerMinutes:t,durationRules:f,messages:P,onChangeHours:W,onChangeMinutes:j}}});function ne(e,s,p,r,n,o){const t=y("FSNumberField"),f=y("FSBaseField");return J(),G(f,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,messages:e.messages},{default:h(()=>[c(A,{wrap:!1,align:"center-left"},{default:h(()=>[c(t,{suffix:"h",hideHeader:!0,modelValue:e.innerHours,disabled:e.$props.disabled,rules:[()=>e.messages.length===0||""],"onUpdate:modelValue":e.onChangeHours},null,8,["modelValue","disabled","rules","onUpdate:modelValue"]),c(k,null,{default:h(()=>[...s[0]||(s[0]=[K(":",-1)])]),_:1}),c(t,{suffix:"min",hideHeader:!0,disabled:e.$props.disabled,rules:[()=>e.messages.length===0||""],modelValue:e.innerMinutes,"onUpdate:modelValue":e.onChangeMinutes},null,8,["disabled","rules","modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","messages"])}const u=ee(I,[["render",ne]]);I.__docgenInfo={displayName:"FSDurationField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"maxDuration",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"minDuration",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDurationField.vue"]};const sa={title:"Foundation/Shared/Input fields/DurationField",component:u,tags:["autodocs"],argTypes:{...Q([E],u),...L(u)}},g={args:{modelValue:54e5},render:e=>({components:{FSDurationField:u},setup(){return{args:e}},template:`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},F={args:{modelValue:9e6,disabled:!0},render:e=>({components:{FSDurationField:u},setup(){return{args:e}},template:`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},v={args:{modelValue:72e5,minDuration:36e5,maxDuration:288e5,label:"Duration (between 1h and 8h)"},render:e=>({components:{FSDurationField:u},setup(){return{args:e}},template:`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    `})},b={args:{modelValue:0},render:e=>({components:{FSDurationField:u,FSCol:ae},setup(){const s=d(0),p=d(54e5),r=d(9e6),n=d(288e5);return{args:e,value1:s,value2:p,value3:r,value4:n}},template:`
      <FSCol gap="20px">
        <FSDurationField
          v-model="value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :required="true"
          v-model="value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :disabled="true"
          v-model="value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :minDuration="3600000"
          :maxDuration="36000000"
          v-model="value4"
        />
      </FSCol>
    `})};var M,$,x;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modelValue: 5400000
  },
  render: args => ({
    components: {
      FSDurationField
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(x=($=g.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var C,H,w;F.parameters={...F.parameters,docs:{...(C=F.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: 9000000,
    disabled: true
  },
  render: args => ({
    components: {
      FSDurationField
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(w=(H=F.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var _,N,B;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: 7200000,
    minDuration: 3600000,
    maxDuration: 28800000,
    label: "Duration (between 1h and 8h)"
  },
  render: args => ({
    components: {
      FSDurationField
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDurationField
        v-bind="args"
        v-model="args.modelValue"
      />
    \`
  })
}`,...(B=(N=v.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var R,T,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    modelValue: 0
  },
  render: args => ({
    components: {
      FSDurationField,
      FSCol
    },
    setup() {
      const value1 = ref(0);
      const value2 = ref(5400000);
      const value3 = ref(9000000);
      const value4 = ref(28800000);
      return {
        args,
        value1,
        value2,
        value3,
        value4
      };
    },
    template: \`
      <FSCol gap="20px">
        <FSDurationField
          v-model="value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :required="true"
          v-model="value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :disabled="true"
          v-model="value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDurationField
          :minDuration="3600000"
          :maxDuration="36000000"
          v-model="value4"
        />
      </FSCol>
    \`
  })
}`,...(U=(T=b.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const ia=["Default","Disabled","WithConstraints","Variations"];export{g as Default,F as Disabled,b as Variations,v as WithConstraints,ia as __namedExportsOrder,sa as default};
