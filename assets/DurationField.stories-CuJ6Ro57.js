import{d as j,e as d,c as V,w as z,E as G,H as h,L as y,M as J,k as c,N as K}from"./vue.esm-bundler-D_gXonxt.js";import{a as Q,b as X}from"./properties-Qw-O9fbT.js";import U from"./FSNumberField-DNwHGyA_.js";import{F as Y}from"./FSBaseField-CGwB2cs2.js";import{_ as k}from"./FSSpan-ap0CpdXZ.js";import{_ as A}from"./FSRow-cHWWqhhs.js";import{u as Z}from"./useRules-CohX4tE3.js";import{N as q}from"./rules-BzW1_6pp.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ae}from"./FSCol-C3EJfcJX.js";import"./FSTextField-CxQWhEox.js";import"./FSButton-cpkpLA7w.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./FSIcon-B9MXbR5l.js";import"./css-Bznx04uW.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./density-W7RG4BnT.js";import"./dimensions-BYDjhYdL.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./useDateFormat-BQ8h6gVb.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./useAppTimeZone-Cxxk5HO_.js";import"./startOfDay-C4pDH4rb.js";const I=j({name:"FSDurationField",components:{FSNumberField:U,FSBaseField:Y,FSSpan:k,FSRow:A},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Number,required:!1,default:null},maxDuration:{type:Number,required:!1,default:null},minDuration:{type:Number,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const{getMessages:p}=Z(),r=60*1e3,n=60*r,o=d(null),t=d(null),f=V(()=>{const a=[...e.rules];if(e.required&&a.push(q.required()),e.minDuration!=null){const l=Math.floor(e.minDuration/n),i=Math.floor(e.minDuration%n/r),S=l>0?`${l}h${i.toString().padStart(2,"0")}`:`${i}min`;a.push(m=>m!=null&&m>=e.minDuration||`Min. ${S}`)}if(e.maxDuration!=null){const l=Math.floor(e.maxDuration/n),i=Math.floor(e.maxDuration%n/r),S=l>0?`${l}h${i.toString().padStart(2,"0")}`:`${i}min`;a.push(m=>m!=null&&m<=e.maxDuration||`Max. ${S}`)}return a}),O=V(()=>e.messages??p(e.modelValue,f.value)),P=()=>{if(e.modelValue==null){o.value=null,t.value=null;return}o.value=Math.floor(e.modelValue/n),t.value=Math.floor(e.modelValue%n/r)},D=()=>{const a=o.value??0,l=t.value??0;s("update:modelValue",a*n+l*r)},W=a=>{o.value=a,D()},L=a=>{a=Math.min(59,Math.max(0,a??0)),t.value=a,D()};return z(()=>e.modelValue,()=>{const a=o.value??0,l=t.value??0;a*n+l*r!==(e.modelValue??0)&&P()},{immediate:!0}),{NumberRules:q,innerHours:o,innerMinutes:t,durationRules:f,messages:O,onChangeHours:W,onChangeMinutes:L}}});function ne(e,s,p,r,n,o){const t=y("FSNumberField"),f=y("FSBaseField");return J(),G(f,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,label:e.$props.label,messages:e.messages},{default:h(()=>[c(A,{wrap:!1,align:"center-left"},{default:h(()=>[c(t,{suffix:"h",hideHeader:!0,modelValue:e.innerHours,disabled:e.$props.disabled,rules:[()=>e.messages.length===0||""],"onUpdate:modelValue":e.onChangeHours},null,8,["modelValue","disabled","rules","onUpdate:modelValue"]),c(k,null,{default:h(()=>[...s[0]||(s[0]=[K(":",-1)])]),_:1}),c(t,{suffix:"min",hideHeader:!0,disabled:e.$props.disabled,rules:[()=>e.messages.length===0||""],modelValue:e.innerMinutes,"onUpdate:modelValue":e.onChangeMinutes},null,8,["disabled","rules","modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["description","hideHeader","required","disabled","label","messages"])}const u=ee(I,[["render",ne]]);I.__docgenInfo={displayName:"FSDurationField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"maxDuration",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"minDuration",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDurationField.vue"]};const sa={title:"Foundation/Shared/Input fields/DurationField",component:u,tags:["autodocs"],argTypes:{...X([U],u),...Q(u)}},g={args:{modelValue:54e5},render:e=>({components:{FSDurationField:u},setup(){return{args:e}},template:`
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
}`,...(w=(H=F.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var N,_,B;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(_=v.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,E,T;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(E=b.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ia=["Default","Disabled","WithConstraints","Variations"];export{g as Default,F as Disabled,b as Variations,v as WithConstraints,ia as __namedExportsOrder,sa as default};
