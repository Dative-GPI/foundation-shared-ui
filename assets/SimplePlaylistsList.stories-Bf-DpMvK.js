import{a as u}from"./index-B-lxVbXh.js";import{d as f,w as y,E as S,m as g,L as F,M as L}from"./vue.esm-bundler-NVdFPFZB.js";import{F as a}from"./FSSimpleList-DIWPDsCL.js";import{u as P}from"./usePlaylists-QpYoi8ra.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as h,b as k}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSCol-KRtq6OYO.js";import"./FSLoader-BoDinVVO.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./FSFadeOut-W61q8jFE.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./VImg-BdZHkGCX.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSTile-DnwhleJY.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSButtonEditIcon-DHFlTc3g.js";import"./FSButtonRemoveIcon-ClDcpchh.js";import"./filter-C1K_d8Vd.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const l=f({name:"FSSimplePlaylistsList",components:{FSSimpleList:a},props:{playlistFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:p,fetching:m}=P();return y(()=>t.playlistFilters,()=>{p(t.playlistFilters)},{immediate:!0}),{playlists:r,fetching:m}}});function C(t,r,p,m,c,b){const d=F("FSSimpleList");return L(),S(d,g({items:t.playlists,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=_(l,[["render",C]]);l.__docgenInfo={displayName:"FSSimplePlaylistsList",exportName:"default",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue"]};const oi={title:"Core/Components/Lists/Simple Lists/SimplePLaylistsList",component:o,tags:["autodocs"],argTypes:{...k([a],o),...h(o)}},i={render:t=>({components:{FSSimplePlaylistsList:o},setup(){return{args:t}},template:`
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
