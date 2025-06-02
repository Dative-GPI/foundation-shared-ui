import{b as R}from"./properties-Qw-O9fbT.js";import{F as I}from"./FSCol-D6yYDi9X.js";import{F as M}from"./FSImage-DyJ7YE9e.js";import{F as x}from"./FSLoader-C5CmIvK9.js";import{F as w,a as Z,b as _,c as z,d as P}from"./FSBaseView-C3JSk5LB.js";import{d as $,z as j,B as q,S as N,m as O,G as T,H as W,C as G,N as H,O as J,P as K}from"./vue.esm-bundler-DtArtqdn.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E,a as k}from"./FSButtonRemove-DNAzJ_lY.js";import{C as s}from"./useColors-P6sW9vWR.js";import{V as h}from"./VDivider-CsMvCpx9.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./FSImageUI-CJROiAZk.js";import"./VImg-DB10nKT8.js";import"./color-DKVd81aj.js";import"./theme-BTycGIF1.js";import"./dimensions-Dt4h5jdR.js";import"./rounded-B9giz-GX.js";import"./transition-POm6u0ds.js";import"./index-ShtRROw2.js";import"./useImages-Ob47Tzpe.js";import"./base-CmdGny12.js";import"./composableFactory-D6jnN1uy.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-CqNI4hgs.js";import"./elevation-DuPJjm1T.js";import"./locale-EnvrzLNX.js";import"./FSRow-C-mN1bTt.js";import"./FSText-CyTnv_LZ.js";import"./useSlots-DbyfVVj5.js";import"./FSBreadcrumbs-CQD77Qbn.js";import"./FSSpan-Btkwe66a.js";import"./FSIcon-DAU03b1P.js";import"./VIcon-_X0ionFS.js";import"./router-DPM6bvc5.js";import"./density-96HGjcby.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./FSSlideGroup-DaeYUKJp.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./FSButton-q8xhuZjd.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";import"./FSCard-oEcmHswj.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./proxiedModel-DNPVb8sx.js";import"./index-YdMT2sR1.js";import"./display-H53nrFTM.js";import"./FSFadeOut-okmKwNuP.js";import"./FSIconCard-B3mmomhn.js";import"./index-DfSX31J9.js";import"./color-CPMAIvbI.js";import"./theme-D430tkul.js";const D=$({name:"FSEntityView",components:{FSBaseView:w}});function U(e,X,Y,ee,te,ne){const A=T("FSBaseView");return W(),j(A,O({variant:"entity"},e.$attrs),q({_:2},[N(e.$slots,(oe,m)=>({name:m,fn:G(L=>[H(e.$slots,m,J(K(L)))])}))]),1040)}const t=Q(D,[["render",U]]);D.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const lt={title:"Foundation/Shared/views/EntityView",component:t,tags:["autodocs"],argTypes:{...R([w,Z,_,z,P],t)}},n={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t},setup(){return{args:e}},template:`
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
      `})},o={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageCover:!0,icon:"mdi-chemical-weapon",iconBackgroundColors:["#FF0000","#0000FF"],iconBackgroundVariant:"gradient",iconBorder:!1,iconColor:s.Dark,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:E,FSLoader:x,FSCol:I},setup(){return{args:e}},template:`
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
    </div>`})},a={args:{title:"Extension",subtitle:"subtitle extttttttttt",description:"Description d'une extension Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:s.Primary,iconBackgroundColors:void 0,breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:e=>({components:{FSEntityView:t,FSButtonEdit:k,FSButtonRemove:E,FSLoader:x,FSCol:I,FSImage:M},setup(){return{args:e}},template:`
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,V,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(V=a.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const pt=["Default","Variation0","Variation1","Variation2","ExtensionMock"];export{n as Default,a as ExtensionMock,o as Variation0,r as Variation1,i as Variation2,pt as __namedExportsOrder,lt as default};
