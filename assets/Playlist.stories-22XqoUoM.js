import{a as g,b}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSTile-DPKEiqsQ.js";import{F as e}from"./FSPlaylistTileUI-BHh07TZy.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";import"./FSIconCheck-Dx-VIDAj.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";const se={title:"Foundation/Shared/Tiles/Playlist",component:e,tags:["autodocs"],argTypes:{...b([y],e),...g(e)}},r={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,label:"Playlist test",dashboardsCount:8,delay:5e3,looped:!1}},l={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,label:"Playlist selectable",dashboardsCount:5,delay:3e3,looped:!0,selectable:!0}},a={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!0,label:"Playlist single select",dashboardsCount:3,delay:1e4,looped:!0,selectable:!0,singleSelect:!0}};var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    label: 'Playlist test',
    dashboardsCount: 8,
    delay: 5000,
    looped: false
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,i,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    label: 'Playlist selectable',
    dashboardsCount: 5,
    delay: 3000,
    looped: true,
    selectable: true
  }
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTileUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTileUI
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: true,
    label: 'Playlist single select',
    dashboardsCount: 3,
    delay: 10000,
    looped: true,
    selectable: true,
    singleSelect: true
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const me=["Default","Selectable","SingleSelect"];export{r as Default,l as Selectable,a as SingleSelect,me as __namedExportsOrder,se as default};
