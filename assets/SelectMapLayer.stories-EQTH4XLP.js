import{d as u,B as c,E as S,m as f,I as y,J as F,k as g}from"./vue.esm-bundler-PONd4AmC.js";import{F as M}from"./FSSelectField-Bqm7POVY.js";import{F as n}from"./FSIcon-bsX1r_Ci.js";import{u as V}from"./useTranslations-_Q1DYra_.js";import{M as r}from"./map-BkwnYXis.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSDialogMenu-Czm1Jubp.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./VDialog-CJNHz4BJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./color-_AiH45em.js";import"./proxiedModel-vOB1Q9Gh.js";import"./anchor-D2WyvgD_.js";import"./dimensions-CNbPgA3L.js";import"./display-BXzLC06Y.js";import"./scopeId-CWp-k_S_.js";import"./locale-CoLhg8Wl.js";import"./router-6tzIEQS-.js";import"./transition-BXZIGKil.js";import"./VDefaultsProvider-BsWh58B_.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./index-CANKuvlL.js";import"./FSToggleSet-CRtePpT3.js";import"./FSWrapGroup-CpwsD4SA.js";import"./VInput-ClaXJMCA.js";import"./density-CNNumQ_A.js";import"./FSBaseField-DMW1nZy-.js";import"./FSTextField-D-U5ryYn.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./VLabel-5AeJpfXJ.js";import"./loader-DGoLn0VY.js";import"./rounded-BBFi0CuG.js";import"./index-Bb4mSIJO.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSLoader-UOJfN8Qb.js";import"./elevation-CL0Py7Fp.js";import"./FSRadio-BKiTm18z.js";import"./VSelect-BUWJeJyh.js";import"./VList-B9UxDYwK.js";import"./ssrBoot-DufuUSU7.js";import"./border-z35mRDPS.js";import"./VImg-DKyIpwU2.js";import"./VMenu-D11N5TPJ.js";import"./leaflet-src-BqBfykqS.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,$,v,C,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const De={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Ge=["Variations"];export{o as Variations,Ge as __namedExportsOrder,De as default};
