import{F as o}from"./FSWrapGroup-DMf-egfq.js";import{F as p}from"./FSRow-C8aYwBu-.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./uuid-DTaye2KM.js";import"./useSlots-ol4Nk6ew.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./useRender-_COxrB9K.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./group-B4VRq_l_.js";import"./icons-CucLNLjN.js";import"./resizeObserver-hE1ulDL8.js";import"./tag-enhOFdJJ.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./size-DwliOKuO.js";import"./VSlideGroupItem-BppNUl7y.js";const T={title:"Shared/Components/Global/Containers/WrapGroup",component:o,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"}}},e={render:d=>({components:{FSWrapGroup:o,FSRow:p},setup(){return{args:d}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSWrapGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,T as default};
