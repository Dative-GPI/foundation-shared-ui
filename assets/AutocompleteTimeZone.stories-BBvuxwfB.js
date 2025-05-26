import{F as i}from"./FSAutocompleteTimeZone-BdYx8K6n.js";import{F as p}from"./FSCol-D6yYDi9X.js";import"./vue.esm-bundler-DtArtqdn.js";import"./FSAutocompleteField-_Z_9uP8b.js";import"./FSSearchField-BUH-dwrD.js";import"./FSTextField-Dwg3bGtr.js";import"./FSBaseField-COfiqIR8.js";import"./FSSpan-Btkwe66a.js";import"./useBreakpoints-DjafNA1e.js";import"./useSlots-DbyfVVj5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-mN1bTt.js";import"./css-Byt5yd9p.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./FSButton-q8xhuZjd.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";import"./FSCard-oEcmHswj.js";import"./VProgressCircular-vkSDrwPD.js";import"./color-DKVd81aj.js";import"./resizeObserver-Bx252tqU.js";import"./VIcon-_X0ionFS.js";import"./FSIcon-DAU03b1P.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./index-YdMT2sR1.js";import"./transition-POm6u0ds.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./locale-EnvrzLNX.js";import"./density-96HGjcby.js";import"./dimensions-Dt4h5jdR.js";import"./proxiedModel-DNPVb8sx.js";import"./loader-CJlqftns.js";import"./anchor-CbVlxldO.js";import"./rounded-B9giz-GX.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./forwardRefs-DWGaNmQL.js";import"./index-ShtRROw2.js";import"./useTranslations-CEyRES9c.js";import"./VList-BvtMNBCq.js";import"./VDialog-BTHijwvN.js";import"./VOverlay-Bjkk9AiY.js";import"./display-H53nrFTM.js";import"./scopeId-DRx9AlMK.js";import"./router-DPM6bvc5.js";import"./ssrBoot-BOTKrwq8.js";import"./border--9_J8r4E.js";import"./elevation-DuPJjm1T.js";import"./index-DWcj--5B.js";import"./VImg-DB10nKT8.js";import"./FSSlideGroup-DaeYUKJp.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./FSToggleSet-CojuCZxM.js";import"./FSWrapGroup-BBSbZNqu.js";import"./FSCheckbox-D615kJWP.js";import"./VSelectionControl-D_AGLwLV.js";import"./FSFadeOut-okmKwNuP.js";import"./FSLoader-C5CmIvK9.js";import"./FSRadio-K1Efb9Rj.js";import"./VSelect-c638diSh.js";import"./VMenu-Bm-EzALO.js";import"./filter-C3p-TgWl.js";import"./FSChip-BhYAH8Ub.js";import"./base-CmdGny12.js";import"./composableFactory-D6jnN1uy.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAutocomplete-_zZFUWHp.js";const Ot={title:"Foundation/Shared/Autocompletes/AutocompleteTimeZone",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(m,{argTypes:l})=>({components:{FSAutocompleteTimeZone:i,FSCol:p},props:Object.keys(l),setup(){return{...m}},template:`
    <FSCol>
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
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
      FSAutocompleteTimeZone,
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
      <FSAutocompleteTimeZone
        label="TimeZone"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTimeZone
        label="TimeZone with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const jt=["Variations"];export{t as Variations,jt as __namedExportsOrder,Ot as default};
