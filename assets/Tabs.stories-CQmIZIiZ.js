import{_ as x}from"./FSSlideGroup-Cl7IgSOt.js";import{_ as v}from"./FSFadeOut-D3iDD7Hj.js";import{F as i}from"./FSButton-CnXo3fLV.js";import{F as b}from"./FSWindow-DzxBgxK_.js";import{F as r}from"./FSText-Bp70TDSF.js";import{F as l,a as F}from"./FSTab-B4BZtsoN.js";import{F as B}from"./FSCol-CPY6S-Xd.js";import{_ as w}from"./FSRow-GjwhmX1p.js";import"./vue.esm-bundler-NAfsqApI.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useBreakpoints-BwxwzcAl.js";import"./useSlots-S0O9Daut.js";import"./css-DBDqGZ-V.js";import"./VSlideGroupItem-BvOdViLK.js";import"./group-Dl43T2CL.js";import"./proxiedModel-sn-eI_a5.js";import"./index-Dne_26Gx.js";import"./color-BvydW9AS.js";import"./display-Bn-MFLq6.js";import"./locale-CAPEya44.js";import"./VIcon-PiNvAqE-.js";import"./resizeObserver-CLnVcpcq.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";import"./FSCard-DOESxZy8.js";import"./VProgressCircular-B6p7zTwg.js";import"./FSSpan-CLtVPKpS.js";import"./FSIcon-Dq2bxLH5.js";import"./VBtn-DqFLTMVy.js";import"./border-C5v47RY4.js";import"./density-BGeA8UH8.js";import"./elevation-B-XsQHpK.js";import"./rounded-DwVJT96z.js";import"./dimensions-IFPI4Yq9.js";import"./loader-DsBOwpms.js";import"./anchor-DvtYZGyi.js";import"./router-0GC4RTMW.js";import"./index-o6vlk9JB.js";import"./VDefaultsProvider-BngNLuXK.js";import"./scopeId-CbPxXtFO.js";import"./ssrBoot-BkO-TPgF.js";import"./transition-L7INWkz2.js";import"./forwardRefs-DWGaNmQL.js";const xe={title:"Foundation/Shared/Tabs",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{tab1:0,tab2:0,tab3:0}},render:(e,{argTypes:t})=>({components:{FSTabs:l,FSTab:F,FSText:r,FSWindow:b,FSCol:B,FSRow:w,FSFadeOut:v,FSSlideGroup:x,FSButton:i},props:Object.keys(t),setup(){return e},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab1" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab1" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Fade outs in tabs </FSText>
        <FSTabs v-model:tab="args.tab2" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow :modelValue="args.tab2" width="100%" >
          <FSFadeOut :value="0" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 50">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
          <FSFadeOut :value="1" height="400px">
            <FSFadeOut height="200px" style="min-height: 200px" :scrollOutside="false">
              <FSCol>
                <FSText v-for="(arg, index) in 80">
                  Inside {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
            <FSCol>
              <FSText v-for="(arg, index) in 80">
                Outside {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab1" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab1" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
        </FSWindow>
      </div>
    `})},n={args:{args:{tab1:0,tab2:0,tab3:2,tab4:3,tab5:0,tab6:0,tab7:0}},render:(e,{argTypes:t})=>({components:{FSTabs:l,FSTab:F,FSText:r,FSWindow:b,FSCol:B,FSRow:w,FSFadeOut:v,FSSlideGroup:x,FSButton:i},props:Object.keys(t),setup(){return e},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab2">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab2">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab3" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab3">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab4" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab5">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons after tabs </FSText>
        <FSTabs v-model:tab="args.tab6">
          <FSTab :value="0" label="Tab 1" />
          <FSTab :value="1" label="Tab 2" />
          <FSTab :value="2" label="Tab 3" />
          <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
          <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          <FSRow padding="0 8px" :wrap="false">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
          </FSRow>
        </FSTabs>
        <FSWindow v-model="args.tab6">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons outside tabs </FSText>
        <FSRow padding="0 8px" :wrap="false">
          <FSTabs v-model:tab="args.tab7">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
            <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          </FSTabs>
          <FSButton label="Button 1" />
          <FSButton label="Button 2" />
          <FSButton label="Button 3" />
        </FSRow>
        <FSWindow v-model="args.tab7">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    `})},o={args:{args:{tab1:0}},render:(e,{argTypes:t})=>({components:{FSTabs:l,FSTab:F,FSText:r,FSWindow:b,FSButton:i},props:Object.keys(t),setup(){return e},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Tabs with error on window </FSText>
      <FSButton @click="args.tab1 = 2"> Go to error page </FSButton>
      <FSTabs v-model:tab="args.tab1">
        <FSTab :value="0" label="Tab 1" tag="1" />
        <FSTab :value="1" label="Tab 2" tag="2" />
      </FSTabs>
      <FSWindow v-model="args.tab1" width="100%">
        <FSText :value="0"> This tab is allowed </FSText>
        <FSText :value="1"> This tab is allowed too </FSText>
      </FSWindow>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Window has no child, and thus do not show the error message </FSText>
      <FSTabs>
        <FSTab :value="0" label="Tab 1" tag="1" />
        <FSTab :value="1" label="Tab 2" tag="2" />
      </FSTabs>
      <FSWindow width="100%" />
    </div>
  `})};var S,d,u;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0,
      tab3: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSRow,
      FSFadeOut,
      FSSlideGroup,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return args;
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab1" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab1" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Fade outs in tabs </FSText>
        <FSTabs v-model:tab="args.tab2" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow :modelValue="args.tab2" width="100%" >
          <FSFadeOut :value="0" height="200px">
            <FSCol>
              <FSText v-for="(arg, index) in 50">
                Line {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
          <FSFadeOut :value="1" height="400px">
            <FSFadeOut height="200px" style="min-height: 200px" :scrollOutside="false">
              <FSCol>
                <FSText v-for="(arg, index) in 80">
                  Inside {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
            <FSCol>
              <FSText v-for="(arg, index) in 80">
                Outside {{ index }}
              </FSText>
            </FSCol>
          </FSFadeOut>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab1" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab1" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
        </FSWindow>
      </div>
    \`
  })
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var s,T,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0,
      tab3: 2,
      tab4: 3,
      tab5: 0,
      tab6: 0,
      tab7: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSRow,
      FSFadeOut,
      FSSlideGroup,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return args;
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab2">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab2">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab3" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab3">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab4" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab5" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab5">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons after tabs </FSText>
        <FSTabs v-model:tab="args.tab6">
          <FSTab :value="0" label="Tab 1" />
          <FSTab :value="1" label="Tab 2" />
          <FSTab :value="2" label="Tab 3" />
          <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
          <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          <FSRow padding="0 8px" :wrap="false">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
          </FSRow>
        </FSTabs>
        <FSWindow v-model="args.tab6">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons outside tabs </FSText>
        <FSRow padding="0 8px" :wrap="false">
          <FSTabs v-model:tab="args.tab7">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
            <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          </FSTabs>
          <FSButton label="Button 1" />
          <FSButton label="Button 2" />
          <FSButton label="Button 3" />
        </FSRow>
        <FSWindow v-model="args.tab7">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    \`
  })
}`,...(p=(T=n.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var c,m,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return args;
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Tabs with error on window </FSText>
      <FSButton @click="args.tab1 = 2"> Go to error page </FSButton>
      <FSTabs v-model:tab="args.tab1">
        <FSTab :value="0" label="Tab 1" tag="1" />
        <FSTab :value="1" label="Tab 2" tag="2" />
      </FSTabs>
      <FSWindow v-model="args.tab1" width="100%">
        <FSText :value="0"> This tab is allowed </FSText>
        <FSText :value="1"> This tab is allowed too </FSText>
      </FSWindow>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Window has no child, and thus do not show the error message </FSText>
      <FSTabs>
        <FSTab :value="0" label="Tab 1" tag="1" />
        <FSTab :value="1" label="Tab 2" tag="2" />
      </FSTabs>
      <FSWindow width="100%" />
    </div>
  \`
  })
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const ve=["Scrolls","Variations","Errors"];export{o as Errors,a as Scrolls,n as Variations,ve as __namedExportsOrder,xe as default};
