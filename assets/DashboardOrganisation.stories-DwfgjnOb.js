import{d as c,o as h,w as y,A as n,F as O,l as v,H as s,I as d}from"./vue.esm-bundler-BD3cPSox.js";import{F as I}from"./FSDashboardOrganisationTileUI-bQRf7txr.js";import{F}from"./FSLoadTile-Bmvj2kB1.js";import{a as V}from"./useDashboardOrganisations-C0-LpccC.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-PzQ1XAEt.js";import"./FSIconCard-DBNnNtvU.js";import"./FSCard-DOwp-V9l.js";import"./FSCol-C9a7BKGp.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSRow-CopwEayK.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSIcon-BikiybNc.js";import"./VIcon-ef9P0Odv.js";import"./color-DAd2dJIE.js";import"./FSImage-BtmbCNhT.js";import"./FSImageUI-CjPb9VM2.js";import"./FSLoader-DTAq-3Vo.js";import"./dimensions-DbGEEU80.js";import"./elevation-C4p0Fj2B.js";import"./locale-Cg0C6Moy.js";import"./VImg-DqEZxS4C.js";import"./rounded-idSslOdv.js";import"./transition-BVEL_Cnv.js";import"./index-Ov0xN_Hx.js";import"./useImages-DZM65JD7.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-B3id31UI.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSTile-YeCtpw44.js";import"./FSClickable-BsEc8iHI.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./FSCheckbox-DsWNnHeY.js";import"./useRules-Bpmg6xi7.js";import"./VSelectionControl-CDPTHhw0.js";import"./density-Dp_zkCfD.js";import"./proxiedModel-JzK6JHhO.js";import"./index-BRxggfmq.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./index-CcZ3F2bM.js";import"./form-DhAzn97I.js";import"./dashboardTranslation-wCYjL46E.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";const u=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:I,FSLoadTile:F},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:i}=V();return h(()=>{o(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,o,t,i,D,k){const f=s("FSLoadTile"),b=s("FSDashboardOrganisationTileUI");return e.getting?(d(),n(f,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(d(),n(b,v({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):O("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Be={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3"],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDashboardOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const xe=["Variations"];export{a as Variations,xe as __namedExportsOrder,Be as default};
