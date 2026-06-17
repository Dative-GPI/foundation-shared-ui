import{a as g,b as F}from"./properties-Qw-O9fbT.js";import{F as s}from"./FSText-C8rmUTxK.js";import{F as S}from"./FSIcon-CNpmwcOd.js";import{_ as c}from"./FSSpan-D6aG51_c.js";import{F as a}from"./FSChip-PSYJcPlU.js";import{F as h}from"./FSCard-DYe1QD8j.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DSFbdPon.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSRow-C8aYwBu-.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";const H={title:"Shared/Components/Chip",component:a,tags:["autodocs"],argTypes:{...F([h],a),...g(a)}},r={args:{color:"primary",variant:"standard",label:"I am a chip to dative-gpi",clickable:!1},render:i=>({components:{FSChip:a,FSText:s,FSSpan:c,FSIcon:S},setup(){return{args:i}},template:`
      <FSChip 
        v-bind="args"
      />
      `})},t={args:{clickable:!0},render:i=>({components:{FSChip:a,FSText:s,FSSpan:c,FSIcon:S},inheritAttrs:!1,setup(){return{args:i}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" v-bind="args">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full</FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard" v-bind="args">
          <FSSpan font="text-overline"> Success, standard</FSSpan>
        </FSChip>
        <FSChip color="warning" v-bind="args">
          <FSSpan font="text-overline"> Warning, full</FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard" v-bind="args">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard </FSSpan>
        </FSChip>
        <FSChip color="light" v-bind="args">
          <FSSpan font="text-overline"> Light, full </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" v-bind="args">
          <template #default="{ contentVariant }">
            <FSIcon
              icon="mdi-check"
              :variant="contentVariant"
              color="error"
              size="16"
            />
            <FSSpan font="text-button">contentVariant slot passage</FSSpan>
          </template>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard" v-bind="args" />
        <FSChip color="success" prependIcon="mdi-check" label="Success, full" v-bind="args" />
        <FSChip color="warning" variant="standard" label="Warning, standard" v-bind="args" />
        <FSChip color="error" label="Error, full" appendIcon="mdi-close" v-bind="args" />
        <FSChip color="light" variant="standard" label="Light, standard" v-bind="args" />
        <FSChip color="dark" label="Dark, full" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText>Variants</FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="standard" v-bind="args" />
        <FSChip width="200px" color="primary" variant="standard" :border="false" label="standard no border" v-bind="args" />
        <FSChip width="200px" color="primary" variant="full" label="full (default)" v-bind="args" />
        <FSChip width="200px" color="primary" variant="background" label="background" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient no border" :border="false" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" v-bind="args" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" v-bind="args" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="100%" align="center-left" color="primary" variant="standard" label="100% with align center-left" v-bind="args" />
        <FSChip width="100%" color="primary" variant="standard" label="100% without align center-left" v-bind="args" />
      </div>
    </div>`})};var n,e,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'standard',
    label: 'I am a chip to dative-gpi',
    clickable: false
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
}`,...(l=(e=r.parameters)==null?void 0:e.docs)==null?void 0:l.source}}};var o,d,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    clickable: true
  },
  render: args => ({
    components: {
      FSChip,
      FSText,
      FSSpan,
      FSIcon
    },
    inheritAttrs: false,
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" v-bind="args">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full</FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard" v-bind="args">
          <FSSpan font="text-overline"> Success, standard</FSSpan>
        </FSChip>
        <FSChip color="warning" v-bind="args">
          <FSSpan font="text-overline"> Warning, full</FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard" v-bind="args">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard </FSSpan>
        </FSChip>
        <FSChip color="light" v-bind="args">
          <FSSpan font="text-overline"> Light, full </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" v-bind="args">
          <template #default="{ contentVariant }">
            <FSIcon
              icon="mdi-check"
              :variant="contentVariant"
              color="error"
              size="16"
            />
            <FSSpan font="text-button">contentVariant slot passage</FSSpan>
          </template>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard" v-bind="args" />
        <FSChip color="success" prependIcon="mdi-check" label="Success, full" v-bind="args" />
        <FSChip color="warning" variant="standard" label="Warning, standard" v-bind="args" />
        <FSChip color="error" label="Error, full" appendIcon="mdi-close" v-bind="args" />
        <FSChip color="light" variant="standard" label="Light, standard" v-bind="args" />
        <FSChip color="dark" label="Dark, full" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText>Variants</FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="standard" v-bind="args" />
        <FSChip width="200px" color="primary" variant="standard" :border="false" label="standard no border" v-bind="args" />
        <FSChip width="200px" color="primary" variant="full" label="full (default)" v-bind="args" />
        <FSChip width="200px" color="primary" variant="background" label="background" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient no border" :border="false" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" v-bind="args" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" v-bind="args" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="100%" align="center-left" color="primary" variant="standard" label="100% with align center-left" v-bind="args" />
        <FSChip width="100%" color="primary" variant="standard" label="100% without align center-left" v-bind="args" />
      </div>
    </div>\`
  })
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const J=["Default","Variations"];export{r as Default,t as Variations,J as __namedExportsOrder,H as default};
