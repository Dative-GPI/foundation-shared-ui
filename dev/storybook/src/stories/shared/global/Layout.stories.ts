import type { StoryObj } from '@storybook/vue3';

import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Global/Layout',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Rows: Story = {
  render: () => ({
    components: { FSRow },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSRow width="hug" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSRow width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSRow width="hug" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSRow width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSRow width="fill" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSRow width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSRow width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSRow width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 50px;">
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>  &lt;FSRow align="top-left" /&gt;  </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="top-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre> &lt;FSRow align="top-center" /&gt; </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="top-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>  &lt;FSRow align="top-right" /&gt;  </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="top-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="center-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="center-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="center-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="center-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="center-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="center-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="bottom-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="bottom-left" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="bottom-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="bottom-center" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSRow align="bottom-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSRow width="fill" height="fill" align="bottom-right" style="background-color: palegreen; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSRow>
          </div>
        </div>
      </div>
    </div>
    `
  })
}

export const Cols: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSCol width="hug" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSCol width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSCol width="hug" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSCol width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSCol width="fill" height="hug" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSCol width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSCol width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSCol width="fill" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <pre>&lt;FSCol width="fill" height="fill" /&gt;</pre>
        <div style="display: flex; width: 150px; height: 150px; border: 2px dotted black; align-items: flex-start;">
          <FSCol width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 50px;">
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>  &lt;FSCol align="top-left" /&gt;  </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="top-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre> &lt;FSCol align="top-center" /&gt; </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="top-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>  &lt;FSCol align="top-right" /&gt;  </pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="top-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="center-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="center-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="center-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="center-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="center-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="center-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center; gap: 50px">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="bottom-left" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="bottom-left" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="bottom-center" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="bottom-center" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <pre>&lt;FSCol align="bottom-right" /&gt;</pre>
          <div style="display: flex; width: 120px; height: 120px; border: 2px dotted black; align-items: flex-start;">
            <FSCol width="fill" height="fill" align="bottom-right" style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
              <div style="display: flex; width: 30px; height: 30px; background-color: blanchedalmond;" />
            </FSCol>
          </div>
        </div>
      </div>
    </div>
    `
  })
}

export const Compositions: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
  components: { FSRow, FSCol },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 80px; margin-bottom: 80px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSCol width="fill" height="fill"&gt;
  &lt;FSRow width="hug"  height="hug"  /&gt;
  &lt;FSRow width="fill" height="hug"  /&gt;
  &lt;FSRow width="hug"  height="fill" /&gt;
&lt;/FSCol&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSCol width="fill" height="fill" style="background-color: plum; padding: 4px;">
          <FSRow width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </FSCol>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSCol width="fill" height="hug"&gt;
  &lt;FSRow width="hug"  height="hug"  /&gt;
  &lt;FSRow width="fill" height="hug"  /&gt;
  &lt;FSRow width="hug"  height="fill" /&gt;
&lt;/FSCol&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSCol width="fill" height="hug" style="background-color: plum; padding: 4px;">
          <FSRow width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </FSCol>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSCol width="hug" height="fill"&gt;
  &lt;FSRow width="hug"  height="hug"  /&gt;
  &lt;FSRow width="fill" height="hug"  /&gt;
  &lt;FSRow width="hug"  height="fill" /&gt;
&lt;/FSCol&gt;</pre>
      <div style="display: flex; width: 200px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSCol width="hug" height="fill" style="background-color: plum; padding: 4px;">
          <FSRow width="hug" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
          <FSRow width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSRow>
        </FSCol>
      </div>
    </div>
  </div>
  <div style="display: flex; gap: 80px;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSRow width="fill" height="fill"&gt;
  &lt;FSCol width="hug"  height="hug"  /&gt;
  &lt;FSCol width="fill" height="hug"  /&gt;
  &lt;FSCol width="hug"  height="fill" /&gt;
&lt;/FSRow&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSRow width="fill" height="fill" style="background-color: palegreen; padding: 4px;">
          <FSCol width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </FSRow>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSRow width="fill" height="hug"&gt;
  &lt;FSCol width="hug"  height="hug"  /&gt;
  &lt;FSCol width="fill" height="hug"  /&gt;
  &lt;FSCol width="hug"  height="fill" /&gt;
&lt;/FSRow&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSRow width="fill" height="hug" style="background-color: palegreen; padding: 4px;">
          <FSCol width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </FSRow>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <pre>&lt;FSRow width="hug" height="fill"&gt;
  &lt;FSCol width="hug"  height="hug"  /&gt;
  &lt;FSCol width="fill" height="hug"  /&gt;
  &lt;FSCol width="hug"  height="fill" /&gt;
&lt;/FSRow&gt;</pre>
      <div style="display: flex; width: 300px; height: 200px; border: 2px dotted black; align-items: flex-start;">
        <FSRow width="hug" height="fill" style="background-color: palegreen; padding: 4px;">
          <FSCol width="hug" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="fill" height="hug" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
          <FSCol width="hug" height="fill" style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
          </FSCol>
        </FSRow>
      </div>
    </div>
  </div>
  `
})
}