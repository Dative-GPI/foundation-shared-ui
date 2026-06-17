import{a as U,b as w}from"./properties-Qw-O9fbT.js";import{F as T}from"./FSPlaylistTileUI-CCJSadCb.js";import{F as v}from"./FSTileList-5zRShxmj.js";import{d as B,w as k,E as D,G as E,X as I,H as d,m as u,L as c,M as _,S as N,U as A,V as M,k as O}from"./vue.esm-bundler-C5-CUMHT.js";import{u as j}from"./usePlaylists-CI0-JRZ6.js";import{C as z}from"./useColors-BAnxS_-e.js";import{L as G}from"./lists-Dmp0D7yf.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCheck-CHC00Pxg.js";import"./FSIcon-CNpmwcOd.js";import"./useBreakpoints-pPMhsL5T.js";import"./css-DSFbdPon.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./theme-CB6As9Cd.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSTile-DmLtcb1O.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSCheckbox-BwFpn-kB.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSCol-DedFW0nl.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./density-qUtw3dk7.js";import"./proxiedModel-CV-HTW34.js";import"./index-asyjLxvi.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./locale-BNkeanE6.js";import"./index-pS3mXfMR.js";import"./transition-CgRUW3r8.js";import"./dimensions-Bm76csmg.js";import"./time-uuMHVXf_.js";import"./useTranslations-DAi7IZoP.js";import"./eventQueue-D85hWBFd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./uuid-DTaye2KM.js";import"./times-CqUFey1a.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSSlideGroup-5yThapiu.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSText-C8rmUTxK.js";import"./VSlideGroup-Bd_pvRRU.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSSearchField-DfSRPhxD.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./rounded-Ctowy803.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";import"./FSSimpleTileUI-CcRMbNDG.js";import"./FSIconCard-C8bYj-2A.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./VImg-DXeUU_wB.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./filter-C1K_d8Vd.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";const $=B({title:"FSTilePlaylistsList",components:{FSPlaylistTileUI:T,FSTileList:v},props:{playlistFilters:{type:Object,required:!0},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1},singleSelect:{type:Boolean,required:!1,default:!1}},setup(e){const{entities:r,getMany:m,fetching:p}=j();return k(()=>e.playlistFilters,()=>{m(e.playlistFilters)},{immediate:!0}),{ListDirections:G,playlists:r,ColorEnum:z,fetching:p}}});function R(e,r,m,p,h,X){const C=c("FSPlaylistTileUI"),q=c("FSTileList");return _(),D(q,u({items:e.playlists,loading:e.fetching,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),E({"item.tile":d(({item:t,toggleSelect:l,direction:n})=>[O(C,u({dashboardsCount:t.dashboards.length,selectable:e.$props.selectable,singleSelect:e.$props.singleSelect,modelValue:(e.$props.modelValue??[]).includes(t.id),width:n===e.ListDirections.Column?"fill":void 0,"onUpdate:modelValue":J=>l(t)},t),null,16,["dashboardsCount","selectable","singleSelect","modelValue","width","onUpdate:modelValue"])]),_:2},[I(e.$slots,(t,l)=>({name:l,fn:d(n=>[N(e.$slots,l,A(M(n)))])}))]),1040,["items","loading","selectable","singleSelect","modelValue"])}const s=H($,[["render",R]]);$.__docgenInfo={exportName:"default",displayName:"FSTilePlaylistsList",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!0},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSTilePlaylistsList.vue"]};const Ct={title:"Core/Components/Lists/Base Lists/TilePlaylistsList",component:s,tags:["autodocs"],argTypes:{...w([v,T],s),...U(s)}},o={render:e=>({components:{FSTilePlaylistsList:s},setup(){return{args:e}},template:`
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
