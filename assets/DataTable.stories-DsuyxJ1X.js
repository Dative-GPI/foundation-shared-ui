import{F as Q}from"./FSStatusesCarousel-BmIzW5Rs.js";import{F as a,V as _}from"./FSDataTableUI-RRB-_Ikm.js";import{F as N}from"./FSButton-CdKzPvIq.js";import{a as K,b as P}from"./properties-Qw-O9fbT.js";import{F as j}from"./FSRow-Dg2RhQyl.js";import{F as X}from"./FSCol-KRtq6OYO.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSWindow-D1J0s9tP.js";import"./FSCard-ghpSlWxI.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSText-DR713pSR.js";import"./useSlots-DEXetpJf.js";import"./VWindowItem-CArm1FTd.js";import"./group-BLkYT3DE.js";import"./proxiedModel-VL_RP4zk.js";import"./lazy-sPNxwuRm.js";import"./ssrBoot-BimrXMWA.js";import"./transition-a5pzBS6c.js";import"./locale-DER8LJer.js";import"./VBtn-Ct4hkl6N.js";import"./border-D8z1QLxT.js";import"./density-CE2FkSgs.js";import"./elevation-DQ_qKX67.js";import"./rounded-CS1_z6Jk.js";import"./variant-DNfp8Yqp.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./position-O95c9fuD.js";import"./router-D36qODsG.js";import"./index-B-eFr4Nw.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSStatus-CBClcunS.js";import"./FSChip-MKc2C3wM.js";import"./FSSpan-B28b2m0n.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./FSColor-on4KTt7-.js";import"./FSMenu-DcCsQXC4.js";import"./VMenu-BCj9c0xY.js";import"./VOverlay-BuHPOPgF.js";import"./easing-DY7PVvcf.js";import"./display-QVN4B5Qw.js";import"./scopeId-DEhVAmth.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./FSTile-D4h9K5XP.js";import"./FSCheckbox-D5kCrb66.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./index-ByfGjSW7.js";import"./FSSearchField-UKNz29K-.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-B4rZgXN-.js";import"./FSSelectField-CGFDUGHS.js";import"./FSDialogMenu-HNK7X8ju.js";import"./VDialog-CmTscL9b.js";import"./FSSlideGroup-BYhxS2B0.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CZYm0d1o.js";import"./FSWrapGroup-jHFOEYDl.js";import"./FSFadeOut-VhSFSAo6.js";import"./FSLoader-DOgbrYCd.js";import"./FSRadio-C94-RoOx.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./FSDivider-CZsrbPo_.js";import"./FSOptionGroup-BbyoAeHd.js";import"./filter-C1K_d8Vd.js";import"./filter-C4s97JnQ.js";const Ya={title:"Shared/Components/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{...P([_],a),...K(a)}},g=[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!0},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px"},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!0}],c=Array.from(Array(80).keys()).map(e=>({id:e.toString(),column1:`Row ${e%3} - Column 1`,column2:`Row ${e+1} - Column 2`,column3:{text:`Row ${e+1} - Column 3`,value:e+1},column4:e<9?17040672e5:e<13?17041536e5:e<27?170424e7:e<36?17043264e5:e<45?17044128e5:e<54?17044992e5:e<63?17045856e5:1704672e6})),b=Array.from(Array(25).keys()).map(e=>({id:e.toString(),column1:`${e}`,column2:`${e}${String.fromCharCode(65+e)}`,column3:`${String.fromCharCode(65+e)}`,column4:e%5!==0?`${e}${String.fromCharCode(65+e)}`:null})),S=[{text:"Column 1 - sortable",value:"column1",index:0,hidden:!1,width:"100px",sortable:!0,filterable:!1},{text:"Column 2",value:"column2",index:1,hidden:!1,width:"80px",sortable:!0,filterable:!1},{text:"Column 3",value:"column3",index:2,hidden:!1,width:"120px",sortable:!0,filterable:!1},{text:"Column 4",value:"column4",index:3,hidden:!1,width:"120px",sortable:!0,filterable:!1}],r=[],Y={key:"column4",order:"asc"},Z=e=>(console.log("routerLink value computed but router not called",e),{name:"Home",query:{itemraw:JSON.stringify(e)}}),t={args:{headers:g,items:c,modelValue:r,selectable:!0,showSearch:!1,disableIterator:!0,groupBy:Y,sneakyHeaders:["column1"]},render:e=>({components:{FSDataTableUI:a},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />`})},n={args:{headers:g,items:c,modelValue:r,selectable:!0,sneakyHeaders:["column1"],disableIterator:!0,sortDraggable:!0},render:e=>({components:{FSDataTableUI:a},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        :disableIterator="args.disableIterator"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :sortDraggable="args.sortDraggable"
        :gap="args.gap"
      />`})},s={args:{headers:g,items:c,modelValue:r,selectable:!1,showSearch:!1,sneakyHeaders:["column1"],includeDraggable:!0},render:e=>({components:{FSDataTableUI:a},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
      />`})},o={args:{headers:g,items:c,modelValue:r,selectable:!0,sneakyHeaders:["column1"],includeDraggable:!0,sortDraggable:!0},render:e=>({components:{FSDataTableUI:a},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      />`})},l={args:{headers:S,items:b,modelValue:r,selectable:!0,singleSelect:!0,sneakyHeaders:["column1"],includeDraggable:!1,sortDraggable:!1,itemTo:Z},render:e=>({components:{FSDataTableUI:a,FSRow:j,FSCol:X},setup(){return{args:e,onClickRow:z=>{console.log("Row clicked:",z)}}},template:`
      <FSCol>
        <FSRow style="background: #f0f0f0; padding: 16px; border-radius: 8px;">
          <div>
            <h3 style="margin: 0 0 8px 0;">Current Route: {{ $route.name }}</h3>
            <p style="margin: 0; font-size: 14px; color: #666;">
              Query: {{ JSON.stringify($route.query) }}
            </p>
          </div>
        </FSRow>
        <FSDataTableUI
          v-model:headers="args.headers"
          v-model="args.modelValue"
          v-bind="args"
        />
      </FSCol>
    `})},i={args:{headers:S,items:b,modelValue:r,selectable:!0,includeDraggable:!0,sortDraggable:!0},render:e=>({components:{FSDataTableUI:a,FSButton:N,FSRow:j},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #toolbar>
          <FSButton>Toolbar 1</FSButton>
          <FSButton>Toolbar button 2</FSButton>
          <FSButton>Toolbar button 3</FSButton>
        </template>
      </FSDataTableUI>`})},m={args:{headers:S,items:b,modelValue:r,selectable:!0,includeDraggable:!0,sortDraggable:!0},render:e=>({components:{FSDataTableUI:a,FSButton:N},setup(){return{args:e}},template:`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #append-toolbar>
          <FSButton>Append Toolbar 1</FSButton>
        </template>
      </FSDataTableUI>`})},d={args:{showSearch:!1,selectable:!0,singleSelect:!1,disableIterator:!1,disableTable:!1,includeDraggable:!1,sortDraggable:!0,headers:[{text:"Label",value:"column1",index:0,hidden:!1,sortable:!0,filterable:!0,loading:!1}],items:Array.from(Array(20).keys()).map(e=>({id:e.toString(),column1:`Element ${e}`})),modelValue:[]},render:e=>({components:{FSDataTableUI:a},props:Object.keys(e),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :disableTable="args.disableTable"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
        :loading="args.loading"
        v-model:items="args.items"
        @click:row="args.clickRow"
        @update:items="(items) => console.log(items)"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />
    </div>`})},u={args:{headers:[{text:"Label",value:"column1",index:0,hidden:!1,sortable:!0,filterable:!0},{text:"Carousel",value:"statuses",index:1,hidden:!1},{text:"Other",value:"column2",index:2,hidden:!1},{text:"Miscellaneous",value:"column3",index:3,hidden:!1},{text:"Stuff",value:"column4",index:4,hidden:!1},{text:"Other stuff",value:"column5",index:5,hidden:!1},{text:"More stuff",value:"column6",index:6,hidden:!1},{text:"Even more stuff",value:"column7",index:7,hidden:!1},{text:"Last stuff",value:"column8",index:8,hidden:!1}],items:Array.from(Array(20).keys()).map(e=>({id:e.toString(),column1:`Row ${e} - Column 1`,column2:`Row ${e} - Column 2`,column3:`Row ${e} - Column 3`,column4:`Row ${e} - Column 4`,column5:`Row ${e} - Column 5`,column6:`Row ${e} - Column 6`,column7:`Row ${e} - Column 7`,column8:`Row ${e} - Column 8`,modelStatuses:[{id:"1",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"1",dataDefinitionLabel:"Definition 1",label:"Status 1",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-power-standby",colorDefault:"#E3E3E3"},{id:"2",modelId:"1",dataCategoryId:"1",dataCategoryLabel:"Category 1",dataDefinitionId:"2",dataDefinitionLabel:"Definition 2",label:"Status 2",index:0,lifetime:24*3600,timeToLive:7*24*3600,showDefault:!0,iconDefault:"mdi-thermometer-probe",colorDefault:"#E3E3E3"}],status:{id:"1",statuses:[{modelStatusId:"1",statusGroups:[{sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),value:"On",label:"",icon:"mdi-power-standby",color:"#33FF33"}]},{modelStatusId:"2",statusGroups:Array.from(Array(5).keys()).map(p=>({sourceTimestamp:new Date().toISOString(),enqueuedTimestamp:new Date().toISOString(),processedTimestamp:new Date().toISOString(),groupByValue:(p+1).toString(),value:(p*100).toString(),label:"",icon:"mdi-thermometer-probe",color:"#33FF33"}))}]}})),modelValue:[],selectable:!0,showSearch:!1,disableIterator:!0,sneakyHeaders:["column1"]},render:e=>({components:{FSDataTableUI:a,FSStatusesCarousel:Q},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      >
        <template #toolbar>
          <FSButton>Toolbar 1</FSButton>
          <FSButton>Toolbar button 2</FSButton>
        </template>
        <template #item.statuses="{ item }">
          <FSStatusesCarousel
            :modelStatuses="item.modelStatuses"
            :deviceStatuses="item.status.statuses"
          />
        </template>
      </FSDataTableUI>
    </div>`})};var h,f,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    showSearch: false,
    disableIterator: true,
    groupBy: groupBy,
    sneakyHeaders: ['column1']
  },
  render: args => ({
    components: {
      FSDataTableUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />\`
  })
}`,...(D=(f=t.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,y,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    sneakyHeaders: ['column1'],
    disableIterator: true,
    sortDraggable: true
  },
  render: args => ({
    components: {
      FSDataTableUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        :disableIterator="args.disableIterator"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :sortDraggable="args.sortDraggable"
        :gap="args.gap"
      />\`
  })
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var F,I,x;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: false,
    showSearch: false,
    sneakyHeaders: ['column1'],
    includeDraggable: true
  },
  render: args => ({
    components: {
      FSDataTableUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
      />\`
  })
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var k,C,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    sneakyHeaders: ['column1'],
    includeDraggable: true,
    sortDraggable: true
  },
  render: args => ({
    components: {
      FSDataTableUI
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      />\`
  })
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var R,B,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    singleSelect: true,
    sneakyHeaders: ['column1'],
    includeDraggable: false,
    sortDraggable: false,
    itemTo: routerLink
  },
  render: args => ({
    components: {
      FSDataTableUI,
      FSRow,
      FSCol
    },
    setup() {
      const onClickRow = (item: any) => {
        console.log("Row clicked:", item);
      };
      return {
        args,
        onClickRow
      };
    },
    template: \`
      <FSCol>
        <FSRow style="background: #f0f0f0; padding: 16px; border-radius: 8px;">
          <div>
            <h3 style="margin: 0 0 8px 0;">Current Route: {{ $route.name }}</h3>
            <p style="margin: 0; font-size: 14px; color: #666;">
              Query: {{ JSON.stringify($route.query) }}
            </p>
          </div>
        </FSRow>
        <FSDataTableUI
          v-model:headers="args.headers"
          v-model="args.modelValue"
          v-bind="args"
        />
      </FSCol>
    \`
  })
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var U,H,$;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    includeDraggable: true,
    sortDraggable: true
  },
  render: args => ({
    components: {
      FSDataTableUI,
      FSButton,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #toolbar>
          <FSButton>Toolbar 1</FSButton>
          <FSButton>Toolbar button 2</FSButton>
          <FSButton>Toolbar button 3</FSButton>
        </template>
      </FSDataTableUI>\`
  })
}`,...($=(H=i.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var O,A,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    includeDraggable: true,
    sortDraggable: true
  },
  render: args => ({
    components: {
      FSDataTableUI,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #append-toolbar>
          <FSButton>Append Toolbar 1</FSButton>
        </template>
      </FSDataTableUI>\`
  })
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var E,q,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showSearch: false,
    selectable: true,
    singleSelect: false,
    disableIterator: false,
    disableTable: false,
    includeDraggable: false,
    sortDraggable: true,
    headers: [{
      text: "Label",
      value: "column1",
      index: 0,
      hidden: false,
      sortable: true,
      filterable: true,
      loading: false
    }],
    items: Array.from(Array(20).keys()).map(i => ({
      id: i.toString(),
      column1: \`Element \${i}\`
    })),
    modelValue: []
  },
  render: args => ({
    components: {
      FSDataTableUI
    },
    props: Object.keys(args),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :disableTable="args.disableTable"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
        :loading="args.loading"
        v-model:items="args.items"
        @click:row="args.clickRow"
        @update:items="(items) => console.log(items)"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />
    </div>\`
  })
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var M,W,J;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    headers: [{
      text: "Label",
      value: "column1",
      index: 0,
      hidden: false,
      sortable: true,
      filterable: true
    }, {
      text: "Carousel",
      value: "statuses",
      index: 1,
      hidden: false
    }, {
      text: "Other",
      value: "column2",
      index: 2,
      hidden: false
    }, {
      text: "Miscellaneous",
      value: "column3",
      index: 3,
      hidden: false
    }, {
      text: "Stuff",
      value: "column4",
      index: 4,
      hidden: false
    }, {
      text: "Other stuff",
      value: "column5",
      index: 5,
      hidden: false
    }, {
      text: "More stuff",
      value: "column6",
      index: 6,
      hidden: false
    }, {
      text: "Even more stuff",
      value: "column7",
      index: 7,
      hidden: false
    }, {
      text: "Last stuff",
      value: "column8",
      index: 8,
      hidden: false
    }],
    items: Array.from(Array(20).keys()).map(i => ({
      id: i.toString(),
      column1: \`Row \${i} - Column 1\`,
      column2: \`Row \${i} - Column 2\`,
      column3: \`Row \${i} - Column 3\`,
      column4: \`Row \${i} - Column 4\`,
      column5: \`Row \${i} - Column 5\`,
      column6: \`Row \${i} - Column 6\`,
      column7: \`Row \${i} - Column 7\`,
      column8: \`Row \${i} - Column 8\`,
      modelStatuses: [{
        id: "1",
        modelId: "1",
        dataCategoryId: "1",
        dataCategoryLabel: "Category 1",
        dataDefinitionId: "1",
        dataDefinitionLabel: "Definition 1",
        label: "Status 1",
        index: 0,
        lifetime: 24 * 3600,
        timeToLive: 7 * 24 * 3600,
        showDefault: true,
        iconDefault: "mdi-power-standby",
        colorDefault: "#E3E3E3"
      }, {
        id: "2",
        modelId: "1",
        dataCategoryId: "1",
        dataCategoryLabel: "Category 1",
        dataDefinitionId: "2",
        dataDefinitionLabel: "Definition 2",
        label: "Status 2",
        index: 0,
        lifetime: 24 * 3600,
        timeToLive: 7 * 24 * 3600,
        showDefault: true,
        iconDefault: "mdi-thermometer-probe",
        colorDefault: "#E3E3E3"
      }],
      status: {
        id: "1",
        statuses: [{
          modelStatusId: "1",
          statusGroups: [{
            sourceTimestamp: new Date().toISOString(),
            enqueuedTimestamp: new Date().toISOString(),
            processedTimestamp: new Date().toISOString(),
            value: "On",
            label: "",
            icon: "mdi-power-standby",
            color: "#33FF33"
          }]
        }, {
          modelStatusId: "2",
          statusGroups: Array.from(Array(5).keys()).map(i => ({
            sourceTimestamp: new Date().toISOString(),
            enqueuedTimestamp: new Date().toISOString(),
            processedTimestamp: new Date().toISOString(),
            groupByValue: (i + 1).toString(),
            value: (i * 100).toString(),
            label: "",
            icon: "mdi-thermometer-probe",
            color: "#33FF33"
          }))
        }]
      }
    })),
    modelValue: [],
    selectable: true,
    showSearch: false,
    disableIterator: true,
    sneakyHeaders: ['column1']
  },
  render: args => ({
    components: {
      FSDataTableUI,
      FSStatusesCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      >
        <template #toolbar>
          <FSButton>Toolbar 1</FSButton>
          <FSButton>Toolbar button 2</FSButton>
        </template>
        <template #item.statuses="{ item }">
          <FSStatusesCarousel
            :modelStatuses="item.modelStatuses"
            :deviceStatuses="item.status.statuses"
          />
        </template>
      </FSDataTableUI>
    </div>\`
  })
}`,...(J=(W=u.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};const Za=["GroupBy","SortDraggable","IncludeDraggable","SelectableIncludeSortDraggable","RouterTest","WithToolbarSlot","WithAppendToolbarSlot","DragAndDrop","Carousel"];export{u as Carousel,d as DragAndDrop,t as GroupBy,s as IncludeDraggable,l as RouterTest,o as SelectableIncludeSortDraggable,n as SortDraggable,m as WithAppendToolbarSlot,i as WithToolbarSlot,Za as __namedExportsOrder,Ya as default};
