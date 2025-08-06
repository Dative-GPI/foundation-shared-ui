import{F as i}from"./FSUserOrganisationTileUI-CMVDu9KA.js";import"./vue.esm-bundler-CocPPKUI.js";import"./FSImage-BNGlz8LX.js";import"./FSImageUI-i6dq6NUa.js";import"./FSLoader-JpoH2mis.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./css-mt76hoAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-D50-hVV_.js";import"./dimensions-Cv9Fwl7U.js";import"./elevation-DUhGVECn.js";import"./locale-_fONYh-8.js";import"./VImg-C2WY2bzk.js";import"./rounded-CBYChxif.js";import"./transition-bMLtH-b3.js";import"./index-5LM_ZUPq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSTile-CP6rjFw-.js";import"./FSClickable-CqIDwjuA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./FSRow-BvJ7lU5E.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSCheckbox-MGAv1q-u.js";import"./FSIcon-BGuuL0jz.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./density-2KuMGYl6.js";import"./proxiedModel-DW1FRKBO.js";import"./index-BwBNp3ym.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./index-hd-xIizf.js";import"./useTranslations-DJaIYmO0.js";const le={title:"Foundation/Shared/Tiles/UserOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",imageId:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",imageId:"1",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",imageId:"1",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})},n={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        imageId: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        imageId: "1",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        imageId: "1",
        name: "Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const de=["Variations","Imageless"];export{n as Imageless,e as Variations,de as __namedExportsOrder,le as default};
