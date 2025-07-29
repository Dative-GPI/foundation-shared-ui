import{F as r,a as S}from"./FSDialogSelectEntities-Bj71Zx2i.js";import{F as y}from"./FSButton-CZKySWW0.js";import{E as a}from"./applications-pqrfQrBX.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSDialogSubmit-BPHhd3-P.js";import"./FSFadeOut-CtUd8oOA.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-RTs-XAJF.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./css-BeoQuAfr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-Iu1wYtKv.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./FSRow-C-b-hpWa.js";import"./FSText-C7hkL3As.js";import"./useSlots-nyIcwo6G.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./useTranslations-_Q1DYra_.js";import"./FSSlideGroup-CGqp6f7y.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./index-CANKuvlL.js";import"./VIcon-DIMW80nW.js";import"./resizeObserver-UZYihl4g.js";import"./iframe-CfQdBNTK.js";import"../sb-preview/runtime.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./VProgressCircular-CDK6zSYw.js";import"./FSSpan-DxKJLsSl.js";import"./FSIcon-bsX1r_Ci.js";const ue={title:"Foundation/Core/Lists/SelectEntitiesList",component:r,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:selecteds":{action:"update:selecteds"}}},t={render:e=>({components:{FSSelectEntitiesList:r,FSButton:y},setup(){return{args:e}},template:`
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
