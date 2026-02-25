import{a as U,b as w}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-DxhXWxu9.js";import{F as v}from"./FSTileList-CpOi3E7h.js";import{d as B,w as D,B as I,C as _,U as k,D as d,m as u,I as c,J as E,P as N,Q as A,R as O,q as R}from"./vue.esm-bundler-D5n7z5qz.js";import{u as j}from"./usePlaylists-BU_u_BaY.js";import{C as z}from"./useColors-COEXNh00.js";import{L as J}from"./lists-Dmp0D7yf.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-CJ0o3hvW.js";import"./FSIcon-DFkRD0af.js";import"./useBreakpoints-CEzKC_o8.js";import"./css-CxcvJboa.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSTile-NX-NI4Ku.js";import"./FSCard-BCuiauGe.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./proxiedModel-Cv3qT1cZ.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./locale-n4v42L7l.js";import"./index-Bo6vw90T.js";import"./transition-gfLL8RoD.js";import"./dimensions-D_nx6Jbk.js";import"./time-C045-Osl.js";import"./times-CqUFey1a.js";import"./useTranslations-CFCS6HA-.js";import"./FSLoader-uhE9mCg0.js";import"./elevation-62d6MvS5.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BOTL2kDs.js";import"./FSButtonNextIcon-BVPIcqKL.js";import"./FSButton-BTgaogZq.js";import"./FSText-015IEZHy.js";import"./VSlideGroup-BJAU1y7G.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSSearchField-DbUvZY9e.js";import"./FSTextField-c9dXDQSf.js";import"./FSBaseField-C_kMSpMl.js";import"./VField-BWZy72Xk.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-u79WnTSR.js";import"./FSSimpleTileUI-Lc4WgZDr.js";import"./FSIconCard-CDjfPUao.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./VImg-CFhtVVj8.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./filter-C1K_d8Vd.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const $=B({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:r,getMany:m,fetching:p}=j();return D(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:J,playlists:r,ColorEnum:z,fetching:p}}});function Q(e,r,m,p,h,G){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return E(),I(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),_({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[R(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":H=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[k(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,A(O(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const s=M($,[["render",Q]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const $t={title:"Foundation/Core/Lists/Base Lists/TilePlaylistsList",component:s,tags:["autodocs"],argTypes:{...w([v,T],s),...U(s)}},o={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
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
}`,...(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ht=["Default","Selectable","SingleSelect"];export{o as Default,i as Selectable,a as SingleSelect,ht as __namedExportsOrder,$t as default};
