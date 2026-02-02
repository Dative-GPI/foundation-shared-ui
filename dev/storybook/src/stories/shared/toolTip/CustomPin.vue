<template>
    <FSCard color="primary">
        lat lng
        <FSText>
            {{ $props.lat }}, {{ $props.lng }}
        </FSText>
    </FSCard>
</template>

<script lang="ts">
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CustomPin",
    components: {
        FSText,
        FSCard
    },
    props: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }
});

</script>