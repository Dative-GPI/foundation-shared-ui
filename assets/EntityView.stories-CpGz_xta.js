import{d as h,z as D,B as L,R,m as A,G as M,H as _,C as j,K as z,M as Z,N as O}from"./vue.esm-bundler-CUSnV4DE.js";import{F as T}from"./FSBaseView-BPW58c9a.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as f,a as x}from"./FSButtonRemove-LrFEaw91.js";import{F as B}from"./FSLoader-BxWH0Nmg.js";import{F as $}from"./FSImage-DejQHEUL.js";import{F as I}from"./FSCol-BQiFrdcO.js";import{C as s}from"./useColors-CQZIO9RQ.js";import{V as k}from"./VDivider-D7YV5fgS.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSText-CUkc4ADt.js";import"./useSlots-CY84M1fx.js";import"./FSBreadcrumbs-gWl7zSSi.js";import"./FSSpan-M9GEX7v6.js";import"./FSIcon-Cp7BQBW6.js";import"./VIcon-DeLOaNVc.js";import"./color-CgsoZSKd.js";import"./theme-DGuAngmo.js";import"./router-C6XMMO7F.js";import"./density-DAqBVexQ.js";import"./rounded-DQzQH8wE.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./FSSlideGroup-BKtLKoi-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DC1JdNxL.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./FSCard-BnVyMFnh.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./VSlideGroupItem-G437Dc1S.js";import"./group-CrKBhSLQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-DDQZ-RJM.js";import"./display-DbvBihXn.js";import"./locale-DYN4KMd8.js";import"./FSFadeOut-BguakrVC.js";import"./FSIconCard-DzysKg3d.js";import"./dimensions-BI5CQRk1.js";import"./elevation-C08MHLji.js";import"./FSImageUI-C65sLZ4Z.js";import"./VImg-DinzZLZB.js";import"./transition-C81aHyit.js";import"./index-CeZa2hiu.js";import"./useImages-B9Gap5IC.js";import"./base-CmdGny12.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./useAppAuthToken-BM6m0Bni.js";import"./index-DfSX31J9.js";import"./theme-CR6dKhng.js";const E=h({name:"FSEntityView",components:{FSBaseView:T}});function q(e,n,N,W,G,H){const V=M("FSBaseView");return _(),D(V,A({variant:"entity"},e.$attrs),L({_:2},[R(e.$slots,(K,m)=>({name:m,fn:j(w=>[z(e.$slots,m,Z(O(w)))])}))]),1040)}const t=P(E,[["render",q]]);E.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const Xe={title:"Foundation/Shared/views/EntityView",component:t,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageCover:!0,icon:"mdi-chemical-weapon",iconBackgroundColors:["#FF0000","#0000FF"],iconBackgroundVariant:"gradient",iconBorder:!1,iconColor:s.Dark,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:n})=>({components:{FSEntityView:t,FSButtonEdit:x,FSButtonRemove:f,FSLoader:B,FSCol:I},props:Object.keys(n),setup(){return{args:e}},template:`
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      `})},r={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0},render:(e,{argTypes:n})=>({components:{VDivider:k,FSEntityView:t},props:Object.keys(n),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>`})},i={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:(e,{argTypes:n})=>({components:{VDivider:k,FSEntityView:t},props:Object.keys(n),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>`})},a={args:{title:"Extension",subtitle:"subtitle extttttttttt",description:"Description d'une extension Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:n})=>({components:{FSEntityView:t,FSButtonEdit:x,FSButtonRemove:f,FSLoader:B,FSCol:I,FSImage:$},props:Object.keys(n),setup(){return{args:e}},template:`
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <template 
            #image="{ actualImageSize }"
          >
            <FSImage
              :imageId="args.imageId"
              :cover="args.imageCover"
              :height="actualImageSize"
              :width="actualImageSize"
            />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      `})};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: 'Description d\\'un four Mizar sous Lorem Ipsum en maquettes.',
    // imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    iconBackgroundColors: ['#FF0000', '#0000FF'],
    iconBackgroundVariant: 'gradient',
    iconBorder: false,
    iconColor: ColorEnum.Dark,
    breadcrumbs: [{
      title: 'Lorem',
      to: '/'
    }, {
      title: 'MIZAR CDC',
      disabled: true
    }]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEntityView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      \`
  })
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>\`
  })
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var F,C,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC With a longer title',
    subtitle: null,
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Error,
    iconBackgroundColors: ['#A0FFA0', '#A0A0FF'],
    iconBackgroundVariant: 'gradient'
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>\`
  })
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,y,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Extension',
    subtitle: 'subtitle extttttttttt',
    description: 'Description d\\'une extension Lorem Ipsum en maquettes.',
    imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined,
    breadcrumbs: [{
      title: 'Lorem',
      to: '/'
    }, {
      title: 'MIZAR CDC',
      disabled: true
    }]
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEntityView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol,
      FSImage
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <template 
            #image="{ actualImageSize }"
          >
            <FSImage
              :imageId="args.imageId"
              :cover="args.imageCover"
              :height="actualImageSize"
              :width="actualImageSize"
            />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      \`
  })
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Ye=["Default","Variation1","Variation2","ExtensionMock"];export{o as Default,a as ExtensionMock,r as Variation1,i as Variation2,Ye as __namedExportsOrder,Xe as default};
