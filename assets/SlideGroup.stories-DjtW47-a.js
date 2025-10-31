import{_ as r}from"./FSSlideGroup-nu8Cr66q.js";import{_ as p}from"./FSRow-CjY3icuR.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CsckSPrB.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./VSlideGroup-DVr5PPvN.js";import"./index-Dylhq_Dl.js";import"./display-CpM-3U3n.js";import"./locale-K9DBMW2q.js";import"./group-CxQl3dDS.js";import"./proxiedModel-Nw0LX-ta.js";import"./VSlideGroupItem-Bl-P3Ech.js";const I={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
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
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,I as default};
