import{F as i}from"./FSSelectField-CGFDUGHS.js";import{F as r}from"./FSButton-CdKzPvIq.js";import{F as m}from"./FSChip-MKc2C3wM.js";import{F as a}from"./FSIcon-DzQOa56z.js";import{F as s}from"./FSCol-KRtq6OYO.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSDialogMenu-HNK7X8ju.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSSlideGroup-BYhxS2B0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./useSlots-DEXetpJf.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./icons-Cl0t_6pZ.js";import"./VIcon-Cu6WQqXu.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CZYm0d1o.js";import"./FSWrapGroup-jHFOEYDl.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./FSTextField-DFareS9q.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./VLabel-BtnooUPU.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-VhSFSAo6.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-C94-RoOx.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./FSText-DR713pSR.js";const De={title:"Shared/Components/Selects/SelectRole",component:i,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:"01",icon:"mdi-account",label:"Role 1",chipColor:"warning",chipLabel:"Custom",type:1},{id:"02",icon:"mdi-account-outline",label:"Role 2",chipColor:"warning",chipLabel:"Custom",type:1},{id:"11",icon:"mdi-account-circle",label:"Role 11",chipColor:"primary",chipLabel:"Shared",type:2},{id:"12",icon:"mdi-account-circle-outline",label:"Role 12",chipColor:"primary",chipLabel:"Shared",type:2}],value1:null,value2:null,value3:null,value4:null}},render:(l,{argTypes:n})=>({components:{FSSelectField:i,FSButton:r,FSChip:m,FSIcon:a,FSCol:s},props:Object.keys(n),setup(){return{...l}},template:`
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
