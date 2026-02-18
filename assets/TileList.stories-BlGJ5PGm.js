import{a as l,b as a}from"./properties-Qw-O9fbT.js";import{F as o}from"./FSTileList-B36mIUFw.js";import{F as d}from"./FSSimpleTileUI-Cb7ASF5N.js";import{e as c}from"./vue.esm-bundler-D5n7z5qz.js";import{C as i}from"./useColors-BM_SKUZx.js";import"./FSCol-D_lbFmZy.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSLoader-Cl8hDT8j.js";import"./color-BW36qAym.js";import"./theme-Cdiv_FYE.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./useRender-BcOya-6A.js";import"./FSFadeOut-C918yX_r.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-D85Y1rXq.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./FSButton-Cpjx6pT4.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-DLunkI-x.js";import"./FSRow-DIk8KFbG.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSSearchField-B5GkzB7N.js";import"./FSTextField-BEn-1eo1.js";import"./FSBaseField-Buivlp1M.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./transition-DbItRNv8.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./density-BnAGl-Nw.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./useTranslations-CFCS6HA-.js";import"./lists-Dmp0D7yf.js";import"./filter-C1K_d8Vd.js";import"./FSIconCard-C3NcCNyZ.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./VImg-BlUyfKKc.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-ITpf6FQn.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";const wt={title:"Foundation/Shared/Lists/TileList",component:o,tags:["autodocs"],argTypes:{...a([d],o),...l(o)}},t={render:n=>({components:{FSTileList:o},setup(){const s=c([]);return{args:n,selectedIds:s,getTileProps:r=>({leftColor:r.id==="1"?i.Error:null,bottomColor:r.id==="3"?i.Primary:null})}},template:`
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const zt=["Default"];export{t as Default,zt as __namedExportsOrder,wt as default};
