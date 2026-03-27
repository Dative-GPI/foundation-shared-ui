import { UnitFamily, TemperatureUnit, EnergyUnit, PowerUnit, VolumeUnit, GasVolumeUnit, WaterFlowUnit, GasFlowUnit, PressureUnit, SpeedUnit, DistanceUnit, MassUnit, MassFlowUnit, FrequencyUnit, VoltageUnit, CurrentUnit, ResistanceUnit, PercentageUnit, CapacityUnit, SnowProductionUnit, EfficiencyUnit, AreaUnit } from "@dative-gpi/foundation-shared-domain/enums";
import type { UnitFamilyDefinition } from "./unitDetails";

export const unitFamilies: Record<UnitFamily, UnitFamilyDefinition> = {
  [UnitFamily.Energy]: {
    name: UnitFamily.Energy,
    pivotUnit: EnergyUnit.Joule,
  },
  
  [UnitFamily.Temperature]: {
    name: UnitFamily.Temperature,
    pivotUnit: TemperatureUnit.Celsius,
    customConverter: (value: number, fromUnit: string, toUnit: string) => {
      // Celsius <-> Kelvin
      if (fromUnit === TemperatureUnit.Celsius && toUnit === TemperatureUnit.Kelvin) {
        return value + 273.15;
      }
      if (fromUnit === TemperatureUnit.Kelvin && toUnit === TemperatureUnit.Celsius) {
        return value - 273.15;
      }
      
      // Celsius <-> Fahrenheit
      if (fromUnit === TemperatureUnit.Celsius && toUnit === TemperatureUnit.Fahrenheit) {
        return (value * 9/5) + 32;
      }
      if (fromUnit === TemperatureUnit.Fahrenheit && toUnit === TemperatureUnit.Celsius) {
        return (value - 32) * 5/9;
      }
      
      // Kelvin <-> Fahrenheit
      if (fromUnit === TemperatureUnit.Kelvin && toUnit === TemperatureUnit.Fahrenheit) {
        return (value - 273.15) * 9/5 + 32;
      }
      if (fromUnit === TemperatureUnit.Fahrenheit && toUnit === TemperatureUnit.Kelvin) {
        return (value - 32) * 5/9 + 273.15;
      }
      
      return value;
    }
  },
  
  [UnitFamily.Power]: { 
    name: UnitFamily.Power, 
    pivotUnit: PowerUnit.Watt 
  },
  
  [UnitFamily.Volume]: { 
    name: UnitFamily.Volume, 
    pivotUnit: VolumeUnit.Liter
  },
  
  [UnitFamily.GasVolume]: { 
    name: UnitFamily.GasVolume, 
    pivotUnit: GasVolumeUnit.NormalCubicMeter 
  },
  
  [UnitFamily.WaterFlow]: { 
    name: UnitFamily.WaterFlow, 
    pivotUnit: WaterFlowUnit.LiterPerSecond
  },
  
  [UnitFamily.GasFlow]: { 
    name: UnitFamily.GasFlow, 
    pivotUnit: GasFlowUnit.NormalCubicMeterPerHour
  },
  
  [UnitFamily.Pressure]: { 
    name: UnitFamily.Pressure, 
    pivotUnit: PressureUnit.Pascal
  },
  
  [UnitFamily.Speed]: { 
    name: UnitFamily.Speed, 
    pivotUnit: SpeedUnit.MeterPerSecond
  },
  
  [UnitFamily.Distance]: { 
    name: UnitFamily.Distance, 
    pivotUnit: DistanceUnit.Meter
  },
  
  [UnitFamily.Mass]: { 
    name: UnitFamily.Mass, 
    pivotUnit: MassUnit.Gram
  },
  
  [UnitFamily.MassFlow]: { 
    name: UnitFamily.MassFlow, 
    pivotUnit: MassFlowUnit.GramPerSecond
  },
  
  [UnitFamily.Frequency]: { 
    name: UnitFamily.Frequency, 
    pivotUnit: FrequencyUnit.Hertz
  },
  
  [UnitFamily.Voltage]: { 
    name: UnitFamily.Voltage, 
    pivotUnit: VoltageUnit.Volt
  },
  
  [UnitFamily.Current]: { 
    name: UnitFamily.Current, 
    pivotUnit: CurrentUnit.Ampere
  },
  
  [UnitFamily.Resistance]: { 
    name: UnitFamily.Resistance, 
    pivotUnit: ResistanceUnit.Ohm
  },
  
  [UnitFamily.Percentage]: { 
    name: UnitFamily.Percentage, 
    pivotUnit: PercentageUnit.Percent
  },
  
  [UnitFamily.Capacity]: { 
    name: UnitFamily.Capacity, 
    pivotUnit: CapacityUnit.Person
  },
  
  [UnitFamily.SnowProduction]: { 
    name: UnitFamily.SnowProduction, 
    pivotUnit: SnowProductionUnit.CubicMeterSnowPerHour
  },
  
  [UnitFamily.Efficiency]: { 
    name: UnitFamily.Efficiency, 
    pivotUnit: EfficiencyUnit.KilowattHourPerCubicMeter
  },

  [UnitFamily.Area]: { 
    name: UnitFamily.Area, 
    pivotUnit: AreaUnit.SquareMeter,
  },
};