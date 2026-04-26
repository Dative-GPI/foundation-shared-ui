import{a as l,b as a}from"./properties-Qw-O9fbT.js";import{F as o}from"./FSTileList-Jg_tAlDe.js";import{F as d}from"./FSSimpleTileUI-frH4ud6D.js";import{e as c}from"./vue.esm-bundler-D_gXonxt.js";import{C as i}from"./useColors-B49MKafH.js";import"./FSCol-C3EJfcJX.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSLoader-CdctsmAF.js";import"./color-DuOnfdFp.js";import"./theme-DdZUMbNR.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./useRender-BE0GCWmZ.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-CeCO9XCC.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./FSButton-DHeuA-BH.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./FSSpan-ap0CpdXZ.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSSearchField-HtJ7es4F.js";import"./FSTextField-CvqetqWm.js";import"./FSBaseField-CGwB2cs2.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./useTranslations-D2TwtVAp.js";import"./lists-Dmp0D7yf.js";import"./filter-C1K_d8Vd.js";import"./FSIconCard-CmOhk6fq.js";import"./FSImage-BwU3jLhA.js";import"./FSImageUI-C_EkTaPS.js";import"./VImg-ufpttNgj.js";import"./useImages-ns1hGlq_.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSTile-DPKEiqsQ.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";const Gt={title:"Foundation/Shared/Lists/TileList",component:o,tags:["autodocs"],argTypes:{...a([d],o),...l(o)}},t={render:n=>({components:{FSTileList:o},setup(){const s=c([]);return{args:n,selectedIds:s,getTileProps:r=>({leftColor:r.id==="1"?i.Error:null,bottomColor:r.id==="3"?i.Primary:null})}},template:`
      <FSTileList
        v-bind="args"
        v-model="selectedIds"
        :tileProps="getTileProps"
      />
      `}),args:{items:[{id:"1",imageId:"1",label:"Test 1"},{id:"2",imageId:"2",label:"Test 2"},{id:"3",icon:"mdi-account",label:"Test 3",code:"Code 3"},{id:"4",label:"Test 4"}],searchable:!0,selectable:!0}};var e,m,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSTileList
    },
    setup() {
      const selectedIds = ref<string[]>([]);
      const getTileProps = (item: any) => ({
        leftColor: item.id === "1" ? ColorEnum.Error : null,
        bottomColor: item.id === "3" ? ColorEnum.Primary : null
      });
      return {
        args,
        selectedIds,
        getTileProps
      };
    },
    template: \`
      <FSTileList
        v-bind="args"
        v-model="selectedIds"
        :tileProps="getTileProps"
      />
      \`
  }),
  args: {
    items: [{
      id: "1",
      imageId: "1",
      label: "Test 1"
    }, {
      id: "2",
      imageId: "2",
      label: "Test 2"
    }, {
      id: "3",
      icon: "mdi-account",
      label: "Test 3",
      code: "Code 3"
    }, {
      id: "4",
      label: "Test 4"
    }],
    searchable: true,
    selectable: true
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ht=["Default"];export{t as Default,Ht as __namedExportsOrder,Gt as default};
