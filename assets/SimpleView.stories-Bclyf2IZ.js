import{d as f,A as v,C as w,S as V,l as y,H as B,I as h,D as R,L as _,N as L,O as k}from"./vue.esm-bundler-NAfsqApI.js";import{F as x}from"./FSBaseView-Cik9Cv8k.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as d,a as F}from"./FSButtonRemove-Cu6pcWth.js";import{F as c}from"./FSLoader-C8dZP0ML.js";import{F as u}from"./FSCol-CPY6S-Xd.js";import"./FSRow-GjwhmX1p.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./FSText-Bp70TDSF.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./useSlots-S0O9Daut.js";import"./FSBreadcrumbs-DJYGhRGM.js";import"./FSSpan-CLtVPKpS.js";import"./FSIcon-Dq2bxLH5.js";import"./VIcon-PiNvAqE-.js";import"./color-BvydW9AS.js";import"./router-0GC4RTMW.js";import"./density-BGeA8UH8.js";import"./rounded-DwVJT96z.js";import"./VDefaultsProvider-BngNLuXK.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./FSButton-CnXo3fLV.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./proxiedModel-sn-eI_a5.js";import"./index-Dne_26Gx.js";import"./display-Bn-MFLq6.js";import"./locale-CAPEya44.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSImage-pL2n9Qiy.js";import"./FSImageUI-5vzo4bHr.js";import"./VImg-D7CqP58l.js";import"./dimensions-IFPI4Yq9.js";import"./transition-L7INWkz2.js";import"./index-DINlpRuJ.js";import"./useImages-V3peuH-V.js";import"./base-CmdGny12.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./useAppAuthToken-DQih8RjT.js";import"./FSIconCard-B7o102Mb.js";import"./elevation-B-XsQHpK.js";const C=f({name:"FSSimpleView",components:{FSBaseView:x}});function I(e,t,A,M,Z,$){const g=B("FSBaseView");return h(),v(g,y({variant:"default"},e.$attrs),w({_:2},[V(e.$slots,(j,i)=>({name:i,fn:R(b=>[_(e.$slots,i,L(k(b)))])}))]),1040)}const n=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSSimpleView",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSimpleView.vue"]};const Oe={title:"Foundation/Shared/views/SimpleView",component:n,tags:["autodocs"],argTypes:{}},o={args:{title:"MIZAR CDC",breadcrumbs:[{title:"Lorem",to:"/"},{title:"MIZAR CDC",disabled:!0}]},render:(e,{argTypes:t})=>({components:{FSSimpleView:n,FSButtonEdit:F,FSButtonRemove:d,FSLoader:c,FSCol:u},props:Object.keys(t),setup(){return{args:e}},template:`
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
