import { TimeComparisonType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDateExpression } from "@dative-gpi/foundation-shared-services/composables";
import { MILLISECONDS_PER_DAY, MILLISECONDS_PER_WEEK, MILLISECONDS_PER_MONTH_APPROX, MILLISECONDS_PER_YEAR_APPROX } from "@dative-gpi/foundation-shared-services/config";

const { convert } = useDateExpression();

export const useTimeDuration = () => {
    /**
     * Computes the duration between two timestamps, in **milliseconds**.
     *
     * Returns `0` if:
     * - `periodStart` or `periodEnd` is missing,
     * - a timestamp cannot be converted to a number,
     * - the end is not strictly after the start.
     *
     * @param periodStart Start timestamp string (usually ISO-8601), or `undefined`.
     * @param periodEnd End timestamp string (usually ISO-8601), or `undefined`.
     * @returns Duration in **milliseconds**, or `0` if invalid.
     */
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

    /**
     * Returns the duration (in **milliseconds**) for a given {@link TimeComparisonType}.
     *
     * - `Daily` / `Weekly`: fixed constants.
     * - `Monthly` / `Yearly`: **approximate** constants (not exact calendar lengths).
     * - `SinceReference`: duration between `periodStart` and `periodEnd` (needed only for this mode).
     * - `None` / `Absolute`: returns `0` (no implied fixed duration).
     *
     * @param timeframe Timeframe mode to convert into a duration.
     * @param periodStart Optional start timestamp string (usually ISO-8601). Used only for `SinceReference`.
     * @param periodEnd Optional end timestamp string (usually ISO-8601). Used only for `SinceReference`.
     * @returns Duration in **milliseconds**.
     */
    const getTimeframeDuration = (timeframe: TimeComparisonType, periodStart: string | null = null, periodEnd: string | null = null): number => {
        switch (timeframe) {
            case TimeComparisonType.SinceReference:
                return getPeriodDuration(periodStart ?? undefined, periodEnd ?? undefined);
            case TimeComparisonType.Daily:
                return MILLISECONDS_PER_DAY;
            case TimeComparisonType.Weekly:
                return MILLISECONDS_PER_WEEK;
            case TimeComparisonType.Monthly:
                return MILLISECONDS_PER_MONTH_APPROX;
            case TimeComparisonType.Yearly:
                return MILLISECONDS_PER_YEAR_APPROX;
            case TimeComparisonType.None:
                // No timeframe selected: no duration.
                return 0;
            case TimeComparisonType.Absolute:
                // Absolute comparisons do not imply a fixed duration.
                return 0;
            default:
                return 0;
        }
    };

    return {
        getPeriodDuration,
        getTimeframeDuration,
    };
}
