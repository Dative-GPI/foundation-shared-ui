import{d as b,o as S,w,A as i,F as g,l as y,H as s,I as d}from"./vue.esm-bundler-BD3cPSox.js";import{F as v}from"./FSDashboardShallowTileUI-BGyRrWFz.js";import{F as I}from"./FSLoadTile-Bmvj2kB1.js";import{a as F}from"./useDashboardShallows-B6UVF_Rl.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-PzQ1XAEt.js";import"./FSIconCard-DBNnNtvU.js";import"./FSCard-DOwp-V9l.js";import"./FSCol-C9a7BKGp.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSRow-CopwEayK.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSIcon-BikiybNc.js";import"./VIcon-ef9P0Odv.js";import"./color-DAd2dJIE.js";import"./FSImage-BtmbCNhT.js";import"./FSImageUI-CjPb9VM2.js";import"./FSLoader-DTAq-3Vo.js";import"./dimensions-DbGEEU80.js";import"./elevation-C4p0Fj2B.js";import"./locale-Cg0C6Moy.js";import"./VImg-DqEZxS4C.js";import"./rounded-idSslOdv.js";import"./transition-BVEL_Cnv.js";import"./index-Ov0xN_Hx.js";import"./useImages-DZM65JD7.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-B3id31UI.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSTile-YeCtpw44.js";import"./FSClickable-BsEc8iHI.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./FSCheckbox-DsWNnHeY.js";import"./useRules-Bpmg6xi7.js";import"./VSelectionControl-CDPTHhw0.js";import"./density-Dp_zkCfD.js";import"./proxiedModel-JzK6JHhO.js";import"./index-BRxggfmq.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./index-CcZ3F2bM.js";import"./form-DhAzn97I.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./dashboardTranslation-wCYjL46E.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=F();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=s("FSLoadTile"),f=s("FSDashboardShallowTileUI");return e.getting?(d(),i(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(d(),i(f,y({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):g("",!0)}const h=V(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Be={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      FSDashboardShallowTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Le=["Variations"];export{a as Variations,Le as __namedExportsOrder,Be as default};
