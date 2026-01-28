import { useUnitFormatter } from '../../src/shared/foundation-shared-services/composables/useUnitFormatter';
import { EnergyUnit, PowerUnit, PressureUnit, MassUnit, VoltageUnit, TemperatureUnit, SpeedUnit, DistanceUnit, WaterFlowUnit, VolumeUnit } from '@dative-gpi/foundation-shared-domain/enums';

// Mock useAppLanguageCode with en-US
jest.mock('@dative-gpi/foundation-shared-services/composables', () => ({
  useAppLanguageCode: () => ({
    languageCode: { value: 'en-US' }
  })
}));

describe('useUnitFormatter', () => {
  describe('with en-US locale', () => {
    const { formatQuantity, formatQuantityParts, convert } = useUnitFormatter();

    describe('formatQuantity', () => {
      describe('Family-based scaling', () => {
        it('converts exactly at threshold: 1000 Wh = 1 kWh', () => {
          const result = formatQuantity(1000, EnergyUnit.Wh);
          expect(result).toContain('1');
          expect(result).toContain('kWh');
        });

        it('converts exactly at threshold: 1000 W = 1 kW', () => {
          const result = formatQuantity(1000, PowerUnit.W);
          expect(result).toContain('1');
          expect(result).toContain('kW');
        });

        it('converts volume: 1000 L = 1 m3', () => {
          const result = formatQuantity(1000, VolumeUnit.L);
          expect(result).toContain('1');
          expect(result).toContain('m3');
        });

        it('scales up energy units', () => {
          expect(formatQuantity(500, EnergyUnit.Wh)).toContain('Wh');
          expect(formatQuantity(1500, EnergyUnit.Wh)).toContain('kWh');
          expect(formatQuantity(1500000, EnergyUnit.Wh)).toContain('MWh');
          expect(formatQuantity(2500000000, EnergyUnit.kWh)).toContain('TWh');
        });

        it('scales up power units', () => {
          expect(formatQuantity(800, PowerUnit.W)).toContain('W');
          expect(formatQuantity(5000, PowerUnit.W)).toContain('kW');
          expect(formatQuantity(3000000, PowerUnit.W)).toContain('MW');
          expect(formatQuantity(1500, PowerUnit.kW)).toContain('MW');
        });

        it('scales up mass units', () => {
          expect(formatQuantity(500, MassUnit.mg)).toContain('mg');
          expect(formatQuantity(1200, MassUnit.g)).toContain('kg');
          expect(formatQuantity(2500, MassUnit.kg)).toContain('t');
          expect(formatQuantity(1500000, MassUnit.kg)).toContain('kt');
        });

        it('scales up voltage units', () => {
          expect(formatQuantity(800, VoltageUnit.mV)).toContain('mV');
          expect(formatQuantity(1500, VoltageUnit.mV)).toContain('V');
          expect(formatQuantity(25000, VoltageUnit.V)).toContain('kV');
        });

        it('scales down when value is very small', () => {
          expect(formatQuantity(0.5, PowerUnit.kW)).toContain('W');
          expect(formatQuantity(0.001, MassUnit.kg)).toContain('g');
          expect(formatQuantity(0.0005, VoltageUnit.V)).toContain('mV');
        });
      });

      describe('fixedUnit parameter', () => {
        it('limits scaling to fixedUnit for power', () => {
          expect(formatQuantity(5000000, PowerUnit.W, { fixedUnit: PowerUnit.kW })).toContain('kW');
          expect(formatQuantity(5000000, PowerUnit.W, { fixedUnit: PowerUnit.MW })).toContain('MW');
          expect(formatQuantity(5000000000, PowerUnit.W, { fixedUnit: PowerUnit.MW })).toContain('MW');
        });

        it('limits scaling to fixedUnit for energy', () => {
          expect(formatQuantity(2000000, EnergyUnit.Wh, { fixedUnit: EnergyUnit.kWh })).toContain('kWh');
          expect(formatQuantity(5000000000, EnergyUnit.Wh, { fixedUnit: EnergyUnit.MWh })).toContain('MWh');
        });

        it('does not scale beyond fixedUnit even with large values', () => {
          const result = formatQuantity(999999999, PowerUnit.W, { fixedUnit: PowerUnit.kW });
          expect(result).toContain('kW');
          expect(result).not.toContain('MW');
          expect(result).not.toContain('GW');
        });

        it('fixedUnit prevents conversion even at exact threshold', () => {
          const result = formatQuantity(1000000, PowerUnit.W, { fixedUnit: PowerUnit.kW });
          expect(result).toContain('kW');
          expect(result).not.toContain('MW');
        });

        it('fixedUnit works when starting from higher unit', () => {
          const result = formatQuantity(5, PowerUnit.MW, { fixedUnit: PowerUnit.kW });
          expect(result).toContain('kW');
          expect(result).toContain('5,000');
        });
      });

      describe('Pressure units (family-based)', () => {
        it('auto-scales Pa to kPa', () => {
          expect(formatQuantity(2000, PressureUnit.Pa)).toContain('kPa');
        });

        it('converts bar via family system', () => {
          const result = formatQuantity(2, PressureUnit.bar);
          // 2 bar = 200000 Pa
          // Le système choisit automatiquement la meilleure unité : bar (reste à 2)
          expect(result).toContain('2');
          expect(result).toContain('bar');
        });

        it('scales down mbar to kPa for small values', () => {
          const result = formatQuantity(500, PressureUnit.mbar);
          // 500 mbar = 50000 Pa = 50 kPa
          expect(result).toContain('50');
          expect(result).toContain('kPa');
        });

        it('converts mbar to MPa when large enough', () => {
          // 15000 mbar = 1500000 Pa = 1.5 MPa
          const result = formatQuantity(15000, PressureUnit.mbar);
          expect(result).toContain('1.5');
          expect(result).toContain('MPa');
        });
    });

      describe('Distance units (family-based)', () => {
        it('keeps mm for small values', () => {
          expect(formatQuantity(5, DistanceUnit.mm)).toContain('mm');
        });

        it('converts mm to cm when appropriate', () => {
          const result = formatQuantity(15, DistanceUnit.mm);
          // 15mm = 1.5cm
          expect(result).toContain('cm');
        });

        it('converts cm to m when appropriate', () => {
          const result = formatQuantity(150, DistanceUnit.cm);
          // 150cm = 1.5m
          expect(result).toContain('m');
        });

        it('converts m to km for large values', () => {
          expect(formatQuantity(5000, DistanceUnit.m)).toContain('km');
        });
      });

      describe('Alternative conversions (non-family)', () => {
        it('converts m/s to km/h', () => {
          expect(formatQuantity(10, SpeedUnit.m_s)).toContain('km/h');
        });

        it('converts L/s to m3/h when above threshold', () => {
          expect(formatQuantity(50, WaterFlowUnit.L_s)).toContain('L/s');
          expect(formatQuantity(150, WaterFlowUnit.L_s)).toContain('m3/h');
        });
      });

      describe('Precision', () => {
        it('uses unit-specific precision', () => {
          const result = formatQuantity(234.5678, PowerUnit.kW);
          expect(result).toContain('kW');
          expect(result).toContain('234.57');
        });

        it('allows custom precision override', () => {
          const result = formatQuantity(234.5678, PowerUnit.kW, { decimalPrecision: 0 });
          expect(result).toMatch(/235/);
          expect(result).toContain('kW');
        });
      });

      describe('Units without family', () => {
        it('handles temperature units', () => {
          expect(formatQuantity(25.5, TemperatureUnit.Celsius)).toContain('°C');
          expect(formatQuantity(298.15, TemperatureUnit.Kelvin)).toContain('K');
        });
      });

      describe('Edge cases', () => {
        it('handles zero', () => {
          expect(formatQuantity(0, PowerUnit.W)).toContain('W');
        });

        it('handles negative values', () => {
          expect(formatQuantity(-1500, PowerUnit.W)).toContain('kW');
        });

        it('handles very small values', () => {
          expect(formatQuantity(0.5, PowerUnit.W)).toContain('W');
        });

        it('handles infinite values', () => {
          expect(formatQuantity(Infinity, PowerUnit.W)).toBe('—');
          expect(formatQuantity(-Infinity, PowerUnit.W)).toBe('—');
        });

        it('handles NaN', () => {
          expect(formatQuantity(NaN, PowerUnit.W)).toBe('—');
        });
      });

      describe('Unknown units (SI prefixes)', () => {
        it('applies SI prefixes to unknown units', () => {
          const result = formatQuantity(1500, 'customUnit');
          expect(result).toContain('kcustomUnit');
        });

        it('scales down with SI prefixes', () => {
          const result = formatQuantity(0.001, 'customUnit');
          expect(result).toContain('mcustomUnit');
        });

        it('handles unknown unit at exact threshold', () => {
          const result = formatQuantity(1000, 'unknownUnit');
          expect(result).toContain('kunknownUnit');
        });

        it('handles very large unknown units', () => {
          const result = formatQuantity(1000000000, 'unknownUnit');
          expect(result).toContain('GunknownUnit');
        });
      });

      describe('Locale formatting (en-US)', () => {
        it('formats numbers with comma as thousand separator', () => {
          const result = formatQuantity(999999, PowerUnit.kW, { fixedUnit: PowerUnit.kW });
          expect(result).toMatch(/999,999/);
        });

        it('formats numbers with period as decimal separator', () => {
          const result = formatQuantity(1.5, PowerUnit.kW);
          expect(result).toContain('1.5');
        });
      });
    });

    describe('convert', () => {
      it('converts between units of the same family', () => {
        expect(convert(1000, PowerUnit.W, PowerUnit.kW)).toBe(1);
        expect(convert(1, PowerUnit.kW, PowerUnit.W)).toBe(1000);
        expect(convert(1, PowerUnit.MW, PowerUnit.kW)).toBe(1000);
      });

      it('converts with decimal precision', () => {
        expect(convert(1500, PowerUnit.W, PowerUnit.kW)).toBe(1.5);
        expect(convert(2.5, PowerUnit.kW, PowerUnit.W)).toBe(2500);
      });

      it('throws error for different families', () => {
        expect(() => convert(100, PowerUnit.W, EnergyUnit.Wh)).toThrow();
      });

      it('throws error for units without family', () => {
        expect(() => convert(100, PowerUnit.W, TemperatureUnit.Celsius)).toThrow();
      });
    });

    describe('formatQuantityParts', () => {
      it('splits value and unit correctly', () => {
        const result = formatQuantityParts(5000, PowerUnit.W);
        expect(result.value).toBeTruthy();
        expect(result.unit).toBe('kW');
      });

      it('handles infinite values', () => {
        const result = formatQuantityParts(Infinity, PowerUnit.W);
        expect(result.value).toBe('—');
        expect(result.unit).toBe('');
      });

      it('respects fixedUnit parameter', () => {
        const result = formatQuantityParts(5000000, PowerUnit.W, { fixedUnit: PowerUnit.kW });
        expect(result.unit).toBe('kW');
      });

      it('respects custom precision', () => {
        const result = formatQuantityParts(234.5678, PowerUnit.kW, { decimalPrecision: 1 });
        expect(result.unit).toBe('kW');
        expect(result.value).toContain('234.6');
      });

      it('handles units with special characters', () => {
        const result = formatQuantityParts(25.5, TemperatureUnit.Celsius);
        expect(result.unit).toBe('°C');
      });

      it('splits at exact threshold conversion', () => {
        const result = formatQuantityParts(1000, PowerUnit.W);
        expect(result.value).toContain('1');
        expect(result.unit).toBe('kW');
      });
    });
  });
});