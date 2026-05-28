import{_ as e}from"./FSSlideGroup-DXfM7ZwC.js";import{_ as d}from"./FSRow-C8VtPvPz.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSText-CUmuxASa.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./css-B9c0ZZC5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./FSCol-B2uM4vFw.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";const N={title:"Foundation/Shared/Global/Containers/SlideGroup",component:e,tags:["autodocs"],argTypes:{}},t={render:p=>({components:{FSSlideGroup:e,FSRow:d},setup(){return{args:p}},template:`
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
    `}),args:{width:"600px",height:"fit-content"}};var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,N as default};
