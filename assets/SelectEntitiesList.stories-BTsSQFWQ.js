import{F as a,a as S}from"./FSDialogSelectEntities-U0MhYkm9.js";import{F as y}from"./FSButton-CxA5c6KR.js";import{E as n}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSDialogSubmit-B0ne1ir2.js";import"./FSFadeOut-DwiC6ECo.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-Dc84uxeD.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./css-BHrR5cp2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-DB3qC7bV.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./FSRow-CFa9RNor.js";import"./FSText-DZJhh1AD.js";import"./useSlots-BioZKQqg.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./useRender-DM2jvMPN.js";import"./proxiedModel-DRvKxps3.js";import"./anchor-ByUPiJZt.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./locale-C647X9dJ.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./transition-Dh_EAQcC.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";import"./useTranslations-AmWs0SAL.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./FSButtonNextIcon-BETncHzg.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./icons-B5bBvhw0.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./iframe-CZVVI4T5.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./VProgressCircular-DSOzHF7B.js";import"./FSSpan-COYXSDbp.js";import"./FSIcon-kCffLiJ2.js";const Se={title:"Foundation/Core/Lists/SelectEntitiesList",component:a,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:a,FSButton:y},setup(){return{args:e}},template:`
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
    `}),args:{entityType:n.Device,modelValue:["1"]}},o={render:e=>({components:{FSSelectEntitiesList:a},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    `}),args:{entityType:n.Group,modelValue:[]}},r={render:e=>({components:{FSDialogSelectEntities:S,FSButton:y},setup(){return{args:e}},template:`
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
    `}),args:{entityType:n.Group,selecteds:[],modelValue:!1}};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,c,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const Fe=["DeviceOrganisations","Groups","Dialog"];export{t as DeviceOrganisations,r as Dialog,o as Groups,Fe as __namedExportsOrder,Se as default};
