import{d as v,v as y,w as I,B as a,H as V,m as F,I as n,J as s}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as T}from"./FSGroupTileUI-CZMxfKSO.js";import{F as b}from"./FSLoadTile-C36HWg-d.js";import{a as G}from"./useGroups-BYm43KOq.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-N3i0Hfui.js";import"./FSColor-ZoGLOG1G.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-3tPA3xAK.js";import"./FSIconCard-C9Y7GHaO.js";import"./FSIcon-CeLDRxMK.js";import"./VIcon-BOLLMMm0.js";import"./color-BM2dSUAO.js";import"./FSImage-s4wyGGaF.js";import"./FSImageUI-DVteMu9v.js";import"./FSLoader-0nGK1qhA.js";import"./dimensions-TKp8HHzB.js";import"./elevation-CjJG1XnK.js";import"./locale-K9DBMW2q.js";import"./VImg-BmPSKt86.js";import"./rounded-Cy4gG01O.js";import"./transition-Ucf2Ovas.js";import"./index-B48vLg-P.js";import"./useImages-k4wzHpJZ.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";import"./FSTile-CPs209xc.js";import"./FSClickable-DFmwvck2.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./VProgressCircular-B7HKciov.js";import"./resizeObserver-BZ0AJw4z.js";import"./FSCheckbox-D-xuSzdC.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./density-mssFUWH2.js";import"./proxiedModel-Nw0LX-ta.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./index-Dylhq_Dl.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:p}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:p}}});function k(e,o,i,p,w,$){const g=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(s(),a(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(s(),a(f,F({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","selectable","modelValue"])):V("",!0)}const c=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const xe={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const De=["Variations"];export{r as Variations,De as __namedExportsOrder,xe as default};
