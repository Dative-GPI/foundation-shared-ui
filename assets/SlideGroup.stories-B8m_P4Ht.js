import{_ as r}from"./FSSlideGroup-CXGL0bk9.js";import{_ as p}from"./FSRow-udQVJR1p.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CYg1KVZY.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./index-BNfVP6r5.js";import"./display-Cs3Y1ygD.js";import"./locale-BJmdjC_5.js";const H={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
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
