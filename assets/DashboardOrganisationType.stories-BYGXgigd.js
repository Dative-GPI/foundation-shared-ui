import{d as f,o as b,w as T,A as n,F as h,l as O,H as s,I as p}from"./vue.esm-bundler-BD3cPSox.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-DU5ETW9q.js";import{F as I}from"./FSLoadTile-BeTB9kt_.js";import{a as F}from"./useDashboardOrganisationTypes-DcS4mAKE.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-CDpDa1r4.js";import"./FSIconCard-DBNnNtvU.js";import"./FSCard-DOwp-V9l.js";import"./FSCol-C9a7BKGp.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSRow-CopwEayK.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./FSIcon-BikiybNc.js";import"./VIcon-ef9P0Odv.js";import"./color-DAd2dJIE.js";import"./FSImage-CJ3EVuKL.js";import"./FSImageUI-CjPb9VM2.js";import"./FSLoader-DTAq-3Vo.js";import"./dimensions-DbGEEU80.js";import"./elevation-C4p0Fj2B.js";import"./locale-Cg0C6Moy.js";import"./VImg-DqEZxS4C.js";import"./rounded-idSslOdv.js";import"./transition-BVEL_Cnv.js";import"./index-Ov0xN_Hx.js";import"./useImages-B8onxWp5.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-B3id31UI.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSTile-DQjpE46R.js";import"./FSClickable-BsEc8iHI.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./FSCheckbox-CM6E8uCY.js";import"./useRules-Bpmg6xi7.js";import"./VSelectionControl-CDPTHhw0.js";import"./density-Dp_zkCfD.js";import"./proxiedModel-JzK6JHhO.js";import"./index-BRxggfmq.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./index-CcZ3F2bM.js";import"./form-DhAzn97I.js";import"./dashboardTranslation-wCYjL46E.js";import"./useAppLanguageCode-DTCWF4CX.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=F();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const y=s("FSLoadTile"),c=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),n(y,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(p(),n(c,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):h("",!0)}const g=V(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const xe={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      FSDashboardOrganisationTypeTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Ue=["Variations"];export{o as Variations,Ue as __namedExportsOrder,xe as default};
