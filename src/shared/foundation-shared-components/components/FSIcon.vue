<template>
    <v-icon
        :class="classes"
        v-bind="$attrs"
    >
        <slot />
    </v-icon>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSIcon",
    props: {
        size: {
            type: String as PropType<"s" | "m" | "checkbox">,
            required: false,
            default: "m"
        }
    },
    setup(props) {
        const { size } = toRefs(props);

        const classes = computed((): string[] => ["fs-icon", `fs-icon-${size.value}`]);

        return {
            classes
        };
    }
});
</script>