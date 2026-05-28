import{F as r,C as n}from"./FSCard--XyliQO3.js";import{F as u}from"./FSIcon-CBwOL1p5.js";import{a as v}from"./properties-Qw-O9fbT.js";import{_ as d}from"./FSSpan-9E7WYB2n.js";import{a as i}from"./useColors-CvhpHTRO.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./useSlots-p1mkRhuZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q={title:"Foundation/Shared/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:[n.Standard,n.Background,n.Gradient,n.Full],description:"Mode of the agenda view"},clickable:{control:{type:"boolean"}},...v(r)}},t={render:a=>({components:{FSCard:r,FSSpan:d},setup(){return{args:a}},template:`
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
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const J=["Default","Variants","Clickables"];export{o as Clickables,t as Default,e as Variants,J as __namedExportsOrder,q as default};
