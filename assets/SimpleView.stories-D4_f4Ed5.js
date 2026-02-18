import{d as f,B as v,C as w,U as V,m as y,I as B,J as R,D as h,P as _,Q as L,R as k}from"./vue.esm-bundler-B9lxvfDw.js";import{F as x}from"./FSBaseView-Dl1fM5ik.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-D8RJslDw.js";import{F as c}from"./FSLoader-FkDR4IbG.js";import{F as u}from"./FSCol-BwxAijHz.js";import"./FSRow-CFa9RNor.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSText-DZJhh1AD.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./useSlots-BioZKQqg.js";import"./FSBreadcrumbs-qL-rtvMO.js";import"./FSSpan-COYXSDbp.js";import"./FSIcon-kCffLiJ2.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./router-BlaQ2-ft.js";import"./density-DvMOIaQw.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./display-BzNfeHa8.js";import"./goto-BiKnNwZ0.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./VImg-UzuohEtG.js";import"./dimensions-n1mPaUbN.js";import"./transition-Dh_EAQcC.js";import"./index-Dli51uy9.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSIconCard-B96S8Zdc.js";import"./elevation-DZ0Sccyb.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,$){const g=B("FSBaseView");return R(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,p)=>({name:p,fn:h(b=>[_(e.$slots,p,L(k(b)))])}))]),1040)}const i=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Ne={title:"Foundation/Shared/views/SimpleView",component:i,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:i,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const ze=["Default","Classic"];export{r as Classic,o as Default,ze as __namedExportsOrder,Ne as default};
