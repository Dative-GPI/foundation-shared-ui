import{d as u,z as c,C as S,m as f,G as y,H as F,P as g}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as M}from"./FSSelectField-DG1JLx9N.js";import{F as n}from"./FSIcon-LkE5-ra7.js";import{u as V}from"./useTranslations-CLqRehXT.js";import{M as r}from"./map-Cp2HcdwH.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VList-Cd1xaDQJ.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./FSRow-oDTnIAxc.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSSlideGroup-DuKHMc7B.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSWrapGroup-DldQIiCW.js";import"./VInput-DXPqvHKO.js";import"./FSBaseField-B4CV_xuh.js";import"./FSTextField-C7rYmEAT.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./loader-CQB_6PPx.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";import"./leaflet-src-CVI3lIVZ.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,C,$,v,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const Te={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
    <FSCol>
      <FSSelectedMapLayer
        v-model="args.modelValue"
        v-bind="args"
      />
    </FSCol>`})};var p,a,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Ue=["Variations"];export{o as Variations,Ue as __namedExportsOrder,Te as default};
