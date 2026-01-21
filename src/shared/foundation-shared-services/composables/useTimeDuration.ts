import { TimeComparisonType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDateExpression } from "@dative-gpi/foundation-shared-services/composables";
import { MILLISECONDS_PER_DAY, MILLISECONDS_PER_WEEK, MILLISECONDS_PER_MONTH_APPROX, MILLISECONDS_PER_YEAR_APPROX } from "@dative-gpi/foundation-shared-services/config";

export const useTimeDuration = () => {
    /**
     * Computes the duration between two timestamps, in **milliseconds**.
     *
     * Returns `null` if:
     * - `periodStart` or `periodEnd` is missing,
     * - a timestamp cannot be converted to a number,
     * - the end is equal to or before the start.
     *
     * @param periodStart Date fixe (ISO-8601) ou expression relative (ex: 'now-1h', 'now/d'), ou `undefined`.
     * @param periodEnd Date fixe (ISO-8601) ou expression relative (ex: 'now', 'now-1d/d'), ou `undefined`.
     * @returns Durée en millisecondes, ou `0` si l'expression est invalide ou si la fin est avant le début.
     */
    const getPeriodDuration = (periodStart: string | undefined, periodEnd: string | undefined): number | null => {
        if (!periodStart || !periodEnd) {
            return null;
        }
        const { convert } = useDateExpression();

        const startTimestamp = convert(periodStart);
        const endTimestamp = convert(periodEnd);

        if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
            return null;
        }

        const durationMs = endTimestamp - startTimestamp;
        return durationMs > 0 ? durationMs : null;
    };

    /**
     * Returns the duration (in **milliseconds**) for a given {@link TimeComparisonType}.
     *
     * - `Daily` / `Weekly`: fixed constants.
     * - `Monthly` / `Yearly`: **approximate** constants (not exact calendar lengths).
     * - `SinceReference`: duration between `periodStart` and `periodEnd` (needed only for this mode).
     * - `None` / `Absolute`: returns `null` (no implied fixed duration).
     *
     * @param timeframe Timeframe mode to convert into a duration.
     * @param periodStart Optional start timestamp string (usually ISO-8601). Used only for `SinceReference`.
     * @param periodEnd Optional end timestamp string (usually ISO-8601). Used only for `SinceReference`.
     * @returns Duration in **milliseconds**.
     */
    const getTimeframeDuration = (timeframe: TimeComparisonType, periodStart: string | null = null, periodEnd: string | null = null): number | null => {
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
                return null;
            case TimeComparisonType.Absolute:
                // Absolute comparisons do not imply a fixed duration.
                return null;
            default:
                return null;
        }
    };

    return {
        getPeriodDuration,
        getTimeframeDuration,
    };
}
