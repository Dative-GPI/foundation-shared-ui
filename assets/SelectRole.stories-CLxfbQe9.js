import{F as l}from"./FSSelectField-CI3nSuyA.js";import{F as r}from"./FSButton-q8xhuZjd.js";import{F as m}from"./FSChip-BhYAH8Ub.js";import{F as a}from"./FSIcon-DAU03b1P.js";import{F as s}from"./FSCol-D6yYDi9X.js";import"./vue.esm-bundler-DtArtqdn.js";import"./VList-BvtMNBCq.js";import"./FSCard-oEcmHswj.js";import"./FSRow-C-mN1bTt.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./VDialog-BTHijwvN.js";import"./VOverlay-Bjkk9AiY.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DKVd81aj.js";import"./proxiedModel-DNPVb8sx.js";import"./anchor-CbVlxldO.js";import"./dimensions-Dt4h5jdR.js";import"./display-H53nrFTM.js";import"./scopeId-DRx9AlMK.js";import"./locale-EnvrzLNX.js";import"./router-DPM6bvc5.js";import"./transition-POm6u0ds.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./index-YdMT2sR1.js";import"./VIcon-_X0ionFS.js";import"./ssrBoot-BOTKrwq8.js";import"./border--9_J8r4E.js";import"./density-96HGjcby.js";import"./elevation-DuPJjm1T.js";import"./rounded-B9giz-GX.js";import"./index-DWcj--5B.js";import"./VImg-DB10nKT8.js";import"./index-ShtRROw2.js";import"./FSSlideGroup-DaeYUKJp.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./useSlots-DbyfVVj5.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./resizeObserver-Bx252tqU.js";import"./FSToggleSet-CojuCZxM.js";import"./FSWrapGroup-BBSbZNqu.js";import"./VInput-Dw4F_0vm.js";import"./FSBaseField-COfiqIR8.js";import"./FSSpan-Btkwe66a.js";import"./FSTextField-Dwg3bGtr.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./VLabel-D5MHSYH0.js";import"./loader-CJlqftns.js";import"./VProgressCircular-vkSDrwPD.js";import"./FSCheckbox-D615kJWP.js";import"./VSelectionControl-D_AGLwLV.js";import"./FSFadeOut-okmKwNuP.js";import"./FSLoader-C5CmIvK9.js";import"./FSRadio-K1Efb9Rj.js";import"./VSelect-c638diSh.js";import"./VMenu-Bm-EzALO.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";const fe={title:"Foundation/Shared/Selects/SelectRole",component:l,tags:["autodocs"],argTypes:{}},e={args:{args:{items:[{id:"01",icon:"mdi-account",label:"Role 1",chipColor:"warning",chipLabel:"Custom",type:1},{id:"02",icon:"mdi-account-outline",label:"Role 2",chipColor:"warning",chipLabel:"Custom",type:1},{id:"11",icon:"mdi-account-circle",label:"Role 11",chipColor:"primary",chipLabel:"Shared",type:2},{id:"12",icon:"mdi-account-circle-outline",label:"Role 12",chipColor:"primary",chipLabel:"Shared",type:2}],value1:null,value2:null,value3:null,value4:null}},render:(i,{argTypes:n})=>({components:{FSSelectField:l,FSButton:r,FSChip:m,FSIcon:a,FSCol:s},props:Object.keys(n),setup(){return{...i}},template:`
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
}`,...(o=(p=e.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const Be=["Variations"];export{e as Variations,Be as __namedExportsOrder,fe as default};
