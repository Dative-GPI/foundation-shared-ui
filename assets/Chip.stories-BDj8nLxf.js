import{F as c}from"./FSText-BvUMyUbP.js";import{F as d}from"./FSIcon-Dy1KglKQ.js";import{_ as s}from"./FSSpan-B7HDTlg9.js";import{F as n}from"./FSChip-BL9vxD6R.js";import{b as F}from"./properties-Qw-O9fbT.js";import{_ as h}from"./FSRow-udQVJR1p.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./useBreakpoints-DMrtgY61.js";import"./useSlots-BgbXyH5p.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BZjDzSZ1.js";import"./VIcon-beNtbbqt.js";import"./color-6mal3hP4.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";const P={title:"Foundation/Shared/Chip",component:n,tags:["autodocs"],argTypes:{...F([h],n)}},l={args:{color:"primary",variant:"standard",label:"I am a chip",to:{name:"About"}},render:S=>({components:{FSChip:n,FSText:c,FSSpan:s,FSIcon:d},setup(){return{args:S}},template:`
      <FSChip 
        v-bind="args"
      />
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
    label: 'I am a chip',
    to: {
      name: 'About'
    }
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
      />
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
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const A=["Default","Variations"];export{l as Default,a as Variations,A as __namedExportsOrder,P as default};
