<template>
    <FSCard color="primary">
        lat lng
        <FSText>
            {{ $props.lat }}, {{ $props.lng }}
        </FSText>
    </FSCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

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