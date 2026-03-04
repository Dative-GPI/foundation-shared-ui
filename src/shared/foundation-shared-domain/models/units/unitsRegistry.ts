import { UnitFamily, EnergyUnit, PowerUnit, VolumeUnit, GasVolumeUnit, WaterFlowUnit, GasFlowUnit, PressureUnit, TemperatureUnit, SpeedUnit, DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit, AreaUnit } from "@dative-gpi/foundation-shared-domain/enums";
import type { UnitDefinition } from "./unitDetails";

export const unitRegistry: Record<string, UnitDefinition> = {
  // =========================
  // ÉNERGIE (pivot: J)
  // =========================
  [EnergyUnit.Joule]: {
    symbol: EnergyUnit.Joule,
    family: UnitFamily.Energy,
    toPivot: 1, 
    usesSIPrefixes: true, // kJ, MJ, ...
  },

  [EnergyUnit.Wattheure]: {
    symbol: EnergyUnit.Wattheure,
    family: UnitFamily.Energy,
    toPivot: 3600, // 1 Wh = 3600 J
    usesSIPrefixes: true, // kWh, MWh, ...
  },

  [EnergyUnit.Calorie]: {
    symbol: EnergyUnit.Calorie,
    family: UnitFamily.Energy,
    toPivot: 4.184, // 1 cal(th) = 4.184 J
    usesSIPrefixes: true, // kcal, ...
  },

  // =========================
  // PUISSANCE (pivot: W)
  // =========================
  [PowerUnit.Watt]: {
    symbol: PowerUnit.Watt,
    family: UnitFamily.Power,
    toPivot: 1,
    usesSIPrefixes: true, // kW, MW...
  },

  // =========================
  // VOLUME (pivot: L)
  // =========================
  [VolumeUnit.Liter]: {
    symbol: VolumeUnit.Liter,
    family: UnitFamily.Volume,
    toPivot: 1,
    usesSIPrefixes: true,
    specialConversions: [
      { toUnit: VolumeUnit.CubicMeter, threshold: 1000 },
    ],
  },

  [VolumeUnit.CubicMeter]: {
    symbol: VolumeUnit.CubicMeter,
    family: UnitFamily.Volume,
    toPivot: 1000,
    usesSIPrefixes: true,
    supportsExponents: true,
    // NOTE: si tu veux "0.001 m³ -> 1 L", ça nécessite une règle "< 1"
    // (non supportée par specialConversions aujourd’hui) ou un traitement dans selectBestUnit.
  },

  // =========================
  // VOLUME GAZ (pivot: Nm³)
  // =========================
  [GasVolumeUnit.NormalCubicMeter]: {
    symbol: GasVolumeUnit.NormalCubicMeter,
    family: UnitFamily.GasVolume,
    toPivot: 1,
    usesSIPrefixes: true,
    supportsExponents: true,
  },

  [AreaUnit.SquareMeter]: {
    symbol: AreaUnit.SquareMeter,
    family: UnitFamily.Area, // Nouvelle famille
    toPivot: 1,
    usesSIPrefixes: true,
    supportsExponents: true,
  },

  // =========================
  // DÉBIT D’EAU (pivot: L/s)
  // =========================
  [WaterFlowUnit.LiterPerSecond]: {
    symbol: WaterFlowUnit.LiterPerSecond,
    family: UnitFamily.WaterFlow,
    toPivot: 1,
    usesSIPrefixes: true,
    specialConversions: [
      { toUnit: WaterFlowUnit.CubicMeterPerHour, threshold: 100 },
    ],
  },

  [WaterFlowUnit.LiterPerMinute]: {
    symbol: WaterFlowUnit.LiterPerMinute,
    family: UnitFamily.WaterFlow,
    toPivot: 1 / 60, // 1 L/min = 1/60 L/s
    usesSIPrefixes: false,
    specialConversions: [
      // >= 60 L/min -> 1 L/s (puis éventuellement m³/h)
      { toUnit: WaterFlowUnit.LiterPerSecond, threshold: 60 },
    ],
  },

  [WaterFlowUnit.CubicMeterPerHour]: {
    symbol: WaterFlowUnit.CubicMeterPerHour,
    family: UnitFamily.WaterFlow,
    toPivot: 1000 / 3600, // 1 m³/h = 1000 L / 3600 s
    usesSIPrefixes: false,
    supportsExponents: true,
  },

  [WaterFlowUnit.CubicMeterPerSecond]: {
    symbol: WaterFlowUnit.CubicMeterPerSecond,
    family: UnitFamily.WaterFlow,
    toPivot: 1000, // 1 m³/s = 1000 L/s
    usesSIPrefixes: false,
    supportsExponents: true,
  },

  // =========================
  // DÉBIT GAZ (pivot: Nm³/h)
  // =========================
  [GasFlowUnit.NormalCubicMeterPerHour]: {
    symbol: GasFlowUnit.NormalCubicMeterPerHour,
    family: UnitFamily.GasFlow,
    toPivot: 1, 
    usesSIPrefixes: true,
    supportsExponents: true,
  },

  // =========================
  // PRESSION (pivot: Pa)
  // =========================
  [PressureUnit.Pascal]: {
    symbol: PressureUnit.Pascal,
    family: UnitFamily.Pressure,
    toPivot: 1, 
    usesSIPrefixes: true, // kPa, MPa...
    specialConversions: [
      // Affichage métier fréquent: 100000 Pa = 1 bar
      { toUnit: PressureUnit.Bar, threshold: 100_000 },
    ],
  },

  [PressureUnit.Bar]: {
    symbol: PressureUnit.Bar,
    family: UnitFamily.Pressure,
    toPivot: 100_000, // 1 bar = 100000 Pa
    usesSIPrefixes: true,
  },

  // =========================
  // TEMPÉRATURE (custom converter dans unitFamilies)
  // =========================
  [TemperatureUnit.Celsius]: {
    symbol: TemperatureUnit.Celsius,
    family: UnitFamily.Temperature,
    toPivot: 1, // ignoré car customConverter
    usesSIPrefixes: false,
  },
  [TemperatureUnit.Kelvin]: {
    symbol: TemperatureUnit.Kelvin,
    family: UnitFamily.Temperature,
    toPivot: 1, // ignoré
    usesSIPrefixes: false,
  },
  [TemperatureUnit.Fahrenheit]: {
    symbol: TemperatureUnit.Fahrenheit,
    family: UnitFamily.Temperature,
    toPivot: 1, // ignoré
    usesSIPrefixes: false,
  },

  // =========================
  // VITESSE (pivot: m/s)
  // =========================
  [SpeedUnit.MeterPerSecond]: {
    symbol: SpeedUnit.MeterPerSecond,
    family: UnitFamily.Speed,
    toPivot: 1, 
    usesSIPrefixes: false,
    specialConversions: [
      // UX: toujours afficher en km/h
      { toUnit: SpeedUnit.KilometerPerHour, threshold: 0 },
    ],
  },

  [SpeedUnit.KilometerPerHour]: {
    symbol: SpeedUnit.KilometerPerHour,
    family: UnitFamily.Speed,
    toPivot: 1 / 3.6, // 1 km/h = 0.277... m/s
    usesSIPrefixes: false,
  },

  [SpeedUnit.Knot]: {
    symbol: SpeedUnit.Knot,
    family: UnitFamily.Speed,
    toPivot: 0.514444, // 1 kt = 0.514444 m/s
    usesSIPrefixes: false,
  },

  // =========================
  // DISTANCE (pivot: m)
  // =========================
  [DistanceUnit.Meter]: {
    symbol: DistanceUnit.Meter,
    family: UnitFamily.Distance,
    toPivot: 1, 
    usesSIPrefixes: true, // mm, km (pas de cm/dm car pas dans SI_PREFIXES)
    supportsExponents: true,
  },

  // =========================
  // MASSE (pivot: g)
  // =========================
  [MassUnit.Gram]: {
    symbol: MassUnit.Gram,
    family: UnitFamily.Mass,
    toPivot: 1, 
    usesSIPrefixes: true,
    specialConversions: [
      // 1 000 000 g = 1 t (affichage plus "métier" que Mg)
      { toUnit: MassUnit.Tonne, threshold: 1_000_000 },
    ],
  },

  [MassUnit.Tonne]: {
    symbol: MassUnit.Tonne,
    family: UnitFamily.Mass,
    toPivot: 1_000_000, // 1 t = 1 000 000 g
    usesSIPrefixes: false,
  },

  // =========================
  // DÉBIT MASSIQUE (pivot: g/s)
  // =========================
  [MassFlowUnit.GramPerSecond]: {
    symbol: MassFlowUnit.GramPerSecond,
    family: UnitFamily.MassFlow,
    toPivot: 1, 
    usesSIPrefixes: true,
    specialConversions: [
      // 100 000 g/s = 100 kg/s -> bascule t/h (souvent plus lisible)
      { toUnit: MassFlowUnit.TonnePerHour, threshold: 100_000 },
    ],
  },

  [MassFlowUnit.KilogramPerHour]: {
    symbol: MassFlowUnit.KilogramPerHour,
    family: UnitFamily.MassFlow,
    toPivot: 1000 / 3600, // 1 kg/h = 1000 g / 3600 s
    usesSIPrefixes: false,
  },

  [MassFlowUnit.TonnePerHour]: {
    symbol: MassFlowUnit.TonnePerHour,
    family: UnitFamily.MassFlow,
    toPivot: 1_000_000 / 3600, // 1 t/h = 1e6 g / 3600 s
    usesSIPrefixes: false,
  },

  [MassFlowUnit.TonnePerSecond]: {
    symbol: MassFlowUnit.TonnePerSecond,
    family: UnitFamily.MassFlow,
    toPivot: 1_000_000, // 1 t/s = 1e6 g/s
    usesSIPrefixes: false,
  },

  // =========================
  // FRÉQUENCE (pivot: Hz)
  // =========================
  [FrequencyUnit.Hertz]: {
    symbol: FrequencyUnit.Hertz,
    family: UnitFamily.Frequency,
    toPivot: 1, 
    usesSIPrefixes: true,
  },

  [FrequencyUnit.RevolutionsPerMinute]: {
    symbol: FrequencyUnit.RevolutionsPerMinute,
    family: UnitFamily.Frequency,
    toPivot: 1 / 60, // 1 rpm = 1/60 Hz
    usesSIPrefixes: false,
  },

  // =========================
  // ÉLECTRICITÉ
  // =========================
  [VoltageUnit.Volt]: {
    symbol: VoltageUnit.Volt,
    family: UnitFamily.Voltage,
    toPivot: 1,
    usesSIPrefixes: true,
  },

  [CurrentUnit.Ampere]: {
    symbol: CurrentUnit.Ampere,
    family: UnitFamily.Current,
    toPivot: 1,
    usesSIPrefixes: true,
  },

  [ResistanceUnit.Ohm]: {
    symbol: ResistanceUnit.Ohm,
    family: UnitFamily.Resistance,
    toPivot: 1,
    usesSIPrefixes: true,
  },

  // =========================
  // UNITÉS À RISQUE DE "FAUSSE CONVERSION"
  // =========================
  // Ces familles contiennent des unités qui ne sont pas dimensionnellement convertibles entre elles,
  // mais le moteur les traitera comme convertibles si on utilise targetUnit entre elles.
  [PercentageUnit.Percent]: {
    symbol: PercentageUnit.Percent,
    family: UnitFamily.Percentage,
    toPivot: 1,
    usesSIPrefixes: false,
  },

  [PercentageUnit.RelativeHumidity]: {
    symbol: PercentageUnit.RelativeHumidity,
    family: UnitFamily.Percentage,
    toPivot: 1,
    usesSIPrefixes: false,
  },

  [CapacityUnit.Person]: {
    symbol: CapacityUnit.Person,
    family: UnitFamily.Capacity,
    toPivot: Number.NaN,
    usesSIPrefixes: false,
  },

  [CapacityUnit.PersonPerHour]: {
    symbol: CapacityUnit.PersonPerHour,
    family: UnitFamily.Capacity,
    toPivot: Number.NaN,
    usesSIPrefixes: false,
  },

  [SnowProductionUnit.CubicMeterSnowPerHour]: {
    symbol: SnowProductionUnit.CubicMeterSnowPerHour,
    family: UnitFamily.SnowProduction,
    toPivot: 1,
    usesSIPrefixes: false,
  },

  [EfficiencyUnit.KilowattHourPerCubicMeter]: {
    symbol: EfficiencyUnit.KilowattHourPerCubicMeter,
    family: UnitFamily.Efficiency,
    toPivot: 1,
    usesSIPrefixes: false,
  },

  [EfficiencyUnit.KilowattHourPerKilogram]: {
    symbol: EfficiencyUnit.KilowattHourPerKilogram,
    family: UnitFamily.Efficiency,
    toPivot: 1,
    usesSIPrefixes: false,
  },
};
