import{d as u,z as c,C as S,m as f,G as y,H as F,R as g}from"./vue.esm-bundler-DtArtqdn.js";import{F as M}from"./FSSelectField-CnymBrq3.js";import{F as n}from"./FSIcon-DAU03b1P.js";import{u as V}from"./useTranslations-CEyRES9c.js";import{M as r}from"./map-Cp2HcdwH.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VList-DzWKuuQl.js";import"./FSCard-D0sb_KqI.js";import"./FSCol-D6yYDi9X.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./FSRow-C-mN1bTt.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./VDialog-BTHijwvN.js";import"./VOverlay-Bjkk9AiY.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DKVd81aj.js";import"./proxiedModel-DNPVb8sx.js";import"./anchor-CbVlxldO.js";import"./dimensions-Dt4h5jdR.js";import"./display-H53nrFTM.js";import"./scopeId-DRx9AlMK.js";import"./locale-EnvrzLNX.js";import"./router-DPM6bvc5.js";import"./transition-POm6u0ds.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./index-YdMT2sR1.js";import"./VIcon-_X0ionFS.js";import"./ssrBoot-BOTKrwq8.js";import"./border--9_J8r4E.js";import"./density-96HGjcby.js";import"./elevation-DuPJjm1T.js";import"./rounded-B9giz-GX.js";import"./index-DWcj--5B.js";import"./VImg-DB10nKT8.js";import"./index-ShtRROw2.js";import"./FSSlideGroup-CmWlv1tz.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CHtEyijG.js";import"./FSButton-BLRH3L0O.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Bp3-EsMW.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./FSSpan-Btkwe66a.js";import"./useSlots-DbyfVVj5.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./FSToggleSet-ubheHXgn.js";import"./FSWrapGroup-BBSbZNqu.js";import"./VInput-Dw4F_0vm.js";import"./FSBaseField-COfiqIR8.js";import"./FSTextField-ofwyccS7.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./VLabel-D5MHSYH0.js";import"./loader-CJlqftns.js";import"./FSCheckbox-D615kJWP.js";import"./VSelectionControl-D_AGLwLV.js";import"./FSFadeOut-okmKwNuP.js";import"./FSLoader-C5CmIvK9.js";import"./FSRadio-K1Efb9Rj.js";import"./VSelect-DisOqffT.js";import"./VMenu-Bm-EzALO.js";import"./leaflet-src-CVI3lIVZ.js";const s=u({name:"FSSelectMapLayer",components:{FSIcon:n,FSSelectField:M},props:{modelValue:{type:[String,Array],required:!1}},emits:["update:modelValue"],setup(){const{$tr:e}=V();return{items:[{id:r.Map,icon:"mdi-map",label:e("ui.map-layer.map","Map")},{id:r.Imagery,icon:"mdi-satellite",label:e("ui.map-layer.imagery","Imagery")},{id:r.Snow,icon:"mdi-snowflake",label:e("ui.map-layer.snow","Snow ski map")}]}}});function _(e,t,C,$,v,h){const d=y("FSSelectField");return F(),c(d,f({items:e.items,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=m=>e.$emit("update:modelValue",m))},e.$attrs),{"item-prepend":S(({item:m})=>[g(n,{icon:m.icon},null,8,["icon"])]),_:1},16,["items","modelValue"])}const l=L(s,[["render",_]]);s.__docgenInfo={displayName:"FSSelectMapLayer",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"MapLayers | MapLayers[]"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/FSSelectMapLayer.vue"]};const Re={title:"Foundation/Shared/Selects/SelectMapLayer",component:l,tags:["autodocs"]},o={args:{modelValue:r.Map,multiple:!1},render:e=>({components:{FSSelectedMapLayer:l},setup(){return{args:e}},template:`
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const Te=["Variations"];export{o as Variations,Te as __namedExportsOrder,Re as default};
