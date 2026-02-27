import{e as H}from"./vue.esm-bundler-D5n7z5qz.js";import{a as I,b as J}from"./properties-Qw-O9fbT.js";import{F as t,a as g,b as K}from"./FSDialogSelectEntities-Bi5nTmvr.js";import{F as c}from"./FSButton-M9GMz66l.js";import{E as n}from"./applications-WAjZkOx7.js";import"./FSDialogSubmit-B04Ucw_W.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-dI-hxJaf.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./useTranslations-CFCS6HA-.js";import"./FSSlideGroup-BnnHyPAm.js";import"./FSButtonNextIcon-BxxPSm84.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./icons-DbptYgqQ.js";import"./VIcon-C3cN4B51.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./iframe-DDNVgDTV.js";import"./FSIcon-DFkRD0af.js";import"./FSSpan-BN7wkmby.js";const Qe={title:"Foundation/Core/Lists/SelectEntitiesList",component:t,tags:["autodocs"],argTypes:{...J([K],t),...I(t)}},s={render:e=>({components:{FSSelectEntitiesList:t,FSButton:c},setup(){return{args:e}},template:`
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
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const We=["DeviceOrganisations","Groups","Dashboards","DashboardsSingleSelect","Dialog","DialogDashboards","Groupings","Subgroupings","DialogSubgroupings"];export{o as Dashboards,a as DashboardsSingleSelect,s as DeviceOrganisations,i as Dialog,l as DialogDashboards,d as DialogSubgroupings,p as Groupings,r as Groups,m as Subgroupings,We as __namedExportsOrder,Qe as default};
