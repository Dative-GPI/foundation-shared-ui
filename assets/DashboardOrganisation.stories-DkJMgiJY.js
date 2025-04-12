import{d as b,q as h,w as y,z as n,E as O,m as v,G as s,H as d}from"./vue.esm-bundler-PTWG9x2X.js";import{F as I}from"./FSDashboardOrganisationTileUI-OQPyWowC.js";import{F as V}from"./FSLoadTile-t9RE8sse.js";import{a as F}from"./useDashboardOrganisations-ChJ8mrn-.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-DUtYupMw.js";import"./FSIconCard-CVsCm8Sv.js";import"./FSCard-CRoBY3gL.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSRow-DPcQMiM9.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./FSIcon-DQMOs0-E.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./FSImage-D6wIZvVb.js";import"./FSImageUI-Cd9yfhhj.js";import"./FSLoader-DnFcYh1x.js";import"./dimensions-v18atrWI.js";import"./elevation-CrSwNJwg.js";import"./locale-Cz_4DTJh.js";import"./VImg-CBGPWIu-.js";import"./rounded-BbPXzFqc.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSTile-laYGtZFU.js";import"./FSClickable-KpP1cmTZ.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./FSCheckbox-D0eLEsDk.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./density-CznkHGGy.js";import"./proxiedModel-CvHSoKPb.js";import"./index-Dqqa47M6.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./index-b-ADC_Il.js";import"./dashboardTranslation-BY3Wh2RO.js";import"./useAppLanguageCode-tS_QL_TH.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";const u=b({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:I,FSLoadTile:V},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=F();return h(()=>{a(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{a(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,a,t,i,D,k){const c=s("FSLoadTile"),f=s("FSDashboardOrganisationTileUI");return e.getting?(d(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(d(),n(f,v({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):O("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Be=["Variations"];export{o as Variations,Be as __namedExportsOrder,Ue as default};
