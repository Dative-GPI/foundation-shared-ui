import{d as $,c as S,y as D,z as n,A as d,m as h,k as _,M as q,B as r,L as T,E as i,G as u,D as s}from"./vue.esm-bundler-BSyvBTC9.js";import{M as l,u as B}from"./useMagicFieldProvider-Dvv-rbKB.js";import{F as J}from"./FSSelectField-DbrO_Qw0.js";import{F as c}from"./FSIcon-BVNp7pcM.js";import{_ as y}from"./FSSpan-CCGpb4KF.js";import{F}from"./FSRow-CA1vgNXx.js";import{c as L,g as j}from"./time-uorXHrJ8.js";import{u as Q}from"./useDateFormat-CNSspUCn.js";import{u as U}from"./useTranslations-CdSqQFV3.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSCol-DZA6pxA1.js";import"./iframe-Bohq3V4r.js";import"../sb-preview/runtime.js";import"./FSDialogMenu-Bh07lE_k.js";import"./FSCard-CiUY3jF9.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./css-DLfrm0pR.js";import"./VDialog-D9Xzq_RJ.js";import"./VOverlay-Cw3wN5kj.js";import"./forwardRefs-DWGaNmQL.js";import"./color--o2QfpAv.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./FSSlideGroup-B39qfVC2.js";import"./uuid-DTaye2KM.js";import"./FSButton-CzT4qk-w.js";import"./FSClickable-D0EdtzT9.js";import"./VProgressCircular-D09FP1rk.js";import"./tag-DB5D_XjQ.js";import"./useSlots-P12pG1X5.js";import"./index-DwLKzfXL.js";import"./group-CBCTR8u6.js";import"./VIcon-BQIm0b3J.js";import"./FSToggleSet-TMm1inSD.js";import"./FSWrapGroup-BrAfZF5Z.js";import"./VInput-CdqyKCcu.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSBaseField-CEXO2T_h.js";import"./VSpacer-DvdcLDtW.js";import"./FSTextField-VVHNKRY7.js";import"./useRules-B3HKjmia.js";import"./VField-C6F5sWZK.js";import"./VLabel-Zg457A-5.js";import"./loader-C8KBePTS.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-M73AcfXp.js";import"./VSelectionControl-DxF8PKcC.js";import"./index-DPxysH4G.js";import"./FSFadeOut-Chaq66Nt.js";import"./FSLoader--MJuLA8w.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-BXbOdhye.js";import"./VList-DYIPcJ7R.js";import"./ssrBoot-SGvAq9J5.js";import"./border-DsbQ0vt7.js";import"./VImg-BL_hkJAm.js";import"./VSelect-CIcDcVs4.js";import"./VMenu-Cfqut3Fx.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";const I=$({name:"FSMagicField",components:{FSSelectField:J,FSIcon:c,FSSpan:y,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:w}=Q(),{$tr:g}=U(),{get:f}=B(),V=S(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),v=S(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?g("ui.magic-field.true","True"):g("ui.magic-field.false","False");case l.DateTimeField:return w(parseFloat(a));case l.TimeField:return j(parseFloat(a));case l.TimeStepField:return L(JSON.parse(a));default:return a}};return{MagicFieldType:l,valueToInput:v,items:V,inputToValue:a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:o("update:modelValue",JSON.stringify(a));break;default:o("update:modelValue",a);break}},get:f}}});function P(e,o,w,g,f,V){const v=D("FSSelectField");return e.$props.useOnlyAllowedValues?(n(),d(v,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),q({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(n(),d(c,{key:0},{default:r(()=>[i(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(n(),d(c,{key:0},{default:r(()=>[i(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(n(),d(y,{key:1},{default:r(()=>[i(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(n(),d(_(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},e.$attrs),null,16,["modelValue","onUpdate:modelValue"]))}const b=E(I,[["render",P]]);I.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicField.vue"]};const ml={title:"Foundation/Shared/Input fields/MagicField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSMagicField
        label="Number field"
        :type="1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Switch"
        :type="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Text field"
        :type="3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Date time field"
        :type="4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Icon field"
        :type="5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time field"
        :type="6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time step field"
        :type="7"
        v-model="args.value7"
      />
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}],value7:"",allowedValues7:[{value:{value:15,unit:3},label:"Quarter hour"},{value:{value:30,unit:3}},{value:{value:3,unit:4}},{value:{value:1,unit:5}}]}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
      <FSCol>
        <FSMagicField
          label="Number field"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="6"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time step field"
          :type="7"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues7"
          v-model="args.value7"
        />
      </FSCol>`})};var M,A,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSMagicField
        label="Number field"
        :type="1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Switch"
        :type="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Text field"
        :type="3"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Date time field"
        :type="4"
        v-model="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Icon field"
        :type="5"
        v-model="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time field"
        :type="6"
        v-model="args.value6"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Time step field"
        :type="7"
        v-model="args.value7"
      />
    </FSCol>\`
  })
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var k,x,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      allowedValues1: [{
        value: 1,
        label: "one"
      }, {
        value: 2,
        label: "two"
      }, {
        value: 3
      }],
      value2: "",
      allowedValues2: [{
        value: false,
        label: "I don't think so"
      }, {
        value: true
      }],
      value3: "",
      allowedValues3: [{
        value: "value a",
        label: "Label A"
      }, {
        value: "value b",
        label: "Label B"
      }, {
        value: "value c"
      }],
      value4: "",
      allowedValues4: [{
        value: 1704067200000,
        label: "First of January 2024"
      }, {
        value: 567993600000,
        label: "A long time ago"
      }, {
        value: 1735689600000
      }],
      value5: "",
      allowedValues5: [{
        value: "mdi-account",
        label: "Account icon"
      }, {
        value: "mdi-account-circle"
      }],
      value6: "",
      allowedValues6: [{
        value: 900,
        label: "Quarter hour"
      }, {
        value: 1800
      }, {
        value: 7200
      }],
      value7: "",
      allowedValues7: [{
        value: {
          value: 15,
          unit: 3
        },
        label: "Quarter hour"
      }, {
        value: {
          value: 30,
          unit: 3
        }
      }, {
        value: {
          value: 3,
          unit: 4
        }
      }, {
        value: {
          value: 1,
          unit: 5
        }
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FSCol>
        <FSMagicField
          label="Number field"
          :type="1"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues1"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Switch"
          :type="2"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues2"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Text field"
          :type="3"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues3"
          v-model="args.value3"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Date time field"
          :type="4"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues4"
          v-model="args.value4"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Icon field"
          :type="5"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues5"
          v-model="args.value5"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time field"
          :type="6"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues6"
          v-model="args.value6"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSMagicField
          label="Time step field"
          :type="7"
          :useOnlyAllowedValues="true"
          :allowedValues="args.allowedValues7"
          v-model="args.value7"
        />
      </FSCol>\`
  })
}`,...(N=(x=p.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const pl=["Variations","Selects"];export{p as Selects,m as Variations,pl as __namedExportsOrder,ml as default};