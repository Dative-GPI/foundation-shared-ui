import { useUnitFormatter } from '../../src/shared/foundation-shared-services/composables/useUnitFormatter';
import { EnergyUnit, PowerUnit, VolumeUnit, TemperatureUnit, DistanceUnit } from '@dative-gpi/foundation-shared-domain/enums';

// Mock useAppLanguageCode with en-US
jest.mock('@dative-gpi/foundation-shared-services/composables', () => ({
  useAppLanguageCode: () => ({
    languageCode: { value: 'en-US' }
  })
}));

describe('useUnitFormatter - New System', () => {
  const { formatQuantity } = useUnitFormatter();

  describe('1. Familles d\'unités - Conversions dans la même famille', () => {
    describe('Conversions Wh <-> J <-> cal', () => {
      it('convertit 1000 Wh en J', () => {
        const result = formatQuantity(1000, EnergyUnit.Wattheure, { targetUnit: EnergyUnit.Joule });
        // 1000 Wh = 3,600,000 J = 3.6 MJ
        expect(result.formatted).toContain('3.6');
        expect(result.formatted).toContain('MJ');
      });

      it('convertit 1 Wh en J avec scaling', () => {
        const result = formatQuantity(1, EnergyUnit.Wattheure, { targetUnit: EnergyUnit.Joule });
        // 1 Wh = 3600 J = 3.6 kJ
        expect(result.formatted).toContain('3.6');
        expect(result.formatted).toContain('kJ');
      });

      it('convertit 1000 J en Wh', () => {
        const result = formatQuantity(1000, EnergyUnit.Joule, { targetUnit: EnergyUnit.Wattheure, decimalPrecision: 0 });
        // 1000 J ÷ 3600 = 0.277... Wh = 278 mWh
        expect(result.formatted).toContain('278');
        expect(result.formatted).toContain('mWh');
      });

      it('convertit 1000 cal en J', () => {
        const result = formatQuantity(1000, EnergyUnit.Calorie, { targetUnit: EnergyUnit.Joule, decimalPrecision: 1 });
        // 1000 cal × 4.184 = 4184 J = 4.2 kJ (1 décimale auto)
        expect(result.formatted).toContain('4.2');
        expect(result.formatted).toContain('kJ');
      });

      it('convertit 1000 J en cal', () => {
        const result = formatQuantity(1000, EnergyUnit.Joule, { targetUnit: EnergyUnit.Calorie });
        // 1000 J = 239 cal
        expect(result.unit).toContain('cal');
        expect(parseFloat(result.value)).toBeCloseTo(239, 0);
      });

      it('boucle complète: Wh -> J -> cal -> Wh', () => {
        const original = 100;
        const inJ = formatQuantity(original, EnergyUnit.Wattheure, { targetUnit: EnergyUnit.Joule });
        const inCal = formatQuantity(parseFloat(inJ.value.replace(/,/g, '')), EnergyUnit.Joule, { targetUnit: EnergyUnit.Calorie });
        const backToJ = formatQuantity(parseFloat(inCal.value.replace(/,/g, '')), EnergyUnit.Calorie, { targetUnit: EnergyUnit.Joule });
        const backToWh = formatQuantity(parseFloat(backToJ.value.replace(/,/g, '')), EnergyUnit.Joule, { targetUnit: EnergyUnit.Wattheure });
        expect(parseFloat(backToWh.value.replace(/,/g, ''))).toBeCloseTo(original, 2);
      });
    });
  });

  describe('2. Auto-scaling avec préfixes SI (log10)', () => {
    it('1000 Wh = 1 kWh (auto-scaling)', () => {
      const result = formatQuantity(1000, EnergyUnit.Wattheure);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('kWh');
    });

    it('1000 W = 1 kW (auto-scaling)', () => {
      const result = formatQuantity(1000, PowerUnit.Watt);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('kW');
    });

    it('1,000,000 J = 1 MJ (auto-scaling)', () => {
      const result = formatQuantity(1_000_000, EnergyUnit.Joule);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('MJ');
    });

    it('0.001 W = 1 mW (auto-scaling vers le bas)', () => {
      const result = formatQuantity(0.001, PowerUnit.Watt);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('mW');
    });

    it('scaling progressif: 1, 1k, 1M, 1G, 1T', () => {
      expect(formatQuantity(1, PowerUnit.Watt).formatted).toContain('W');
      expect(formatQuantity(1000, PowerUnit.Watt).formatted).toContain('kW');
      expect(formatQuantity(1_000_000, PowerUnit.Watt).formatted).toContain('MW');
      expect(formatQuantity(1_000_000_000, PowerUnit.Watt).formatted).toContain('GW');
      expect(formatQuantity(1_000_000_000_000, PowerUnit.Watt).formatted).toContain('TW');
    });

    it('scaling progressif vers le bas: 1, 1m, 1µ, 1n', () => {
      expect(formatQuantity(1, PowerUnit.Watt).formatted).toContain('W');
      expect(formatQuantity(0.001, PowerUnit.Watt).formatted).toContain('mW');
      expect(formatQuantity(0.000001, PowerUnit.Watt).formatted).toContain('µW');
      expect(formatQuantity(0.000000001, PowerUnit.Watt).formatted).toContain('nW');
    });
  });

  describe('3. Unités inconnues - Préfixes SI automatiques', () => {
    it('applique préfixe SI à une unité inconnue', () => {
      const result = formatQuantity(1500, 'customUnit');
      expect(result.formatted).toContain('1.5');
      expect(result.formatted).toContain('kcustomUnit');
    });

    it('applique préfixe SI négatif à une unité inconnue', () => {
      const result = formatQuantity(0.001, 'unknownUnit');
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('munknownUnit');
    });

    it('gère les très grandes valeurs inconnues', () => {
      const result = formatQuantity(1_000_000_000, 'widget');
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('Gwidget');
    });

    it('gère les très petites valeurs inconnues', () => {
      const result = formatQuantity(0.000000001, 'atom');
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('natom');
    });
  });

  describe('4. Conversions spéciales - L vers m3 à 1000L', () => {
    it('garde L en dessous de 1000', () => {
      const result = formatQuantity(500, VolumeUnit.Liter);
      expect(result.formatted).toContain('L');
      expect(result.formatted).not.toContain('m3');
    });

    it('passe en m3 à partir de 1000L', () => {
      const result = formatQuantity(1000, VolumeUnit.Liter);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('m3');
    });

    it('garde les préfixes SI sur L avant la conversion', () => {
      const result = formatQuantity(0.5, VolumeUnit.Liter);
      expect(result.formatted).toContain('mL');
    });

    it('applique les préfixes SI sur m3 après conversion', () => {
      const result = formatQuantity(5000, VolumeUnit.CubicMeter);
      // 5000 m3 = 5 km3
      expect(result.formatted).toContain('5');
      expect(result.formatted).toContain('km3');
    });
  });

  describe('5. Températures - Conversions non-linéaires', () => {
    it('convertit Celsius en Fahrenheit', () => {
      const result = formatQuantity(20, TemperatureUnit.Celsius, { targetUnit: TemperatureUnit.Fahrenheit });
      // 20°C = 68°F
      expect(result.formatted).toContain('68');
      expect(result.formatted).toContain('°F');
    });

    it('convertit Fahrenheit en Celsius', () => {
      const result = formatQuantity(68, TemperatureUnit.Fahrenheit, { targetUnit: TemperatureUnit.Celsius });
      // 68°F = 20°C
      expect(result.formatted).toContain('20');
      expect(result.formatted).toContain('°C');
    });

    it('convertit Celsius en Kelvin', () => {
      const result = formatQuantity(20, TemperatureUnit.Celsius, { 
        targetUnit: TemperatureUnit.Kelvin,
        decimalPrecision: 2  // Forcer 2 décimales
      });
      // 20°C + 273.15 = 293.15 K
      expect(result.formatted).toContain('293.15');
      expect(result.formatted).toContain('K');
    });

    it('convertit Kelvin en Celsius', () => {
      const result = formatQuantity(273.15, TemperatureUnit.Kelvin, { targetUnit: TemperatureUnit.Celsius });
      // 273.15 K = 0°C
      expect(result.formatted).toContain('0');
      expect(result.formatted).toContain('°C');
    });

    it('convertit Kelvin en Fahrenheit', () => {
      const result = formatQuantity(273.15, TemperatureUnit.Kelvin, { targetUnit: TemperatureUnit.Fahrenheit });
      // 273.15 K = 0°C = 32°F
      expect(result.formatted).toContain('32');
      expect(result.formatted).toContain('°F');
    });

    it('température négative: -40°C = -40°F', () => {
      const result = formatQuantity(-40, TemperatureUnit.Celsius, { targetUnit: TemperatureUnit.Fahrenheit });
      expect(result.formatted).toContain('-40');
      expect(result.formatted).toContain('°F');
    });
  });

  describe('6. Double scalabilité - Conversion + Préfixe SI', () => {
    it('convertit Wh en J avec scaling automatique', () => {
      const result = formatQuantity(1000, EnergyUnit.Wattheure, { targetUnit: EnergyUnit.Joule });
      // 1000 Wh = 3,600,000 J = 3.6 MJ
      expect(result.formatted).toContain('3.6');
      expect(result.formatted).toContain('MJ');
    });

    it('convertit J en Wh avec scaling automatique', () => {
      const result = formatQuantity(3_600_000, EnergyUnit.Joule, { targetUnit: EnergyUnit.Wattheure });
      // 3,600,000 J = 1000 Wh = 1 kWh
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('kWh');
    });

    it('convertit cal en Wh avec scaling automatique', () => {
      const result = formatQuantity(860_421, EnergyUnit.Calorie, { targetUnit: EnergyUnit.Wattheure });
      // 860,421 cal ≈ 1000 Wh = 1 kWh
      expect(result.formatted).toContain('kWh');
      expect(parseFloat(result.value.replace(/,/g, ''))).toBeCloseTo(1, 1);
    });

    it('petite valeur: 1 J en Wh avec scaling', () => {
      const result = formatQuantity(1, EnergyUnit.Joule, { targetUnit: EnergyUnit.Wattheure, decimalPrecision: 0 });
      // 1 J ÷ 3600 = 0.0002777... Wh = 277.7... µWh
      expect(result.formatted).toContain('278');
      expect(result.formatted).toContain('µWh');
      expect(parseFloat(result.value.replace(/,/g, ''))).toBeCloseTo(278, 0);
    });

    it('grande valeur: 1 TWh en J avec scaling', () => {
      const result = formatQuantity(1_000_000_000_000, EnergyUnit.Wattheure, { targetUnit: EnergyUnit.Joule });
      // 1 TWh = 3.6 × 10^15 J = 3.6 PJ
      expect(result.formatted).toContain('3.6');
      expect(result.formatted).toContain('PJ');
    });
  });

  describe('7. unitPrecision - Fixer l\'unité avec préfixes SI', () => {
    it('fixe m3 et permet mm3 (pas de descente en L)', () => {
      const result = formatQuantity(0.002, VolumeUnit.CubicMeter, { unitPrecision: VolumeUnit.CubicMeter });
      // 0.002 m3 = 2 mm3 (ne descend PAS en 2 L)
      expect(result.formatted).toContain('2');
      expect(result.formatted).toContain('mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m3 et permet cm3', () => {
      const result = formatQuantity(0.05, VolumeUnit.CubicMeter, { unitPrecision: VolumeUnit.CubicMeter });
      // 0.05 m3 = 50,000 mm3 → 50 mm3
      expect(result.formatted).toContain('50');
      expect(result.formatted).toContain('mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m3 et permet Mm3 pour grandes valeurs', () => {
      const result = formatQuantity(50_000_000, VolumeUnit.CubicMeter, { unitPrecision: VolumeUnit.CubicMeter });
      // 50,000,000 m3 = 50 Mm3
      expect(result.formatted).toContain('50');
      expect(result.formatted).toContain('Mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m sans descendre en mm pour grandes valeurs', () => {
      const result = formatQuantity(5000, DistanceUnit.Meter, { unitPrecision: DistanceUnit.Meter });
      // 5000 m = 5 km
      expect(result.formatted).toContain('5');
      expect(result.formatted).toContain('km');
    });

    it('fixe m et permet mm pour petites valeurs', () => {
      const result = formatQuantity(0.001, DistanceUnit.Meter, { unitPrecision: DistanceUnit.Meter });
      // 0.001 m = 1 mm
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('mm');
    });

    it('fixe Wh sans préfixe', () => {
      const result = formatQuantity(5000, EnergyUnit.Wattheure, { unitPrecision: EnergyUnit.Wattheure });
      // 5000 Wh reste en Wh (pas de préfixe SI)
      expect(result.value).toContain('5');
      expect(result.unit).toContain('Wh');
      expect(result.unit).not.toContain('k');
    });
  });

  describe('8. Combinaison targetUnit + unitPrecision', () => {
    it('convertit Wh en J puis fixe l\'unité J avec préfixes', () => {
      const result = formatQuantity(1000, EnergyUnit.Wattheure, { 
        targetUnit: EnergyUnit.Joule
      });
      // 1000 Wh = 3,600,000 J = 3.6 MJ
      expect(result.formatted).toContain('3.6');
      expect(result.formatted).toContain('MJ');
    });

    it('convertit L en m3 puis fixe m3 avec préfixes', () => {
      const result = formatQuantity(2000, VolumeUnit.Liter, { 
        targetUnit: VolumeUnit.CubicMeter,
        unitPrecision: VolumeUnit.CubicMeter 
      });
      // 2000 L = 2 m3
      expect(result.formatted).toContain('2');
      expect(result.formatted).toContain('m3');
      expect(result.formatted).not.toContain('L');
    });
  });

  describe('9. Précision log10 - Vérification technique', () => {
    it('utilise log10 pour trouver le bon ordre de grandeur', () => {
      // log10(1000) = 3 → magnitude = 3 → kilo
      expect(formatQuantity(1000, PowerUnit.Watt).formatted).toContain('kW');
      
      // log10(1,000,000) = 6 → magnitude = 6 → mega
      expect(formatQuantity(1_000_000, PowerUnit.Watt).formatted).toContain('MW');
      
      // log10(0.001) = -3 → magnitude = -3 → milli
      expect(formatQuantity(0.001, PowerUnit.Watt).formatted).toContain('mW');
    });

    it('gère les valeurs juste en dessous du seuil', () => {
      // 999 reste en unité de base
      const result = formatQuantity(999, PowerUnit.Watt);
      expect(result.formatted).toContain('W');
      expect(result.formatted).not.toContain('k');
    });

    it('gère les valeurs juste au-dessus du seuil', () => {
      // 1001 passe en kilo
      const result = formatQuantity(1001, PowerUnit.Watt);
      expect(result.formatted).toContain('kW');
    });
  });

  describe('10. Edge cases et robustesse', () => {
    it('gère zéro correctement', () => {
      expect(formatQuantity(0, PowerUnit.Watt).formatted).toContain('0');
      expect(formatQuantity(0, EnergyUnit.Wattheure).formatted).toContain('0');
    });

    it('gère les valeurs négatives', () => {
      const result = formatQuantity(-1500, PowerUnit.Watt);
      expect(result.formatted).toContain('-1.5');
      expect(result.formatted).toContain('kW');
    });

    it('gère infinity', () => {
      expect(formatQuantity(Infinity, PowerUnit.Watt).formatted).toBe('—');
      expect(formatQuantity(-Infinity, PowerUnit.Watt).formatted).toBe('—');
    });

    it('gère NaN', () => {
      expect(formatQuantity(NaN, PowerUnit.Watt).formatted).toBe('—');
    });

    it('conversion entre familles différentes lance une erreur', () => {
      expect(() => {
        formatQuantity(100, PowerUnit.Watt, { targetUnit: EnergyUnit.Wattheure });
      }).toThrow();
    });
  });

  describe('11. Test perso - Cas de casse', () => {
    it('affiche 200 Wh en kWh', () => {
      const result = formatQuantity(200, EnergyUnit.Wattheure, {unitPrecision: "kWh"});
      expect(result.formatted).toContain('0.2');
      expect(result.formatted).toContain('kWh');
    });

    it('affiche 1 000 000 L en m3', () => {
      const result = formatQuantity(1000000, VolumeUnit.Liter, {targetUnit: VolumeUnit.CubicMeter, unitPrecision: "m3"});
      expect(result.value).toContain('1');
      expect(result.unit).toContain('m3');
    });
  });
});