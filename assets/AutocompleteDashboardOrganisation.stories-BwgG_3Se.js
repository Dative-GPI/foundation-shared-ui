import{d as A,c as m,A as V,B as p,C as d,E as u,j as w,J as C,K as $,H as q}from"./vue.esm-bundler-Zcuj-zyO.js";import{F as k}from"./FSAutocompleteField-D_wwul2P.js";import{F as h}from"./FSIcon-CKEWDmaC.js";import{u as _}from"./useDashboardOrganisations-C7UErTFX.js";import{u as B}from"./useAutocomplete-DDmNThuF.js";import{u as T}from"./useTranslations-DN7QCs30.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DLyNVOXQ.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useBreakpoints-IB1lZo1P.js";import"./useSlots-DzOFTavN.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./density-DMrbDfgW.js";import"./dimensions-BWgpWc0X.js";import"./proxiedModel-Xz4IZg0a.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./router-DnAkll3L.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./filter-DiySb8XN.js";import"./dashboardTranslation-B7lvR05i.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./lodash-BiW_TGGX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";const f=A({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:k,FSIcon:h},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:r}=_(),{$tr:s}=T(),l=m(()=>D.value&&n.value),o=m(()=>e.multiple&&e.modelValue?s("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",e.modelValue.length):null),S=y=>i({...e.dashboardOrganisationFilters,search:y??void 0}),{toggleSet:F,init:D,onUpdate:O}=B(r,[()=>e.dashboardOrganisationFilters],t,S);return{dashboardOrganisations:r,placeholder:o,toggleSet:F,loading:l,onUpdate:O}}});function U(e,t,i,n,r,s){const l=V("FSAutocompleteField");return p(),d(l,w({label:e.$props.label??e.$tr("autocomplete.dashboard.label","Dashboard"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.dashboardOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:o})=>[o.icon?(p(),d(h,{key:0},{default:u(()=>[C($(o.icon),1)]),_:2},1024)):q("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const v=j(f,[["render",U]]);f.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboardOrganisation.vue"]};const mt={title:"Foundation/Core/Autocompletes/AutocompleteDashboardOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteDashboardOrganisation:v,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,c,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDashboardOrganisation,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboardOrganisation
        label="DashboardOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const pt=["Variations"];export{a as Variations,pt as __namedExportsOrder,mt as default};