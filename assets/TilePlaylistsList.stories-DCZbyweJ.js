import{a as U,b as w}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-DKsAt0SS.js";import{F as v}from"./FSTileList-BtRSy9pC.js";import{d as B,w as k,E as D,G as E,X as I,H as d,m as u,L as c,M as _,S as N,U as A,V as M,k as O}from"./vue.esm-bundler-NVdFPFZB.js";import{u as j}from"./usePlaylists-QpYoi8ra.js";import{C as z}from"./useColors-CPKx0SIo.js";import{L as G}from"./lists-Dmp0D7yf.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-Y_gdQV2g.js";import"./FSIcon-D-iWmbKS.js";import"./useBreakpoints-Trboya0O.js";import"./css-BA19cdxW.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./theme-CHZNEzUD.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSTile-BhVLh0I_.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSCheckbox-BEgzMGmB.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSCol-ChYB2Oag.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./density-HajNgXBf.js";import"./proxiedModel-4bJ1saXA.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./dimensions-BuDdBtmf.js";import"./time-D8YoZjka.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSSlideGroup-BLif3f0e.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSText-DkgFU9ZB.js";import"./VSlideGroup-DLaaL0Lk.js";import"./display-RdUuPsY9.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSSearchField-TAeMrCJx.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./FSSimpleTileUI-Bi734Ok8.js";import"./FSIconCard-DMtxuGAX.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./VImg-CF0d7Fd2.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./filter-C1K_d8Vd.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const $=B({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:r,getMany:m,fetching:p}=j();return k(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:G,playlists:r,ColorEnum:z,fetching:p}}});function R(e,r,m,p,h,X){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return _(),D(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),E({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[O(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":J=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[I(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,A(M(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const s=H($,[["render",R]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const Ct={title:"Core/Components/Lists/Base Lists/TilePlaylistsList",component:s,tags:["autodocs"],argTypes:{...w([v,T],s),...U(s)}},o={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
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
