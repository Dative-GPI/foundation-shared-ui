import{a as h,b as q}from"./properties-Qw-O9fbT.js";import{F as v}from"./FSPlaylistTileUI-XhFEnIYD.js";import{F as k}from"./FSTile-CbSCVq7d.js";import{d as B,w,B as d,C as L,U as D,m as N,H as E,I as u,J as c,D as R,P as z,Q as A,R as H}from"./vue.esm-bundler-D5n7z5qz.js";import{F as J}from"./FSLoadTile-BU2d4NBb.js";import{a as O}from"./usePlaylists-DrtMN-Q0.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-CJ0o3hvW.js";import"./FSIcon-DFkRD0af.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSRow-DIk8KFbG.js";import"./FSCol-D_lbFmZy.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./FSCard-xgl24Qs4.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSSpan-BN7wkmby.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";const I=B({name:"FSPlaylistTile",components:{PlaylistTileUI:v,FSLoadTile:J},props:{playlistId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{get:t,getting:n,entity:i}=O();return w(()=>e.playlistId,()=>{t(e.playlistId)},{immediate:!0}),{getting:n,entity:i}}});function j(e,t,n,i,G,K){var m;const $=u("FSLoadTile"),C=u("PlaylistTileUI");return e.getting?(c(),d($,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(c(),d(C,N({key:1,dashboardsCount:((m=e.entity.dashboards)==null?void 0:m.length)??0,looped:e.entity.looped,delay:e.entity.delay,label:e.entity.label,code:e.entity.code,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),L({_:2},[D(e.$slots,(a,p)=>({name:p,fn:R(U=>[z(e.$slots,p,A(H(U)))])}))]),1040,["dashboardsCount","looped","delay","label","code","selectable","modelValue"])):E("",!0)}const l=Q(I,[["render",j]]);I.__docgenInfo={displayName:"FSPlaylistTile",exportName:"default",description:"",tags:{},props:[{name:"playlistId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSPlaylistTile.vue"]};const Me={title:"Foundation/Core/Tiles/Playlist",component:l,tags:["autodocs"],argTypes:{...q([v,k],l),...h(l)}},o={render:e=>({components:{FSPlaylistTile:l},setup(){return{args:e}},template:`
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
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const We=["Default","Selectable","SingleSelect"];export{o as Default,r as Selectable,s as SingleSelect,We as __namedExportsOrder,Me as default};
