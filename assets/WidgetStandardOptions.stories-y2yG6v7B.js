import{d as v,B,E as m,I as x,J as S,k as n,b as i}from"./vue.esm-bundler-CC_jVOJ5.js";import{_ as a}from"./FSRow-CjY3icuR.js";import y from"./FSNumberField-DJYvT1hq.js";import H from"./FSSwitch-D5bgjNBx.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSTextField-CTUDqfDL.js";import"./FSBaseField-Bo38Hl_f.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSCol-DVEaUPKl.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSIcon-CeLDRxMK.js";import"./useRules-Da0JLBaA.js";import"./VField-CnDxsm3U.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./density-mssFUWH2.js";import"./dimensions-TKp8HHzB.js";import"./proxiedModel-Nw0LX-ta.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./rounded-Cy4gG01O.js";import"./VDefaultsProvider-CuIagDb9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B48vLg-P.js";import"./VSelectionControl-CvHa2RXZ.js";import"./index-DWDx8SXO.js";const b=v({name:"WidgetStandardOptions",components:{FSRow:a,FSNumberField:y,FSSwitch:H},props:{widgetWidth:{type:Number,required:!0},widgetHeight:{type:Number,required:!0},hideBorders:{type:Boolean,required:!0}},emits:["update:widgetWidth","update:widgetHeight","update:hideBorders"]});function O(e,t,r,o,V,k){const h=x("FSNumberField");return S(),B(a,{align:"bottom-left",wrap:!1,gap:"16px"},{default:m(()=>[n(a,{align:"bottom-center"},{default:m(()=>[n(h,{label:e.$tr("entity.widget.width","Width"),modelValue:e.widgetWidth,"onUpdate:modelValue":t[0]||(t[0]=d=>e.$emit("update:widgetWidth",d))},null,8,["label","modelValue"]),n(h,{label:e.$tr("entity.widget.height","Height"),modelValue:e.widgetHeight,"onUpdate:modelValue":t[1]||(t[1]=d=>e.$emit("update:widgetHeight",d))},null,8,["label","modelValue"]),n(H,{class:"dialog-configure-widget-hide-borders",label:e.$tr("entity.widget.hide-borders","Hide borders"),modelValue:e.hideBorders,"onUpdate:modelValue":t[2]||(t[2]=d=>e.$emit("update:hideBorders",d))},null,8,["label","modelValue"])]),_:1})]),_:1})}const p=F(b,[["render",O]]);b.__docgenInfo={displayName:"WidgetStandardOptions",exportName:"default",description:"",tags:{},props:[{name:"widgetWidth",type:{name:"number"},required:!0},{name:"widgetHeight",type:{name:"number"},required:!0},{name:"hideBorders",type:{name:"boolean"},required:!0}],events:[{name:"update:widgetWidth"},{name:"update:widgetHeight"},{name:"update:hideBorders"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWidgetStandardOptions.vue"]};const ve={title:"Foundation/Shared/WidgetStandardOptions",component:p,tags:["autodocs"],argTypes:{widgetWidth:{control:"number",description:"Width of the widget"},widgetHeight:{control:"number",description:"Height of the widget"},hideBorders:{control:"boolean",description:"Whether to hide widget borders"},"onUpdate:widgetWidth":{action:"widgetWidth changed"},"onUpdate:widgetHeight":{action:"widgetHeight changed"},"onUpdate:hideBorders":{action:"hideBorders changed"}},args:{widgetWidth:300,widgetHeight:200,hideBorders:!1}},g={args:{widgetWidth:300,widgetHeight:200,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:p},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
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
    `})},s={args:{widgetWidth:400,widgetHeight:300,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:p},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
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
}`,...(W=(f=s.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const Be=["Default","Interactive"];export{g as Default,s as Interactive,Be as __namedExportsOrder,ve as default};
