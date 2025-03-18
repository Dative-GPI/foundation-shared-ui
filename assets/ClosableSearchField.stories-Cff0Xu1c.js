import{d as C,z as S,B as F,R as b,m as h,G as g,H as V,C as y,K as I,M as v,N as O}from"./vue.esm-bundler-CUSnV4DE.js";import{F as k}from"./FSSearchField-eXvJVmGa.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSCol-BQiFrdcO.js";import{F as _}from"./FSTextField-MbUkXGoG.js";import"./useTranslations-D0SM0QeA.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSIcon-Cp7BQBW6.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./index-DDQZ-RJM.js";import"./transition-C81aHyit.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./locale-DYN4KMd8.js";import"./density-DAqBVexQ.js";import"./dimensions-BI5CQRk1.js";import"./proxiedModel-DaBGAliH.js";import"./loader-BjfLeESU.js";import"./anchor-MMgLgK3d.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CeZa2hiu.js";const d=C({name:"FSClosableSearchField",components:{FSSearchField:k},props:{closable:{type:Boolean,required:!1,default:!0},unfocusOnClose:{type:Boolean,required:!1,default:!0},clearOnClose:{type:Boolean,required:!1,default:!0},modelValue:{type:String,required:!1,default:null},appendInnerIcon:{type:String,required:!1,default:"mdi-close"}},emits:["update:modelValue","close"],setup(e,{emit:o}){return{onCloseClicked:n=>{var r;e.closable&&(e.unfocusOnClose&&(n.preventDefault(),n.stopPropagation(),(r=document.activeElement)==null||r.blur()),e.clearOnClose&&o("update:modelValue",null),o("close"))}}}});function B(e,o,m,n,r,T){const c=g("FSSearchField");return V(),S(c,h({modelValue:e.$props.modelValue,appendInnerIcon:e.$props.closable?e.$props.appendInnerIcon:null,clearable:!1,"onClick:appendInner":e.onCloseClicked,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),F({_:2},[b(e.$slots,(l,t)=>({name:t,fn:y(f=>[I(e.$slots,t,v(O(f)))])}))]),1040,["modelValue","appendInnerIcon","onClick:appendInner"])}const u=q(d,[["render",B]]);d.__docgenInfo={displayName:"FSClosableSearchField",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"unfocusOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"clearOnClose",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"appendInnerIcon",type:{name:"string | undefined"},required:!1,defaultValue:{func:!1,value:"'mdi-close'"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSClosableSearchField.vue"]};const ge={title:"Foundation/Shared/Input fields/ClosableSearchField",component:u,subcomponents:{FSTextField:_},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},onClose:{action:"close"}}},a={args:{modelValue:"",appendInnerIcon:"mdi-close",unfocusOnClose:!0,clearOnClose:!0,closable:!0,placeholder:"Type here...",label:"Search",hideHeader:!1,editable:!0},render:(e,{argTypes:o})=>({components:{FSClosableSearchField:u,FSCol:$},props:Object.keys(o),setup(){return{args:e}},template:`
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var s,p,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    appendInnerIcon: 'mdi-close',
    unfocusOnClose: true,
    clearOnClose: true,
    closable: true,
    placeholder: 'Type here...',
    label: 'Search',
    hideHeader: false,
    editable: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSClosableSearchField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSClosableSearchField
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Ve=["Variations"];export{a as Variations,Ve as __namedExportsOrder,ge as default};
