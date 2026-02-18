import{b as L}from"./properties-Qw-O9fbT.js";import{F as B}from"./FSCol-D_lbFmZy.js";import{F as M}from"./FSImage-6sMlYEt8.js";import{F as x}from"./FSLoader-Cl8hDT8j.js";import{F as w,a as Z,b as _,c as z,d as P}from"./FSBaseView-COXZ1jG4.js";import{d as $,B as j,C as q,U as N,m as T,I as W,J,D as O,P as Q,Q as U,R as G}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E,a as k}from"./FSButtonRemove-DGvFVics.js";import{C as s}from"./useColors-BM_SKUZx.js";import{V as h}from"./VDivider-Yc-HesXU.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSImageUI-D-goncjh.js";import"./VImg-BlUyfKKc.js";import"./useRender-BcOya-6A.js";import"./theme-Cdiv_FYE.js";import"./dimensions-B7sNhH2O.js";import"./color-BW36qAym.js";import"./rounded-lfTNxM9v.js";import"./transition-DbItRNv8.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./FSRow-DIk8KFbG.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSBreadcrumbs-C7ZQoXwK.js";import"./FSSpan-BN7wkmby.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./router-BDiSnJ53.js";import"./density-BnAGl-Nw.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-D85Y1rXq.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./FSButton-Cpjx6pT4.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSCard-DLunkI-x.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSFadeOut-C918yX_r.js";import"./FSIconCard-C3NcCNyZ.js";const D=$({name:"FSEntityView",components:{FSBaseView:w}});function K(e,X,Y,ee,te,oe){const A=W("FSBaseView");return J(),j(A,T({variant:"entity"},e.$attrs),q({_:2},[N(e.$slots,(re,m)=>({name:m,fn:O(R=>[Q(e.$slots,m,U(G(R)))])}))]),1040)}const t=H(D,[["render",K]]);D.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const dt={title:"Foundation/Shared/views/EntityView",component:t,tags:["autodocs"],argTypes:{...L([w,Z,_,z,P],t)}},o={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t},setup(){return{args:e}},template:`
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
      `})},r={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageCover:!0,icon:"mdi-chemical-weapon",iconBackgroundColors:["#FF0000","#0000FF"],iconBackgroundVariant:"gradient",iconBorder:!1,iconColor:s.Dark,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:E,FSLoader:x,FSCol:B},setup(){return{args:e}},template:`
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
      `})},i={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0},render:e=>({components:{VDivider:h,FSEntityView:t},setup(){return{args:e}},template:`
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
    </div>`})},a={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:s.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:e=>({components:{VDivider:h,FSEntityView:t},setup(){return{args:e}},template:`
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
    </div>`})},n={args:{title:"Extension",subtitle:"subtitle extttttttttt",description:"Description d'une extension Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:E,FSLoader:x,FSCol:B,FSImage:M},setup(){return{args:e}},template:`
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
      `})};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var F,S,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,y,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,I,V;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(V=(I=n.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const ct=["Default","Variation0","Variation1","Variation2","ExtensionMock"];export{o as Default,n as ExtensionMock,r as Variation0,i as Variation1,a as Variation2,ct as __namedExportsOrder,dt as default};
