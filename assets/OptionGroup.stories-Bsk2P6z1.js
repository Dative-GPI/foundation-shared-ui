import{F as a,a as o}from"./FSOptionGroup-BY_KnwjN.js";import{F as s}from"./FSText-4yVUx1mI.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./FSCol-DD5MeAoT.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BjeBkMPV.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-DfqW6nqQ.js";import"./FSSlideGroup-CntZC7f2.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSButton-cXGosxtu.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./locale-CTwwbPAi.js";import"./FSWrapGroup-CgUIplkM.js";const _={title:"Foundation/Shared/OptionGroup",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),icon:`mdi-numeric-${e+1}`})),value1:[],values2:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-dice-${e+1}-outline`})),value2:null,values3:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-hexagon-slice-${e+1}`})),value3:[0],value4:"0",values5:[{id:0,label:"All notifications"},{id:1,icon:"mdi-alert-circle-outline"},{id:2,icon:"mdi-alert-outline"},{id:3,icon:"mdi-information-outline"}],value5:null}},render:(e,{argTypes:t})=>({components:{FSOptionGroup:a,FSOptionItem:o,FSText:s},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const z=["Variations"];export{r as Variations,z as __namedExportsOrder,_ as default};