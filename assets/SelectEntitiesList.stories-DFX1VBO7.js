import{e as G}from"./vue.esm-bundler-D5n7z5qz.js";import{a as w,b as N}from"./properties-Qw-O9fbT.js";import{F as t,a as k,b as R}from"./FSDialogSelectEntities-Bs6sPudt.js";import{F as m}from"./FSButton-BEP9Z3FS.js";import{E as n}from"./applications-pqrfQrBX.js";import"./FSDialogSubmit-CxJAznzL.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-ZxcwX1fw.js";import"./FSCard-D2UHbOmr.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./useTranslations-CFCS6HA-.js";import"./FSSlideGroup-DDkEsbOM.js";import"./FSButtonNextIcon-CdZk8MYg.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./icons-DbptYgqQ.js";import"./VIcon-C3cN4B51.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./iframe-As3cvaCK.js";import"./FSIcon-DFkRD0af.js";import"./FSSpan-BN7wkmby.js";const _e={title:"Foundation/Core/Lists/SelectEntitiesList",component:t,tags:["autodocs"],argTypes:{...N([R],t),...w(t)}},r={render:e=>({components:{FSSelectEntitiesList:t,FSButton:m},setup(){return{args:e}},template:`
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
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Ae=["DeviceOrganisations","Groups","Dashboards","DashboardsSingleSelect","Dialog","DialogDashboards"];export{s as Dashboards,a as DashboardsSingleSelect,r as DeviceOrganisations,i as Dialog,l as DialogDashboards,o as Groups,Ae as __namedExportsOrder,_e as default};
