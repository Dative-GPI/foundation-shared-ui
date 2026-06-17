import{a as g,b}from"./properties-Qw-O9fbT.js";import{F as y}from"./FSTile-DmLtcb1O.js";import{F as e}from"./FSPlaylistTileUI-CCJSadCb.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCheckbox-BwFpn-kB.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSCol-DedFW0nl.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./proxiedModel-CV-HTW34.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./locale-BNkeanE6.js";import"./index-pS3mXfMR.js";import"./transition-CgRUW3r8.js";import"./dimensions-Bm76csmg.js";import"./FSIconCheck-CHC00Pxg.js";import"./time-uuMHVXf_.js";import"./useTranslations-DAi7IZoP.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";const ie={title:"Shared/Components/Tiles/Playlist",component:e,tags:["autodocs"],argTypes:{...b([y],e),...g(e)}},r={render:t=>({components:{FSPlaylistTileUI:e},setup(){return{args:t}},template:`
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
