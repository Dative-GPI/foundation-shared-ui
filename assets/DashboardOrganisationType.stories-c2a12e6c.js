import{f as b,g as C,I as d,J as l,K as p,B as h,o as $,w as V,N as w}from"./vue.esm-bundler-cd768bc3.js";import{F as k}from"./FSSimpleIconTileUI-bdda81e4.js";import{C as u}from"./useColors-91ab292c.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{F as E}from"./FSLoadTile-767d5692.js";import{W as U}from"./widgetInfos-913cb8f0.js";import{C as R}from"./base-a00c89a9.js";import{S as _}from"./serviceFactory-6fc44bfb.js";import{C as A}from"./composableFactory-c82cc213.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./FSRow-1d7c2545.js";import"./FSIcon-203715fb.js";import"./VIcon-3b9ab711.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./useRender-b3fd6f8b.js";import"./tag-bc86e39f.js";import"./FSText-92e9b97f.js";import"./useSlots-2af30a3d.js";import"./FSTile-1d7371a7.js";import"./FSClickable-95c940f4.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./FSCheckbox-0f33b66c.js";import"./FSSpan-da6dde8e.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./density-80e773e2.js";import"./proxiedModel-80cf7d0e.js";import"./index-f4fa4c36.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./locale-d1b7e37d.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./dimensions-9d1d90d7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";class T{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class N extends T{constructor(o){super(o),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(a=>new U(a))}}const m=()=>`${R()}/dashboard-organisation-types`,s=e=>`${m()}/${encodeURIComponent(e)}`,q=new _("dashboardOrganisationType",N).create(e=>e.build(e.addGet(s),e.addGetMany(m,T),e.addCreate(m),e.addUpdate(s),e.addRemove(s),e.addNotify())),B=A.get(q),O=b({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:k},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function L(e,o,a,i,v,D){const n=d("FSSimpleIconTileUI");return l(),p(n,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const x=f(O,[["render",L]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const I=b({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:x,FSLoadTile:E},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=B();return $(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:a,entity:i}}});function P(e,o,a,i,v,D){const n=d("FSLoadTile"),F=d("FSDashboardOrganisationTypeTileUI");return e.getting?(l(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),p(F,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const S=f(I,[["render",P]]);I.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:S},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,g,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Re=["Variations"];export{t as Variations,Re as __namedExportsOrder,Ue as default};