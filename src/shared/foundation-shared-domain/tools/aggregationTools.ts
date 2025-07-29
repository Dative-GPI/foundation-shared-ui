import { AggregationType } from '@dative-gpi/foundation-shared-domain/enums';

type ReducerFn = (prev: number, curr: number, index: number, array: number[]) => number;

const reducers: Partial<Record<AggregationType, ReducerFn>> = {
  [AggregationType.Sum]: (a, b) => a + b,
  [AggregationType.First]: (a) => a,
  [AggregationType.Last]: (_, b) => b,
  [AggregationType.Difference]: (a, b) => b - a,
  [AggregationType.Maximum]: (a, b) => Math.max(a, b),
  [AggregationType.Minimum]: (a, b) => Math.min(a, b),
};

const aggregationFactory = (type: AggregationType): ReducerFn => {
  const reducer = reducers[type];
  if (!reducer) {
    throw new Error(`Aggregation "${type}" must be handled explicitly.`);
  }
  return reducer;
}

export const computeAggregation = (type: AggregationType, values: number[]): number => {
  if (!values.length) {
    throw new Error('Cannot aggregate empty array.');
  }

  switch (type) {
    case AggregationType.Mean:
      const sum = values.reduce((a, b) => a + b, 0);
      return sum / values.length;

    case AggregationType.Median:
      const sorted = [...values].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];

    case AggregationType.Cardinal:
      return values.length;

    default:
      return values.reduce(aggregationFactory(type));
  }
}
