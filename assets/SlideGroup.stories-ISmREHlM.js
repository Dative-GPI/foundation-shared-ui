import{_ as r}from"./FSSlideGroup-BA1MtzDE.js";import{_ as p}from"./FSRow-C47sfGk6.js";import"./vue.esm-bundler-CM4TIH-Q.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-COmxHR4E.js";import"./FSButton-OpnenzvL.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-DsGMo-Qs.js";import"./FSCard-ByrGPHX6.js";import"./FSCol-Be93XvPD.js";import"./css-D38lF7BW.js";import"./useBreakpoints-DsICqL2A.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-BXQyelfo.js";import"./useSlots-c6yg-hhg.js";import"./FSIcon-B4J40lse.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./proxiedModel-DKx29MO-.js";import"./index-BJH4L2FX.js";import"./display-CUGteI3_.js";import"./locale-BqFH1fBg.js";const H={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
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
