import{a as g,b}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSTile-DnwhleJY.js";import{F as e}from"./FSPlaylistTileUI-CFTO-mGG.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSIconCheck-DvcPagA7.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";const ie={title:"Shared/Components/Tiles/Playlist",component:e,tags:["autodocs"],argTypes:{...b([y],e),...g(e)}},r={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
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
