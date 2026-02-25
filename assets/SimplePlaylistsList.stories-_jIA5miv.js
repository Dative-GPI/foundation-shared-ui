import{a as u}from"./index-B-lxVbXh.js";import{d as f,w as y,B as S,m as g,I as F,J as L}from"./vue.esm-bundler-D5n7z5qz.js";import{F as a}from"./FSSimpleList-DmHJy7c1.js";import{u as P}from"./usePlaylists-BU_u_BaY.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as h,b as k}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSCol-D_lbFmZy.js";import"./FSLoader-uhE9mCg0.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./color-CUHqxR_J.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./useRender-Dce1Ng4u.js";import"./FSFadeOut-YXyyFCAB.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BnnHyPAm.js";import"./FSButtonNextIcon-BxxPSm84.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-DENSLTM_.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSSearchField-Cc3wHhUa.js";import"./FSTextField-DVC6JxU9.js";import"./FSBaseField-C_kMSpMl.js";import"./useRules-R3Ldkrx4.js";import"./VField-BWZy72Xk.js";import"./transition-gfLL8RoD.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./density-BTT1solu.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-u79WnTSR.js";import"./useTranslations-CFCS6HA-.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./VImg-CFhtVVj8.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-BiFTCuMc.js";import"./FSCheckbox-DMg4fEo0.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./index-C2v-jVLO.js";import"./FSButtonEditIcon-XTfWg_7h.js";import"./FSButtonRemoveIcon-Ckyqv8HZ.js";import"./filter-C1K_d8Vd.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const l=f({name:"FSSimplePlaylistsList",components:{FSSimpleList:a},props:{playlistFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:p,fetching:m}=P();return y(()=>t.playlistFilters,()=>{p(t.playlistFilters)},{immediate:!0}),{playlists:r,fetching:m}}});function C(t,r,p,m,c,b){const d=F("FSSimpleList");return L(),S(d,g({items:t.playlists,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=_(l,[["render",C]]);l.__docgenInfo={displayName:"FSSimplePlaylistsList",exportName:"default",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue"]};const ti={title:"Foundation/Core/Lists/Simple Lists/SimplePLaylistsList",component:o,tags:["autodocs"],argTypes:{...k([a],o),...h(o)}},i={render:t=>({components:{FSSimplePlaylistsList:o},setup(){return{args:t}},template:`
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ii=["Default"];export{i as Default,ii as __namedExportsOrder,ti as default};
