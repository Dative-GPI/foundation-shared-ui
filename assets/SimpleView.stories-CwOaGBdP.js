import{d as f,B as v,C as w,U as V,m as y,I as B,J as R,D as h,P as _,Q as L,R as k}from"./vue.esm-bundler-D5n7z5qz.js";import{F as x}from"./FSBaseView-ea6EPTL6.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-tx7d37Y9.js";import{F as c}from"./FSLoader-uhE9mCg0.js";import{F as u}from"./FSCol-D_lbFmZy.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSText-015IEZHy.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./useSlots-CoecqEnp.js";import"./FSBreadcrumbs-XVgxlRQW.js";import"./FSSpan-BN7wkmby.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./router-R_WRJyUs.js";import"./density-BTT1solu.js";import"./rounded-BSNeeq4o.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./FSSlideGroup-BnnHyPAm.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BxxPSm84.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSCard-DENSLTM_.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSFadeOut-YXyyFCAB.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./VImg-CFhtVVj8.js";import"./dimensions-D_nx6Jbk.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSIconCard-BlsFbvOA.js";import"./elevation-62d6MvS5.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,$){const g=B("FSBaseView");return R(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,p)=>({name:p,fn:h(b=>[_(e.$slots,p,L(k(b)))])}))]),1040)}const i=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const ze={title:"Foundation/Shared/views/SimpleView",component:i,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:i,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
