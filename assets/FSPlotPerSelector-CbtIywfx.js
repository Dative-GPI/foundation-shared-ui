import{d as i,c as l,A as a,B as s,C as n,j as u}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as d}from"./FSAutocompleteField-DRDv3EYx.js";import{P as e,p as c}from"./chartsTools-CrQb4Rez.js";import{g as f}from"./enumTools-BEsapygt.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./FSRow-4Qz6Bbpg.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSIcon-CKEWDmaC.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./useTranslations-DN7QCs30.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";const r=i({components:{FSAutocompleteField:d},props:{modelValue:{type:Number,required:!1},label:{type:String,required:!1}},emits:["update:modelValue"],setup(){return{plotPerItems:l(()=>f(e).filter(t=>t.value!=e.None).map(t=>({id:t.value,label:c(t.value)})))}}});function F(o,t,S,V,b,g){const m=a("FSAutocompleteField");return s(),n(m,u({label:o.label??o.$tr("ui.common.plot-per","Plot per"),items:o.plotPerItems,modelValue:o.modelValue,"onUpdate:modelValue":t[0]||(t[0]=p=>o.$emit("update:modelValue",p))},o.$attrs),null,16,["label","items","modelValue"])}const Go=P(r,[["render",F]]);r.__docgenInfo={exportName:"default",displayName:"FSPlotPerSelector",description:"",tags:{},props:[{name:"modelValue",type:{name:"PlotPer"},required:!1},{name:"label",type:{name:"string"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/selects/chartSelectors/FSPlotPerSelector.vue"]};export{Go as default};