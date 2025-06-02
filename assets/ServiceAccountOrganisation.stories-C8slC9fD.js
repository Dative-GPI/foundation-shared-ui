import{F as i}from"./FSServiceAccountOrganisationTileUI-af_n1Q20.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./useBreakpoints-DMrtgY61.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-iZFxpsFf.js";import"./dimensions-CuS7VcMO.js";import"./elevation-DCJceMeT.js";import"./locale-BJmdjC_5.js";import"./VImg-UKGkvK5A.js";import"./rounded-T_eKj2ZY.js";import"./transition-C13qRIR1.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSTile-DIm7BUL1.js";import"./FSClickable-CBfoSsDs.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./FSRow-udQVJR1p.js";import"./VProgressCircular-cB7gdjsO.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSCheckbox-tSiw0lhZ.js";import"./FSIcon-8KcAAKgU.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./index-BHk1SuU0.js";const ce={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(o,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...o}},template:`
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const te=["Variations","Imageless"];export{n as Imageless,e as Variations,te as __namedExportsOrder,ce as default};
