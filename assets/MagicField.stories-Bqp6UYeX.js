import{d as q,c,E as n,m as h,A as D,G as _,H as r,L as B,M as i,k as M,N as d,O as u,K as s}from"./vue.esm-bundler-C5-CUMHT.js";import{F as J}from"./FSSelectField-BGyDveV5.js";import{F as y}from"./FSIcon-CNpmwcOd.js";import{_ as b}from"./FSSpan-D6aG51_c.js";import{F}from"./FSRow-C8aYwBu-.js";import{M as l,u as j}from"./useMagicFieldProvider-rZM6yfpi.js";import{u as L}from"./useDateFormat-D3hpfVqH.js";import{u as Q}from"./useTranslations-DAi7IZoP.js";import{c as U,g as E}from"./time-uuMHVXf_.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as C}from"./FSCol-DedFW0nl.js";import"./FSDialogMenu-D2-2fAf2.js";import"./FSCard-DYe1QD8j.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./FSSlideGroup-5yThapiu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSText-C8rmUTxK.js";import"./useSlots-ol4Nk6ew.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./icons-CucLNLjN.js";import"./VIcon-IlEzlDWp.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./VInput-Y0iB4nur.js";import"./density-qUtw3dk7.js";import"./FSBaseField-B1fPD4-R.js";import"./FSTextField-V-eBW8wn.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./VLabel-COLF1QPQ.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./rounded-Ctowy803.js";import"./index-B3ZVJx30.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./FSRadio-msJSYj1I.js";import"./VSelect-BkR6mgZ1.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VImg-DXeUU_wB.js";import"./VDivider-Ck2C5rfW.js";import"./VMenu-dxHuUw__.js";import"./iframe-Cg3k6e0_.js";import"./useAppLanguageCode-CembXc6P.js";import"./useAppTimeZone-s1RlKu8w.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./eventQueue-D85hWBFd.js";import"./times-CqUFey1a.js";const P=q({name:"FSMagicField",components:{FSSelectField:J,FSIcon:y,FSSpan:b,FSRow:F},props:{type:{type:Number,required:!1,default:l.TextField},modelValue:{type:String,required:!1,default:null},allowedValues:{type:Array,required:!1,default:()=>[]},useOnlyAllowedValues:{type:Boolean,required:!1,default:!1},meta:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:o}){const{epochToShortTimeFormat:f}=L(),{$tr:v}=Q(),{get:S}=j(),V=c(()=>e.allowedValues.map(a=>({value:a.value,label:a.label||t(a.value)}))),g=c(()=>{if(e.modelValue==null)return null;switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return isNaN(parseFloat(e.modelValue))?null:parseFloat(e.modelValue);case l.Switch:return e.modelValue==="true";case l.TimeStepField:case l.PlotPerField:return JSON.parse(e.modelValue);default:return e.modelValue}}),t=a=>{if(a==null)return"";switch(e.type){case l.NumberField:return a.toString();case l.Switch:return a?v("magic-field.true","True"):v("magic-field.false","False");case l.DateTimeField:return f(parseFloat(a));case l.TimeField:return E(parseFloat(a));case l.TimeStepField:return U(JSON.parse(a));case l.PlotPerField:return JSON.parse(a).plotPer;default:return a}},I=a=>{switch(a==null&&o("update:modelValue",null),e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:o("update:modelValue",a.toString());break;case l.TimeStepField:case l.PlotPerField:o("update:modelValue",JSON.stringify(a));break;default:o("update:modelValue",a);break}},$=c(()=>{switch(e.type){case l.PlotPerField:return{showSelector:e.meta.showSelector??!0};default:return{}}});return{MagicFieldType:l,valueToInput:g,bindedProps:$,items:V,inputToValue:I,get:S}}});function G(e,o,f,v,S,V){const g=B("FSSelectField");return e.$props.useOnlyAllowedValues?(i(),n(g,h({key:1,itemValue:"value",items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),_({_:2},[e.$props.type===e.MagicFieldType.IconField?{name:"selection",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"0"}:void 0,e.$props.type===e.MagicFieldType.IconField?{name:"item-label",fn:r(({item:t})=>[M(F,{align:"center-center",wrap:!1},{default:r(()=>[t.raw.value?(i(),n(y,{key:0},{default:r(()=>[d(u(t.raw.value),1)]),_:2},1024)):s("",!0),t.raw.value!==t.raw.label?(i(),n(b,{key:1},{default:r(()=>[d(u(t.raw.label),1)]),_:2},1024)):s("",!0)]),_:2},1024)]),key:"1"}:void 0]),1040,["items","modelValue"])):(i(),n(D(e.get(e.$props.type)),h({key:0,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},{...e.$attrs,...e.bindedProps}),null,16,["modelValue","onUpdate:modelValue"]))}const w=R(P,[["render",G]]);P.__docgenInfo={displayName:"FSMagicField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"allowedValues",type:{name:"{ value: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"useOnlyAllowedValues",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"meta",type:{name:"Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/fields/FSMagicField.vue"]};const Pl={title:"Core/Components/Input fields/MagicField",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:null,value8:null,value9:null}},render:(e,{argTypes:o})=>({components:{FSMagicField:w,FSCol:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Il=["Variations","Selects"];export{p as Selects,m as Variations,Il as __namedExportsOrder,Pl as default};
