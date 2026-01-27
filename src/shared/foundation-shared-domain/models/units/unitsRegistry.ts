import { EnergyUnit, PowerUnit, GasFlowUnit, PressureUnit, TemperatureUnit, SpeedUnit, DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit, VolumeUnit, GasVolumeUnit, WaterFlowUnit, UnitFamily } from "@dative-gpi/foundation-shared-domain/enums"
import type { UnitDefinition } from "./unitDetails"

export const unitRegistry: Record<string, UnitDefinition> = {
  // ===== ÉNERGIE - Pivot: Wh =====
  [EnergyUnit.Wh]: {
    symbol: EnergyUnit.Wh,
    precision: 0,
    family: UnitFamily.Energy,
    factor: 1, // Pivot
  },
  [EnergyUnit.kWh]: {
    symbol: EnergyUnit.kWh,
    precision: 2,
    family: UnitFamily.Energy,
    factor: 1000,
  },
  [EnergyUnit.MWh]: {
    symbol: EnergyUnit.MWh,
    precision: 2,
    family: UnitFamily.Energy,
    factor: 1_000_000,
  },
  [EnergyUnit.GWh]: {
    symbol: EnergyUnit.GWh,
    precision: 2,
    family: UnitFamily.Energy,
    factor: 1_000_000_000,
  },
  [EnergyUnit.TWh]: {
    symbol: EnergyUnit.TWh,
    precision: 2,
    family: UnitFamily.Energy,
    factor: 1_000_000_000_000,
  },

  // ===== PUISSANCE - Pivot: W =====
  [PowerUnit.W]: {
    symbol: PowerUnit.W,
    precision: 0,
    family: UnitFamily.Power,
    factor: 1, // Pivot
  },
  [PowerUnit.kW]: {
    symbol: PowerUnit.kW,
    precision: 2,
    family: UnitFamily.Power,
    factor: 1000,
  },
  [PowerUnit.MW]: {
    symbol: PowerUnit.MW,
    precision: 2,
    family: UnitFamily.Power,
    factor: 1_000_000,
  },
  [PowerUnit.GW]: {
    symbol: PowerUnit.GW,
    precision: 2,
    family: UnitFamily.Power,
    factor: 1_000_000_000,
  },
  [PowerUnit.TW]: {
    symbol: PowerUnit.TW,
    precision: 2,
    family: UnitFamily.Power,
    factor: 1_000_000_000_000,
  },

  // ===== VOLUME (EAU) - Pivot: L =====
  [VolumeUnit.mL]: {
    symbol: VolumeUnit.mL,
    precision: 0,
    family: UnitFamily.Volume,
    factor: 0.001,
  },
  [VolumeUnit.L]: {
    symbol: VolumeUnit.L,
    precision: 1,
    family: UnitFamily.Volume,
    factor: 1, // Pivot
  },
  [VolumeUnit.m3]: {
    symbol: VolumeUnit.m3,
    precision: 2,
    family: UnitFamily.Volume,
    factor: 1000,
  },
  [VolumeUnit.dam3]: {
    symbol: VolumeUnit.dam3,
    precision: 2,
    family: UnitFamily.Volume,
    factor: 1_000_000,
  },

  // ===== VOLUME (GAZ) - Pivot: Nm3 =====
  [GasVolumeUnit.Nm3]: {
    symbol: GasVolumeUnit.Nm3,
    precision: 2,
    family: UnitFamily.GasVolume,
    factor: 1, // Pivot
  },
  [GasVolumeUnit.kNm3]: {
    symbol: GasVolumeUnit.kNm3,
    precision: 2,
    family: UnitFamily.GasVolume,
    factor: 1000,
  },
  [GasVolumeUnit.MNm3]: {
    symbol: GasVolumeUnit.MNm3,
    precision: 2,
    family: UnitFamily.GasVolume,
    factor: 1_000_000,
  },
  [GasVolumeUnit.GNm3]: {
    symbol: GasVolumeUnit.GNm3,
    precision: 2,
    family: UnitFamily.GasVolume,
    factor: 1_000_000_000,
  },

  // ===== DÉBIT D'EAU - Pivot: mL/s =====
  [WaterFlowUnit.mL_s]: {
    symbol: WaterFlowUnit.mL_s,
    precision: 0,
    family: UnitFamily.WaterFlow,
    factor: 1, // Pivot
  },
  [WaterFlowUnit.L_s]: {
    symbol: WaterFlowUnit.L_s,
    precision: 2,
    family: UnitFamily.WaterFlow,
    factor: 1000,
    conversions: [
      {
        targetUnit: WaterFlowUnit.m3_h,
        conversionRate: 3.6,
        minThreshold: 100,
      },
    ],
  },
  [WaterFlowUnit.m3_s]: {
    symbol: WaterFlowUnit.m3_s,
    precision: 3,
    family: UnitFamily.WaterFlow,
    factor: 1_000_000,
  },
  [WaterFlowUnit.L_min]: {
    symbol: WaterFlowUnit.L_min,
    precision: 1,
    family: UnitFamily.WaterFlow,
    factor: 1000 / 60, // 16.666...
    conversions: [
      {
        targetUnit: WaterFlowUnit.L_s,
        conversionRate: 1 / 60,
        minThreshold: 60,
      },
    ],
  },
  [WaterFlowUnit.m3_h]: {
    symbol: WaterFlowUnit.m3_h,
    precision: 1,
  },

  // ===== DÉBIT DE GAZ - Pivot: Nm3/h =====
  [GasFlowUnit.Nm3_h]: {
    symbol: GasFlowUnit.Nm3_h,
    precision: 1,
    family: UnitFamily.GasFlow,
    factor: 1, // Pivot
  },
  [GasFlowUnit.kNm3_h]: {
    symbol: GasFlowUnit.kNm3_h,
    precision: 2,
    family: UnitFamily.GasFlow,
    factor: 1000,
  },
  [GasFlowUnit.MNm3_h]: {
    symbol: GasFlowUnit.MNm3_h,
    precision: 2,
    family: UnitFamily.GasFlow,
    factor: 1_000_000,
  },

  // ===== PRESSION - Pivot: Pa =====
  [PressureUnit.Pa]: {
    symbol: PressureUnit.Pa,
    precision: 0,
    family: UnitFamily.Pressure,
    factor: 1, // Pivot
  },
  [PressureUnit.kPa]: {
    symbol: PressureUnit.kPa,
    precision: 2,
    family: UnitFamily.Pressure,
    factor: 1000,
  },
  [PressureUnit.MPa]: {
    symbol: PressureUnit.MPa,
    precision: 2,
    family: UnitFamily.Pressure,
    factor: 1_000_000,
  },
  [PressureUnit.GPa]: {
    symbol: PressureUnit.GPa,
    precision: 2,
    family: UnitFamily.Pressure,
    factor: 1_000_000_000,
  },
  [PressureUnit.bar]: {
    symbol: PressureUnit.bar,
    precision: 2,
    family: UnitFamily.Pressure,
    factor: 100_000,
  },
  [PressureUnit.mbar]: {
    symbol: PressureUnit.mbar,
    precision: 1,
    family: UnitFamily.Pressure,
    factor: 100,
  },

  // ===== TEMPÉRATURE - Pas de famille (conversions non-linéaires) =====
  [TemperatureUnit.Celsius]: {
    symbol: TemperatureUnit.Celsius,
    precision: 1,
  },
  [TemperatureUnit.Kelvin]: {
    symbol: TemperatureUnit.Kelvin,
    precision: 1,
  },
  [TemperatureUnit.Fahrenheit]: {
    symbol: TemperatureUnit.Fahrenheit,
    precision: 1,
  },

  // ===== VITESSE - Conversions alternatives =====
  [SpeedUnit.m_s]: {
    symbol: SpeedUnit.m_s,
    precision: 2,
    conversions: [
      {
        targetUnit: SpeedUnit.km_h,
        conversionRate: 3.6,
      },
    ],
  },
  [SpeedUnit.km_h]: {
    symbol: SpeedUnit.km_h,
    precision: 1,
  },
  [SpeedUnit.knot]: {
    symbol: SpeedUnit.knot,
    precision: 0,
    conversions: [
      {
        targetUnit: SpeedUnit.km_h,
        conversionRate: 1.852,
      },
    ],
  },

  // ===== DISTANCE - Pivot: m =====
  [DistanceUnit.mm]: {
    symbol: DistanceUnit.mm,
    precision: 0,
    family: UnitFamily.Distance,
    factor: 0.001,
  },
  [DistanceUnit.cm]: {
    symbol: DistanceUnit.cm,
    precision: 1,
    family: UnitFamily.Distance,
    factor: 0.01,
  },
  [DistanceUnit.m]: {
    symbol: DistanceUnit.m,
    precision: 0,
    family: UnitFamily.Distance,
    factor: 1, // Pivot
  },
  [DistanceUnit.km]: {
    symbol: DistanceUnit.km,
    precision: 2,
    family: UnitFamily.Distance,
    factor: 1000,
  },

  // ===== MASSE - Pivot: g =====
  [MassUnit.mg]: {
    symbol: MassUnit.mg,
    precision: 0,
    family: UnitFamily.Mass,
    factor: 0.001,
  },
  [MassUnit.g]: {
    symbol: MassUnit.g,
    precision: 0,
    family: UnitFamily.Mass,
    factor: 1, // Pivot
  },
  [MassUnit.kg]: {
    symbol: MassUnit.kg,
    precision: 2,
    family: UnitFamily.Mass,
    factor: 1000,
  },
  [MassUnit.t]: {
    symbol: MassUnit.t,
    precision: 2,
    family: UnitFamily.Mass,
    factor: 1_000_000,
  },
  [MassUnit.kt]: {
    symbol: MassUnit.kt,
    precision: 2,
    family: UnitFamily.Mass,
    factor: 1_000_000_000,
  },

  // ===== DÉBIT MASSIQUE - Pivot: g/s =====
  [MassFlowUnit.g_s]: {
    symbol: MassFlowUnit.g_s,
    precision: 1,
    family: UnitFamily.MassFlow,
    factor: 1, // Pivot
  },
  [MassFlowUnit.kg_s]: {
    symbol: MassFlowUnit.kg_s,
    precision: 2,
    family: UnitFamily.MassFlow,
    factor: 1000,
    conversions: [
      {
        targetUnit: MassFlowUnit.t_h,
        conversionRate: 3.6,
        minThreshold: 100,
      },
    ],
  },
  [MassFlowUnit.t_s]: {
    symbol: MassFlowUnit.t_s,
    precision: 3,
    family: UnitFamily.MassFlow,
    factor: 1_000_000,
  },
  [MassFlowUnit.kg_h]: {
    symbol: MassFlowUnit.kg_h,
    precision: 1,
    family: UnitFamily.MassFlow,
    factor: 1000 / 3600, // 0.277...
  },
  [MassFlowUnit.t_h]: {
    symbol: MassFlowUnit.t_h,
    precision: 1,
  },

  // ===== FRÉQUENCE - Pivot: Hz =====
  [FrequencyUnit.Hz]: {
    symbol: FrequencyUnit.Hz,
    precision: 1,
    family: UnitFamily.Frequency,
    factor: 1, // Pivot
  },
  [FrequencyUnit.kHz]: {
    symbol: FrequencyUnit.kHz,
    precision: 2,
    family: UnitFamily.Frequency,
    factor: 1000,
  },
  [FrequencyUnit.MHz]: {
    symbol: FrequencyUnit.MHz,
    precision: 2,
    family: UnitFamily.Frequency,
    factor: 1_000_000,
  },
  [FrequencyUnit.GHz]: {
    symbol: FrequencyUnit.GHz,
    precision: 2,
    family: UnitFamily.Frequency,
    factor: 1_000_000_000,
  },
  [FrequencyUnit.rpm]: {
    symbol: FrequencyUnit.rpm,
    precision: 0,
    family: UnitFamily.Frequency,
    factor: 1 / 60, // rpm = Hz / 60
  },

  // ===== TENSION - Pivot: V =====
  [VoltageUnit.mV]: {
    symbol: VoltageUnit.mV,
    precision: 0,
    family: UnitFamily.Voltage,
    factor: 0.001,
  },
  [VoltageUnit.V]: {
    symbol: VoltageUnit.V,
    precision: 1,
    family: UnitFamily.Voltage,
    factor: 1, // Pivot
  },
  [VoltageUnit.kV]: {
    symbol: VoltageUnit.kV,
    precision: 2,
    family: UnitFamily.Voltage,
    factor: 1000,
  },
  [VoltageUnit.MV]: {
    symbol: VoltageUnit.MV,
    precision: 2,
    family: UnitFamily.Voltage,
    factor: 1_000_000,
  },

  // ===== COURANT - Pivot: A =====
  [CurrentUnit.mA]: {
    symbol: CurrentUnit.mA,
    precision: 1,
    family: UnitFamily.Current,
    factor: 0.001,
  },
  [CurrentUnit.A]: {
    symbol: CurrentUnit.A,
    precision: 2,
    family: UnitFamily.Current,
    factor: 1, // Pivot
  },
  [CurrentUnit.kA]: {
    symbol: CurrentUnit.kA,
    precision: 2,
    family: UnitFamily.Current,
    factor: 1000,
  },

  // ===== RÉSISTANCE - Pivot: Ω =====
  [ResistanceUnit.mΩ]: {
    symbol: ResistanceUnit.mΩ,
    precision: 1,
    family: UnitFamily.Resistance,
    factor: 0.001,
  },
  [ResistanceUnit.Ω]: {
    symbol: ResistanceUnit.Ω,
    precision: 1,
    family: UnitFamily.Resistance,
    factor: 1, // Pivot
  },
  [ResistanceUnit.kΩ]: {
    symbol: ResistanceUnit.kΩ,
    precision: 2,
    family: UnitFamily.Resistance,
    factor: 1000,
  },
  [ResistanceUnit.MΩ]: {
    symbol: ResistanceUnit.MΩ,
    precision: 2,
    family: UnitFamily.Resistance,
    factor: 1_000_000,
  },

  // ===== POURCENTAGE - Pas de scaling =====
  [PercentageUnit.Percent]: {
    symbol: PercentageUnit.Percent,
    precision: 1,
  },
  [PercentageUnit.RelativeHumidity]: {
    symbol: PercentageUnit.RelativeHumidity,
    precision: 0,
  },

  // ===== CAPACITÉ - Pas de scaling =====
  [CapacityUnit.pers]: {
    symbol: CapacityUnit.pers,
    precision: 0,
  },
  [CapacityUnit.pers_h]: {
    symbol: CapacityUnit.pers_h,
    precision: 0,
  },

  // ===== PRODUCTION NEIGE - Pas de scaling =====
  [SnowProductionUnit.m3_neige_h]: {
    symbol: SnowProductionUnit.m3_neige_h,
    precision: 0,
  },

  // ===== RENDEMENT - Pas de scaling =====
  [EfficiencyUnit.kWh_m3]: {
    symbol: EfficiencyUnit.kWh_m3,
    precision: 2,
  },
  [EfficiencyUnit.kWh_kg]: {
    symbol: EfficiencyUnit.kWh_kg,
    precision: 2,
  },
};