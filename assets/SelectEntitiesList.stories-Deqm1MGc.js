import{F as r,a as S}from"./FSDialogSelectEntities-uw-GX2wP.js";import{F as y}from"./FSButton-BtOsEP4C.js";import{E as a}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSDialogSubmit-BUL7cNt6.js";import"./FSFadeOut-Dik6Imqk.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-RTs-XAJF.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-B0dMniE4.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./FSRow-C-b-hpWa.js";import"./FSText-CaGosnIl.js";import"./useSlots-nyIcwo6G.js";import"./VDialog-DuPuMCeo.js";import"./VOverlay-DZqv3aZJ.js";import"./easing-DY7PVvcf.js";import"./color-CQ7P2KsY.js";import"./proxiedModel-BMHfYIia.js";import"./anchor-rLQXsCC5.js";import"./dimensions-D04OQyPe.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./locale-CoLhg8Wl.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./transition-BpYTYsmy.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider--dbql3OT.js";import"./useTranslations-_Q1DYra_.js";import"./FSSlideGroup-BKLRFR6r.js";import"./FSButtonNextIcon-PE5YDRXp.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./index-COu1mqSp.js";import"./VIcon-shEmQARK.js";import"./resizeObserver-BAwzmH4Y.js";import"./iframe-DhWmnxTs.js";import"../sb-preview/runtime.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./VProgressCircular-D57tYVQX.js";import"./FSSpan-DqsaA-ji.js";import"./FSIcon-wf_hiRKr.js";const ge={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r,FSButton:y},setup(){return{args:e}},template:`
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
