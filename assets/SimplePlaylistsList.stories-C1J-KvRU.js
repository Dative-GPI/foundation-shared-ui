import{a as u}from"./index-B-lxVbXh.js";import{d as f,w as y,E as S,m as g,L as F,M as L}from"./vue.esm-bundler-NVdFPFZB.js";import{F as a}from"./FSSimpleList-Ehe1r_Ne.js";import{u as P}from"./usePlaylists-QpYoi8ra.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as h,b as k}from"./properties-Qw-O9fbT.js";import"./v4-CtRu48qb.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSCol-ChYB2Oag.js";import"./FSLoader-DRppy7ch.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./color-Cx3XlwVF.js";import"./dimensions-BuDdBtmf.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./useRender-C5CA_XPC.js";import"./FSFadeOut-DWR8A1ny.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-BLif3f0e.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./display-RdUuPsY9.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSSearchField-TAeMrCJx.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./transition-Dqm8buww.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./VImg-CF0d7Fd2.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSTile-BhVLh0I_.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSButtonEditIcon-MQwhFrEI.js";import"./FSButtonRemoveIcon-j-Zi2Z3i.js";import"./filter-C1K_d8Vd.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const l=f({name:"FSSimplePlaylistsList",components:{FSSimpleList:a},props:{playlistFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:r,getMany:p,fetching:m}=P();return y(()=>t.playlistFilters,()=>{p(t.playlistFilters)},{immediate:!0}),{playlists:r,fetching:m}}});function C(t,r,p,m,c,b){const d=F("FSSimpleList");return L(),S(d,g({items:t.playlists,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const o=_(l,[["render",C]]);l.__docgenInfo={displayName:"FSSimplePlaylistsList",exportName:"default",description:"",tags:{},props:[{name:"playlistFilters",type:{name:"PlaylistFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/playlists/FSSimplePlaylistsList.vue"]};const oi={title:"Core/Components/Lists/Simple Lists/SimplePLaylistsList",component:o,tags:["autodocs"],argTypes:{...k([a],o),...h(o)}},i={render:t=>({components:{FSSimplePlaylistsList:o},setup(){return{args:t}},template:`
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
