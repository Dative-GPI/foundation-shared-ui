import{a as g,b}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSTile-CbSCVq7d.js";import{F as e}from"./FSPlaylistTileUI-XhFEnIYD.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSCard-xgl24Qs4.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./FSIconCheck-CJ0o3hvW.js";import"./FSText-015IEZHy.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";const se={title:"Foundation/Shared/Tiles/Playlist",component:e,tags:["autodocs"],argTypes:{...b([y],e),...g(e)}},r={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
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
