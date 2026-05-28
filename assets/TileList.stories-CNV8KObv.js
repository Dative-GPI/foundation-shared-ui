import{a as l,b as a}from"./properties-Qw-O9fbT.js";import{F as o}from"./FSTileList-A5GACQyU.js";import{F as d}from"./FSSimpleTileUI-Ca1kk7vw.js";import{V as c}from"./vue.esm-bundler-DR0_aU9U.js";import{a as i}from"./useColors-CvhpHTRO.js";import"./FSCol-B2uM4vFw.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSLoader-DlWbYN_-.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./useTranslations-CDmrxgqt.js";import"./lists-Dmp0D7yf.js";import"./filter-C1K_d8Vd.js";import"./FSIconCard-D8RPikTZ.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./VImg-DooBjoZC.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSTile-DyIXnIBo.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";const Bt={title:"Foundation/Shared/Lists/TileList",component:o,tags:["autodocs"],argTypes:{...a([d],o),...l(o)}},t={render:n=>({components:{FSTileList:o},setup(){const s=c([]);return{args:n,selectedIds:s,getTileProps:r=>({leftColor:r.id==="1"?i.Error:null,bottomColor:r.id==="3"?i.Primary:null})}},template:`
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Gt=["Default"];export{t as Default,Gt as __namedExportsOrder,Bt as default};
