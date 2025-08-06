import { computeAggregation } from '../../src/shared/foundation-shared-domain/tools';
import { AggregationType } from '@dative-gpi/foundation-shared-domain/enums';

describe('computeAggregation', () => {
  it('computes Sum', () => {
    expect(computeAggregation(AggregationType.Sum, [1, 2, 3])).toBe(6);
    expect(computeAggregation(AggregationType.Sum, [10, -5, 2])).toBe(7);
  });

  it('computes Cardinal', () => {
    expect(computeAggregation(AggregationType.Cardinal, [5, 6, 7, 8])).toBe(4);
    expect(computeAggregation(AggregationType.Cardinal, [19])).toBe(1);
  });

  it('computes Mean', () => {
    expect(computeAggregation(AggregationType.Mean, [2, 4, 6])).toBe(4);
    expect(computeAggregation(AggregationType.Mean, [10, 20])).toBe(15);
  });

  it('computes Median', () => {
    expect(computeAggregation(AggregationType.Median, [1, 3, 2])).toBe(2);
    expect(computeAggregation(AggregationType.Median, [4, 2, 1, 3])).toBe(2.5);
  });

  it('computes First', () => {
    expect(computeAggregation(AggregationType.First, [5, 10, 15])).toBe(5);
    expect(computeAggregation(AggregationType.First, [42])).toBe(42);
  });

  it('computes Last', () => {
    expect(computeAggregation(AggregationType.Last, [5, 10, 15])).toBe(15);
    expect(computeAggregation(AggregationType.Last, [42])).toBe(42);
  });

  it('computes Difference', () => {
    expect(computeAggregation(AggregationType.Difference, [3, 8])).toBe(5);
    expect(computeAggregation(AggregationType.Difference, [100, 40])).toBe(-60);
  });

  it('computes Maximum', () => {
    expect(computeAggregation(AggregationType.Maximum, [1, 99, 50])).toBe(99);
    expect(computeAggregation(AggregationType.Maximum, [-10, -5, -1])).toBe(-1);
  });

  it('computes Minimum', () => {
    expect(computeAggregation(AggregationType.Minimum, [3, 1, 2])).toBe(1);
    expect(computeAggregation(AggregationType.Minimum, [-5, -10, 0])).toBe(-10);
  });

  it('throws on empty array', () => {
    expect(() => computeAggregation(AggregationType.Sum, [])).toThrow('Cannot aggregate empty array.');
    expect(() => computeAggregation(AggregationType.Median, [])).toThrow('Cannot aggregate empty array.');
  });

  it('throws on unknown aggregation', () => {
    const fakeAggregation = 'FAKE' as unknown as AggregationType;
    expect(() => computeAggregation(fakeAggregation, [1, 2, 3])).toThrow(/must be handled explicitly/i);
  });
});
