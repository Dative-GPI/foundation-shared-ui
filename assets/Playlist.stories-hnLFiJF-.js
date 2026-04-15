import{a as h,b as q}from"./properties-Qw-O9fbT.js";import{F as v}from"./FSPlaylistTileUI-ocMj3AN6.js";import{F as k}from"./FSTile-Dc7IleRl.js";import{d as L,w,E as d,G as B,X as E,m as N,K as D,L as u,M as c,H as z,S as A,U as G,V as H}from"./vue.esm-bundler-D_gXonxt.js";import{F as K}from"./FSLoadTile-DSF_DCua.js";import{a as M}from"./usePlaylists-CNwUSeFH.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-Dx-VIDAj.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSRow-cHWWqhhs.js";import"./FSCol-C3EJfcJX.js";import"./time-B7nWt_FV.js";import"./useTranslations-D2TwtVAp.js";import"./times-CqUFey1a.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSCheckbox-zoBL9ZjY.js";import"./useRules-CohX4tE3.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./density-W7RG4BnT.js";import"./proxiedModel-Cl0bR0rs.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./dimensions-BYDjhYdL.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const I=L({name:"FSPlaylistTile",components:{PlaylistTileUI:v,FSLoadTile:K},props:{playlistId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{get:t,getting:n,entity:i}=M();return w(()=>e.playlistId,()=>{t(e.playlistId)},{immediate:!0}),{getting:n,entity:i}}});function R(e,t,n,i,X,j){var m;const $=u("FSLoadTile"),C=u("PlaylistTileUI");return e.getting?(c(),d($,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(c(),d(C,N({key:1,dashboardsCount:((m=e.entity.dashboards)==null?void 0:m.length)??0,looped:e.entity.looped,delay:e.entity.delay,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),B({_:2},[E(e.$slots,(a,p)=>({name:p,fn:z(U=>[A(e.$slots,p,G(H(U)))])}))]),1040,["dashboardsCount","looped","delay","label","code","selectable","modelValue"])):D("",!0)}const l=O(I,[["render",R]]);I.__docgenInfo={displayName:"FSPlaylistTile",exportName:"default",description:"",tags:{},props:[{name:"playlistId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSPlaylistTile.vue"]};const Je={title:"Foundation/Core/Tiles/Playlist",component:l,tags:["autodocs"],argTypes:{...q([v,k],l),...h(l)}},o={render:e=>({components:{FSPlaylistTile:l},setup(){return{args:e}},template:`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,playlistId:"playlist1"}},r={render:e=>({components:{FSPlaylistTile:l},setup(){return{args:e}},template:`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!1,playlistId:"playlist2",selectable:!0}},s={render:e=>({components:{FSPlaylistTile:l},setup(){return{args:e}},template:`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!0,playlistId:"playlist1",selectable:!0,singleSelect:!0}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    playlistId: 'playlist1'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,b,V;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: false,
    playlistId: 'playlist2',
    selectable: true
  }
}`,...(V=(b=r.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var T,F,P;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSPlaylistTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSPlaylistTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: true,
    playlistId: 'playlist1',
    selectable: true,
    singleSelect: true
  }
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const Qe=["Default","Selectable","SingleSelect"];export{o as Default,r as Selectable,s as SingleSelect,Qe as __namedExportsOrder,Je as default};
