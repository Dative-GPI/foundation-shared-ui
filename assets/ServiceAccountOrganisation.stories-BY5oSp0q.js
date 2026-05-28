import{F as i}from"./FSServiceAccountOrganisationTileUI-5dMxxeWV.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSImage-DA9vOKQh.js";import"./FSImageUI-ErX_r_YE.js";import"./FSLoader-DlWbYN_-.js";import"./useBreakpoints-DhvOJkKp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-RD9Ud5Y3.js";import"./dimensions-DYTrXD1P.js";import"./elevation-DVEOfLMu.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./useRender-BLRtLddt.js";import"./VImg-DooBjoZC.js";import"./rounded-B6-M_5uG.js";import"./transition-CedxoFs4.js";import"./index-BLyOCIqB.js";import"./useImages-F1kPEKZ4.js";import"./composableFactory-yqpAgWWK.js";import"./serviceFactory-CnLiFQ6s.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B2Z_WWk7.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSTile-DyIXnIBo.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./FSCheckbox-D-n0kplZ.js";import"./FSCol-B2uM4vFw.js";import"./useRules-2yt7KWSA.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./density-SLEyWIf6.js";import"./index-Dlqh_ozP.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./index-C-lZWyiZ.js";const pe={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(n,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})},o={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog"}],selected:[!1,!1]}},render:(n,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})};var a,c,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(c=e.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog"
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const me=["Variations","Imageless"];export{o as Imageless,e as Variations,me as __namedExportsOrder,pe as default};
