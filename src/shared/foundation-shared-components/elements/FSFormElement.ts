import type { PropType } from "vue";
import { defineCustomElement } from "vue";

export default defineCustomElement({
  name: "FSFormElement",
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "instant">,
      required: false,
      default: "standard"
    }
  }
});