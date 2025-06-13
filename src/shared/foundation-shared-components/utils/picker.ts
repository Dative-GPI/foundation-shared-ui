export enum TimePrecision {
  Hours = 1,
  Days = 2,
  Months = 3
}

/**
 *  Compute ticks for a time range based on the specified precision.
 */
export const computeTicks = ({ start, end, tickCount, precision }: { start: number, end: number, tickCount: number, precision: TimePrecision }): number[] => {
  const ticks: number[] = [];
  const range = end - start;

  if (precision === TimePrecision.Hours) {
    // Tick toutes les X heures, aligné sur l'heure pleine
    const step = Math.ceil(range / tickCount / 3600000) * 3600000;
    const alignedStart = Math.ceil(start / 3600000) * 3600000;
    for (let i = 0; i < tickCount; i++) {
      const tick = alignedStart + i * step;
      if (tick < end) { ticks.push(tick); }
    }
  } else if (precision === TimePrecision.Days) {
    // Tick tous les X jours, aligné sur minuit
    const step = Math.ceil(range / tickCount / 86400000) * 86400000;
    const date = new Date(start);
    date.setHours(0, 0, 0, 0);
    const alignedStart = date.getTime() + (date.getTime() < start ? step : 0);
    for (let i = 0; i < tickCount; i++) {
      const tick = alignedStart + i * step;
      if (tick < end) { ticks.push(tick); }
    }
  } else {
    // Tick tous les X mois (approximation linéaire)
    const interval = range / tickCount;
    for (let i = 0; i < tickCount; i++) {
      ticks.push(start + i * interval);
    }
  }
  return ticks;
}