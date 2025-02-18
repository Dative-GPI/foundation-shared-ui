import{d as $,c as S,A as n,l as h,x as _,C as D,D as r,H as q,I as d,R as T,F as i,J as u,K as s}from"./vue.esm-bundler-BD3cPSox.js";import{M as l,u as P}from"./useMagicFieldProvider-Bd1sI8U1.js";import{F as B}from"./FSSelectField-CGjvEsBa.js";import{F as c}from"./FSIcon-BikiybNc.js";import{_ as y}from"./FSSpan-CqHf-ny6.js";import{_ as F}from"./FSRow-CopwEayK.js";import{c as J,g as j}from"./time-CagsiWi1.js";import{u as L}from"./useDateFormat-CAYs4N6A.js";import{u as Q}from"./useTranslations-aJtH5CGl.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-C9a7BKGp.js";import"./iframe-MDIml6ir.js";import"../sb-preview/runtime.js";import"./VList-B1NoTgR2.js";import"./FSCard-DOwp-V9l.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DAd2dJIE.js";import"./proxiedModel-JzK6JHhO.js";import"./anchor-Ce3a1Oj_.js";import"./dimensions-DbGEEU80.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./locale-Cg0C6Moy.js";import"./router-BdSI2seK.js";import"./transition-BVEL_Cnv.js";import"./VDefaultsProvider-rHrX99un.js";import"./index-CcZ3F2bM.js";import"./VIcon-ef9P0Odv.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./density-Dp_zkCfD.js";import"./elevation-C4p0Fj2B.js";import"./rounded-idSslOdv.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./index-Ov0xN_Hx.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./useSlots-DhthX9xh.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./FSToggleSet-DDZ_-ts7.js";import"./FSWrapGroup-BXAsHxAi.js";import"./VInput-D-36mGWK.js";import"./form-DhAzn97I.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSTextField-DHU8-iy6.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./VLabel-gCKEzUPw.js";import"./loader-DirtECG2.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VSelect-D40GRNzX.js";import"./VMenu-iLNk3WZy.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./useAppTimeZone-Bsw9evvF.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";const I=$({name:"FSMagicField",components:{FSSelectField:B,FSIcon:c,FSSpan:y,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:w}=L(),{$tr:g}=Q(),{get:f}=P(),V=S(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),v=S(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:return JSON.parse(e.modelValue);case l.PlotPerField:return parseInt(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?g("magic-field.true","True"):g("magic-field.false","False");case l.DateTimeField:return w(parseFloat(a));case l.TimeField:return j(parseFloat(a));case l.TimeStepField:return J(JSON.parse(a));default:return a}};return{MagicFieldType:l,valueToInput:v,items:V,inputToValue:a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:o("update:modelValue",JSON.stringify(a));break;case l.PlotPerField:o("update:modelValue",a.toString());break;default:o("update:modelValue",a);break}},get:f}}});function U(e,o,w,g,f,V){const v=q("FSSelectField");return e.$props.useOnlyAllowedValues?(d(),n(v,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),D({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(d(),n(c,{key:0},{default:r(()=>[u(s(t.raw.value),1)]),_:2},1024)):i("",!0),t.raw.value!==t.raw.label?(d(),n(y,{key:1},{default:r(()=>[u(s(t.raw.label),1)]),_:2},1024)):i("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[T(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(d(),n(c,{key:0},{default:r(()=>[u(s(t.raw.value),1)]),_:2},1024)):i("",!0),t.raw.value!==t.raw.label?(d(),n(y,{key:1},{default:r(()=>[u(s(t.raw.label),1)]),_:2},1024)):i("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(d(),n(_(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},e.$attrs),null,16,["modelValue","onUpdate:modelValue"]))}const b=R(I,[["render",U]]);I.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicField.vue"]};const yl={title:"Foundation/Shared/Input fields/MagicField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null,value8:3}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field"
        :type="8"
        v-model="args.value8"
      />
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}],value7:null,allowedValues7:[{value:{value:15,unit:3},label:"Quarter hour"},{value:{value:30,unit:3}},{value:{value:3,unit:4}},{value:{value:1,unit:5}}],value8:3}},render:(e,{argTypes:o})=>({components:{FSMagicField:b,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
      </FSCol>`})};var M,x,k;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    args: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: null,
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicField
        label="Plot per field"
        :type="8"
        v-model="args.value8"
      />
    </FSCol>\`
  })
}`,...(k=(x=m.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var A,O,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const Fl=["Variations","Selects"];export{p as Selects,m as Variations,Fl as __namedExportsOrder,yl as default};
