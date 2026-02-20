export enum UnitPrefix {
    None = "",
    Nano = "n",
    Micro = "µ",
    Milli = "m",
    Kilo = "k",
    Mega = "M",
    Giga = "G",
    Tera = "T",
    Peta = "P"
}

export enum UnitFamily {
    Energy = "Energy",
    Power = "Power",
    Volume = "Volume",
    GasVolume = "Gas Volume",
    WaterFlow = "Water Flow",
    GasFlow = "Gas Flow",
    Pressure = "Pressure",
    Temperature = "Temperature",
    Speed = "Speed",
    Distance = "Distance",
    Mass = "Mass",
    MassFlow = "Mass Flow",
    Frequency = "Frequency",
    Voltage = "Voltage",
    Current = "Current",
    Resistance = "Resistance",
    Percentage = "Percentage",
    Capacity = "Capacity",
    SnowProduction = "Snow Production",
    Efficiency = "Efficiency",
    Area = "Area",
}

export enum EnergyUnit {
    Wattheure = "Wh",
    Joule = "J",
    Calorie = "cal",
}

export enum PowerUnit {
    Watt = "W",
}

export enum VolumeUnit {
    Liter = "L",
    CubicMeter = "m3",
}

export enum GasVolumeUnit {
    NormalCubicMeter = "Nm3",
}

export enum AreaUnit {
    SquareMeter = "m2",
}

export enum WaterFlowUnit {
    LiterPerSecond = "L/s",
    CubicMeterPerSecond = "m3/s",
    LiterPerMinute = "L/min",
    CubicMeterPerHour = "m3/h",
}

export enum GasFlowUnit {
    NormalCubicMeterPerHour = "Nm3/h",
}

export enum PressureUnit {
    Pascal = "Pa",
    Bar = "bar",
}

export enum TemperatureUnit {
    Celsius = "°C",
    Kelvin = "K",
    Fahrenheit = "°F",
}

export enum SpeedUnit {
    MeterPerSecond = "m/s",
    KilometerPerHour = "km/h",
    Knot = "kn",
}

export enum DistanceUnit {
    Meter = "m",
}

export enum MassUnit {
    Gram = "g",
    Tonne = "t",
}

export enum MassFlowUnit {
    GramPerSecond = "g/s",
    TonnePerSecond = "t/s",
    KilogramPerHour = "kg/h",
    TonnePerHour = "t/h",
}

export enum FrequencyUnit {
    Hertz = "Hz",
    RevolutionsPerMinute = "rpm",
}

export enum VoltageUnit {
    Volt = "V",
}

export enum CurrentUnit {
    Ampere = "A",
}

export enum ResistanceUnit {
    Ohm = "Ω",
}

export enum PercentageUnit {
    Percent = "%",
    RelativeHumidity = "%RH",
}

export enum CapacityUnit {
    Person = "pers",
    PersonPerHour = "pers/h",
}

export enum SnowProductionUnit {
    CubicMeterSnowPerHour = "m3_neige/h",
}

export enum EfficiencyUnit {
    KilowattHourPerCubicMeter = "kWh/m3",
    KilowattHourPerKilogram = "kWh/kg",
}