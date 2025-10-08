import{d as F,v as y,w as v,B as i,H as I,m as b,I as s,J as n}from"./vue.esm-bundler-CocPPKUI.js";import{F as V}from"./FSFolderTileUI-ABIVRqSG.js";import{F as T}from"./FSLoadTile-BmyUzqb_.js";import{a as S}from"./useFolders-O31KLirP.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-CBwVCcKQ.js";import"./FSColor-Dl-9aZE_.js";import"./FSCard-JQNJPDhp.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-DHO-hVc4.js";import"./FSIconCard-DGOl3Irp.js";import"./FSIcon-CKNHHVc2.js";import"./VIcon-Qz-Il978.js";import"./color-yBCdco2I.js";import"./FSImage-BWKdCiW7.js";import"./FSImageUI-CFqUtuMS.js";import"./FSLoader-BeIlBGG_.js";import"./dimensions-C9PuMYcl.js";import"./elevation-CsFMJmSN.js";import"./locale-_fONYh-8.js";import"./VImg-BaN5zAl6.js";import"./rounded-Cjf6r1y4.js";import"./transition-BuKnRONq.js";import"./index-lkzvYdnq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSTile-Cm9Anp65.js";import"./FSClickable-6FPdriKA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./FSCheckbox-ChCYq6Yz.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./density-DZuLaB-B.js";import"./proxiedModel-DvocDLKO.js";import"./index-BgX1FNqJ.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./index-DfBdMsnv.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,C){const c=s("FSLoadTile"),g=s("FSFolderTileUI");return e.getting?(n(),i(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(n(),i(g,b({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,bottomColor:e.entity.colors,recursiveFoldersIds:e.entity.recursiveFoldersIds,recursiveDashboardsIds:e.entity.recursiveDashboardsIds,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["code","icon","label","imageId","bottomColor","recursiveFoldersIds","recursiveDashboardsIds","selectable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Le={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
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
