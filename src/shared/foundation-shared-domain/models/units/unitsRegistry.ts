import { EnergyUnit, PowerUnit, GasFlowUnit, PressureUnit, TemperatureUnit, SpeedUnit, DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit, VolumeUnit, GasVolumeUnit, WaterFlowUnit } from "@dative-gpi/foundation-shared-domain/enums"
import type { UnitDefinition } from "./unitDetails"

export const unitRegistry: Record<string, UnitDefinition> = {
  // ===== ÉNERGIE =====
  [EnergyUnit.Wh]: {
    symbol: EnergyUnit.Wh,
    precision: 0,
    parent: EnergyUnit.kWh,
  },
  [EnergyUnit.kWh]: {
    symbol: EnergyUnit.kWh,
    precision: 2,
    parent: EnergyUnit.MWh,
  },
  [EnergyUnit.MWh]: {
    symbol: EnergyUnit.MWh,
    precision: 2,
    parent: EnergyUnit.GWh,
  },
  [EnergyUnit.GWh]: {
    symbol: EnergyUnit.GWh,
    precision: 2,
    parent: EnergyUnit.TWh,
  },
  [EnergyUnit.TWh]: {
    symbol: EnergyUnit.TWh,
    precision: 2,
  },

  // ===== PUISSANCE =====
  [PowerUnit.W]: {
    symbol: PowerUnit.W,
    precision: 0,
    parent: PowerUnit.kW,
  },
  [PowerUnit.kW]: {
    symbol: PowerUnit.kW,
    precision: 2,
    parent: PowerUnit.MW,
  },
  [PowerUnit.MW]: {
    symbol: PowerUnit.MW,
    precision: 2,
    parent: PowerUnit.GW,
  },
  [PowerUnit.GW]: {
    symbol: PowerUnit.GW,
    precision: 2,
    parent: PowerUnit.TW,
  },
  [PowerUnit.TW]: {
    symbol: PowerUnit.TW,
    precision: 2,
  },

  // ===== VOLUME (EAU) =====
  [VolumeUnit.mL]: {
    symbol: VolumeUnit.mL,
    precision: 0,
    parent: VolumeUnit.L,
  },
  [VolumeUnit.L]: {
    symbol: VolumeUnit.L,
    precision: 1,
    parent: VolumeUnit.m3,
  },
  [VolumeUnit.m3]: {
    symbol: VolumeUnit.m3,
    precision: 2,
    parent: VolumeUnit.dam3,
  },
  [VolumeUnit.dam3]: {
    symbol: VolumeUnit.dam3,
    precision: 2,
  },

  // ===== VOLUME (GAZ) =====
  [GasVolumeUnit.Nm3]: {
    symbol: GasVolumeUnit.Nm3,
    precision: 2,
    parent: GasVolumeUnit.kNm3,
  },
  [GasVolumeUnit.kNm3]: {
    symbol: GasVolumeUnit.kNm3,
    precision: 2,
    parent: GasVolumeUnit.MNm3,
  },
  [GasVolumeUnit.MNm3]: {
    symbol: GasVolumeUnit.MNm3,
    precision: 2,
    parent: GasVolumeUnit.GNm3,
  },
  [GasVolumeUnit.GNm3]: {
    symbol: GasVolumeUnit.GNm3,
    precision: 2,
  },

  // ===== DÉBIT D'EAU =====
  [WaterFlowUnit.mL_s]: {
    symbol: WaterFlowUnit.mL_s,
    precision: 0,
    parent: WaterFlowUnit.L_s,
  },
  [WaterFlowUnit.L_s]: {
    symbol: WaterFlowUnit.L_s,
    precision: 2,
    parent: WaterFlowUnit.m3_s,
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
  },
  [WaterFlowUnit.L_min]: {
    symbol: WaterFlowUnit.L_min,
    precision: 1,
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

  // ===== DÉBIT DE GAZ =====
  [GasFlowUnit.Nm3_h]: {
    symbol: GasFlowUnit.Nm3_h,
    precision: 1,
    parent: GasFlowUnit.kNm3_h,
  },
  [GasFlowUnit.kNm3_h]: {
    symbol: GasFlowUnit.kNm3_h,
    precision: 2,
    parent: GasFlowUnit.MNm3_h,
  },
  [GasFlowUnit.MNm3_h]: {
    symbol: GasFlowUnit.MNm3_h,
    precision: 2,
  },

  // ===== PRESSION =====
  [PressureUnit.Pa]: {
    symbol: PressureUnit.Pa,
    precision: 0,
    parent: PressureUnit.kPa,
  },
  [PressureUnit.kPa]: {
    symbol: PressureUnit.kPa,
    precision: 2,
    parent: PressureUnit.MPa,
  },
  [PressureUnit.MPa]: {
    symbol: PressureUnit.MPa,
    precision: 2,
    parent: PressureUnit.GPa,
  },
  [PressureUnit.GPa]: {
    symbol: PressureUnit.GPa,
    precision: 2,
  },
  [PressureUnit.bar]: {
    symbol: PressureUnit.bar,
    precision: 2,
    conversions: [
      {
        targetUnit: PressureUnit.kPa,
        conversionRate: 100,
      },
    ],
  },
  [PressureUnit.mbar]: {
    symbol: PressureUnit.mbar,
    precision: 1,
    conversions: [
      {
        targetUnit: PressureUnit.Pa,
        conversionRate: 100,
        minThreshold: 10,
      },
    ],
  },

  // ===== TEMPÉRATURE =====
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

  // ===== VITESSE =====
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

  // ===== DISTANCE =====
  [DistanceUnit.mm]: {
    symbol: DistanceUnit.mm,
    precision: 0,
    conversions: [
      {
        targetUnit: DistanceUnit.cm,
        conversionRate: 0.1,
        minThreshold: 10,
      },
    ],
  },
  [DistanceUnit.cm]: {
    symbol: DistanceUnit.cm,
    precision: 1,
    conversions: [
      {
        targetUnit: DistanceUnit.m,
        conversionRate: 0.01,
        minThreshold: 100,
      },
    ],
  },
  [DistanceUnit.m]: {
    symbol: DistanceUnit.m,
    precision: 0,
    parent: DistanceUnit.km,
  },
  [DistanceUnit.km]: {
    symbol: DistanceUnit.km,
    precision: 2,
  },

  // ===== MASSE =====
  [MassUnit.mg]: {
    symbol: MassUnit.mg,
    precision: 0,
    parent: MassUnit.g,
  },
  [MassUnit.g]: {
    symbol: MassUnit.g,
    precision: 0,
    parent: MassUnit.kg,
  },
  [MassUnit.kg]: {
    symbol: MassUnit.kg,
    precision: 2,
    parent: MassUnit.t,
  },
  [MassUnit.t]: {
    symbol: MassUnit.t,
    precision: 2,
    parent: MassUnit.kt,
  },
  [MassUnit.kt]: {
    symbol: MassUnit.kt,
    precision: 2,
  },

  // ===== DÉBIT MASSIQUE =====
  [MassFlowUnit.g_s]: {
    symbol: MassFlowUnit.g_s,
    precision: 1,
    parent: MassFlowUnit.kg_s,
  },
  [MassFlowUnit.kg_s]: {
    symbol: MassFlowUnit.kg_s,
    precision: 2,
    parent: MassFlowUnit.t_s,
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
  },
  [MassFlowUnit.kg_h]: {
    symbol: MassFlowUnit.kg_h,
    precision: 1,
  },
  [MassFlowUnit.t_h]: {
    symbol: MassFlowUnit.t_h,
    precision: 1,
  },

  // ===== FRÉQUENCE =====
  [FrequencyUnit.Hz]: {
    symbol: FrequencyUnit.Hz,
    precision: 1,
    parent: FrequencyUnit.kHz,
  },
  [FrequencyUnit.kHz]: {
    symbol: FrequencyUnit.kHz,
    precision: 2,
    parent: FrequencyUnit.MHz,
  },
  [FrequencyUnit.MHz]: {
    symbol: FrequencyUnit.MHz,
    precision: 2,
    parent: FrequencyUnit.GHz,
  },
  [FrequencyUnit.GHz]: {
    symbol: FrequencyUnit.GHz,
    precision: 2,
  },
  [FrequencyUnit.rpm]: {
    symbol: FrequencyUnit.rpm,
    precision: 0,
  },

  // ===== TENSION =====
  [VoltageUnit.mV]: {
    symbol: VoltageUnit.mV,
    precision: 0,
    parent: VoltageUnit.V,
  },
  [VoltageUnit.V]: {
    symbol: VoltageUnit.V,
    precision: 1,
    parent: VoltageUnit.kV,
  },
  [VoltageUnit.kV]: {
    symbol: VoltageUnit.kV,
    precision: 2,
    parent: VoltageUnit.MV,
  },
  [VoltageUnit.MV]: {
    symbol: VoltageUnit.MV,
    precision: 2,
  },

  // ===== COURANT =====
  [CurrentUnit.mA]: {
    symbol: CurrentUnit.mA,
    precision: 1,
    parent: CurrentUnit.A,
  },
  [CurrentUnit.A]: {
    symbol: CurrentUnit.A,
    precision: 2,
    parent: CurrentUnit.kA,
  },
  [CurrentUnit.kA]: {
    symbol: CurrentUnit.kA,
    precision: 2,
  },

  // ===== RÉSISTANCE =====
  [ResistanceUnit.mΩ]: {
    symbol: ResistanceUnit.mΩ,
    precision: 1,
    parent: ResistanceUnit.Ω,
  },
  [ResistanceUnit.Ω]: {
    symbol: ResistanceUnit.Ω,
    precision: 1,
    parent: ResistanceUnit.kΩ,
  },
  [ResistanceUnit.kΩ]: {
    symbol: ResistanceUnit.kΩ,
    precision: 2,
    parent: ResistanceUnit.MΩ,
  },
  [ResistanceUnit.MΩ]: {
    symbol: ResistanceUnit.MΩ,
    precision: 2,
  },

  // ===== POURCENTAGE =====
  [PercentageUnit.Percent]: {
    symbol: PercentageUnit.Percent,
    precision: 1,
  },
  [PercentageUnit.RelativeHumidity]: {
    symbol: PercentageUnit.RelativeHumidity,
    precision: 0,
  },

  // ===== CAPACITÉ =====
  [CapacityUnit.pers]: {
    symbol: CapacityUnit.pers,
    precision: 0,
  },
  [CapacityUnit.pers_h]: {
    symbol: CapacityUnit.pers_h,
    precision: 0,
  },

  // ===== PRODUCTION NEIGE =====
  [SnowProductionUnit.m3_neige_h]: {
    symbol: SnowProductionUnit.m3_neige_h,
    precision: 0,
  },

  // ===== RENDEMENT =====
  [EfficiencyUnit.kWh_m3]: {
    symbol: EfficiencyUnit.kWh_m3,
    precision: 2,
  },
  [EfficiencyUnit.kWh_kg]: {
    symbol: EfficiencyUnit.kWh_kg,
    precision: 2,
  },
};