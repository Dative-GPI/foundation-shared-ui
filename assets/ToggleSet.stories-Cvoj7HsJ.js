import{F as l}from"./FSToggleSet-0XsNufiD.js";import{F as o}from"./FSButton-B2X9DGvb.js";import{F as s}from"./FSText-zXSXSnZG.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useSlots-NXmwCOLw.js";import"./css-D46r6e5F.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./proxiedModel-Da7OD98r.js";import"./index-B698eGq-.js";import"./color-DTA1Qd0w.js";import"./display-BWFgSvI7.js";import"./locale-Guk_W035.js";import"./VIcon-DzkIKThE.js";import"./resizeObserver-Bwa55KU2.js";import"./FSWrapGroup-BCi713M2.js";import"./VInput-BgFKWDn-.js";import"./transition-C1y9a89u.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./form-gxFDX6UX.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./FSRow-C8EFLcn9.js";import"./VProgressCircular-it35si_v.js";import"./FSSpan-QNtf4e4q.js";import"./FSIcon-yzGYQgqh.js";const R={title:"Foundation/Shared/ToggleSet",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),value1:[],values2:[{id:"1",prependIcon:"mdi-home-thermometer-outline",label:"Keep at room temperature"},{id:"2",prependIcon:"mdi-pool-thermometer",label:"Keep just nice for skinny dipping"},{id:"3",prependIcon:"mdi-snowflake-thermometer",label:"Keep cool"},{id:"4",prependIcon:"mdi-sun-thermometer-outline",label:"Keep at full power of the sun"}],value2:null,values3:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Skier ${e+1}`})),value3:[],value4:"0"}},render:(e,{argTypes:i})=>({components:{FSToggleSet:l,FSButton:o,FSText:s},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSToggleSet
        variant="wrap"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="light"
        activeColor="primary"
        :multiple="false"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="warning"
        activeColor="success"
        :multiple="false"
        :required="true"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="dark"
        activeColor="light"
        :multiple="true"
        :required="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item="props">
          <FSButton
            appendIcon="mdi-ski-water"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          />
        </template>
      </FSToggleSet>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSToggleSet
        gap="24px"
        :modelValue="args.value4"
      >
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'primary' : 'light'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'primary' : 'light'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'primary' : 'light'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'primary' : 'light'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'primary' : 'light'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'primary' : 'light'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSToggleSet>
    </div>`})};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      values1: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        label: \`Choice number \${i + 1}\`
      })),
      value1: [],
      values2: [{
        id: "1",
        prependIcon: "mdi-home-thermometer-outline",
        label: "Keep at room temperature"
      }, {
        id: "2",
        prependIcon: "mdi-pool-thermometer",
        label: "Keep just nice for skinny dipping"
      }, {
        id: "3",
        prependIcon: "mdi-snowflake-thermometer",
        label: "Keep cool"
      }, {
        id: "4",
        prependIcon: "mdi-sun-thermometer-outline",
        label: "Keep at full power of the sun"
      }],
      value2: null,
      values3: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        label: \`Skier \${i + 1}\`
      })),
      value3: [],
      value4: "0"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSToggleSet,
      FSButton,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSToggleSet
        variant="wrap"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="light"
        activeColor="primary"
        :multiple="false"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="warning"
        activeColor="success"
        :multiple="false"
        :required="true"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="dark"
        activeColor="light"
        :multiple="true"
        :required="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item="props">
          <FSButton
            appendIcon="mdi-ski-water"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          />
        </template>
      </FSToggleSet>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSToggleSet
        gap="24px"
        :modelValue="args.value4"
      >
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'primary' : 'light'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'primary' : 'light'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'primary' : 'light'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'primary' : 'light'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'primary' : 'light'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'primary' : 'light'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSToggleSet>
    </div>\`
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const U=["Variations"];export{t as Variations,U as __namedExportsOrder,R as default};
