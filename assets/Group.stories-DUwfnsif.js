import{d as v,o as y,w as I,B as a,m as V,H as F,I as n,J as s}from"./vue.esm-bundler-D5n7z5qz.js";import{F as T}from"./FSGroupTileUI-Bvz4XDlt.js";import{F as b}from"./FSLoadTile-BYDP9OBJ.js";import{a as G}from"./useGroups-DHOvn0RN.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-B4Vso5kq.js";import"./FSColor-UTke4uX4.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-q33kTTka.js";import"./FSIconCard-DsztzXrT.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./FSLoader-Cl8hDT8j.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./VImg-BlUyfKKc.js";import"./rounded-lfTNxM9v.js";import"./transition-DbItRNv8.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-DnnqQnwQ.js";import"./FSCheckbox-CpWOjTw-.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./density-BnAGl-Nw.js";import"./index-BYo1BiTt.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./index-6jMyctoo.js";import"./pathCrumb-Db-cq5HI.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:p}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:p}}});function k(e,o,i,p,w,$){const g=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(s(),a(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(s(),a(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","selectable","modelValue"])):F("",!0)}const c=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Le={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ne=["Variations"];export{r as Variations,Ne as __namedExportsOrder,Le as default};
