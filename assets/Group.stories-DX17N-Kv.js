import{d as v,o as y,w as I,A as p,F,l as V,H as n,I as s}from"./vue.esm-bundler-BD3cPSox.js";import{F as T}from"./FSGroupTileUI-DsjJjMO9.js";import{F as b}from"./FSLoadTile-Bmvj2kB1.js";import{a as G}from"./useGroups-BCwlj0OU.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSIconCard-DBNnNtvU.js";import"./FSCard-DOwp-V9l.js";import"./FSCol-C9a7BKGp.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSRow-CopwEayK.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSIcon-BikiybNc.js";import"./VIcon-ef9P0Odv.js";import"./color-DAd2dJIE.js";import"./FSImage-BtmbCNhT.js";import"./FSImageUI-CjPb9VM2.js";import"./FSLoader-DTAq-3Vo.js";import"./dimensions-DbGEEU80.js";import"./elevation-C4p0Fj2B.js";import"./locale-Cg0C6Moy.js";import"./VImg-DqEZxS4C.js";import"./rounded-idSslOdv.js";import"./transition-BVEL_Cnv.js";import"./index-Ov0xN_Hx.js";import"./useImages-DZM65JD7.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-B3id31UI.js";import"./FSColor--onEQ_fD.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSTile-YeCtpw44.js";import"./FSClickable-BsEc8iHI.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./FSCheckbox-DsWNnHeY.js";import"./useRules-Bpmg6xi7.js";import"./VSelectionControl-CDPTHhw0.js";import"./density-Dp_zkCfD.js";import"./proxiedModel-JzK6JHhO.js";import"./index-BRxggfmq.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./index-CcZ3F2bM.js";import"./form-DhAzn97I.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=n("FSLoadTile"),f=n("FSGroupTileUI");return e.getting?(s(),p(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),p(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Be=["Variations"];export{r as Variations,Be as __namedExportsOrder,Ue as default};
