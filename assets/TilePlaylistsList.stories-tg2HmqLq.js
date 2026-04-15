import{a as U,b as w}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-ocMj3AN6.js";import{F as v}from"./FSTileList-BcKgqoHJ.js";import{d as B,w as k,E as D,G as E,X as I,H as d,m as u,L as c,M as _,S as N,U as A,V as M,k as O}from"./vue.esm-bundler-D_gXonxt.js";import{u as j}from"./usePlaylists-CNwUSeFH.js";import{C as z}from"./useColors-B49MKafH.js";import{L as G}from"./lists-Dmp0D7yf.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-Dx-VIDAj.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./css-Bznx04uW.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./theme-DdZUMbNR.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSTile-Dc7IleRl.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSCol-C3EJfcJX.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DWL-VMav.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./FSButton-cpkpLA7w.js";import"./FSText-DL_5kFi7.js";import"./VSlideGroup-Bqij08hI.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSSearchField-Bhtathpg.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSimpleTileUI-Boz4MTP-.js";import"./FSIconCard-orS5KPa9.js";import"./FSImage-DWYQvpU3.js";import"./FSImageUI-C_EkTaPS.js";import"./VImg-ufpttNgj.js";import"./useImages-pCcsdsIl.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./filter-C1K_d8Vd.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const $=B({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:r,getMany:m,fetching:p}=j();return k(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:G,playlists:r,ColorEnum:z,fetching:p}}});function R(e,r,m,p,h,X){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return _(),D(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),E({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[O(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":J=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[I(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,A(M(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const s=H($,[["render",R]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const Ct={title:"Foundation/Core/Lists/Base Lists/TilePlaylistsList",component:s,tags:["autodocs"],argTypes:{...w([v,T],s),...U(s)}},o={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],playlistFilters:{}}},i={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],playlistFilters:{},selectable:!0}},a={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],playlistFilters:{},selectable:!0,singleSelect:!0}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSTilePlaylistsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    playlistFilters: {}
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,F,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSTilePlaylistsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    playlistFilters: {},
    selectable: true
  }
}`,...(b=(F=i.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var V,L,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSTilePlaylistsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: [],
    playlistFilters: {},
    selectable: true,
    singleSelect: true
  }
}`,...(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const qt=["Default","Selectable","SingleSelect"];export{o as Default,i as Selectable,a as SingleSelect,qt as __namedExportsOrder,Ct as default};
