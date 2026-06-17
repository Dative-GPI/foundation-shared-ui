import{F as i}from"./FSSelectField-BGyDveV5.js";import{F as r}from"./FSButton-DohpVEzP.js";import{F as m}from"./FSChip-PSYJcPlU.js";import{F as a}from"./FSIcon-CNpmwcOd.js";import{F as s}from"./FSCol-DedFW0nl.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSDialogMenu-D2-2fAf2.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./VProgressCircular-D7Gk7a1O.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./VDialog-CSacG24V.js";import"./VOverlay-CG3iG1zZ.js";import"./proxiedModel-CV-HTW34.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./display-IUfV935l.js";import"./lazy-DXVvciW4.js";import"./locale-BNkeanE6.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./FSSlideGroup-5yThapiu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./useSlots-ol4Nk6ew.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./icons-CucLNLjN.js";import"./VIcon-IlEzlDWp.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSToggleSet-yqzW0yBe.js";import"./FSWrapGroup-DMf-egfq.js";import"./VInput-Y0iB4nur.js";import"./density-qUtw3dk7.js";import"./FSBaseField-B1fPD4-R.js";import"./FSSpan-D6aG51_c.js";import"./FSTextField-V-eBW8wn.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./VLabel-COLF1QPQ.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./rounded-Ctowy803.js";import"./index-B3ZVJx30.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSLoader-BTZOtjrt.js";import"./elevation-DfTZ1KyC.js";import"./FSRadio-msJSYj1I.js";import"./VSelect-BkR6mgZ1.js";import"./VList-BVDcEHsi.js";import"./ssrBoot-ClVRhrXI.js";import"./border-DJaidMiz.js";import"./variant-BJccJztY.js";import"./VImg-DXeUU_wB.js";import"./VDivider-Ck2C5rfW.js";import"./VMenu-dxHuUw__.js";import"./FSText-C8rmUTxK.js";const De={title:"Shared/Components/Selects/SelectRole",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:"01",icon:"mdi-account",label:"Role 1",chipColor:"warning",chipLabel:"Custom",type:1},{id:"02",icon:"mdi-account-outline",label:"Role 2",chipColor:"warning",chipLabel:"Custom",type:1},{id:"11",icon:"mdi-account-circle",label:"Role 11",chipColor:"primary",chipLabel:"Shared",type:2},{id:"12",icon:"mdi-account-circle-outline",label:"Role 12",chipColor:"primary",chipLabel:"Shared",type:2}],value1:null,value2:null,value3:null,value4:null}},render:(l,{argTypes:n})=>({components:{FSSelectField:i,FSButton:r,FSChip:m,FSIcon:a,FSCol:s},props:Object.keys(n),setup(){return{...l}},template:`
    <FSCol>
      <FSSelectField
        label="Role"
        placeholder="One or more roles selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with toggleset disabled"
        placeholder="One or more roles selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple"
        placeholder="One or more roles selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple and toggleSet disabled"
        placeholder="One or more roles selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>`})};var t,p,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "01",
        icon: "mdi-account",
        label: "Role 1",
        chipColor: "warning",
        chipLabel: "Custom",
        type: 1
      }, {
        id: "02",
        icon: "mdi-account-outline",
        label: "Role 2",
        chipColor: "warning",
        chipLabel: "Custom",
        type: 1
      }, {
        id: "11",
        icon: "mdi-account-circle",
        label: "Role 11",
        chipColor: "primary",
        chipLabel: "Shared",
        type: 2
      }, {
        id: "12",
        icon: "mdi-account-circle-outline",
        label: "Role 12",
        chipColor: "primary",
        chipLabel: "Shared",
        type: 2
      }],
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
      FSButton,
      FSChip,
      FSIcon,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSelectField
        label="Role"
        placeholder="One or more roles selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with toggleset disabled"
        placeholder="One or more roles selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple"
        placeholder="One or more roles selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple and toggleSet disabled"
        placeholder="One or more roles selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>\`
  })
}`,...(o=(p=e.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const Ge=["Variations"];export{e as Variations,Ge as __namedExportsOrder,De as default};
