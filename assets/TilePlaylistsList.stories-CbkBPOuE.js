import{a as B,b as U}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-DnKGcpYC.js";import{F as v}from"./FSTileList-A5GACQyU.js";import{r as w,aa as D,j as I,m as _,W as k,ac as d,B as u,Y as c,P as E,X as N,G as j,u as A,p as O}from"./vue.esm-bundler-DR0_aU9U.js";import{a as z}from"./usePlaylists-DGAlDCQE.js";import{a as G}from"./useColors-CvhpHTRO.js";import{L as M}from"./lists-Dmp0D7yf.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-CaPTOmz2.js";import"./FSIcon-CBwOL1p5.js";import"./useBreakpoints-DhvOJkKp.js";import"./css-B9c0ZZC5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./theme-Dfllckn6.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSTile-DyIXnIBo.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSCol-B2uM4vFw.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./proxiedModel-DoNoMWaC.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./dimensions-DYTrXD1P.js";import"./time-DuowFvgO.js";import"./useTranslations-CDmrxgqt.js";import"./times-CqUFey1a.js";import"./FSLoader-DlWbYN_-.js";import"./elevation-DVEOfLMu.js";import"./FSFadeOut-DENuqwmT.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSText-CUmuxASa.js";import"./VSlideGroup-BjJJyiAP.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSimpleTileUI-Ca1kk7vw.js";import"./FSIconCard-D8RPikTZ.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./VImg-DooBjoZC.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./filter-C1K_d8Vd.js";import"./base-7hURbKeK.js";import"./useAppOrganisationId-DfaOV_k9.js";const $=w({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:s,getMany:m,fetching:p}=z();return D(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:M,playlists:s,ColorEnum:G,fetching:p}}});function W(e,s,m,p,h,X){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return E(),I(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),_({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[O(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":Y=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[k(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,j(A(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const r=R($,[["render",W]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const Ct={title:"Foundation/Core/Lists/Base Lists/TilePlaylistsList",component:r,tags:["autodocs"],argTypes:{...U([v,T],r),...B(r)}},o={render:e=>({components:{FSTilePlaylistsList:r},setup(){return{args:e}},template:`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],playlistFilters:{}}},i={render:e=>({components:{FSTilePlaylistsList:r},setup(){return{args:e}},template:`
      <FSTilePlaylistsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:[],playlistFilters:{},selectable:!0}},a={render:e=>({components:{FSTilePlaylistsList:r},setup(){return{args:e}},template:`
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
