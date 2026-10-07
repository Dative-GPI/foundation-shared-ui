import{a as g,b}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSTile-BhVLh0I_.js";import{F as e}from"./FSPlaylistTileUI-DKsAt0SS.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCheckbox-BEgzMGmB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSCol-ChYB2Oag.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./density-HajNgXBf.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./dimensions-BuDdBtmf.js";import"./FSIconCheck-Y_gdQV2g.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";const ie={title:"Shared/Components/Tiles/Playlist",component:e,tags:["autodocs"],argTypes:{...b([y],e),...g(e)}},r={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const pe=["Default","Selectable","SingleSelect"];export{r as Default,l as Selectable,a as SingleSelect,pe as __namedExportsOrder,ie as default};
