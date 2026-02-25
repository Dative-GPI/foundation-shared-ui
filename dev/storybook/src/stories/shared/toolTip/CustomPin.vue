<template>
    <FSCard
        color="primary"
        padding = "12px"   
    >
        <FSRow
            align="bottom-center"
        >
            <FSIcon
                icon="mdi-map-marker"
            />
            <FSText
                font="text-overline"
            >
                lat : {{ $props.lat }}
            </FSText>
            <FSText
                font="text-overline"
            >
                lng : {{ $props.lng }}
            </FSText>
        <FSButton
            label="Open in Google Maps"
            @click.stop="onClickButton"
        />
        </FSRow>
    </FSCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';

export default defineComponent({
    name: "CustomPin",
    components: {
        FSRow,
        FSText,
        FSCard,
        FSIcon,
        FSButton
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
    },
    setup(props) {
        const onClickButton = () => {
            //:href="`https://www.google.com/maps/search/?api=1&query=${$props.lat},${$props.lng}`"
            window.open(`https://www.google.com/maps/search/?api=1&query=${props.lat},${props.lng}`, '_blank');
        };
        return {
            onClickButton
        };
    }
});

</script>