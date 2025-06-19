import{F as l}from"./FSSelectField-DFnp_jT1.js";import{F as m}from"./FSIcon-Dy1KglKQ.js";import{F as a}from"./FSCol-DIPgj7wU.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./VList-GVMOZe4n.js";import"./FSCard-CoFTtRNJ.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-6mal3hP4.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./index-BNfVP6r5.js";import"./VIcon-beNtbbqt.js";import"./ssrBoot-B76fNmmB.js";import"./border-CsMm3Uu5.js";import"./density-B3EUR5Bv.js";import"./elevation-DCJceMeT.js";import"./rounded-T_eKj2ZY.js";import"./index-BSoBU6Pm.js";import"./VImg-BLvS348m.js";import"./index-0XvVa1kA.js";import"./FSSlideGroup-CXGL0bk9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CYg1KVZY.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CHUHElBL.js";import"./FSWrapGroup-nrJVBSUF.js";import"./VInput-XpqL7_rK.js";import"./FSBaseField-DDV1bgDk.js";import"./FSTextField-DckKQdCq.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./VLabel-BhsUugfE.js";import"./loader-zbNw4pum.js";import"./FSCheckbox-4_vPFX9A.js";import"./VSelectionControl-asaj2cFo.js";import"./FSFadeOut-cwNcN6_P.js";import"./FSLoader-DbCBZFXe.js";import"./FSRadio-0ryRjk2L.js";import"./VSelect-Bk1kuuo2.js";import"./VMenu-C6lRy5En.js";const ye={title:"Foundation/Shared/Selects/SelectLanguage",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",label:"French (France)",icon:"$france"},{id:"2",label:"English (United States)",icon:"$unitedStates"},{id:"3",label:"Spanish (Spain)",icon:"$spain"}],value1:null,value2:null,value3:null,value4:null}},render:(o,{argTypes:r})=>({components:{FSSelectField:l,FSIcon:m,FSCol:a},props:Object.keys(r),setup(){return{...o}},template:`
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
