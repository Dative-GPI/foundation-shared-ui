import{F as r,C as n}from"./FSCard-BCuiauGe.js";import{F as u}from"./FSIcon-DFkRD0af.js";import{a as v}from"./properties-Qw-O9fbT.js";import{_ as d}from"./FSSpan-BN7wkmby.js";import{C as i}from"./useColors-COEXNh00.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./useSlots-CoecqEnp.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j={title:"Foundation/Shared/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:[n.Standard,n.Background,n.Gradient,n.Full],description:"Mode of the agenda view"},clickable:{control:{type:"boolean"}},...v(r)}},t={render:a=>({components:{FSCard:r,FSSpan:d},setup(){return{args:a}},template:`
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
}`,...(s=(S=t.parameters)==null?void 0:S.docs)==null?void 0:s.source}}};var c,l,F;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(F=(l=e.parameters)==null?void 0:l.docs)==null?void 0:F.source}}};var m,C,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const q=["Default","Variants","Clickables"];export{o as Clickables,t as Default,e as Variants,q as __namedExportsOrder,j as default};
