import{F as r}from"./FSText-CUkc4ADt.js";import{F as n}from"./FSIcon-Cp7BQBW6.js";import{_ as o}from"./FSSpan-M9GEX7v6.js";import{F as i}from"./FSChip-B4fQRAFB.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useSlots-CY84M1fx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BnRE2gle.js";import"./VIcon-DeLOaNVc.js";import"./color-CgsoZSKd.js";import"./FSRow-hpHYWcoJ.js";const w={title:"Foundation/Shared/Chip",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={render:()=>({components:{FSChip:i,FSText:r,FSSpan:o,FSIcon:n},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :editable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, editable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="warning" :editable="true">
          <FSSpan font="text-overline"> Warning, full, editable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, uneditable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :editable="true">
          <FSSpan font="text-overline"> Dark, standard, editable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, uneditable" />
        <FSChip color="success" :editable="true" prependIcon="mdi-check" label="Success, full, editable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, uneditable" />
        <FSChip color="error" :editable="true" label="Error, full, editable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :editable="true" label="Light, standard, editable" />
        <FSChip color="dark" label="Dark, full, uneditable" />
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
    </div>`})};var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        <FSChip color="primary" :editable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, editable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="warning" :editable="true">
          <FSSpan font="text-overline"> Warning, full, editable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, uneditable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :editable="true">
          <FSSpan font="text-overline"> Dark, standard, editable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, uneditable" />
        <FSChip color="success" :editable="true" prependIcon="mdi-check" label="Success, full, editable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, uneditable" />
        <FSChip color="error" :editable="true" label="Error, full, editable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :editable="true" label="Light, standard, editable" />
        <FSChip color="dark" label="Dark, full, uneditable" />
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
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const T=["Variations"];export{e as Variations,T as __namedExportsOrder,w as default};
