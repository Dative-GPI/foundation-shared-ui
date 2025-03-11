import{d as u,z as c,C as S,m as f,G as y,H as F,Q as g}from"./vue.esm-bundler-CUSnV4DE.js";import{F as M}from"./FSSelectField-GcoemPSS.js";import{F as n}from"./FSIcon-Cp7BQBW6.js";import{u as V}from"./useTranslations-D0SM0QeA.js";import{M as r}from"./map-Cp2HcdwH.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VList-0zKlnGxf.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CgsoZSKd.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./index-DDQZ-RJM.js";import"./VIcon-DeLOaNVc.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./density-DAqBVexQ.js";import"./elevation-C08MHLji.js";import"./rounded-DQzQH8wE.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./index-CeZa2hiu.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./FSToggleSet-gSDjdstT.js";import"./FSWrapGroup-DswCzfON.js";import"./VInput-C8lN0V_S.js";import"./FSBaseField-DwmVeNEG.js";import"./FSTextField-MbUkXGoG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./VLabel-DSsJm0B6.js";import"./loader-BjfLeESU.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VSelect-CO7kggYd.js";import"./VMenu-BYRtZ3M5.js";import"./leaflet-src-CVI3lIVZ.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,C,$,v,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const Qe={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Te=["Variations"];export{o as Variations,Te as __namedExportsOrder,Qe as default};
