import{V as H}from"./vue.esm-bundler-DR0_aU9U.js";import{a as I,b as J}from"./properties-Qw-O9fbT.js";import{b as t,a as g,F as K}from"./FSDialogSelectEntities-CflSyIMN.js";import{F as c}from"./FSButton-CX1uVweX.js";import{E as n}from"./applications-WAjZkOx7.js";import"./FSDialogSubmit-DXuR5l8T.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-DhvOJkKp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-BThV5-rh.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSCol-B2uM4vFw.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BGzvJBOV.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./useTranslations-CDmrxgqt.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./icons-CT9uuJgl.js";import"./VIcon-e3y7Ok8e.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./iframe-DOfLwa9K.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";const We={title:"Foundation/Core/Lists/SelectEntitiesList",component:t,tags:["autodocs"],argTypes:{...J([K],t),...I(t)}},s={render:e=>({components:{FSSelectEntitiesList:t,FSButton:c},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSSelectEntitiesList>
    `}),args:{modelValue:["1"],entityType:n.Device,showRemove:!0}},r={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Group}},o={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Dashboard}},a={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Dashboard,singleSelect:!0,showRemove:!0}},i={render:e=>({components:{FSDialogSelectEntities:g,FSButton:c},setup(){const u=H(!1);return{args:e,dialogOpen:u}},template:`
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSDialogSelectEntities>
    `}),args:{entityType:n.Group,selecteds:[]}},l={render:e=>({components:{FSDialogSelectEntities:g,FSButton:c},setup(){const u=H(!1);return{args:e,dialogOpen:u}},template:`
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      />
    `}),args:{entityType:n.Dashboard,selecteds:[]}},p={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `}),args:{entityType:n.Grouping,modelValue:[]}},m={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `}),args:{entityType:n.Subgrouping,modelValue:[]}},d={render:e=>({components:{FSDialogSelectEntities:g,FSButton:c},setup(){return{args:e}},template:`
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
    `}),args:{entityType:n.Subgrouping,selecteds:[],modelValue:!1}};var S,y,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSSelectEntitiesList>
    \`
  }),
  args: {
    modelValue: ["1"],
    entityType: EntityType.Device,
    showRemove: true
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var F,v,E;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Group
  }
}`,...(E=(v=r.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var T,D,V;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Dashboard
  }
}`,...(V=(D=o.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var L,f,O;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Dashboard,
    singleSelect: true,
    showRemove: true
  }
}`,...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var h,B,G;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogSelectEntities,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      return {
        args,
        dialogOpen
      };
    },
    template: \`
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSDialogSelectEntities>
    \`
  }),
  args: {
    entityType: EntityType.Group,
    selecteds: []
  }
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var w,R,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSDialogSelectEntities,
      FSButton
    },
    setup() {
      const dialogOpen = ref(false);
      return {
        args,
        dialogOpen
      };
    },
    template: \`
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      />
    \`
  }),
  args: {
    entityType: EntityType.Dashboard,
    selecteds: []
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var N,U,x;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    entityType: EntityType.Grouping,
    modelValue: []
  }
}`,...(x=(U=p.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var C,_,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    entityType: EntityType.Subgrouping,
    modelValue: []
  }
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var j,q,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    entityType: EntityType.Subgrouping,
    selecteds: [],
    modelValue: false
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const Xe=["DeviceOrganisations","Groups","Dashboards","DashboardsSingleSelect","Dialog","DialogDashboards","Groupings","Subgroupings","DialogSubgroupings"];export{o as Dashboards,a as DashboardsSingleSelect,s as DeviceOrganisations,i as Dialog,l as DialogDashboards,d as DialogSubgroupings,p as Groupings,r as Groups,m as Subgroupings,Xe as __namedExportsOrder,We as default};
