import{d as f,z as v,B as w,Q as V,m as y,G as B,H as h,C as R,L as _,M as L,N as k}from"./vue.esm-bundler-PTWG9x2X.js";import{F as x}from"./FSBaseView-bOS2Pv6w.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-YtSlZH77.js";import{F as c}from"./FSLoader-DnFcYh1x.js";import{F as u}from"./FSCol-qfATdd_b.js";import"./FSRow-DPcQMiM9.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSText-Da5isN0I.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./useSlots-BG_ZhEqK.js";import"./FSBreadcrumbs-k10Qy0b6.js";import"./FSSpan-yJEd2pn-.js";import"./FSIcon-DQMOs0-E.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./router-BQjY5_kj.js";import"./density-CznkHGGy.js";import"./rounded-BbPXzFqc.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./FSButton-CqjbOz0n.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./FSCard-CRoBY3gL.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./display-CESVul9-.js";import"./locale-Cz_4DTJh.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSImage-D6wIZvVb.js";import"./FSImageUI-Cd9yfhhj.js";import"./VImg-CBGPWIu-.js";import"./dimensions-v18atrWI.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSIconCard-CVsCm8Sv.js";import"./elevation-CrSwNJwg.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,M,A,Z,$){const g=B("FSBaseView");return h(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Oe={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
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
      </FSSimpleView>
    `})},r={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    `})};var p,a,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
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
      FSSimpleView,
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
      <FSSimpleView v-bind="args">
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
      </FSSimpleView>
    \`
  })
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var s,l,S;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
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
      FSSimpleView,
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
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    \`
  })
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const Te=["Default","Classic"];export{r as Classic,o as Default,Te as __namedExportsOrder,Oe as default};
