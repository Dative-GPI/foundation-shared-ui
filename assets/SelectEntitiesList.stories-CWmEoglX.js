import{e as G}from"./vue.esm-bundler-D5n7z5qz.js";import{a as w,b as N}from"./properties-Qw-O9fbT.js";import{F as t,a as k,b as R}from"./FSDialogSelectEntities-B84SFaFQ.js";import{F as m}from"./FSButton-CZRwWCRJ.js";import{E as n}from"./applications-pqrfQrBX.js";import"./FSDialogSubmit-DVh4A4xN.js";import"./FSFadeOut-C918yX_r.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-BqdRyaJy.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./useTranslations-CFCS6HA-.js";import"./FSSlideGroup-IW38j_vX.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./icons-DR_vovBH.js";import"./VIcon-mGJe0MYK.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./iframe-B_5i964I.js";import"./FSIcon-BJsIM37h.js";import"./FSSpan-BN7wkmby.js";const Ce={title:"Foundation/Core/Lists/SelectEntitiesList",component:t,tags:["autodocs"],argTypes:{...N([R],t),...w(t)}},r={render:e=>({components:{FSSelectEntitiesList:t,FSButton:m},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSSelectEntitiesList>
    `}),args:{modelValue:["1"],entityType:n.Device,showRemove:!0}},o={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Group}},s={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Dashboard}},a={render:e=>({components:{FSSelectEntitiesList:t},setup(){return{args:e}},template:`
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],entityType:n.Dashboard,singleSelect:!0,showRemove:!0}},i={render:e=>({components:{FSDialogSelectEntities:k,FSButton:m},setup(){const p=G(!1);return{args:e,dialogOpen:p}},template:`
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
    `}),args:{entityType:n.Group,selecteds:[]}},l={render:e=>({components:{FSDialogSelectEntities:k,FSButton:m},setup(){const p=G(!1);return{args:e,dialogOpen:p}},template:`
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      />
    `}),args:{entityType:n.Dashboard,selecteds:[]}};var d,c,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,S,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,F,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var E,D,f;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(D=a.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var O,T,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var h,V,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const _e=["DeviceOrganisations","Groups","Dashboards","DashboardsSingleSelect","Dialog","DialogDashboards"];export{s as Dashboards,a as DashboardsSingleSelect,r as DeviceOrganisations,i as Dialog,l as DialogDashboards,o as Groups,_e as __namedExportsOrder,Ce as default};
