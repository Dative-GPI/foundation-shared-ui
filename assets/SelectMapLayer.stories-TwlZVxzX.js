import{r as u,j as c,ac as S,B as y,Y as f,P as F,p as M}from"./vue.esm-bundler-DR0_aU9U.js";import{F as g}from"./FSSelectField-CQJ2t4a5.js";import{F as n}from"./FSIcon-CBwOL1p5.js";import{M as o}from"./map-B32CpSfc.js";import{u as V}from"./useTranslations-CDmrxgqt.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-qRBioB29.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./VProgressCircular-CZaehD4X.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCol-B2uM4vFw.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./proxiedModel-DoNoMWaC.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./display-B8Tm0OQZ.js";import"./lazy-DY4Wto-x.js";import"./locale-yWiW8Thx.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-BGzvJBOV.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSText-CUmuxASa.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./icons-CT9uuJgl.js";import"./VIcon-e3y7Ok8e.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./VInput-Cb7sX7IB.js";import"./density-SLEyWIf6.js";import"./FSBaseField-y2QkcP3h.js";import"./FSTextField-tianF0jI.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./VLabel-BfwkTHLb.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./rounded-B6-M_5uG.js";import"./index-BLyOCIqB.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";import"./FSFadeOut-DENuqwmT.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./FSRadio-CAlCR3Pp.js";import"./VSelect-CjSLppM5.js";import"./VList-fBlb7u4-.js";import"./ssrBoot-DbD7MJXH.js";import"./border-CatZixNo.js";import"./variant-BZg-bE5G.js";import"./VImg-DooBjoZC.js";import"./VDivider-g5HOQuaH.js";import"./VMenu-CkdLE1rB.js";import"./leaflet-src-Dw1OyN9w.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:g},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:o.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:o.OpenStreetMap,icon:"mdi-map-plus",label:e("ui.map-layer.open-street-map","Open Street Map")},{id:o.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:o.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,$,v,C,b){const d=f("FSSelectField");return F(),c(d,y({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=p=>e.$emit("update:modelValue",p))},e.$attrs),{"item-prepend":S(({item:p})=>[M(n,{icon:p.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const to={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},r={args:{modelValue:o.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
    <FSCol>
      <FSSelectedMapLayer
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var m,i,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const po=["Variations"];export{r as Variations,po as __namedExportsOrder,to as default};
