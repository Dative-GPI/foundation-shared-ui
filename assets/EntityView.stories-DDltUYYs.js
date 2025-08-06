import{b as R}from"./properties-Qw-O9fbT.js";import{F as B}from"./FSCol-79-COv64.js";import{F as M}from"./FSImage-BNGlz8LX.js";import{F as x}from"./FSLoader-JpoH2mis.js";import{F as E,a as Z,b as _,c as z,d as P}from"./FSBaseView-CjeVya0N.js";import{d as $,B as j,D as q,S as N,m as O,I as T,J as W,E as J,O as Q,P as G,Q as H}from"./vue.esm-bundler-CocPPKUI.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w,a as k}from"./FSButtonRemove-Nn5B4DX-.js";import{C as s}from"./useColors-C1aD-Kb6.js";import{V as h}from"./VDivider-DShFabDb.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSImageUI-i6dq6NUa.js";import"./VImg-C2WY2bzk.js";import"./color-D50-hVV_.js";import"./theme-C1Gcptw7.js";import"./dimensions-Cv9Fwl7U.js";import"./rounded-CBYChxif.js";import"./transition-bMLtH-b3.js";import"./index-5LM_ZUPq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./elevation-DUhGVECn.js";import"./locale-_fONYh-8.js";import"./FSRow-BvJ7lU5E.js";import"./FSText-Nj40J67v.js";import"./useSlots-D4bv69lA.js";import"./FSBreadcrumbs-CG-90OCb.js";import"./FSSpan-CKhKq6E1.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./router-CKzlklLc.js";import"./density-2KuMGYl6.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./FSSlideGroup-BoaCkdx0.js";import"./FSButtonNextIcon-BjCs89jV.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./VSlideGroupItem-nAYd2StP.js";import"./group-MFxThiWx.js";import"./proxiedModel-DW1FRKBO.js";import"./index-hd-xIizf.js";import"./display-23tZl-3U.js";import"./FSFadeOut-BcV7cYL5.js";import"./FSIconCard-Df7qPY01.js";import"./index-_Z9wfsFC.js";import"./color-D1vYnx_2.js";import"./theme-B39arTiS.js";const D=$({name:"FSEntityView",components:{FSBaseView:E}});function U(e,X,Y,ee,te,ne){const A=T("FSBaseView");return W(),j(A,O({variant:"entity"},e.$attrs),q({_:2},[N(e.$slots,(oe,m)=>({name:m,fn:J(L=>[Q(e.$slots,m,G(H(L)))])}))]),1040)}const t=K(D,[["render",U]]);D.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const lt={title:"Foundation/Shared/views/EntityView",component:t,tags:["autodocs"],argTypes:{...R([E,Z,_,z,P],t)}},n={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t},setup(){return{args:e}},template:`
        <FSEntityView
          v-bind="args"
        >
          <template
            v-for="n in 80"
            :key="n"
          >
            <p>I am a simple text</p>
          </template>
        </FSEntityView>
      `})},o={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageCover:!0,icon:"mdi-chemical-weapon",iconBackgroundColors:["#FF0000","#0000FF"],iconBackgroundVariant:"gradient",iconBorder:!1,iconColor:s.Dark,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:w,FSLoader:x,FSCol:B},setup(){return{args:e}},template:`
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
      `})},r={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0},render:e=>({components:{VDivider:h,FSEntityView:t},setup(){return{args:e}},template:`
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
    </div>`})},i={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:e=>({components:{VDivider:h,FSEntityView:t},setup(){return{args:e}},template:`
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
    </div>`})},a={args:{title:"Extension",subtitle:"subtitle extttttttttt",description:"Description d'une extension Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:w,FSLoader:x,FSCol:B,FSImage:M},setup(){return{args:e}},template:`
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
      `})};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    breadcrumbs: [{
      title: 'Lorem',
      to: '/'
    }, {
      title: 'MIZAR CDC',
      disabled: true
    }]
  },
  render: args => ({
    components: {
      FSEntityView
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSEntityView
          v-bind="args"
        >
          <template
            v-for="n in 80"
            :key="n"
          >
            <p>I am a simple text</p>
          </template>
        </FSEntityView>
      \`
  })
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      FSEntityView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol
    },
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var F,S,C;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      VDivider,
      FSEntityView
    },
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
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      VDivider,
      FSEntityView
    },
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,I,V;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  render: args => ({
    components: {
      FSEntityView,
      FSButtonEdit,
      FSButtonRemove,
      FSLoader,
      FSCol,
      FSImage
    },
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
}`,...(V=(I=a.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const pt=["Default","Variation0","Variation1","Variation2","ExtensionMock"];export{n as Default,a as ExtensionMock,o as Variation0,r as Variation1,i as Variation2,pt as __namedExportsOrder,lt as default};
