import{d as f,E as v,G as w,X as V,m as y,L as B,M as h,H as R,S as _,U as L,V as k}from"./vue.esm-bundler-NVdFPFZB.js";import{F as x}from"./FSBaseView-DBqix8yi.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-CN7GkNfq.js";import{F as c}from"./FSLoader-C6yio_zx.js";import{F as u}from"./FSCol-ChYB2Oag.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./FSText-BxohX4Ti.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./useSlots-DEXetpJf.js";import"./FSBreadcrumbs-LHoXR90O.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-DnRHaPib.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./router-D36qODsG.js";import"./density-CE2FkSgs.js";import"./rounded-CS1_z6Jk.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSSlideGroup-D8eb9LJO.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CMh8EZHD.js";import"./FSButton-CREo68Oh.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSCard-CuYV3KZq.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./display-QVN4B5Qw.js";import"./goto-CvfYl6LX.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSFadeOut-BlROHk6C.js";import"./FSImage-BlyKd8fm.js";import"./FSImageUI-CkJsDdzE.js";import"./VImg-BdZHkGCX.js";import"./dimensions-CS_qJJhy.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSIconCard-B_4_q2ty.js";import"./elevation-DQ_qKX67.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,M,A,Z,E){const g=B("FSBaseView");return h(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,($,p)=>({name:p,fn:R(b=>[_(e.$slots,p,L(k(b)))])}))]),1040)}const i=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Ge={title:"Shared/Components/views/SimpleView",component:i,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:i,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const He=["Default","Classic"];export{r as Classic,o as Default,He as __namedExportsOrder,Ge as default};
