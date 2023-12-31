<template>
    <FSRow
        class="fs-tag"
        width="hug"
        align="center-left"
        :style="style"
        v-bind="$attrs"
    >
        <slot name="default" v-bind="{ color, colors }">
            <FSSpan class="fs-tag-label">
                {{ $props.label }}
            </FSSpan>
        </slot>
        <slot name="button" v-bind="{ color, colors }">
            <v-btn
                v-if="$props.editable"
                class="fs-tag-button"
                :ripple="false"
                @click="$emit('remove')"
            >
                <FSIcon size="s">
                    mdi-close
                </FSIcon>
            </v-btn>
        </slot>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTag",
    components: {
        FSIcon,
        FSSpan,
        FSRow
    },
    props: {
        label: {
            type: String,
            required: true
        },
        variant: {
            type: String as PropType<"standard" | "full">,
            required: false,
            default: "full"
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["remove"],
    setup(props) {
        const { variant, color } = toRefs(props);

        const textColors = useColors().getContrasts(color.value);
        const colors = useColors().getColors(color.value);

        const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
            switch (variant.value) {
                case "standard": return {
                    "--fs-tag-background-color": colors.light,
                    "--fs-tag-color": textColors.base,
                    "--fs-tag-hover-background-color": colors.base,
                    "--fs-tag-hover-color": textColors.light,
                    "--fs-tag-active-background-color": colors.dark,
                    "--fs-tag-active-color": textColors.light
                };
                case "full": return {
                    "--fs-tag-background-color": colors.base,
                    "--fs-tag-color": textColors.light,
                    "--fs-tag-hover-background-color": colors.base,
                    "--fs-tag-hover-color": textColors.light,
                    "--fs-tag-active-background-color": colors.dark,
                    "--fs-tag-active-color": textColors.light
                };
            }
        });

        return {
            colors,
            color,
            style
        };
    }
});
</script>