import{F as r,a as y}from"./FSDialogSelectEntities-94lmD-nD.js";import{F as S}from"./FSButton-B2X9DGvb.js";import{E as s}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSDialogSubmit-C9CBWnXJ.js";import"./FSFadeOut-C2gEJSut.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-B6Z2dUh0.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./FSRow-C8EFLcn9.js";import"./FSText-zXSXSnZG.js";import"./useSlots-NXmwCOLw.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DTA1Qd0w.js";import"./proxiedModel-Da7OD98r.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./VDefaultsProvider-45AVpOQL.js";import"./useTranslations-Dol6kQeQ.js";import"./FSSlideGroup-CLbrB063.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./index-B698eGq-.js";import"./VIcon-DzkIKThE.js";import"./resizeObserver-Bwa55KU2.js";import"./iframe-DdeiJ5-z.js";import"../sb-preview/runtime.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./VProgressCircular-it35si_v.js";import"./FSSpan-QNtf4e4q.js";import"./FSIcon-yzGYQgqh.js";const ue={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `}),args:{entityType:s.Device,modelValue:["1"]}},o={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    `}),args:{entityType:s.Group,modelValue:[]}},n={render:e=>({components:{FSDialogSelectEntities:y,FSButton:S},setup(){return{args:e}},template:`
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    `}),args:{entityType:s.Group,selecteds:[],modelValue:!1}};var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectEntitiesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    entityType: EntityType.Device,
    modelValue: ["1"]
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectEntitiesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    \`
  }),
  args: {
    entityType: EntityType.Group,
    modelValue: []
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,c,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogSelectEntities,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    \`
  }),
  args: {
    entityType: EntityType.Group,
    selecteds: [],
    modelValue: false
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ce=["DeviceOrganisations","Groups","Dialog"];export{t as DeviceOrganisations,n as Dialog,o as Groups,ce as __namedExportsOrder,ue as default};
