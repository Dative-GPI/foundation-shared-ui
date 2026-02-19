import{d as u,B as c,D as S,m as f,I as y,J as F,q as g}from"./vue.esm-bundler-D5n7z5qz.js";import{F as M}from"./FSSelectField-DE9z5BlJ.js";import{F as n}from"./FSIcon-DFkRD0af.js";import{M as r}from"./map-zFQr5HDv.js";import{u as V}from"./useTranslations-CFCS6HA-.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-BsMJHv9p.js";import"./FSCard-D2UHbOmr.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCol-D_lbFmZy.js";import"./VDialog-C5WNai-3.js";import"./VOverlay-BApTxsTF.js";import"./proxiedModel-Cv3qT1cZ.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./FSSlideGroup-DDkEsbOM.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CdZk8MYg.js";import"./FSButton-BEP9Z3FS.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./icons-DbptYgqQ.js";import"./VIcon-C3cN4B51.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSToggleSet-P32Wjk1a.js";import"./FSWrapGroup-ES-pUhBN.js";import"./VInput-CbNwc64i.js";import"./density-BTT1solu.js";import"./FSBaseField-C_kMSpMl.js";import"./FSTextField-CQxQZAzj.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./VLabel-DPXmEVvJ.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./rounded-BSNeeq4o.js";import"./index-u79WnTSR.js";import"./FSCheckbox-DMg4fEo0.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./index-C2v-jVLO.js";import"./FSFadeOut-YXyyFCAB.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./FSRadio-CKU_VsjQ.js";import"./VSelect-BuRAJEY1.js";import"./VList-C0qufsOv.js";import"./ssrBoot-C79LbZhX.js";import"./border-5JTJ2U38.js";import"./variant-CRuOwF35.js";import"./VImg-CFhtVVj8.js";import"./VDivider-IiSngj1L.js";import"./VMenu-DOme5rNf.js";import"./leaflet-src-CCqwBO6N.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,$,v,C,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const oo={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const ro=["Variations"];export{o as Variations,ro as __namedExportsOrder,oo as default};
