import{r as _,g as c,j as n,B as h,_ as q,m as D,ac as r,Y as B,P as i,p as M,o as d,a1 as u,k as s}from"./vue.esm-bundler-DR0_aU9U.js";import{F as j}from"./FSSelectField-CQJ2t4a5.js";import{F as y}from"./FSIcon-CBwOL1p5.js";import{_ as b}from"./FSSpan-9E7WYB2n.js";import{_ as F}from"./FSRow-C8VtPvPz.js";import{M as l,u as J}from"./useMagicFieldProvider--L9jvp9E.js";import{u as L}from"./useDateFormat-DAnuesY2.js";import{b as Q,g as R}from"./time-DuowFvgO.js";import{u as U}from"./useTranslations-CDmrxgqt.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSCol-B2uM4vFw.js";import"./FSDialogMenu-qRBioB29.js";import"./FSCard--XyliQO3.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BGzvJBOV.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./icons-CT9uuJgl.js";import"./VIcon-e3y7Ok8e.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./FSBaseField-y2QkcP3h.js";import"./FSTextField-tianF0jI.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./VLabel-BfwkTHLb.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSFadeOut-DENuqwmT.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./FSRadio-CAlCR3Pp.js";import"./VSelect-CjSLppM5.js";import"./VList-fBlb7u4-.js";import"./ssrBoot-DbD7MJXH.js";import"./border-CatZixNo.js";import"./variant-BZg-bE5G.js";import"./VImg-DooBjoZC.js";import"./VDivider-g5HOQuaH.js";import"./VMenu-CkdLE1rB.js";import"./iframe-DOfLwa9K.js";import"./useAppLanguageCode-BoL-n_ZZ.js";import"./useAppTimeZone-fWyn93dw.js";import"./datesTools-B-vlCrHb.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./times-CqUFey1a.js";const P=_({name:"FSMagicField",components:{FSSelectField:j,FSIcon:y,FSSpan:b,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1},meta:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:f}=L(),{$tr:g}=U(),{get:S}=J(),V=c(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),v=c(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:case l.PlotPerField:return JSON.parse(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?g("magic-field.true","True"):g("magic-field.false","False");case l.DateTimeField:return f(parseFloat(a));case l.TimeField:return R(parseFloat(a));case l.TimeStepField:return Q(JSON.parse(a));case l.PlotPerField:return JSON.parse(a).plotPer;default:return a}},I=a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:case l.PlotPerField:o("update:modelValue",JSON.stringify(a));break;default:o("update:modelValue",a);break}},$=c(()=>{switch(e.type){case l.PlotPerField:return{showSelector:e.meta.showSelector??!0};default:return{}}});return{MagicFieldType:l,valueToInput:v,bindedProps:$,items:V,inputToValue:I,get:S}}});function Y(e,o,f,g,S,V){const v=B("FSSelectField");return e.$props.useOnlyAllowedValues?(i(),n(v,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),D({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(i(),n(q(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},{...e.$attrs,...e.bindedProps}),null,16,["modelValue","onUpdate:modelValue"]))}const w=E(P,[["render",Y]]);P.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"meta",type:{name:"Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicField.vue"]};const Cl={title:"Foundation/Core/Input fields/MagicField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null,value8:null,value9:null}},render:(e,{argTypes:o})=>({components:{FSMagicField:w,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})},p={args:{args:{value1:"",allowedValues1:[{value:1,label:"one"},{value:2,label:"two"},{value:3}],value2:"",allowedValues2:[{value:!1,label:"I don't think so"},{value:!0}],value3:"",allowedValues3:[{value:"value a",label:"Label A"},{value:"value b",label:"Label B"},{value:"value c"}],value4:"",allowedValues4:[{value:17040672e5,label:"First of January 2024"},{value:5679936e5,label:"A long time ago"},{value:17356896e5}],value5:"",allowedValues5:[{value:"mdi-account",label:"Account icon"},{value:"mdi-account-circle"}],value6:"",allowedValues6:[{value:900,label:"Quarter hour"},{value:1800},{value:7200}],value7:null,allowedValues7:[{value:{value:15,unit:3},label:"Quarter hour"},{value:{value:30,unit:3}},{value:{value:3,unit:4}},{value:{value:1,unit:5}}],value8:3}},render:(e,{argTypes:o})=>({components:{FSMagicField:w,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(O=(x=m.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var k,A,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Pl=["Variations","Selects"];export{p as Selects,m as Variations,Pl as __namedExportsOrder,Cl as default};
