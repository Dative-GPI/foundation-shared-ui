import { useDateExpression } from "@dative-gpi/foundation-shared-services/composables";
import { FilterType, PropertyDataType } from "@dative-gpi/foundation-shared-domain/enums";

import { type CustomPropertyInfos } from "@dative-gpi/foundation-core-domain/models";

const { convert: convertExpressionToEpoch } = useDateExpression();

export const getColor = (property: CustomPropertyInfos, value: string): string | undefined => {
    if (!property.colorful) {
        return undefined;
    }

    for (const color of [...property.colorMap].sort((a, b) => b.priority - a.priority)) {
        let filterValues = [...color.filterValues];
        if ([PropertyDataType.DateTime].includes(property.dataType)) {
            filterValues = filterValues.map(fv => convertExpressionToEpoch(fv).toString());
        }
        switch (color.filterType) {
            case FilterType.None: return color.color;
            case FilterType.Equal: {
                if (filterValues.includes(value)) {
                    return color.color;
                }
                break;
            }
            case FilterType.More: {
                if (!isNaN(parseFloat(value))) {
                    if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) < parseFloat(value))) {
                        return color.color;
                    }
                }
                break;
            }
            case FilterType.Less: {
                if (!isNaN(parseFloat(value))) {
                    if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) > parseFloat(value))) {
                        return color.color;
                    }
                }
                break;
            }
            case FilterType.MoreOrEqual: {
                if (!isNaN(parseFloat(value))) {
                    if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) <= parseFloat(value))) {
                        return color.color;
                    }
                }
                break;
            }
            case FilterType.LessOrEqual: {
                if (!isNaN(parseFloat(value))) {
                    if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) >= parseFloat(value))) {
                        return color.color;
                    }
                }
                break;
            }
            case FilterType.Different: {
                if (!filterValues.includes(value)) {
                    return color.color;
                }
                break;
            }
            case FilterType.Contains: {
                if (filterValues.some(fv => value.includes(fv))) {
                    return color.color;
                }
                break;
            }
            case FilterType.StartsWith: {
                if (filterValues.some(fv => value.startsWith(fv))) {
                    return color.color;
                }
                break;
            }
            case FilterType.EndsWith: {
                if (filterValues.some(fv => value.endsWith(fv))) {
                    return color.color;
                }
                break;
            }
        }
    }
}
