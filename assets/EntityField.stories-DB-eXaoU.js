import{d as Q,c as q,z as p,A as r,B as u,C as i,v as a,G as $,H as C,E as D,J as x,b as V,D as ee,F as te,w as B}from"./vue.esm-bundler-BwDfg4wG.js";import{F as f}from"./FSRow-k5pgBhR1.js";import{F as W}from"./FSCol-BEvj3we4.js";import{F as le}from"./FSBaseField-3b1naUZS.js";import{F as ie}from"./FSSelectField-BAtD035V.js";import{F as w}from"./FSButton-jJkg4qCi.js";import{F as h}from"./FSIcon-ChaYv6Le.js";import{F as ae}from"./FSColor-CZ6aXURW.js";import{E as t,b as ne,a as oe}from"./FSDialogSelectEntities-5hANS9Ky.js";import{C as re}from"./useColors-tmPxRJAs.js";import{u as se}from"./useTranslations-CHmpEDXr.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ue}from"./FSFadeOut-D8lX1YMU.js";import{_ as k}from"./FSSpan-H3zJ0Cfa.js";import"./css-DTUiF03J.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./index-h4Pvk0JI.js";import"./group-Co3yQlsH.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./VProgressCircular-CmpAWY4m.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./VInput-Bb_DU4hJ.js";import"./density-CY8ZwxUy.js";import"./form-CH3j37ax.js";import"./FSTextField-C_L-5gHA.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./VLabel-BAbVzo-k.js";import"./loader-ecE02KGk.js";import"./rounded-NuUWeCiM.js";import"./index-O1RQoaVh.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSDialogSubmit-CvlTCn8G.js";import"./FSDialog-DdBcmhOt.js";import"./FSText-CwwFvnOv.js";import"./iframe-CVd9AXV8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const Y=Q({name:"FSEntityFieldUI",components:{FSBaseField:le,FSSelectField:ie,FSButton:w,FSIcon:h,FSColor:ae,FSRow:f,FSCol:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},itemsCount:{type:Number,required:!1,default:0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0},listMaxHeight:{type:String,required:!1,default:"220px"}},emits:["update:entityType","click:select"],setup(e){const{$tr:l}=se(),s=q(()=>{const d=[{id:t.Model,label:l("ui.entity-type.models","Models")},{id:t.Group,label:l("ui.entity-type.groups","Groups")},{id:t.Location,label:l("ui.entity-type.locations","Locations")},{id:t.Device,label:l("ui.entity-type.devices","Devices")},{id:t.User,label:l("ui.entity-type.users","Users")},{id:t.Dashboard,label:l("ui.entity-type.dashboards","Dashboards")},{id:t.Folder,label:l("ui.entity-type.folders","Folders")}];return e.allowedEntityTypes.length?d.filter(y=>e.allowedEntityTypes.includes(y.id)):d}),n=q(()=>{switch(e.entityType){case t.Model:return"mdi-cube";case t.Group:return"mdi-account-group";case t.Location:return"mdi-map-marker";case t.Device:return"mdi-cellphone";case t.User:return"mdi-account";case t.Dashboard:return"mdi-view-dashboard";case t.Folder:return"mdi-folder";default:return"mdi-cube"}});return{ColorEnum:re,entityIcon:n,actualEntityTypes:s}}});function pe(e,l,s,n,d,y){const m=p("FSSelectField"),E=p("FSColor"),S=p("FSBaseField");return r(),u(S,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:i(()=>[a(W,{gap:"12px"},{default:i(()=>[a(f,{wrap:!1},{default:i(()=>[a(m,{hideHeader:!0,modelValue:e.$props.entityType,"onUpdate:modelValue":l[0]||(l[0]=o=>e.$emit("update:entityType",o)),items:e.actualEntityTypes,clearable:!1},null,8,["modelValue","items"]),e.itemsCount>0?(r(),u(w,{key:0,label:e.$tr("ui.entity-field.edit","Edit"),icon:"mdi-pencil",onClick:l[1]||(l[1]=o=>e.$emit("click:select"))},null,8,["label"])):(r(),u(w,{key:1,label:e.$tr("ui.entity-field.select","Select"),icon:"mdi-plus-circle-multiple-outline",onClick:l[2]||(l[2]=o=>e.$emit("click:select"))},null,8,["label"]))]),_:1}),e.$props.showCount?(r(),u(f,{key:0},{default:i(()=>[e.itemsCount>0?(r(),u(E,{key:0,color:e.ColorEnum.Primary,border:!1,width:"100%"},{default:i(()=>[a(f,{padding:"4px",align:"center-center"},{default:i(()=>[a(h,{icon:e.entityIcon},null,8,["icon"]),a(k,{font:"text-overline"},{default:i(()=>[$(C(e.$tr("ui.entity-field.selected","{0} selected(s)",e.itemsCount)),1)]),_:1})]),_:1})]),_:1},8,["color"])):(r(),u(E,{key:1,color:e.ColorEnum.Light,border:!1,width:"100%"},{default:i(()=>[a(f,{padding:"4px",align:"center-center"},{default:i(()=>[a(h,{icon:e.entityIcon},null,8,["icon"]),a(k,{font:"text-overline"},{default:i(()=>[$(C(e.$tr("ui.entity-field.no-entity-selected","No entity selected")),1)]),_:1})]),_:1})]),_:1},8,["color"]))]),_:1})):D("",!0),e.$props.showEntities&&e.itemsCount>0?(r(),u(ue,{key:1,maxHeight:e.$props.listMaxHeight,width:"100%"},{default:i(()=>[x(e.$slots,"items")]),_:3},8,["maxHeight"])):D("",!0)]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const de=X(Y,[["render",pe]]);Y.__docgenInfo={displayName:"FSEntityFieldUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemsCount",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"listMaxHeight",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"220px"'}}],events:[{name:"update:entityType"},{name:"click:select"}],slots:[{name:"items"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSEntityFieldUI.vue"]};const Z=Q({name:"FSEntityField",components:{FSEntityFieldUI:de,FSSimpleEntitiesList:ne,FSDialogSelectEntities:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},filters:{type:Object,required:!1,default:()=>null},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:entityType"],setup(e,{emit:l}){const s=V(!1),n=q(()=>{switch(e.entityType){case t.Device:return{deviceOrganisationsIds:e.modelValue};default:return{}}});return{dialog:s,listComponentFilters:n,onRemove:y=>{l("update:modelValue",e.modelValue.filter(m=>m!==y))}}}});function ye(e,l,s,n,d,y){const m=p("FSSimpleEntitiesList"),E=p("FSEntityFieldUI"),S=p("FSDialogSelectEntities");return r(),ee(te,null,[a(E,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.$props.messages,entityType:e.$props.entityType,allowedEntityTypes:e.$props.allowedEntityTypes||[],itemsCount:(e.$props.modelValue||[]).length,"onUpdate:entityType":l[0]||(l[0]=o=>{e.$emit("update:entityType",o),e.$emit("update:modelValue",[])}),showEntities:e.$props.showEntities,showCount:e.$props.showCount,"onClick:select":l[1]||(l[1]=o=>e.dialog=!0)},{items:i(()=>[a(m,{"entity-type":e.$props.entityType,filters:e.listComponentFilters,showEdit:!1,"onClick:remove":e.onRemove},null,8,["entity-type","filters","onClick:remove"])]),_:1},8,["description","hideHeader","required","editable","label","messages","entityType","allowedEntityTypes","itemsCount","showEntities","showCount"]),a(S,{"entity-type":e.$props.entityType,filters:e.$props.filters,modelValue:e.dialog,"onUpdate:modelValue":l[2]||(l[2]=o=>e.dialog=o),selecteds:e.$props.modelValue||[],"onUpdate:selecteds":l[3]||(l[3]=o=>e.$emit("update:modelValue",o))},null,8,["entity-type","filters","modelValue","selecteds"])],64)}const _=X(Z,[["render",ye]]);Z.__docgenInfo={displayName:"FSEntityField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"filters",type:{name:"object"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:entityType"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/entities/FSEntityField.vue"]};const kt={title:"Foundation/Core/EntityField",component:_,tags:["autodocs"]},c={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:e=>({components:{FSEntityField:_},setup(){const l=V(e.entityType),s=V(e.modelValue);return B(()=>e.entityType,n=>{l.value=n},{immediate:!0}),B(()=>e.modelValue,n=>{n.value=n},{immediate:!0}),{args:e,entityType:l,value:s}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSEntityField v-bind="args" v-model="value" v-model:entityType="entityType">
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSEntityField>
    </div>`})},T={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},v={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[]}},F={...c,args:{label:"Entity selection",modelValue:["1"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},b={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},g={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5","6","7","8","9","10"],entityType:t.Device,showEntities:!1,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}};var H,L,M;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(M=(L=T.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var G,I,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: []
  }
}`,...(N=(I=v.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var U,A,O;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(O=(A=F.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var R,j,z;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var J,P,K;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(K=(P=g.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const Ht=["Empty","AllTypes","One","Five","TenNoList"];export{v as AllTypes,T as Empty,b as Five,F as One,g as TenNoList,Ht as __namedExportsOrder,kt as default};