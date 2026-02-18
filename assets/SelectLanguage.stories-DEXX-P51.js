import{F as o}from"./FSSelectField-4I7RHWyb.js";import{F as m}from"./FSIcon-BJsIM37h.js";import{F as a}from"./FSCol-D_lbFmZy.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSDialogMenu-553iq_m_.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./FSButton-CZRwWCRJ.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./icons-DR_vovBH.js";import"./VIcon-mGJe0MYK.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-BOI7_zgs.js";import"./FSWrapGroup-DzpSjUDj.js";import"./VInput-bTNISmSY.js";import"./density-BnAGl-Nw.js";import"./FSBaseField-Buivlp1M.js";import"./FSTextField-Cclf6IX8.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./VLabel-D-9L6eJP.js";import"./loader-COXi3ZW_.js";import"./rounded-lfTNxM9v.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-tiqwHlQo.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";const Te={title:"Foundation/Shared/Selects/SelectLanguage",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",label:"French (France)",icon:"$france"},{id:"2",label:"English (United States)",icon:"$unitedStates"},{id:"3",label:"Spanish (Spain)",icon:"$spain"}],value1:null,value2:null,value3:null,value4:null}},render:(l,{argTypes:r})=>({components:{FSSelectField:o,FSIcon:m,FSCol:a},props:Object.keys(r),setup(){return{...l}},template:`
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const je=["Variations"];export{e as Variations,je as __namedExportsOrder,Te as default};
