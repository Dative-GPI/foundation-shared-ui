import{d as u,E as c,H as S,m as y,L as f,M as F,k as M}from"./vue.esm-bundler-NVdFPFZB.js";import{F as g}from"./FSSelectField-WAavbS0b.js";import{F as n}from"./FSIcon-D-iWmbKS.js";import{u as V}from"./useTranslations-D5uJM3hx.js";import{M as o}from"./map-C6_VeKRe.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCol-ChYB2Oag.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./FSSlideGroup-BLif3f0e.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSText-DkgFU9ZB.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./icons-AciKn6XY.js";import"./VIcon-BPCLtKbp.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./FSBaseField-DjPNexk7.js";import"./FSTextField-CCgGVMUk.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./VLabel-DOSQu5RP.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./eventQueue-D85hWBFd.js";import"./leaflet-src-D13iuSoG.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:g},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:o.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:o.OpenStreetMap,icon:"mdi-map-plus",label:e("ui.map-layer.open-street-map","Open Street Map")},{id:o.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:o.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,C,$,v,b){const d=f("FSSelectField");return F(),c(d,y({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=p=>e.$emit("update:modelValue",p))},e.$attrs),{"item-prepend":S(({item:p})=>[M(n,{icon:p.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const po={title:"Shared/Components/Selects/SelectMapLayer",component:l,tags:["autodocs"]},r={args:{modelValue:o.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
