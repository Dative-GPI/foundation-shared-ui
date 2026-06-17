import{F as r,C as n}from"./FSCard-DYe1QD8j.js";import{F as u}from"./FSIcon-CNpmwcOd.js";import{a as v}from"./properties-Qw-O9fbT.js";import{_ as d}from"./FSSpan-D6aG51_c.js";import{C as i}from"./useColors-BAnxS_-e.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./theme-CB6As9Cd.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./useSlots-ol4Nk6ew.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q={title:"Shared/Components/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:[n.Standard,n.Background,n.Gradient,n.Full],description:"Mode of the agenda view"},clickable:{control:{type:"boolean"}},...v(r)}},t={render:a=>({components:{FSCard:r,FSSpan:d},setup(){return{args:a}},template:`
    <FSCard
      v-bind="args"
    >
      <FSSpan>I am a card content</FSSpan>
    </FSCard>`}),args:{padding:"16px",clickable:!1}},e={render:a=>({components:{FSCard:r,FSSpan:d},setup(){return{args:a,ColorEnum:i}},inheritAttrs:!1,template:`
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
        v-bind="args"
        variant="background"
        >
        <FSSpan>Variant : background</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="standard"
        >
        <FSSpan>Variant : standard</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="full"
        >
        <FSSpan>Variant : full</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        :color="[ColorEnum.Primary, ColorEnum.Error]"
        variant="gradient"
        >
        <FSSpan>Variant : gradient</FSSpan>
        </FSCard>
    </div>
    `}),args:{padding:"16px",color:i.Primary}},o={render:a=>({components:{FSCard:r,FSSpan:d,FSIcon:u},setup(){return{args:a,ColorEnum:i}},inheritAttrs:!1,template:`
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
            v-bind="args"
            href="https://dative-gpi.com"
        >
          <FSSpan>
            Href
          </FSSpan>
        </FSCard>
        <FSCard
            v-bind="args"
            :to="{ name: 'About' }"
        >
          <FSSpan>
            Router Link
          </FSSpan>
        </FSCard>
       <FSCard
            v-bind="args" 
            @click="() => console.log('Card clicked')"
        >
            <template #default="{ contentVariant }">
                <FSIcon
                    icon="mdi-check"
                    :variant="contentVariant"
                    color="error"
                    size="16"
                />
                <FSSpan>
                  Clickable event
                </FSSpan>
            </template>
        </FSCard>
        <FSCard
          :clickable="true"
          type="submit"
          v-bind="args"
        >
            <FSIcon
                icon="mdi-check"
                size="16"
            />
            <FSSpan>
              Clickable submit
            </FSSpan>
        </FSCard>
    </div>
    `}),args:{padding:"16px",color:i.Primary,variant:"standard"}};var p,S,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSCard,
      FSSpan
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCard
      v-bind="args"
    >
      <FSSpan>I am a card content</FSSpan>
    </FSCard>\`
  }),
  args: {
    padding: '16px',
    clickable: false
  }
}`,...(s=(S=t.parameters)==null?void 0:S.docs)==null?void 0:s.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSCard,
      FSSpan
    },
    setup() {
      return {
        args,
        ColorEnum
      };
    },
    inheritAttrs: false,
    template: \`
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
        v-bind="args"
        variant="background"
        >
        <FSSpan>Variant : background</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="standard"
        >
        <FSSpan>Variant : standard</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        variant="full"
        >
        <FSSpan>Variant : full</FSSpan>
        </FSCard>
        <FSCard
        v-bind="args"
        :color="[ColorEnum.Primary, ColorEnum.Error]"
        variant="gradient"
        >
        <FSSpan>Variant : gradient</FSSpan>
        </FSCard>
    </div>
    \`
  }),
  args: {
    padding: '16px',
    color: ColorEnum.Primary
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var F,C,g;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSCard,
      FSSpan,
      FSIcon
    },
    setup() {
      return {
        args,
        ColorEnum
      };
    },
    inheritAttrs: false,
    template: \`
    <div
        style="display: flex; flex-direction: row; gap: 16px;"
    >
        <FSCard
            v-bind="args"
            href="https://dative-gpi.com"
        >
          <FSSpan>
            Href
          </FSSpan>
        </FSCard>
        <FSCard
            v-bind="args"
            :to="{ name: 'About' }"
        >
          <FSSpan>
            Router Link
          </FSSpan>
        </FSCard>
       <FSCard
            v-bind="args" 
            @click="() => console.log('Card clicked')"
        >
            <template #default="{ contentVariant }">
                <FSIcon
                    icon="mdi-check"
                    :variant="contentVariant"
                    color="error"
                    size="16"
                />
                <FSSpan>
                  Clickable event
                </FSSpan>
            </template>
        </FSCard>
        <FSCard
          :clickable="true"
          type="submit"
          v-bind="args"
        >
            <FSIcon
                icon="mdi-check"
                size="16"
            />
            <FSSpan>
              Clickable submit
            </FSSpan>
        </FSCard>
    </div>
    \`
  }),
  args: {
    padding: '16px',
    color: ColorEnum.Primary,
    variant: 'standard'
  }
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const J=["Default","Variants","Clickables"];export{o as Clickables,t as Default,e as Variants,J as __namedExportsOrder,q as default};
