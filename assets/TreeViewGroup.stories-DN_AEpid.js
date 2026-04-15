import{d as y,c as S,E as u,H as s,m as b,L as h,M as d,N as G,O as T,K as C}from"./vue.esm-bundler-D_gXonxt.js";import{F as q}from"./FSTreeViewField-DNspIbDo.js";import{F as V}from"./FSIcon-B9MXbR5l.js";import{u as x}from"./useTreeView-CGKBYQdb.js";import{u as _}from"./useGroups-C4KOp0Sv.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-C3EJfcJX.js";import"./FSDialogMenu-CYc22LXB.js";import"./FSCard-Cxfe3-O9.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./proxiedModel-Cl0bR0rs.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./locale-CEMLpecI.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-d5ANZlFh.js";import"./VDefaultsProvider-DJfojugM.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSButton-cpkpLA7w.js";import"./FSText-DL_5kFi7.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSTreeView-CWA3GOu9.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VBtn-DgLqICzT.js";import"./group-BimGXDpZ.js";import"./position-mzu5LnMQ.js";import"./filter-DB2eMWUq.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./FSRadio-Bk5L3sqZ.js";import"./FSMenu-BRQdQ5Qk.js";import"./VMenu-KvKUKA1I.js";import"./lodash-5Yh5OMmr.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./pathCrumb-Db-cq5HI.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";const F=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:n,entities:l}=_(),i=S(()=>e.exclude?l.value.filter(m=>m.id!==e.exclude&&!m.path.some(w=>w.id===e.exclude)):l.value),p=()=>a({...e.groupFilters}),{onUpdate:o}=x(i,[()=>e.groupFilters],r,p);return{fetchingGroups:n,groups:i,onUpdate:o}}});function N(e,r,a,n,l,i){const p=h("FSTreeViewField");return d(),u(p,b({label:e.$props.label??e.$tr("ui.common.group","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:o})=>[o.icon?(d(),u(V,{key:0},{default:s(()=>[G(T(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(F,[["render",N]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const sr={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const dr=["Variations"];export{t as Variations,dr as __namedExportsOrder,sr as default};
