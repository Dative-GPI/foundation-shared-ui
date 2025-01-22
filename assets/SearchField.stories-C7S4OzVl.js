import{F as a}from"./FSSearchField-BTXtCPns.js";import{F as i}from"./FSCol-BPr0jVzk.js";import{F as n}from"./FSTextField-Cq5SV0et.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./useTranslations-Dol6kQeQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSIcon-yzGYQgqh.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./index-B698eGq-.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./proxiedModel-Da7OD98r.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";const Z={title:"Foundation/Shared/Input fields/SearchField",component:a,subcomponents:{FSTextField:n},tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},e={args:{modelValue:"",placeholder:"Type here...",label:"Search",clearable:!0,hideHeader:!1,editable:!0},render:(p,{argTypes:m})=>({components:{FSSearchField:a,FSCol:i},props:Object.keys(m),setup(){return{args:p}},template:`
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: 'Type here...',
    label: 'Search',
    clearable: true,
    hideHeader: false,
    editable: true
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSearchField,
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
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const $=["Variations"];export{e as Variations,$ as __namedExportsOrder,Z as default};
