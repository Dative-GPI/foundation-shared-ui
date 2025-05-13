import{F as l}from"./FSSelectField-DG1JLx9N.js";import{F as m}from"./FSIcon-LkE5-ra7.js";import{F as a}from"./FSCol-BR6T1l1C.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./VList-Cd1xaDQJ.js";import"./FSCard-BedrH_cK.js";import"./FSRow-oDTnIAxc.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSSlideGroup-DuKHMc7B.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSWrapGroup-DldQIiCW.js";import"./VInput-DXPqvHKO.js";import"./FSBaseField-B4CV_xuh.js";import"./FSTextField-C7rYmEAT.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./loader-CQB_6PPx.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";const ye={title:"Foundation/Shared/Selects/SelectLanguage",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",label:"French (France)",icon:"$france"},{id:"2",label:"English (United States)",icon:"$unitedStates"},{id:"3",label:"Spanish (Spain)",icon:"$spain"}],value1:null,value2:null,value3:null,value4:null}},render:(o,{argTypes:r})=>({components:{FSSelectField:l,FSIcon:m,FSCol:a},props:Object.keys(r),setup(){return{...o}},template:`
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
    </FSCol>`})};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const fe=["Variations"];export{e as Variations,fe as __namedExportsOrder,ye as default};
