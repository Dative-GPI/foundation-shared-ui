import{d as u,B as c,E as S,m as f,I as y,J as F,z as g}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as M}from"./FSSelectField-BOH8-gmk.js";import{F as n}from"./FSIcon-I_C15xQX.js";import{u as V}from"./useTranslations-D4m4SVfo.js";import{M as r}from"./map-BkwnYXis.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VList-DEf1a9yq.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-6mal3hP4.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./index-BNfVP6r5.js";import"./VIcon-beNtbbqt.js";import"./ssrBoot-B76fNmmB.js";import"./border-CsMm3Uu5.js";import"./density-B3EUR5Bv.js";import"./elevation-DCJceMeT.js";import"./rounded-T_eKj2ZY.js";import"./index-BSoBU6Pm.js";import"./VImg-BLvS348m.js";import"./index-0XvVa1kA.js";import"./FSSlideGroup-CD-roNbR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CWa-blL8.js";import"./FSButton-dobeAM7X.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Lz1AMzcf.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./FSToggleSet-CLEmUotz.js";import"./FSWrapGroup-doTNURkF.js";import"./VInput-XpqL7_rK.js";import"./FSBaseField-eUR0iGRU.js";import"./FSTextField-4RgpTJ2W.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./VLabel-BhsUugfE.js";import"./loader-zbNw4pum.js";import"./FSCheckbox-BY3-VJRx.js";import"./VSelectionControl-asaj2cFo.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-Vyt-Eyzm.js";import"./FSRadio-B7ZlHycV.js";import"./VSelect-CiPDTZ1A.js";import"./VMenu-C6lRy5En.js";import"./leaflet-src-BqBfykqS.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,$,v,C,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const Ue={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const je=["Variations"];export{o as Variations,je as __namedExportsOrder,Ue as default};
