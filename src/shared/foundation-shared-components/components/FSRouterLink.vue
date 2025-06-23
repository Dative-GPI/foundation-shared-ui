<template>
  <component
    :is="wrapperComponent"
    :to="to"
    :href="href"
    :type="wrapperComponent === 'button' ? type : undefined"
    v-bind="attrs"
    @click="onClick"
    @auxclick="onAuxClick"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData }"
      />
    </template>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import { RouterLink, type RouteLocation } from "vue-router";
import { useRouting } from "@dative-gpi/foundation-shared-services/composables";

export default defineComponent({
  name: "FSRouterLink",
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
  setup(props, { attrs, slots }) {
    const { handleRoutingEvent } = useRouting();

    const actualPassive = computed(() => {
      if (props.passive !== null) {return props.passive;}
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
        return RouterLink;
      }
      return props.defaultWrapper;
    });

    const onClick = (event: MouseEvent) => {
      if (props.to) {
        handleRoutingEvent(event, props.to);
      }
    };

    const onAuxClick = (event: MouseEvent) => {
      if (props.to) {
        handleRoutingEvent(event, props.to);
      }
    };

    return {
      wrapperComponent,
      attrs,
      slots,
      onClick,
      onAuxClick
    };
  }
});
</script>
