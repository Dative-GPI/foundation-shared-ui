import { UnitFamily, EnergyUnit, PowerUnit, VolumeUnit, GasVolumeUnit,WaterFlowUnit,GasFlowUnit,PressureUnit, TemperatureUnit, SpeedUnit,DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit } from "@dative-gpi/foundation-shared-domain/enums";
import type { UnitDefinition } from "./unitDetails";

export const unitRegistry: Record<string, UnitDefinition> = {
  // ===== ÉNERGIE - Toutes les unités dans UnitFamily.Energy =====
  [EnergyUnit.Joule]: {
    symbol: EnergyUnit.Joule,
    family: UnitFamily.Energy,
    toPivot: 1, // Joule est le pivot
    usesSIPrefixes: true, // kJ, MJ, GJ auto-générés
  },
  
  [EnergyUnit.Wattheure]: {
    symbol: EnergyUnit.Wattheure,
    family: UnitFamily.Energy,
    toPivot: 3600, // 1 Wh = 3600 J
    usesSIPrefixes: true, // kWh, MWh, GWh auto-générés
  },
  
  [EnergyUnit.Calorie]: {
    symbol: EnergyUnit.Calorie,
    family: UnitFamily.Energy,
    toPivot: 4.184, // 1 cal = 4.184 J
    usesSIPrefixes: true, // kcal auto-généré
  },

  // ===== PUISSANCE =====
  [PowerUnit.Watt]: {
    symbol: PowerUnit.Watt,
    family: UnitFamily.Power,
    toPivot: 1,
    usesSIPrefixes: true, // kW, MW, GW auto-générés
  },

  // ===== VOLUME =====
  [VolumeUnit.Liter]: {
    symbol: VolumeUnit.Liter,
    family: UnitFamily.Volume,
    toPivot: 1,
    usesSIPrefixes: true, // mL auto-généré
    specialConversions: [
      { toUnit: VolumeUnit.CubicMeter, threshold: 1000 } // >= 1000L passe en m³
    ]
  },
  
  [VolumeUnit.CubicMeter]: {
    symbol: VolumeUnit.CubicMeter,
    family: UnitFamily.Volume,
    toPivot: 1000, // 1 m³ = 1000 L
    usesSIPrefixes: true, // mm³, cm³, dm³, dam³
  },

  // ===== VOLUME GAZ =====
  [GasVolumeUnit.NormalCubicMeter]: {
    symbol: GasVolumeUnit.NormalCubicMeter,
    family: UnitFamily.GasVolume,
    toPivot: 1,
    usesSIPrefixes: true, // kNm³, MNm³, GNm³
  },

  // ===== DÉBIT D'EAU =====
  [WaterFlowUnit.LiterPerSecond]: {
    symbol: WaterFlowUnit.LiterPerSecond,
    family: UnitFamily.WaterFlow,
    toPivot: 1,
    usesSIPrefixes: true, // mL/s auto-généré
    specialConversions: [
      { toUnit: WaterFlowUnit.CubicMeterPerHour, threshold: 100 } // >= 100 L/s passe en m³/h
    ]
  },
  
  [WaterFlowUnit.CubicMeterPerSecond]: {
    symbol: WaterFlowUnit.CubicMeterPerSecond,
    family: UnitFamily.WaterFlow,
    toPivot: 1000,
    usesSIPrefixes: false,
  },
  
  [WaterFlowUnit.LiterPerMinute]: {
    symbol: WaterFlowUnit.LiterPerMinute,
    family: UnitFamily.WaterFlow,
    toPivot: 1 / 60,
    usesSIPrefixes: false,
    specialConversions: [
      { toUnit: WaterFlowUnit.LiterPerSecond, threshold: 60 } // >= 60 L/min passe en L/s
    ]
  },
  
  [WaterFlowUnit.CubicMeterPerHour]: {
    symbol: WaterFlowUnit.CubicMeterPerHour,
    family: UnitFamily.WaterFlow,
    toPivot: 1000 / 3600,
    usesSIPrefixes: false,
  },

  // ===== DÉBIT DE GAZ =====
  [GasFlowUnit.NormalCubicMeterPerHour]: {
    symbol: GasFlowUnit.NormalCubicMeterPerHour,
    family: UnitFamily.GasFlow,
    toPivot: 1,
    usesSIPrefixes: true, // kNm³/h, MNm³/h
  },

  // ===== PRESSION =====
  [PressureUnit.Pascal]: {
    symbol: PressureUnit.Pascal,
    family: UnitFamily.Pressure,
    toPivot: 1,
    usesSIPrefixes: true, // kPa, MPa, GPa
  },
  
  [PressureUnit.Bar]: {
    symbol: PressureUnit.Bar,
    family: UnitFamily.Pressure,
    toPivot: 100_000,
    usesSIPrefixes: true, // mbar auto-généré
  },

  // ===== TEMPÉRATURE (pas de SI prefixes) =====
  [TemperatureUnit.Celsius]: {
    symbol: TemperatureUnit.Celsius,
    family: UnitFamily.Temperature,
    toPivot: 1,
    usesSIPrefixes: false,
  },
  
  [TemperatureUnit.Kelvin]: {
    symbol: TemperatureUnit.Kelvin,
    family: UnitFamily.Temperature,
    toPivot: 1,
    usesSIPrefixes: false,
  },
  
  [TemperatureUnit.Fahrenheit]: {
    symbol: TemperatureUnit.Fahrenheit,
    family: UnitFamily.Temperature,
    toPivot: 1,
    usesSIPrefixes: false,
  },

  // ===== VITESSE =====
  [SpeedUnit.MeterPerSecond]: {
    symbol: SpeedUnit.MeterPerSecond,
    family: UnitFamily.Speed,
    toPivot: 1,
    usesSIPrefixes: false,
    specialConversions: [
      { toUnit: SpeedUnit.KilometerPerHour, threshold: 1 } // Toujours préférer km/h
    ]
  },
  
  [SpeedUnit.KilometerPerHour]: {
    symbol: SpeedUnit.KilometerPerHour,
    family: UnitFamily.Speed,
    toPivot: 1 / 3.6,
    usesSIPrefixes: false,
  },
  
  [SpeedUnit.Knot]: {
    symbol: SpeedUnit.Knot,
    family: UnitFamily.Speed,
    toPivot: 0.514444,
    usesSIPrefixes: false,
  },

  // ===== DISTANCE =====
  [DistanceUnit.Meter]: {
    symbol: DistanceUnit.Meter,
    family: UnitFamily.Distance,
    toPivot: 1,
    usesSIPrefixes: true, // mm, cm, km auto-générés
  },

  // ===== MASSE =====
  [MassUnit.Gram]: {
    symbol: MassUnit.Gram,
    family: UnitFamily.Mass,
    toPivot: 1,
    usesSIPrefixes: true, // mg, kg auto-générés
  },
  
  [MassUnit.Tonne]: {
    symbol: MassUnit.Tonne,
    family: UnitFamily.Mass,
    toPivot: 1_000_000,
    usesSIPrefixes: true, // kt auto-généré
  },

  // ===== DÉBIT MASSIQUE =====
  [MassFlowUnit.GramPerSecond]: {
    symbol: MassFlowUnit.GramPerSecond,
    family: UnitFamily.MassFlow,
    toPivot: 1,
    usesSIPrefixes: true, // kg/s auto-généré
    specialConversions: [
      { toUnit: MassFlowUnit.TonnePerHour, threshold: 100_000 } // >= 100 kg/s passe en t/h
    ]
  },
  
  [MassFlowUnit.TonnePerSecond]: {
    symbol: MassFlowUnit.TonnePerSecond,
    family: UnitFamily.MassFlow,
    toPivot: 1_000_000,
    usesSIPrefixes: false,
  },
  
  [MassFlowUnit.KilogramPerHour]: {
    symbol: MassFlowUnit.KilogramPerHour,
    family: UnitFamily.MassFlow,
    toPivot: 1000 / 3600,
    usesSIPrefixes: false,
  },
  
  [MassFlowUnit.TonnePerHour]: {
    symbol: MassFlowUnit.TonnePerHour,
    family: UnitFamily.MassFlow,
    toPivot: 1_000_000 / 3600,
    usesSIPrefixes: false,
  },

  // ===== FRÉQUENCE =====
  [FrequencyUnit.Hertz]: {
    symbol: FrequencyUnit.Hertz,
    family: UnitFamily.Frequency,
    toPivot: 1,
    usesSIPrefixes: true, // kHz, MHz, GHz
  },
  
  [FrequencyUnit.RevolutionsPerMinute]: {
    symbol: FrequencyUnit.RevolutionsPerMinute,
    family: UnitFamily.Frequency,
    toPivot: 1 / 60,
    usesSIPrefixes: false,
  },

  // ===== ÉLECTRICITÉ =====
  [VoltageUnit.Volt]: {
    symbol: VoltageUnit.Volt,
    family: UnitFamily.Voltage,
    toPivot: 1,
    usesSIPrefixes: true, // mV, kV, MV
  },
  
  [CurrentUnit.Ampere]: {
    symbol: CurrentUnit.Ampere,
    family: UnitFamily.Current,
    toPivot: 1,
    usesSIPrefixes: true, // mA, kA
  },
  
  [ResistanceUnit.Ohm]: {
    symbol: ResistanceUnit.Ohm,
    family: UnitFamily.Resistance,
    toPivot: 1,
    usesSIPrefixes: true, // mΩ, kΩ, MΩ
  },

  // ===== UNITÉS SANS SI PREFIXES =====
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
    toPivot: 1,
    usesSIPrefixes: false,
  },
  
  [CapacityUnit.PersonPerHour]: {
    symbol: CapacityUnit.PersonPerHour,
    family: UnitFamily.Capacity,
    toPivot: 1,
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