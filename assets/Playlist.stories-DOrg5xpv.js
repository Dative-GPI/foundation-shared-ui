import{a as h,b as q}from"./properties-Qw-O9fbT.js";import{F as v}from"./FSPlaylistTileUI-D-8MHfGf.js";import{F as k}from"./FSTile-D4h9K5XP.js";import{d as L,w,E as d,G as B,X as E,m as N,K as D,L as u,M as c,H as z,S as A,U as G,V as H}from"./vue.esm-bundler-NVdFPFZB.js";import{F as K}from"./FSLoadTile-DF_gJ9W6.js";import{a as M}from"./usePlaylists-QpYoi8ra.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-CnIlEG29.js";import"./FSIcon-DzQOa56z.js";import"./useBreakpoints-DO2FQykY.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSRow-Dg2RhQyl.js";import"./FSCol-KRtq6OYO.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";import"./FSCard-ghpSlWxI.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSCheckbox-D5kCrb66.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const I=L({name:"FSPlaylistTile",components:{PlaylistTileUI:v,FSLoadTile:K},props:{playlistId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{get:t,getting:n,entity:i}=M();return w(()=>e.playlistId,()=>{t(e.playlistId)},{immediate:!0}),{getting:n,entity:i}}});function R(e,t,n,i,X,j){var m;const $=u("FSLoadTile"),C=u("PlaylistTileUI");return e.getting?(c(),d($,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(c(),d(C,N({key:1,dashboardsCount:((m=e.entity.dashboards)==null?void 0:m.length)??0,looped:e.entity.looped,delay:e.entity.delay,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),B({_:2},[E(e.$slots,(a,p)=>({name:p,fn:z(U=>[A(e.$slots,p,G(H(U)))])}))]),1040,["dashboardsCount","looped","delay","label","code","selectable","modelValue"])):D("",!0)}const l=O(I,[["render",R]]);I.__docgenInfo={displayName:"FSPlaylistTile",exportName:"default",description:"",tags:{},props:[{name:"playlistId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSPlaylistTile.vue"]};const Je={title:"Core/Components/Tiles/Playlist",component:l,tags:["autodocs"],argTypes:{...q([v,k],l),...h(l)}},o={render:e=>({components:{FSPlaylistTile:l},setup(){return{args:e}},template:`
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
