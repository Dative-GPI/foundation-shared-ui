import{a as u}from"./index-B-lxVbXh.js";import{d as f,w as y,E as S,m as g,L as F,M as L}from"./vue.esm-bundler-D_gXonxt.js";import{F as a}from"./FSSimpleList-BeC8bClF.js";import{u as P}from"./usePlaylists-B01yAHdn.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as h,b as k}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./FSCol-C3EJfcJX.js";import"./FSLoader-CdctsmAF.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./color-DuOnfdFp.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./useRender-BE0GCWmZ.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-CeCO9XCC.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./FSButton-DHeuA-BH.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./FSSpan-ap0CpdXZ.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSSearchField-HtJ7es4F.js";import"./FSTextField-CvqetqWm.js";import"./FSBaseField-CGwB2cs2.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./useTranslations-D2TwtVAp.js";import"./FSImage-BwU3jLhA.js";import"./FSImageUI-C_EkTaPS.js";import"./VImg-ufpttNgj.js";import"./useImages-ns1hGlq_.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-CzhkrYh7.js";import"./lodash-5Yh5OMmr.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSTile-DPKEiqsQ.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSButtonEditIcon-DWJ9_zYt.js";import"./FSButtonRemoveIcon-CAuQ8hiW.js";import"./filter-C1K_d8Vd.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const l=f({name:"FSSimplePlaylistsList",components:{FSSimpleList:a},props:{playlistFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:p,fetching:m}=P();return y(()=>t.playlistFilters,()=>{p(t.playlistFilters)},{immediate:!0}),{playlists:r,fetching:m}}});function C(t,r,p,m,c,b){const d=F("FSSimpleList");return L(),S(d,g({items:t.playlists,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=_(l,[["render",C]]);l.__docgenInfo={displayName:"FSSimplePlaylistsList",exportName:"default",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue"]};const oi={title:"Foundation/Core/Lists/Simple Lists/SimplePLaylistsList",component:o,tags:["autodocs"],argTypes:{...k([a],o),...h(o)}},i={render:t=>({components:{FSSimplePlaylistsList:o},setup(){return{args:t}},template:`
      <FSSimplePlaylistsList
        v-bind="args"
      />
    `}),args:{tileProps:t=>({onClick:()=>u("clicked item")(t)})}};var e,s,n;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimplePlaylistsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimplePlaylistsList
        v-bind="args"
      />
    \`
  }),
  args: {
    tileProps: (item: any) => ({
      onClick: () => action("clicked item")(item)
    })
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ri=["Default"];export{i as Default,ri as __namedExportsOrder,oi as default};
