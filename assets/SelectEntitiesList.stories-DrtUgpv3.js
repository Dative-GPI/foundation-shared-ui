import{F as r,a as S}from"./FSDialogSelectEntities-BooHJtHv.js";import{F as y}from"./FSButton-dobeAM7X.js";import{E as a}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSDialogSubmit-HUq7lpz8.js";import"./FSFadeOut-B817LR1t.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DMrtgY61.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-Cg-ZNEvc.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./FSRow-udQVJR1p.js";import"./FSText-C92q1_nI.js";import"./useSlots-BgbXyH5p.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-6mal3hP4.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./useTranslations-D4m4SVfo.js";import"./FSSlideGroup-CD-roNbR.js";import"./FSButtonNextIcon-CWa-blL8.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./index-BNfVP6r5.js";import"./VIcon-beNtbbqt.js";import"./resizeObserver-C7qOORSR.js";import"./iframe-zX_JdCSA.js";import"../sb-preview/runtime.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Lz1AMzcf.js";import"./VProgressCircular-DDVR-EZI.js";import"./FSSpan-B7HDTlg9.js";import"./FSIcon-I_C15xQX.js";const ue={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r,FSButton:y},setup(){return{args:e}},template:`
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ce=["DeviceOrganisations","Groups","Dialog"];export{t as DeviceOrganisations,o as Dialog,n as Groups,ce as __namedExportsOrder,ue as default};
