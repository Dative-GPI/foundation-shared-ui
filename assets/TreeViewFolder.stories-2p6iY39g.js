import{d as y,c as S,E as s,H as d,m as h,L as T,M as u,N as b,O as C,K as x}from"./vue.esm-bundler-C5-CUMHT.js";import{F as _}from"./FSTreeViewField-DmIDVPvM.js";import{F as g}from"./FSIcon-CNpmwcOd.js";import{u as k}from"./useTreeView-BNh0qOBo.js";import{u as q}from"./useFolders-QWzM3akC.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DedFW0nl.js";import"./FSDialogMenu-D2-2fAf2.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSButton-DohpVEzP.js";import"./FSText-C8rmUTxK.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./index-pS3mXfMR.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./density-qUtw3dk7.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./rounded-Ctowy803.js";import"./index-B3ZVJx30.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";import"./FSTreeView-C3awIJUj.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VImg-DXeUU_wB.js";import"./VDivider-Ck2C5rfW.js";import"./VBtn-CvDmdLsi.js";import"./group-B4VRq_l_.js";import"./position-CTxKpBLl.js";import"./filter-BTy0FM8E.js";import"./FSFadeOut-DOLGFW1u.js";import"./uuid-DTaye2KM.js";import"./FSRadio-msJSYj1I.js";import"./FSMenu-5jQDuEvO.js";import"./VMenu-dxHuUw__.js";import"./eventQueue-D85hWBFd.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:m,fetching:a,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>m({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:a,folders:i,onUpdate:o}}});function O(e,r,m,a,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[b(C(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",O]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const dr={title:"Core/Components/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,F;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewFolder,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const ur=["Variations"];export{t as Variations,ur as __namedExportsOrder,dr as default};
