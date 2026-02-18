import{d as f,B as v,C as w,U as V,m as y,I as B,J as R,D as h,P as _,Q as L,R as k}from"./vue.esm-bundler-D5n7z5qz.js";import{F as x}from"./FSBaseView-BrSWRE8K.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-BqMldBEX.js";import{F as c}from"./FSLoader-Cl8hDT8j.js";import{F as u}from"./FSCol-D_lbFmZy.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSText-CJ7Lhzl1.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./useSlots-CoecqEnp.js";import"./FSBreadcrumbs-C7ZQoXwK.js";import"./FSSpan-BN7wkmby.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./router-BDiSnJ53.js";import"./density-BnAGl-Nw.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSSlideGroup-IW38j_vX.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BE_tlhjQ.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSCard-BH6GLU3V.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSFadeOut-C918yX_r.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./VImg-BlUyfKKc.js";import"./dimensions-B7sNhH2O.js";import"./transition-DbItRNv8.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSIconCard-DsztzXrT.js";import"./elevation-JukLG-n6.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,$){const g=B("FSBaseView");return R(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,p)=>({name:p,fn:h(b=>[_(e.$slots,p,L(k(b)))])}))]),1040)}const i=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const ze={title:"Foundation/Shared/views/SimpleView",component:i,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:i,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
    `})},r={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:i,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
      <FSSimpleView v-bind="args">
        <FSCol height="fill" style="background-color: purple;">
        </FSCol>
      </FSSimpleView>
    `})};var a,m,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,l,S;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const Je=["Default","Classic"];export{r as Classic,o as Default,Je as __namedExportsOrder,ze as default};
