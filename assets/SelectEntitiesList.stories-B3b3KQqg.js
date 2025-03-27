import{F as r,a as y}from"./FSDialogSelectEntities-LjT37xxQ.js";import{F as S}from"./FSButton-BTpAdEE5.js";import{E as s}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSDialogSubmit-B8zuuo-y.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./css-BnRE2gle.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-CDP3ltAg.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./FSRow-hpHYWcoJ.js";import"./FSText-CUkc4ADt.js";import"./useSlots-CY84M1fx.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CgsoZSKd.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./useTranslations-D0SM0QeA.js";import"./FSSlideGroup-BKtLKoi-.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./index-DDQZ-RJM.js";import"./VIcon-DeLOaNVc.js";import"./resizeObserver-Hv1_IiVG.js";import"./iframe-VnP__Fyj.js";import"../sb-preview/runtime.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./VProgressCircular-BbyuaGSs.js";import"./FSSpan-M9GEX7v6.js";import"./FSIcon-Cp7BQBW6.js";const ue={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
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
