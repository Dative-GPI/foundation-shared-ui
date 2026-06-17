import{e as H}from"./vue.esm-bundler-C5-CUMHT.js";import{a as I,b as J}from"./properties-Qw-O9fbT.js";import{F as t,a as g,b as K}from"./FSDialogSelectEntities-BzBdFE08.js";import{F as c}from"./FSButton-DohpVEzP.js";import{E as n}from"./applications-WAjZkOx7.js";import"./FSDialogSubmit-BNAaEFbN.js";import"./FSFadeOut-DOLGFW1u.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-pPMhsL5T.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialog-BXShlDnV.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSText-C8rmUTxK.js";import"./useSlots-ol4Nk6ew.js";import"./FSCol-DedFW0nl.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./useTranslations-DAi7IZoP.js";import"./eventQueue-D85hWBFd.js";import"./FSSlideGroup-5yThapiu.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./icons-CucLNLjN.js";import"./VIcon-IlEzlDWp.js";import"./VSlideGroupItem-BppNUl7y.js";import"./iframe-Cg3k6e0_.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";const Xe={title:"Core/Components/Lists/SelectEntitiesList",component:t,tags:["autodocs"],argTypes:{...J([K],t),...I(t)}},s={render:e=>({components:{FSSelectEntitiesList:t,FSButton:c},setup(){return{args:e}},template:`
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
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var N,U,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(U=p.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var x,_,A;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const Ye=["DeviceOrganisations","Groups","Dashboards","DashboardsSingleSelect","Dialog","DialogDashboards","Groupings","Subgroupings","DialogSubgroupings"];export{o as Dashboards,a as DashboardsSingleSelect,s as DeviceOrganisations,i as Dialog,l as DialogDashboards,d as DialogSubgroupings,p as Groupings,r as Groups,m as Subgroupings,Ye as __namedExportsOrder,Xe as default};
