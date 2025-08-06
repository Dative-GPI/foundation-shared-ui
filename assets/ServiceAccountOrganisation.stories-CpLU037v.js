import{F as i}from"./FSServiceAccountOrganisationTileUI-o9wqrrUy.js";import"./vue.esm-bundler-PONd4AmC.js";import"./FSImage-C3LGd4N4.js";import"./FSImageUI-Dj9MaFLC.js";import"./FSLoader-B0jwcdOS.js";import"./useBreakpoints-RTs-XAJF.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-CQ7P2KsY.js";import"./dimensions-D04OQyPe.js";import"./elevation-D2k7D5K3.js";import"./locale-CoLhg8Wl.js";import"./VImg-AonvEV9k.js";import"./rounded-Cwlpymxx.js";import"./transition-BpYTYsmy.js";import"./index-CzkqP9_q.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSSpan-DqsaA-ji.js";import"./useSlots-nyIcwo6G.js";import"./FSTile-DvIRGdrB.js";import"./FSClickable-BpeLEfG7.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./FSRow-C-b-hpWa.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSCheckbox-B_D3nKx1.js";import"./FSIcon-wf_hiRKr.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./density-DM1TPnyn.js";import"./proxiedModel-BMHfYIia.js";import"./index-aCfcr9Gd.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./index-COu1mqSp.js";const te={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(o,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...o}},template:`
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
    </div>`})},n={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog"}],selected:[!1,!1]}},render:(o,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...o}},template:`
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
}`,...(t=(c=e.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var s,l,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const se=["Variations","Imageless"];export{n as Imageless,e as Variations,se as __namedExportsOrder,te as default};
