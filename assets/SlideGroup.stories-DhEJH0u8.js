import{_ as r}from"./FSSlideGroup-Jp6XGK-I.js";import{_ as p}from"./FSRow-DPcQMiM9.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-GWsRoL9L.js";import"./FSButton-YqGArPy2.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-TnS9e2Ej.js";import"./FSCard-DkDNRB06.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSIcon-Df5FR-8G.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./display-CESVul9-.js";import"./locale-Cz_4DTJh.js";const H={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var o,i,e;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSlideGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,H as default};
