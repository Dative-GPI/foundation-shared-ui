import{F as t,a as o}from"./FSOptionGroup-aSUFDdlH.js";import{F as s}from"./FSText-CUkc4ADt.js";import"./vue.esm-bundler-CUSnV4DE.js";import"./FSClickable-Bn4xIsxH.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VProgressCircular-BbyuaGSs.js";import"./color-CgsoZSKd.js";import"./resizeObserver-Hv1_IiVG.js";import"./VIcon-DeLOaNVc.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSIcon-Cp7BQBW6.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./FSButton-BTpAdEE5.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-DDQZ-RJM.js";import"./display-DbvBihXn.js";import"./locale-DYN4KMd8.js";import"./FSWrapGroup-DswCzfON.js";const H={title:"Foundation/Shared/OptionGroup",component:t,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),icon:`mdi-numeric-${e+1}`})),value1:[],values2:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-dice-${e+1}-outline`})),value2:null,values3:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-hexagon-slice-${e+1}`})),value3:[0],value4:"0",values5:[{id:0,label:"All notifications"},{id:1,icon:"mdi-alert-circle-outline"},{id:2,icon:"mdi-alert-outline"},{id:3,icon:"mdi-information-outline"}],value5:null}},render:(e,{argTypes:a})=>({components:{FSOptionGroup:t,FSOptionItem:o,FSText:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSOptionGroup
        optionPadding="4px 16px"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
        <FSOptionItem
          label="UBER FORCE !"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '6' ? args.value4 = null : args.value4 = '6'"
        />
        <FSOptionItem
          label="IT'S OVER 9000 !"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '7' ? args.value4 = null : args.value4 = '7'"
        />
      </FSOptionGroup>
      <FSText> Props only, full width </FSText>
      <FSOptionGroup
        variant="fullwidth"
        :required="false"
        :values="args.values5"
        v-model="args.value5"
      />
    </div>`})};var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    args: {
      values1: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-numeric-\${i + 1}\`
      })),
      value1: [],
      values2: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-dice-\${i + 1}-outline\`
      })),
      value2: null,
      values3: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-hexagon-slice-\${i + 1}\`
      })),
      value3: [0],
      value4: "0",
      values5: [{
        id: 0,
        label: "All notifications"
      }, {
        id: 1,
        icon: "mdi-alert-circle-outline"
      }, {
        id: 2,
        icon: "mdi-alert-outline"
      }, {
        id: 3,
        icon: "mdi-information-outline"
      }],
      value5: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSOptionGroup,
      FSOptionItem,
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
      <FSOptionGroup
        optionPadding="4px 16px"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
        <FSOptionItem
          label="UBER FORCE !"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '6' ? args.value4 = null : args.value4 = '6'"
        />
        <FSOptionItem
          label="IT'S OVER 9000 !"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '7' ? args.value4 = null : args.value4 = '7'"
        />
      </FSOptionGroup>
      <FSText> Props only, full width </FSText>
      <FSOptionGroup
        variant="fullwidth"
        :required="false"
        :values="args.values5"
        v-model="args.value5"
      />
    </div>\`
  })
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const J=["Variations"];export{r as Variations,J as __namedExportsOrder,H as default};
