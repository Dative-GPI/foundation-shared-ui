import{f as j,g as V,I as N,J as m,K as u,L as r,B as z,N as p,A as s,O as C,P as y,Q as Z,R as H,_ as J}from"./vue.esm-bundler-cd768bc3.js";import{F as K}from"./FSAutocompleteField-a91182a5.js";import{F as $}from"./FSCheckbox-c69cb5d8.js";import{F as L}from"./FSButton-7364cb00.js";import{F as Q}from"./FSImage-18712f28.js";import{_ as b}from"./FSSpan-da6dde8e.js";import{_ as v}from"./FSRow-1d7c2545.js";import{P as W}from"./permissionInfos-da95e15e.js";import{C as X}from"./base-a00c89a9.js";import{S}from"./serviceFactory-2dfad3af.js";import{C as g}from"./composableFactory-c82cc213.js";import{u as Y}from"./useAutocomplete-b3d8bfa7.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{V as te}from"./VSelect-1b324382.js";import{_ as oe}from"./FSCol-ff457bc3.js";import"./FSToggleSet-faa5cb35.js";import"./FSSlideGroup-1f11aa53.js";import"./FSButtonNextIcon-e4aac952.js";import"./useColors-91ab292c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-33f5ac1a.js";import"./uuid-08309875.js";import"./useSlots-2af30a3d.js";import"./css-c2ea3b68.js";import"./VSlideGroup-22f87886.js";import"./index-b97c70d5.js";import"./useRender-d216bc3f.js";import"./display-23d3bc4a.js";import"./goto-fb9b6e06.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./group-9e3f1093.js";import"./tag-f5ad2c5e.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./VSlideGroupItem-27057095.js";import"./FSWrapGroup-c7ff7fff.js";import"./VInput-28424714.js";import"./transition-2948fa2b.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./VField-4a160336.js";import"./VSpacer-a30a0a7c.js";import"./VLabel-ac265b88.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-ff78bc14.js";import"./forwardRefs-e658ad70.js";import"./FSLoader-bd777dc8.js";import"./elevation-7537bf82.js";import"./useRules-bb9e9594.js";import"./VTextField-dcedd86a.js";import"./index-cc35ebf5.js";import"./filter-16d28c7b.js";import"./VMenu-2bc21026.js";import"./VOverlay-5f00a78b.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSIcon-5671b33c.js";import"./VSelectionControl-650165ff.js";import"./index-f4fa4c36.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./base-0de1729e.js";import"./VImg-7e8420c7.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./useDebounce-8f204f15.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VDivider-8ddbafa9.js";class E{constructor(e){this.id=e.id,this.userId=e.userId,this.organisationId=e.organisationId,this.roleType=e.roleType,this.roleId=e.roleId,this.roleLabel=e.roleLabel,this.roleIcon=e.roleIcon,this.admin=e.admin,this.imageId=e.imageId,this.userType=e.userType,this.validity=e.validity,this.allowSms=e.allowSms,this.allowEmails=e.allowEmails,this.email=e.email,this.phoneNumber=e.phoneNumber,this.firstName=e.firstName,this.lastName=e.lastName,this.name=e.name,this.tags=e.tags&&e.tags.slice()||[]}}class F extends E{constructor(e){super(e),this.mainDashboardType=e.mainDashboardType,this.mainDashboardId=e.mainDashboardId,this.mainDashboardLabel=e.mainDashboardLabel,this.languageCode=e.languageCode,this.timeZoneId=e.timeZoneId,this.permissions=e.permissions.map(a=>new W(a))}}const U=()=>`${X()}/user-organisations`,w=t=>`${U()}/${encodeURIComponent(t)}`,_=()=>`${U()}/current`,ae=()=>`${_()}/dashboard`,c=new S("userOrganisation",F).create(t=>t.build(t.addGet(w),t.addGetMany(U,E),t.addCreate(U),t.addUpdate(w),t.addRemove(w),S.addCustom("getCurrent",e=>e.get(_()),e=>new F(e)),t.addNotify(e=>({...S.addCustom("updateCurrent",(a,i)=>a.post(_(),i),a=>{const i=new F(a);return e.notify("update",i),i}),...S.addCustom("changeCurrentDashboard",(a,i)=>a.put(ae(),i),a=>{const i=new F(a);return e.notify("update",i),i})})))),ie=g.trackRef(c),A=()=>{const{track:t}=ie();return e=>{t(e)}},re=g.getMany(c);g.custom(c.getCurrent,A);g.custom(c.updateCurrent,A);g.custom(c.changeCurrentDashboard,A);const q=j({name:"FSAutocompleteUserOrganisation",components:{FSAutocompleteField:K,FSCheckbox:$,FSButton:L,FSImage:Q,FSSpan:b,FSRow:v},props:{userOrganisationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const{getMany:a,fetching:i,entities:h}=re(),R=V(()=>B.value&&i.value),d=V(()=>h.value.map(n=>({id:n.id,label:n.name}))),I=n=>a({...t.userOrganisationFilters,search:n??void 0}),o=(n,P,M)=>M.raw.name.toLowerCase().includes(P.toLowerCase()),{toggleSet:l,search:f,init:B,onUpdate:G}=Y(h,[()=>t.userOrganisationFilters],e,I,null,n=>n.id,n=>n.name);return{userOrganisations:h,toggleSetItems:d,toggleSet:l,loading:R,search:f,customFilter:o,onUpdate:G}}});function ne(t,e,a,i,h,R){const d=N("FSImage"),I=N("FSAutocompleteField");return m(),u(I,z({toggleSet:!t.$props.toggleSetDisabled&&t.toggleSet,customFilter:t.customFilter,multiple:t.$props.multiple,items:t.userOrganisations,loading:t.loading,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onUpdate},t.$attrs),{"autocomplete-selection":r(({item:o})=>[t.$props.modelValue?(m(),u(v,{key:0,align:"center-center",wrap:!1},{default:r(()=>[o.raw.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.raw.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(o.raw.name),1)]),_:2},1024)]),_:2},1024)):p("",!0)]),"autocomplete-item":r(({props:o,item:l})=>[s(te,Z(H({...o,title:""})),{default:r(()=>[s(v,{align:"center-left",wrap:!1},{default:r(()=>{var f;return[t.$props.multiple?(m(),u($,{key:0,modelValue:(f=t.$props.modelValue)==null?void 0:f.includes(l.value),onClick:o.onClick},null,8,["modelValue","onClick"])):p("",!0),l.raw.imageId?(m(),u(d,{key:1,height:"26px",width:"26px",imageId:l.raw.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(l.raw.name),1)]),_:2},1024)]}),_:2},1024)]),_:2},1040)]),"toggle-set-item":r(o=>[s(L,{variant:o.getVariant(o.item),color:o.getColor(o.item),class:J(o.getClass(o.item)),onClick:l=>o.toggle(o.item)},{default:r(()=>[s(v,{align:"center-center",wrap:!1},{default:r(()=>[o.item.imageId?(m(),u(d,{key:0,height:"26px",width:"26px",imageId:o.item.imageId},null,8,["imageId"])):p("",!0),s(b,null,{default:r(()=>[C(y(o.item.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["variant","color","class","onClick"])]),_:1},16,["toggleSet","customFilter","multiple","items","loading","modelValue","onUpdate:modelValue"])}const x=ee(q,[["render",ne]]);q.__docgenInfo={displayName:"FSAutocompleteUserOrganisation",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationFilters",type:{name:"UserOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteUserOrganisation.vue"]};const Rt={title:"Foundation/Core/Autocompletes/AutocompleteUserOrganisation",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},O={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(t,{argTypes:e})=>({components:{FSAutocompleteUserOrganisation:x,FSCol:oe},props:Object.keys(e),setup(){return{...t}},template:`
    <FSCol>
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var k,D,T;O.parameters={...O.parameters,docs:{...(k=O.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteUserOrganisation,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteUserOrganisation
        label="UserOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <FSAutocompleteUserOrganisation
          label="UserOrganisation with multiple selection"
          :multiple="true"
          v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteUserOrganisation
        label="UserOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(T=(D=O.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const Vt=["Variations"];export{O as Variations,Vt as __namedExportsOrder,Rt as default};