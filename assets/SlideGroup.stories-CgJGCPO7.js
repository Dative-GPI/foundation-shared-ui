import{_ as r}from"./FSSlideGroup-DLHspItq.js";import{_ as p}from"./FSRow-Bdc52rY8.js";import"./vue.esm-bundler-BB--BfRN.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwHgwEym.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-CwRD7A4m.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSIcon-BKav6CVU.js";import"./VSlideGroupItem-BI1OJQNm.js";import"./group-C8GVwDAJ.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-9ysw5oGg.js";import"./display-DzHu_6W3.js";import"./locale-CSWC84Vq.js";const H={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
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
