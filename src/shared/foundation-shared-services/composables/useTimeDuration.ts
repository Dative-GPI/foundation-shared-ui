import { TimeComparisonType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDateExpression } from "@dative-gpi/foundation-shared-services/composables";

const { convert } = useDateExpression();

export const useTimeDuration = () => {
    const getPeriodDuration = (periodStart: string | undefined, periodEnd: string | undefined): number => {
        if (!periodStart || !periodEnd) {
            return 0;
        }

        const startTimestamp = convert(periodStart);
        const endTimestamp = convert(periodEnd);

        if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
            return 0;
        }

        const durationMs = endTimestamp - startTimestamp;
        if (durationMs <= 0) {
            return 0;
        }

        return durationMs;
    };

    const getTimeframeDuration = (timeframe: TimeComparisonType, periodStart: string | null = null, periodEnd: string | null = null): number => {
        switch (timeframe) {
            case TimeComparisonType.SinceReference:
                return getPeriodDuration(periodStart ?? undefined, periodEnd ?? undefined);
            case TimeComparisonType.Daily:
                return 1000 * 60 * 60 * 24;
            case TimeComparisonType.Weekly:
                return 1000 * 60 * 60 * 24 * 7;
            case TimeComparisonType.Monthly:
                return 1000 * 60 * 60 * 24 * 30;
            case TimeComparisonType.Yearly:
                return 1000 * 60 * 60 * 24 * 365;
            default:
                return 0;
        }
    };

    return {
        getPeriodDuration,
        getTimeframeDuration,
    };
}
