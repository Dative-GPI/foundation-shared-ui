import{d as v,E as B,H as m,L as x,M as S,k as n,e as i}from"./vue.esm-bundler-NVdFPFZB.js";import{F as p}from"./FSRow-Dg2RhQyl.js";import y from"./FSNumberField-D8EhXm8v.js";import H from"./FSSwitch-BRVLyQxs.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSCol-KRtq6OYO.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSButton-CdKzPvIq.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DR713pSR.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-ghpSlWxI.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";const b=v({name:"WidgetStandardOptions",components:{FSRow:p,FSNumberField:y,FSSwitch:H},props:{widgetWidth:{type:Number,required:!0},widgetHeight:{type:Number,required:!0},hideBorders:{type:Boolean,required:!0}},emits:["update:widgetWidth","update:widgetHeight","update:hideBorders"]});function O(e,t,r,o,V,k){const h=x("FSNumberField");return S(),B(p,{align:"bottom-left",wrap:!1,gap:"16px"},{default:m(()=>[n(p,{align:"bottom-center"},{default:m(()=>[n(h,{label:e.$tr("entity.widget.width","Width"),modelValue:e.widgetWidth,"onUpdate:modelValue":t[0]||(t[0]=d=>e.$emit("update:widgetWidth",d))},null,8,["label","modelValue"]),n(h,{label:e.$tr("entity.widget.height","Height"),modelValue:e.widgetHeight,"onUpdate:modelValue":t[1]||(t[1]=d=>e.$emit("update:widgetHeight",d))},null,8,["label","modelValue"]),n(H,{class:"dialog-configure-widget-hide-borders",label:e.$tr("entity.widget.hide-borders","Hide borders"),modelValue:e.hideBorders,"onUpdate:modelValue":t[2]||(t[2]=d=>e.$emit("update:hideBorders",d))},null,8,["label","modelValue"])]),_:1})]),_:1})}const a=F(b,[["render",O]]);b.__docgenInfo={displayName:"WidgetStandardOptions",exportName:"default",description:"",tags:{},props:[{name:"widgetWidth",type:{name:"number"},required:!0},{name:"widgetHeight",type:{name:"number"},required:!0},{name:"hideBorders",type:{name:"boolean"},required:!0}],events:[{name:"update:widgetWidth"},{name:"update:widgetHeight"},{name:"update:hideBorders"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWidgetStandardOptions.vue"]};const Oe={title:"Shared/Components/WidgetStandardOptions",component:a,tags:["autodocs"],argTypes:{widgetWidth:{control:"number",description:"Width of the widget"},widgetHeight:{control:"number",description:"Height of the widget"},hideBorders:{control:"boolean",description:"Whether to hide widget borders"},"onUpdate:widgetWidth":{action:"widgetWidth changed"},"onUpdate:widgetHeight":{action:"widgetHeight changed"},"onUpdate:hideBorders":{action:"hideBorders changed"}},args:{widgetWidth:300,widgetHeight:200,hideBorders:!1}},g={args:{widgetWidth:300,widgetHeight:200,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:a},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Widget Configuration Options</h3>
        <FSWidgetStandardOptions 
          v-model:widgetWidth="widgetWidth"
          v-model:widgetHeight="widgetHeight"
          v-model:hideBorders="hideBorders"
        />
        <div style="margin-top: 20px; padding: 10px; background: white; border-radius: 4px;">
          <h4>Current Values:</h4>
          <p>Width: {{ widgetWidth }}px</p>
          <p>Height: {{ widgetHeight }}px</p>
          <p>Hide Borders: {{ hideBorders }}</p>
        </div>
      </div>
    `})},s={args:{widgetWidth:400,widgetHeight:300,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:a},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h3>Widget Options</h3>
          <FSWidgetStandardOptions 
            v-model:widgetWidth="widgetWidth"
            v-model:widgetHeight="widgetHeight"
            v-model:hideBorders="hideBorders"
          />
        </div>
        <div style="flex: 1;">
          <h3>Widget Preview</h3>
          <div 
            :style="{
              width: widgetWidth + 'px',
              height: widgetHeight + 'px',
              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
              border: hideBorders ? 'none' : '2px solid #2196f3',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1976d2',
              maxWidth: '100%',
              maxHeight: '400px'
            }"
          >
            Widget Preview<br>
            {{ widgetWidth }}x{{ widgetHeight }}
          </div>
        </div>
      </div>
    `})};var l,w,u;g.parameters={...g.parameters,docs:{...(l=g.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    widgetWidth: 300,
    widgetHeight: 200,
    hideBorders: false
  },
  render: args => ({
    components: {
      FSWidgetStandardOptions
    },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);
      return {
        widgetWidth,
        widgetHeight,
        hideBorders
      };
    },
    template: \`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Widget Configuration Options</h3>
        <FSWidgetStandardOptions 
          v-model:widgetWidth="widgetWidth"
          v-model:widgetHeight="widgetHeight"
          v-model:hideBorders="hideBorders"
        />
        <div style="margin-top: 20px; padding: 10px; background: white; border-radius: 4px;">
          <h4>Current Values:</h4>
          <p>Width: {{ widgetWidth }}px</p>
          <p>Height: {{ widgetHeight }}px</p>
          <p>Hide Borders: {{ hideBorders }}</p>
        </div>
      </div>
    \`
  })
}`,...(u=(w=g.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var c,f,W;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    widgetWidth: 400,
    widgetHeight: 300,
    hideBorders: false
  },
  render: args => ({
    components: {
      FSWidgetStandardOptions
    },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);
      return {
        widgetWidth,
        widgetHeight,
        hideBorders
      };
    },
    template: \`
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h3>Widget Options</h3>
          <FSWidgetStandardOptions 
            v-model:widgetWidth="widgetWidth"
            v-model:widgetHeight="widgetHeight"
            v-model:hideBorders="hideBorders"
          />
        </div>
        <div style="flex: 1;">
          <h3>Widget Preview</h3>
          <div 
            :style="{
              width: widgetWidth + 'px',
              height: widgetHeight + 'px',
              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
              border: hideBorders ? 'none' : '2px solid #2196f3',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1976d2',
              maxWidth: '100%',
              maxHeight: '400px'
            }"
          >
            Widget Preview<br>
            {{ widgetWidth }}x{{ widgetHeight }}
          </div>
        </div>
      </div>
    \`
  })
}`,...(W=(f=s.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const Ve=["Default","Interactive"];export{g as Default,s as Interactive,Ve as __namedExportsOrder,Oe as default};
