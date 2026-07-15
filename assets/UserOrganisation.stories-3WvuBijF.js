import{F as i}from"./FSUserOrganisationTileUI-DLjsDG8X.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSImage-DeZD3KhU.js";import"./FSImageUI-CzwoPTBI.js";import"./FSLoader-BoDinVVO.js";import"./useBreakpoints-DO2FQykY.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./css-CUVOJ3aO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./useRender-CaGCh2Xu.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSTile-DnwhleJY.js";import"./FSCard-DxY0aXhp.js";import"./FSRow-Dg2RhQyl.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./FSCheckbox-D4XH1I7L.js";import"./FSCol-KRtq6OYO.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./density-CE2FkSgs.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./index-ByfGjSW7.js";import"./useTranslations-D5uJM3hx.js";const pe={title:"Shared/Components/Tiles/UserOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",imageId:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",imageId:"1",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",imageId:"1",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ue=["Variations","Imageless"];export{n as Imageless,e as Variations,ue as __namedExportsOrder,pe as default};
