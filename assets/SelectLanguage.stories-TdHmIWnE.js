import{F as o}from"./FSSelectField-DgdAo_PA.js";import{F as m}from"./FSIcon-kCffLiJ2.js";import{F as a}from"./FSCol-BwxAijHz.js";import"./vue.esm-bundler-B9lxvfDw.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./FSCard-BwbWypiX.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./useRender-DM2jvMPN.js";import"./proxiedModel-DRvKxps3.js";import"./anchor-ByUPiJZt.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./display-BzNfeHa8.js";import"./lazy-B_HJlRZe.js";import"./locale-C647X9dJ.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./transition-Dh_EAQcC.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./VInput-DcZY3iGt.js";import"./density-DvMOIaQw.js";import"./FSBaseField-CSo0Z4y4.js";import"./FSTextField-mjFAiq2r.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./VLabel-CT69iMfY.js";import"./loader-CaGstafT.js";import"./rounded-BrvRf1BO.js";import"./index-Dli51uy9.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./elevation-DZ0Sccyb.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";const ke={title:"Foundation/Shared/Selects/SelectLanguage",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",label:"French (France)",icon:"$france"},{id:"2",label:"English (United States)",icon:"$unitedStates"},{id:"3",label:"Spanish (Spain)",icon:"$spain"}],value1:null,value2:null,value3:null,value4:null}},render:(l,{argTypes:r})=>({components:{FSSelectField:o,FSIcon:m,FSCol:a},props:Object.keys(r),setup(){return{...l}},template:`
    <FSCol>
      <FSSelectField
        label="Language"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with toggleset disabled"
        placeholder="One or more languages selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple and toggleSet disabled"
        placeholder="One or more languages selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
    </FSCol>`})};var t,i,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "French (France)",
        icon: "$france"
      }, {
        id: "2",
        label: "English (United States)",
        icon: "$unitedStates"
      }, {
        id: "3",
        label: "Spanish (Spain)",
        icon: "$spain"
      }],
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
      FSIcon,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSelectField
        label="Language"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with toggleset disabled"
        placeholder="One or more languages selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple and toggleSet disabled"
        placeholder="One or more languages selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
    </FSCol>\`
  })
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Ee=["Variations"];export{e as Variations,Ee as __namedExportsOrder,ke as default};
