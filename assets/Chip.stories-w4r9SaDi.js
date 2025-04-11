import{F as r}from"./FSText-CMVh5ns4.js";import{F as n}from"./FSIcon-Df5FR-8G.js";import{_ as o}from"./FSSpan-yJEd2pn-.js";import{F as t}from"./FSChip-Czu45ZxK.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./useBreakpoints-W7XGW48y.js";import"./useSlots-BG_ZhEqK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B90wD3BD.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./FSRow-DPcQMiM9.js";const y={title:"Foundation/Shared/Chip",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={render:()=>({components:{FSChip:t,FSText:r,FSSpan:o,FSIcon:n},template:`
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
    </div>`})};var a,i,e;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(e=(i=l.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const w=["Variations"];export{l as Variations,w as __namedExportsOrder,y as default};
