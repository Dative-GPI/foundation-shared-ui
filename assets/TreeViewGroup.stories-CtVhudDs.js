import{d as y,c as S,z as m,C as s,m as b,G,H as d,E as h,I as T,J as C}from"./vue.esm-bundler-CUSnV4DE.js";import{F as q}from"./FSTreeViewField-DY1iiNB_.js";import{F as V}from"./FSIcon-Cp7BQBW6.js";import{u as x}from"./useGroups-CDFHULb4.js";import{u as _}from"./useTreeView-Cuoo8GxL.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-BQiFrdcO.js";import"./VList-0zKlnGxf.js";import"./FSCard-BnVyMFnh.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CgsoZSKd.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./index-DDQZ-RJM.js";import"./VIcon-DeLOaNVc.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./density-DAqBVexQ.js";import"./elevation-C08MHLji.js";import"./rounded-DQzQH8wE.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./index-CeZa2hiu.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./loader-BjfLeESU.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VBtn-Rjy2Sxim.js";import"./group-CrKBhSLQ.js";import"./filter-BDc_Ne3E.js";import"./VMenu-BYRtZ3M5.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";const F=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:p,entities:l}=x(),i=S(()=>e.exclude?l.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):l.value),a=()=>n({...e.groupFilters}),{onUpdate:o}=_(i,[()=>e.groupFilters],r,a);return{fetchingGroups:p,groups:i,onUpdate:o}}});function N(e,r,n,p,l,i){const a=G("FSTreeViewField");return d(),m(a,b({label:e.$props.label??e.$tr("ui.common.group","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:o})=>[o.icon?(d(),m(V,{key:0},{default:s(()=>[T(C(o.icon),1)]),_:2},1024)):h("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(F,[["render",N]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const Re={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      FSTreeViewGroup,
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
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const We=["Variations"];export{t as Variations,We as __namedExportsOrder,Re as default};
