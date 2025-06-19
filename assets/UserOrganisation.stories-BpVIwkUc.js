import{F as i}from"./FSUserOrganisationTileUI-C9ltB2Y9.js";import"./vue.esm-bundler-BB--BfRN.js";import"./FSImage-D2nwrOf-.js";import"./FSImageUI-B_bAqKap.js";import"./FSLoader-Cf5HtYZd.js";import"./useBreakpoints-f5uwzDhq.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./css-DoweNwVf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DIvEt_AX.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./VImg-DcLzuYY5.js";import"./rounded-BKWlZxOJ.js";import"./transition-GJJG9yri.js";import"./index--Ye8kcMr.js";import"./useImages-fX-VpO9W.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DmpXug6S.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSTile-pg-_mccU.js";import"./FSClickable-CwRD7A4m.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./FSRow-Bdc52rY8.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSCheckbox-ti2pWVdy.js";import"./FSIcon-BKav6CVU.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./density-Xpr_P7nk.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-8zgUIpZ9.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./index-9ysw5oGg.js";import"./useTranslations-DvAhn7XV.js";const te={title:"Foundation/Shared/Tiles/UserOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",imageId:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",imageId:"1",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",imageId:"1",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const le=["Variations","Imageless"];export{n as Imageless,e as Variations,le as __namedExportsOrder,te as default};
