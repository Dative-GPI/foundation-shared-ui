import{F as c}from"./FSText-C032WjuG.js";import{F as d}from"./FSIcon-CIF0zaTI.js";import{_ as s}from"./FSSpan-BXQyelfo.js";import{F as n}from"./FSChip-FDBATtNs.js";import{b as F}from"./properties-DwZ_iDct.js";import{_ as h}from"./FSRow-C47sfGk6.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./useBreakpoints-DsICqL2A.js";import"./useSlots-c6yg-hhg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-D38lF7BW.js";import"./VIcon-GfKFLOEw.js";import"./color-Bo6l13w9.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";const P={title:"Foundation/Shared/Chip",component:n,tags:["autodocs"],argTypes:{...F([h],n)}},l={args:{color:"primary",variant:"standard",label:"I am a chip"},render:S=>({components:{FSChip:n,FSText:c,FSSpan:s,FSIcon:d},setup(){return{args:S}},template:`
      <FSChip 
        v-bind="args"
      >
      `})},a={render:()=>({components:{FSChip:n,FSText:c,FSSpan:s,FSIcon:d},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :clickable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="warning" :clickable="true">
          <FSSpan font="text-overline"> Warning, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, unclickable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :clickable="true">
          <FSSpan font="text-overline"> Dark, standard, clickable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, unclickable" />
        <FSChip color="success" :clickable="true" prependIcon="mdi-check" label="Success, full, clickable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, unclickable" />
        <FSChip color="error" :clickable="true" label="Error, full, clickable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :clickable="true" label="Light, standard, clickable" />
        <FSChip color="dark" label="Dark, full, unclickable" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="fill" align="center-left" color="primary" variant="standard" label="fill with align center-left" />
        <FSChip width="fill" color="primary" variant="standard" label="fill without align center-left" />
      </div>
    </div>`})};var r,e,t;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'standard',
    label: 'I am a chip'
  },
  render: args => ({
    components: {
      FSChip,
      FSText,
      FSSpan,
      FSIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSChip 
        v-bind="args"
      >
      \`
  })
}`,...(t=(e=l.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};var i,o,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSChip,
      FSText,
      FSSpan,
      FSIcon
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :clickable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="warning" :clickable="true">
          <FSSpan font="text-overline"> Warning, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, unclickable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :clickable="true">
          <FSSpan font="text-overline"> Dark, standard, clickable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, unclickable" />
        <FSChip color="success" :clickable="true" prependIcon="mdi-check" label="Success, full, clickable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, unclickable" />
        <FSChip color="error" :clickable="true" label="Error, full, clickable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :clickable="true" label="Light, standard, clickable" />
        <FSChip color="dark" label="Dark, full, unclickable" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="fill" align="center-left" color="primary" variant="standard" label="fill with align center-left" />
        <FSChip width="fill" color="primary" variant="standard" label="fill without align center-left" />
      </div>
    </div>\`
  })
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const V=["Default","Variations"];export{l as Default,a as Variations,V as __namedExportsOrder,P as default};
