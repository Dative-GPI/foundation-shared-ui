import{d as f,A as v,C as w,S as V,l as y,H as B,I as h,D as R,L as _,N as L,O as k}from"./vue.esm-bundler-BD3cPSox.js";import{F as x}from"./FSBaseView-TMEWrOeC.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-CI8Y7e7A.js";import{F as c}from"./FSLoader-DTAq-3Vo.js";import{F as u}from"./FSCol-C9a7BKGp.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSText-uZOTHeSC.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./useSlots-DhthX9xh.js";import"./FSBreadcrumbs-7FJjw_7q.js";import"./FSSpan-CqHf-ny6.js";import"./FSIcon-BikiybNc.js";import"./VIcon-ef9P0Odv.js";import"./color-DAd2dJIE.js";import"./router-BdSI2seK.js";import"./density-Dp_zkCfD.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./FSSlideGroup-BX0UkKdi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./proxiedModel-JzK6JHhO.js";import"./index-CcZ3F2bM.js";import"./display-D74v7vg7.js";import"./locale-Cg0C6Moy.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSImage-CJ3EVuKL.js";import"./FSImageUI-CjPb9VM2.js";import"./VImg-DqEZxS4C.js";import"./dimensions-DbGEEU80.js";import"./transition-BVEL_Cnv.js";import"./index-Ov0xN_Hx.js";import"./useImages-B8onxWp5.js";import"./base-CmdGny12.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./useAppAuthToken-B3id31UI.js";import"./FSIconCard-DBNnNtvU.js";import"./elevation-C4p0Fj2B.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,$){const g=B("FSBaseView");return h(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Oe={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
