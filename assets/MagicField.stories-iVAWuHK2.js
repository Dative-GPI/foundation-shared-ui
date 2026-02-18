import{d as q,c,B as n,m as h,x as D,C as _,D as r,I as B,J as i,q as M,K as d,L as u,H as s}from"./vue.esm-bundler-B9lxvfDw.js";import{F as J}from"./FSSelectField-DgdAo_PA.js";import{F as y}from"./FSIcon-kCffLiJ2.js";import{_ as b}from"./FSSpan-COYXSDbp.js";import{_ as F}from"./FSRow-CFa9RNor.js";import{c as j,g as L}from"./time-BAnUzhMU.js";import{M as l,u as Q}from"./useMagicFieldProvider-IhYdzW-F.js";import{u as R}from"./useDateFormat-DB9Xcy26.js";import{u as U}from"./useTranslations-AmWs0SAL.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-BwxAijHz.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./FSCard-BwbWypiX.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./useRender-DM2jvMPN.js";import"./proxiedModel-DRvKxps3.js";import"./anchor-ByUPiJZt.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./locale-C647X9dJ.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./transition-Dh_EAQcC.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./useSlots-BioZKQqg.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./VInput-DcZY3iGt.js";import"./density-DvMOIaQw.js";import"./FSBaseField-CSo0Z4y4.js";import"./FSTextField-mjFAiq2r.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./VLabel-CT69iMfY.js";import"./loader-CaGstafT.js";import"./rounded-BrvRf1BO.js";import"./index-Dli51uy9.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./elevation-DZ0Sccyb.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./times-CqUFey1a.js";import"./iframe-CZVVI4T5.js";import"./useAppTimeZone-yr9jXsW5.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CT4VqPAG.js";const P=q({name:"FSMagicField",components:{FSSelectField:J,FSIcon:y,FSSpan:b,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1},meta:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:f}=R(),{$tr:v}=U(),{get:S}=Q(),V=c(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),g=c(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:case l.PlotPerField:return JSON.parse(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?v("magic-field.true","True"):v("magic-field.false","False");case l.DateTimeField:return f(parseFloat(a));case l.TimeField:return L(parseFloat(a));case l.TimeStepField:return j(JSON.parse(a));case l.PlotPerField:return JSON.parse(a).plotPer;default:return a}},I=a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:case l.PlotPerField:o("update:modelValue",JSON.stringify(a));break;default:o("update:modelValue",a);break}},$=c(()=>{switch(e.type){case l.PlotPerField:return{showSelector:e.meta.showSelector??!0};default:return{}}});return{MagicFieldType:l,valueToInput:g,bindedProps:$,items:V,inputToValue:I,get:S}}});function H(e,o,f,v,S,V){const g=B("FSSelectField");return e.$props.useOnlyAllowedValues?(i(),n(g,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),_({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(i(),n(D(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},{...e.$attrs,...e.bindedProps}),null,16,["modelValue","onUpdate:modelValue"]))}const w=E(P,[["render",H]]);P.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"meta",type:{name:"Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicField.vue"]};const Ml={title:"Foundation/Core/Input fields/MagicField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null,value8:null,value9:null}},render:(e,{argTypes:o})=>({components:{FSMagicField:w,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
      {{ args.value7 }}
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field"
        :type="8"
        v-model="args.value8"
      />
      {{ args.value8 }}
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field with showSelector=false"
        :type="8"
        :showSelector="false"
        v-model="args.value9"
      />
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}],value7:null,allowedValues7:[{value:{value:15,unit:3},label:"Quarter hour"},{value:{value:30,unit:3}},{value:{value:3,unit:4}},{value:{value:1,unit:5}}],value8:3}},render:(e,{argTypes:o})=>({components:{FSMagicField:w,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
          v-model="args.value7"
        />
      </FSCol>`})};var T,x,O;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: null,
      value8: null,
      value9: null
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
      {{ args.value7 }}
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field"
        :type="8"
        v-model="args.value8"
      />
      {{ args.value8 }}
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field with showSelector=false"
        :type="8"
        :showSelector="false"
        v-model="args.value9"
      />
    </FSCol>\`
  })
}`,...(O=(x=m.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var k,A,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      value7: null,
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
      }],
      value8: 3
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
          v-model="args.value7"
        />
      </FSCol>\`
  })
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Tl=["Variations","Selects"];export{p as Selects,m as Variations,Tl as __namedExportsOrder,Ml as default};
