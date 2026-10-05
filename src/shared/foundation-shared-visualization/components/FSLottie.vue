<template>
  <FSLottieUI
    :source="source"
    @error="$emit('error')"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { FILE_URL } from "@dative-gpi/foundation-shared-services/config/urls";
import { useAppAuthToken } from "@dative-gpi/foundation-shared-services/composables";

import FSLottieUI from "./FSLottieUI.vue";

export default defineComponent({
  name: "FSLottie",
  components: {
    FSLottieUI
  },
  props: {
    fileId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["error"],
  setup(props) {
    const { authToken } = useAppAuthToken();

    const source = computed((): string | null => {
      return props.fileId ? FILE_URL(props.fileId, authToken.value) : null;
    });

    return {
      source
    };
  }
});
</script>
