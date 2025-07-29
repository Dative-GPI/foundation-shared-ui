import{d as F,v as y,w as v,B as i,H as I,m as b,I as s,J as n}from"./vue.esm-bundler-PONd4AmC.js";import{F as V}from"./FSFolderTileUI-UNbO5ItM.js";import{F as T}from"./FSLoadTile-CmlEdWHt.js";import{a as S}from"./useFolders-MVIWD78s.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-BSSE6Aki.js";import"./FSColor-ClFDHQcW.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-K7NYhEKB.js";import"./FSIconCard-C0gGqVte.js";import"./FSIcon-bsX1r_Ci.js";import"./VIcon-DIMW80nW.js";import"./color-_AiH45em.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./FSLoader-UOJfN8Qb.js";import"./dimensions-CNbPgA3L.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./VImg-DKyIpwU2.js";import"./rounded-BBFi0CuG.js";import"./transition-BXZIGKil.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSTile-Cm_QUpQV.js";import"./FSClickable-CyhgWkHC.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./FSCheckbox-CQphVYdu.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./density-CNNumQ_A.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./index-CANKuvlL.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,C){const c=s("FSLoadTile"),g=s("FSFolderTileUI");return e.getting?(n(),i(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(n(),i(g,b({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,bottomColor:e.entity.colors,recursiveFoldersIds:e.entity.recursiveFoldersIds,recursiveDashboardsIds:e.entity.recursiveDashboardsIds,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["code","icon","label","imageId","bottomColor","recursiveFoldersIds","recursiveDashboardsIds","selectable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Le={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3", "6", "7"],
      selected: [false, false, false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFolderTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ne=["Variations"];export{r as Variations,Ne as __namedExportsOrder,Le as default};
