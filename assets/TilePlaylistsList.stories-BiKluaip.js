import{a as U,b as w}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-CFTO-mGG.js";import{F as v}from"./FSTileList-B3MUteUF.js";import{d as B,w as k,E as D,G as E,X as I,H as d,m as u,L as c,M as _,S as N,U as A,V as M,k as O}from"./vue.esm-bundler-NVdFPFZB.js";import{u as j}from"./usePlaylists-QpYoi8ra.js";import{C as z}from"./useColors-v3I-6cBg.js";import{L as G}from"./lists-Dmp0D7yf.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-DvcPagA7.js";import"./FSIcon-BcHBVf_o.js";import"./useBreakpoints-DO2FQykY.js";import"./css-CUVOJ3aO.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./theme-DuZszYeY.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSTile-DnwhleJY.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./proxiedModel-VL_RP4zk.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./dimensions-CS_qJJhy.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./FSFadeOut-W61q8jFE.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./FSButton-BqreeKOn.js";import"./FSText-DIbyStIN.js";import"./VSlideGroup-B-JqmwGu.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./FSSimpleTileUI-DcYrEEsb.js";import"./FSIconCard-jgpe5rl0.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./VImg-BdZHkGCX.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./filter-C1K_d8Vd.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const $=B({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:r,getMany:m,fetching:p}=j();return k(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:G,playlists:r,ColorEnum:z,fetching:p}}});function R(e,r,m,p,h,X){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return _(),D(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),E({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[O(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":J=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[I(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,A(M(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const s=H($,[["render",R]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const Ct={title:"Core/Components/Lists/Base Lists/TilePlaylistsList",component:s,tags:["autodocs"],argTypes:{...w([v,T],s),...U(s)}},o={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
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
