import{F as r,a as S}from"./FSDialogSelectEntities-BR5T1JsQ.js";import{F as y}from"./FSButton-Ct7NP3WY.js";import{E as a}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSDialogSubmit-Ci0vx-bZ.js";import"./FSFadeOut-BcV7cYL5.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-C0efXi09.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./FSRow-BvJ7lU5E.js";import"./FSText-Bxdad9rN.js";import"./useSlots-D4bv69lA.js";import"./VDialog-BOSWAwdu.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./color-D50-hVV_.js";import"./proxiedModel-DW1FRKBO.js";import"./anchor-D4EnoweD.js";import"./dimensions-Cv9Fwl7U.js";import"./display-23tZl-3U.js";import"./lazy-Dahsm7lL.js";import"./locale-_fONYh-8.js";import"./router-CKzlklLc.js";import"./scopeId-BfaO37qo.js";import"./transition-bMLtH-b3.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./useTranslations-DJaIYmO0.js";import"./FSSlideGroup-BtmFNoOB.js";import"./FSButtonNextIcon-BlUV3Rd5.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./index-hd-xIizf.js";import"./VIcon-ZjKwFcqe.js";import"./resizeObserver-DDOqpSMx.js";import"./iframe-CDhTJfEj.js";import"../sb-preview/runtime.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./VProgressCircular-k_tOz5gX.js";import"./FSSpan-DrSEJIpr.js";import"./FSIcon-BGuuL0jz.js";const ge={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r,FSButton:y},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      >
        <template 
          #base-list-toolbar
        >
          <FSButton
            label='Non affecté'
          />
        </template>
      </FSSelectEntitiesList>
    `}),args:{entityType:a.Device,modelValue:["1"]}},n={render:e=>({components:{FSSelectEntitiesList:r},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    `}),args:{entityType:a.Group,modelValue:[]}},o={render:e=>({components:{FSDialogSelectEntities:S,FSButton:y},setup(){return{args:e}},template:`
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      >
        <template #base-list-toolbar>
          <FSButton
            label='Non affecté'
          />
        </template>
      </FSDialogSelectEntities>
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    `}),args:{entityType:a.Group,selecteds:[],modelValue:!1}};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSelectEntitiesList,
      FSButton
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
      >
        <template 
          #base-list-toolbar
        >
          <FSButton
            label='Non affecté'
          />
        </template>
      </FSSelectEntitiesList>
    \`
  }),
  args: {
    entityType: EntityType.Device,
    modelValue: ["1"]
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,c,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      >
        <template #base-list-toolbar>
          <FSButton
            label='Non affecté'
          />
        </template>
      </FSDialogSelectEntities>
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ye=["DeviceOrganisations","Groups","Dialog"];export{t as DeviceOrganisations,o as Dialog,n as Groups,ye as __namedExportsOrder,ge as default};
