import{_ as x}from"./FSSlideGroup-D85Y1rXq.js";import{_ as v}from"./FSFadeOut-C918yX_r.js";import{F as i}from"./FSButton-Cpjx6pT4.js";import{_ as b}from"./FSWindow-DzTOdQm6.js";import{F as r}from"./FSText-CJ7Lhzl1.js";import{_ as F,a as l}from"./FSTab-B6qV4r2w.js";import{F as B}from"./FSCol-D_lbFmZy.js";import{_ as w}from"./FSRow-DIk8KFbG.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./css-CxcvJboa.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./useRender-BcOya-6A.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./group-BRhJCq_i.js";import"./icons-DR_vovBH.js";import"./resizeObserver-Z3fjh7Cv.js";import"./tag-BOR-k4cz.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./size-CaXETvDn.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSIcon-BJsIM37h.js";import"./FSCard-DLunkI-x.js";import"./VProgressCircular-D6ZFUt0S.js";import"./FSSpan-BN7wkmby.js";import"./VWindowItem-CYjgFUvM.js";import"./lazy-C77w73YC.js";import"./ssrBoot-C79LbZhX.js";import"./transition-DbItRNv8.js";import"./VBtn--7NXzl5z.js";import"./variant-j8rFA7nZ.js";import"./density-BnAGl-Nw.js";import"./elevation-JukLG-n6.js";import"./rounded-lfTNxM9v.js";import"./dimensions-B7sNhH2O.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./router-BDiSnJ53.js";import"./index-BYo1BiTt.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./scopeId-DC5duiFx.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-DY7PVvcf.js";const We={title:"Foundation/Shared/Tabs",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{tab1:0,tab2:0,tab3:0}},render:(e,{argTypes:t})=>({components:{FSTabs:l,FSTab:F,FSText:r,FSWindow:b,FSCol:B,FSRow:w,FSFadeOut:v,FSSlideGroup:x,FSButton:i},props:Object.keys(t),setup(){return e},template:`
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const Ie=["Scrolls","Variations","Errors"];export{o as Errors,a as Scrolls,n as Variations,Ie as __namedExportsOrder,We as default};
