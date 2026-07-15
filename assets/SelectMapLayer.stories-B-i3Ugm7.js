import{d as u,E as c,H as S,m as y,L as f,M as F,k as M}from"./vue.esm-bundler-NVdFPFZB.js";import{F as g}from"./FSSelectField-Dc0S5clF.js";import{F as n}from"./FSIcon-BcHBVf_o.js";import{u as V}from"./useTranslations-D5uJM3hx.js";import{M as o}from"./map-B32CpSfc.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-BzRN-uoP.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCol-KRtq6OYO.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSSlideGroup-BbqArISU.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./FSButton-BqreeKOn.js";import"./FSText-DIbyStIN.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./icons-Cl0t_6pZ.js";import"./VIcon-Cu6WQqXu.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./FSBaseField-Bph8nCfp.js";import"./FSTextField-Cq4gI6mX.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./VLabel-BtnooUPU.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-W61q8jFE.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-Dd1EMADi.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./eventQueue-D85hWBFd.js";import"./leaflet-src-Dw1OyN9w.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:g},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:o.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:o.OpenStreetMap,icon:"mdi-map-plus",label:e("ui.map-layer.open-street-map","Open Street Map")},{id:o.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:o.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,C,$,v,b){const d=f("FSSelectField");return F(),c(d,y({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=p=>e.$emit("update:modelValue",p))},e.$attrs),{"item-prepend":S(({item:p})=>[M(n,{icon:p.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const po={title:"Shared/Components/Selects/SelectMapLayer",component:l,tags:["autodocs"]},r={args:{modelValue:o.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const mo=["Variations"];export{r as Variations,mo as __namedExportsOrder,po as default};
