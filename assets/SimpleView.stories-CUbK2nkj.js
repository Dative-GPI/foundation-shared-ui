import{d as f,B as v,D as w,S as V,m as y,I as B,J as h,E as R,O as _,P as L,Q as k}from"./vue.esm-bundler-PONd4AmC.js";import{F as x}from"./FSBaseView-DQ03JhvI.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-BV2PruwI.js";import{F as c}from"./FSLoader-UOJfN8Qb.js";import{F as u}from"./FSCol-Bfhiyt6Y.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSText-C7hkL3As.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./useSlots-nyIcwo6G.js";import"./FSBreadcrumbs-BBdRGkpF.js";import"./FSSpan-DxKJLsSl.js";import"./FSIcon-bsX1r_Ci.js";import"./VIcon-DIMW80nW.js";import"./color-_AiH45em.js";import"./router-6tzIEQS-.js";import"./density-CNNumQ_A.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./FSSlideGroup-CGqp6f7y.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-CANKuvlL.js";import"./display-BXzLC06Y.js";import"./locale-CoLhg8Wl.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./VImg-DKyIpwU2.js";import"./dimensions-CNbPgA3L.js";import"./transition-BXZIGKil.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSIconCard-C0gGqVte.js";import"./elevation-CL0Py7Fp.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,E){const g=B("FSBaseView");return h(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,($,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Oe={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
