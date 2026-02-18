import{a as l,b as a}from"./properties-Qw-O9fbT.js";import{F as o}from"./FSTileList-2C9CB3ZR.js";import{F as d}from"./FSSimpleTileUI-BoYdPWKY.js";import{e as c}from"./vue.esm-bundler-D5n7z5qz.js";import{C as i}from"./useColors-COEXNh00.js";import"./FSCol-D_lbFmZy.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSLoader-uhE9mCg0.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./useRender-Dce1Ng4u.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BjSJBvWs.js";import"./FSButtonNextIcon-CnQnCIEN.js";import"./FSButton-BSigqYK7.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-xgl24Qs4.js";import"./FSRow-DIk8KFbG.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSSearchField-Dy8MjAG9.js";import"./FSTextField-CmC2Zq8s.js";import"./FSBaseField-C_kMSpMl.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./transition-gfLL8RoD.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./density-BTT1solu.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-u79WnTSR.js";import"./useTranslations-CFCS6HA-.js";import"./lists-Dmp0D7yf.js";import"./filter-C1K_d8Vd.js";import"./FSIconCard-DtKeSdhf.js";import"./FSImage-BPrhBII5.js";import"./FSImageUI-BLy7Ukeh.js";import"./VImg-CFhtVVj8.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-CbSCVq7d.js";import"./FSCheckbox-DMg4fEo0.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./index-C2v-jVLO.js";const zt={title:"Foundation/Shared/Lists/TileList",component:o,tags:["autodocs"],argTypes:{...a([d],o),...l(o)}},t={render:n=>({components:{FSTileList:o},setup(){const s=c([]);return{args:n,selectedIds:s,getTileProps:r=>({leftColor:r.id==="1"?i.Error:null,bottomColor:r.id==="3"?i.Primary:null})}},template:`
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Bt=["Default"];export{t as Default,Bt as __namedExportsOrder,zt as default};
