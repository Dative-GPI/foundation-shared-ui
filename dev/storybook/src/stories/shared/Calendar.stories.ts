import { ref } from 'vue';
import { isSameDay } from 'date-fns';

import type { Meta, StoryObj } from '@storybook/vue3';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSSimpleCalendarHeader from "@dative-gpi/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue";
import FSSimpleCalendar from "@dative-gpi/foundation-shared-components/components/calendar/FSSimpleCalendar.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";

const meta = {
  title: 'Foundation/Shared/Calendar',
  component: FSSimpleCalendarHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof FSSimpleCalendarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { FSCol, FSSimpleCalendarHeader, FSSimpleCalendar, FSCard },
    props: Object.keys(argTypes),
    setup() {
      const disabledDates = ref<Date[]>([]);

      const isDisabled = (date: Date) => {
        return disabledDates.value.some((d) => isSameDay(d, date));
      }

      const toggleDate = (date: Date) => {
        if (isDisabled(date)) {
          disabledDates.value = disabledDates.value.filter((d) => !isSameDay(d, date));
        } else {
          disabledDates.value = [...disabledDates.value, date];
        }
      }

      const month = ref(new Date().getMonth() + 1);
      const year = ref(new Date().getFullYear());

      return { month, year, isDisabled, toggleDate, disabledDates };
    },
    template: `
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSCard
              height="100px"
              width="100%"
              :disabled="isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : 'standard'"
              :color="isDisabled(date) ? 'error' : 'light'"
              @click="toggleDate(date)"
            >
              <FSCard v-if="isToday" color="primary" padding="0 4px" variant="full">{{ date.getDate() }}</FSCard>
              <template v-else>{{ date.getDate() }}</template>
            </FSCard>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    `
  })
}