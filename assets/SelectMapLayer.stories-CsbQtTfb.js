import{d as u,B as c,D as S,m as f,I as y,J as F,q as g}from"./vue.esm-bundler-D5n7z5qz.js";import{F as M}from"./FSSelectField-CUE6T_N4.js";import{F as n}from"./FSIcon-BJsIM37h.js";import{M as r}from"./map-zFQr5HDv.js";import{u as V}from"./useTranslations-CFCS6HA-.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-DEwIi3jx.js";import"./FSCard-DLunkI-x.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-D85Y1rXq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./FSButton-Cpjx6pT4.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./icons-DR_vovBH.js";import"./VIcon-mGJe0MYK.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSToggleSet-B_gt-EnF.js";import"./FSWrapGroup-DzpSjUDj.js";import"./VInput-bTNISmSY.js";import"./density-BnAGl-Nw.js";import"./FSBaseField-Buivlp1M.js";import"./FSTextField-BEn-1eo1.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./VLabel-D-9L6eJP.js";import"./loader-COXi3ZW_.js";import"./rounded-lfTNxM9v.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSFadeOut-C918yX_r.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./FSRadio-BXAjRcH_.js";import"./VSelect-Dbz6iFLD.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VMenu-en6JpVrG.js";import"./leaflet-src-CCqwBO6N.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,$,v,C,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const Ye={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
    <FSCol>
      <FSSelectedMapLayer
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var p,i,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    modelValue: MapLayers.Map,
    multiple: false
  },
  render: args => ({
    components: {
      FSSelectedMapLayer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <FSCol>
      <FSSelectedMapLayer
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const Ze=["Variations"];export{o as Variations,Ze as __namedExportsOrder,Ye as default};
