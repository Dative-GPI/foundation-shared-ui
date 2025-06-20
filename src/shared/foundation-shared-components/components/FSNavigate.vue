<template>
  <component
    :is="wrapperComponent"
    :to="$props.to"
    :href="$props.href"
    :type="wrapperComponent === 'button' ? $props.type : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import { type RouteLocation } from "vue-router";

import FSRouterLink from "./FSRouterLink.vue";

export default defineComponent({
  name: "FSNavigate",
  components: {
  },
  props: {
    to: {
      type: Object as PropType<RouteLocation | null>,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      default: null
    },
    passive: {
      type: Boolean as PropType<boolean | null>,
      default: null
    },
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button"
    },
    defaultWrapper: {
      type: String as PropType<"div" | "a" | "button">,
      default: "button"
    },
    passiveWrapper: {
      type: String as PropType<"div" | "a" | "button">,
      default: "div"
    }
  },
  setup(props, { attrs }) {    
    const actualPassive = computed(() => {
      if (props.passive !== null) {
        return props.passive;
      }
      return !props.to && !props.href && !attrs.onClick;
    });

    const wrapperComponent = computed(() => {
      if (actualPassive.value) {
        return props.passiveWrapper;
      }
      if (props.href) {
        return "a";
      }
      if (props.to) {
        return FSRouterLink;
      }
      return props.defaultWrapper;
    });

    
    return {
      wrapperComponent,
      FSRouterLink
    };
  }
});
</script>