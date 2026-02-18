import{F as i}from"./FSUserOrganisationTileUI-Bn-MapLr.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./FSLoader-Cl8hDT8j.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BW36qAym.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./useRender-BcOya-6A.js";import"./VImg-BlUyfKKc.js";import"./rounded-lfTNxM9v.js";import"./transition-DbItRNv8.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSTile-DnnqQnwQ.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCheckbox-CpWOjTw-.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./density-BnAGl-Nw.js";import"./index-BYo1BiTt.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./index-6jMyctoo.js";import"./useTranslations-CFCS6HA-.js";const de={title:"Foundation/Shared/Tiles/UserOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",imageId:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",imageId:"1",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",imageId:"1",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
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
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const pe=["Variations","Imageless"];export{n as Imageless,e as Variations,pe as __namedExportsOrder,de as default};
