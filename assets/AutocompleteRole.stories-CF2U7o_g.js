import{F as l}from"./FSAutocompleteRole-DYeU-w1-.js";import{F as m}from"./FSCol-TPWSQPHs.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSAutocompleteField-BTuTRJw_.js";import"./FSSearchField-CGsun2bQ.js";import"./FSTextField-DSbw_bnX.js";import"./FSBaseField-CruMavxg.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CpogXLW8.js";import"./css-BkQhD285.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./VSpacer-CrqXaTz-.js";import"./color-BKGJvBEr.js";import"./FSButton-DS0wrBKk.js";import"./FSClickable-DnsFhA6_.js";import"./FSCard-C9IdgJNY.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./useTranslations-f9CWAvtI.js";import"./FSDialogMenu-CUwupOm-.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DlNGN2Nb.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-CNI_FQpM.js";import"./FSLoader-DpMpI5Qw.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-ChOxIOPt.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-DlfHU1SC.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./FSChip-BaGlgeX3.js";import"./useRoleOrganisationTypes-CanwHNRq.js";import"./permissionInfos-BPDgTHQl.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D0eCIUsD.js";import"./useRoleOrganisations-D5j4GYBT.js";import"./useAutocomplete-Dm2MgZSA.js";const Et={title:"Foundation/Core/Autocompletes/AutocompleteRole",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(p,{argTypes:i})=>({components:{FSAutocompleteRole:l,FSCol:m},props:Object.keys(i),setup(){return{...p}},template:`
    <FSCol>
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteRole,
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
      <FSAutocompleteRole
        label="Role"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with multiple selection"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteRole
        label="Role with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const qt=["Variations"];export{t as Variations,qt as __namedExportsOrder,Et as default};