import { EnergyUnit, PowerUnit, GasFlowUnit, PressureUnit, TemperatureUnit, SpeedUnit, DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit, VolumeUnit, GasVolumeUnit, WaterFlowUnit } from "@dative-gpi/foundation-shared-domain/enums"
import type { UnitDefinition } from "./unitDetails"

export const unitRegistry: Record<string, UnitDefinition> = {
  // ===== ÉNERGIE =====
  [EnergyUnit.Wh]: {
    symbol: "Wh",
    precision: 0,
    parent: EnergyUnit.kWh,
  },
  [EnergyUnit.kWh]: {
    symbol: "kWh",
    precision: 2,
    parent: EnergyUnit.MWh,
  },
  [EnergyUnit.MWh]: {
    symbol: "MWh",
    precision: 2,
    parent: EnergyUnit.GWh,
  },
  [EnergyUnit.GWh]: {
    symbol: "GWh",
    precision: 2,
    parent: EnergyUnit.TWh,
  },
  [EnergyUnit.TWh]: {
    symbol: "TWh",
    precision: 2,
  },

  // ===== PUISSANCE =====
  [PowerUnit.W]: {
    symbol: "W",
    precision: 0,
    parent: PowerUnit.kW,
  },
  [PowerUnit.kW]: {
    symbol: "kW",
    precision: 2,
    parent: PowerUnit.MW,
  },
  [PowerUnit.MW]: {
    symbol: "MW",
    precision: 2,
    parent: PowerUnit.GW,
  },
  [PowerUnit.GW]: {
    symbol: "GW",
    precision: 2,
    parent: PowerUnit.TW,
  },
  [PowerUnit.TW]: {
    symbol: "TW",
    precision: 2,
  },

  // ===== VOLUME (EAU) =====
  [VolumeUnit.mL]: {
    symbol: "mL",
    precision: 0,
    parent: VolumeUnit.L,
  },
  [VolumeUnit.L]: {
    symbol: "L",
    precision: 1,
    parent: VolumeUnit.m3,
  },
  [VolumeUnit.m3]: {
    symbol: "m3",
    precision: 2,
    parent: VolumeUnit.dam3,
  },
  [VolumeUnit.dam3]: {
    symbol: "dam3",
    precision: 2,
  },

  // ===== VOLUME (GAZ) =====
  [GasVolumeUnit.Nm3]: {
    symbol: "Nm3",
    precision: 2,
    parent: GasVolumeUnit.kNm3,
  },
  [GasVolumeUnit.kNm3]: {
    symbol: "kNm3",
    precision: 2,
    parent: GasVolumeUnit.MNm3,
  },
  [GasVolumeUnit.MNm3]: {
    symbol: "MNm3",
    precision: 2,
    parent: GasVolumeUnit.GNm3,
  },
  [GasVolumeUnit.GNm3]: {
    symbol: "GNm3",
    precision: 2,
  },

  // ===== DÉBIT D'EAU =====
  [WaterFlowUnit.mL_s]: {
    symbol: "mL/s",
    precision: 0,
    parent: WaterFlowUnit.L_s,
  },
  [WaterFlowUnit.L_s]: {
    symbol: "L/s",
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
    symbol: "m3/s",
    precision: 3,
  },
  [WaterFlowUnit.L_min]: {
    symbol: "L/min",
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
    symbol: "m3/h",
    precision: 1,
  },

  // ===== DÉBIT DE GAZ =====
  [GasFlowUnit.Nm3_h]: {
    symbol: "Nm3/h",
    precision: 1,
    parent: GasFlowUnit.kNm3_h,
  },
  [GasFlowUnit.kNm3_h]: {
    symbol: "kNm3/h",
    precision: 2,
    parent: GasFlowUnit.MNm3_h,
  },
  [GasFlowUnit.MNm3_h]: {
    symbol: "MNm3/h",
    precision: 2,
  },

  // ===== PRESSION =====
  [PressureUnit.Pa]: {
    symbol: "Pa",
    precision: 0,
    parent: PressureUnit.kPa,
  },
  [PressureUnit.kPa]: {
    symbol: "kPa",
    precision: 2,
    parent: PressureUnit.MPa,
  },
  [PressureUnit.MPa]: {
    symbol: "MPa",
    precision: 2,
    parent: PressureUnit.GPa,
  },
  [PressureUnit.GPa]: {
    symbol: "GPa",
    precision: 2,
  },
  [PressureUnit.bar]: {
    symbol: "bar",
    precision: 2,
    conversions: [
      {
        targetUnit: PressureUnit.kPa,
        conversionRate: 100,
      },
    ],
  },
  [PressureUnit.mbar]: {
    symbol: "mbar",
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
    symbol: "°C",
    precision: 1,
  },
  [TemperatureUnit.Kelvin]: {
    symbol: "K",
    precision: 1,
  },
  [TemperatureUnit.Fahrenheit]: {
    symbol: "°F",
    precision: 1,
  },

  // ===== VITESSE =====
  [SpeedUnit.m_s]: {
    symbol: "m/s",
    precision: 2,
    conversions: [
      {
        targetUnit: SpeedUnit.km_h,
        conversionRate: 3.6,
      },
    ],
  },
  [SpeedUnit.km_h]: {
    symbol: "km/h",
    precision: 1,
  },
  [SpeedUnit.knot]: {
    symbol: "kn",
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
    symbol: "mm",
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
    symbol: "cm",
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
    symbol: "m",
    precision: 0,
    parent: DistanceUnit.km,
  },
  [DistanceUnit.km]: {
    symbol: "km",
    precision: 2,
  },

  // ===== MASSE =====
  [MassUnit.mg]: {
    symbol: "mg",
    precision: 0,
    parent: MassUnit.g,
  },
  [MassUnit.g]: {
    symbol: "g",
    precision: 0,
    parent: MassUnit.kg,
  },
  [MassUnit.kg]: {
    symbol: "kg",
    precision: 2,
    parent: MassUnit.t,
  },
  [MassUnit.t]: {
    symbol: "t",
    precision: 2,
    parent: MassUnit.kt,
  },
  [MassUnit.kt]: {
    symbol: "kt",
    precision: 2,
  },

  // ===== DÉBIT MASSIQUE =====
  [MassFlowUnit.g_s]: {
    symbol: "g/s",
    precision: 1,
    parent: MassFlowUnit.kg_s,
  },
  [MassFlowUnit.kg_s]: {
    symbol: "kg/s",
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
    symbol: "t/s",
    precision: 3,
  },
  [MassFlowUnit.kg_h]: {
    symbol: "kg/h",
    precision: 1,
  },
  [MassFlowUnit.t_h]: {
    symbol: "t/h",
    precision: 1,
  },

  // ===== FRÉQUENCE =====
  [FrequencyUnit.Hz]: {
    symbol: "Hz",
    precision: 1,
    parent: FrequencyUnit.kHz,
  },
  [FrequencyUnit.kHz]: {
    symbol: "kHz",
    precision: 2,
    parent: FrequencyUnit.MHz,
  },
  [FrequencyUnit.MHz]: {
    symbol: "MHz",
    precision: 2,
    parent: FrequencyUnit.GHz,
  },
  [FrequencyUnit.GHz]: {
    symbol: "GHz",
    precision: 2,
  },
  [FrequencyUnit.rpm]: {
    symbol: "rpm",
    precision: 0,
  },

  // ===== TENSION =====
  [VoltageUnit.mV]: {
    symbol: "mV",
    precision: 0,
    parent: VoltageUnit.V,
  },
  [VoltageUnit.V]: {
    symbol: "V",
    precision: 1,
    parent: VoltageUnit.kV,
  },
  [VoltageUnit.kV]: {
    symbol: "kV",
    precision: 2,
    parent: VoltageUnit.MV,
  },
  [VoltageUnit.MV]: {
    symbol: "MV",
    precision: 2,
  },

  // ===== COURANT =====
  [CurrentUnit.mA]: {
    symbol: "mA",
    precision: 1,
    parent: CurrentUnit.A,
  },
  [CurrentUnit.A]: {
    symbol: "A",
    precision: 2,
    parent: CurrentUnit.kA,
  },
  [CurrentUnit.kA]: {
    symbol: "kA",
    precision: 2,
  },

  // ===== RÉSISTANCE =====
  [ResistanceUnit.mΩ]: {
    symbol: "mΩ",
    precision: 1,
    parent: ResistanceUnit.Ω,
  },
  [ResistanceUnit.Ω]: {
    symbol: "Ω",
    precision: 1,
    parent: ResistanceUnit.kΩ,
  },
  [ResistanceUnit.kΩ]: {
    symbol: "kΩ",
    precision: 2,
    parent: ResistanceUnit.MΩ,
  },
  [ResistanceUnit.MΩ]: {
    symbol: "MΩ",
    precision: 2,
  },

  // ===== POURCENTAGE =====
  [PercentageUnit.Percent]: {
    symbol: "%",
    precision: 1,
  },
  [PercentageUnit.RelativeHumidity]: {
    symbol: "%RH",
    precision: 0,
  },

  // ===== CAPACITÉ =====
  [CapacityUnit.pers]: {
    symbol: "pers.",
    precision: 0,
  },
  [CapacityUnit.pers_h]: {
    symbol: "pers./h",
    precision: 0,
  },

  // ===== PRODUCTION NEIGE =====
  [SnowProductionUnit.m3_neige_h]: {
    symbol: "m3/h",
    precision: 0,
  },

  // ===== RENDEMENT =====
  [EfficiencyUnit.kWh_m3]: {
    symbol: "kWh/m3",
    precision: 2,
  },
  [EfficiencyUnit.kWh_kg]: {
    symbol: "kWh/kg",
    precision: 2,
  },
};