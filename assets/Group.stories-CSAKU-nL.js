import{d as v,q as y,w as I,z as p,E as V,m as F,G as n,H as s}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as T}from"./FSGroupTileUI-bq_Bs42P.js";import{F as G}from"./FSLoadTile-DadvRNGl.js";import{a as b}from"./useGroups-TGZYIwdO.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BPdAJXT6.js";import"./FSIconCard-czyPYjvR.js";import"./FSCard-CYsPoqay.js";import"./FSCol-Be93XvPD.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./FSRow-C47sfGk6.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSIcon-CIF0zaTI.js";import"./VIcon-GfKFLOEw.js";import"./color-Bo6l13w9.js";import"./FSImage-BesC0Cra.js";import"./FSImageUI-CbHYTG-G.js";import"./FSLoader-_1jWS2ee.js";import"./dimensions-DW-k5kP_.js";import"./elevation-DgpWsjTu.js";import"./locale-BqFH1fBg.js";import"./VImg-D7XF-hIS.js";import"./rounded-CDCr0BOq.js";import"./transition-DMoMR0kB.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./FSTile-j531zXXx.js";import"./FSClickable-a8XmDSU8.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSCheckbox-cl9Reorp.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./density-Dl4v3sM7.js";import"./proxiedModel-DKx29MO-.js";import"./index-BkfcJ8bv.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./index-BJH4L2FX.js";import"./FSColor-BRiM7uWQ.js";import"./badge-D9p4Oj7n.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:G},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=b();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const g=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(s(),p(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(s(),p(f,F({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","selectable","modelValue"])):V("",!0)}const c=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Be={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2"],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const he=["Variations"];export{r as Variations,he as __namedExportsOrder,Be as default};
