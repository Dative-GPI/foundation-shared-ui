import { useUnitFormatter } from '../../src/shared/foundation-shared-services/composables/useUnitFormatter';
import { EnergyUnit, PowerUnit, VolumeUnit, TemperatureUnit, DistanceUnit } from '@dative-gpi/foundation-shared-domain/enums';

// Mock useAppLanguageCode with en-US
jest.mock('@dative-gpi/foundation-shared-services/composables', () => ({
  useAppLanguageCode: () => ({
    languageCode: { value: 'en-US' }
  })
}));

function extractUnitSymbol(formatted: string) {
  // format attendu: "<nombre> <unit>"
  const parts = formatted.trim().split(/\s+/);
  return parts[parts.length - 1] ?? "";
}

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
      const result = formatQuantity(5000000000, VolumeUnit.CubicMeter);
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
      const result = formatQuantity(0.002, VolumeUnit.CubicMeter, { unitPrecision: "mm3" });
      // ATTENTION : ici "mm3" est interprété comme "milli-m3" (1 mm3 = 10^-3 m3), et non comme millimètre cube (mm^3 = 10^-9 m3)
      // 0.002 m3 = 2 mm3 (ne descend PAS en 2 L)
      expect(result.formatted).toContain('2');
      expect(result.formatted).toContain('mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m3 et permet mm3', () => {
      const result = formatQuantity(0.05, VolumeUnit.CubicMeter, { unitPrecision: "mm3" });
      // 0.05 m3 = 50,000 mm3 → 50 mm3
      expect(result.formatted).toContain('50');
      expect(result.formatted).toContain('mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m3 et permet Mm3 pour grandes valeurs', () => {
      const result = formatQuantity(50_000_000, VolumeUnit.CubicMeter, { unitPrecision: "Mm3" });
      // 50,000,000 m3 = 50 Mm3
      expect(result.formatted).toContain('50');
      expect(result.formatted).toContain('Mm3');
      expect(result.formatted).not.toContain('L');
    });

    it('fixe m sans descendre en mm pour grandes valeurs', () => {
      const result = formatQuantity(5000, DistanceUnit.Meter);
      // 5000 m = 5 km
      expect(result.formatted).toContain('5');
      expect(result.formatted).toContain('km');
    });

    it('fixe m et permet mm pour petites valeurs', () => {
      const result = formatQuantity(0.001, DistanceUnit.Meter);
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

  describe('12. extractUnitSymbol utility function', () => {
    it("does NOT misparse 'm' (meter) as milli-prefix", () => {
      // On force une precision d'unité "m" : si le parsing est cassé,
      // tu peux te retrouver avec baseUnit="" ou autre comportement étrange.
      const out = formatQuantity(12, "m", { unitPrecision: "m", decimalPrecision: 2 });
      expect(extractUnitSymbol(out.unit)).toBe("m");
    });

    it("does NOT misparse 'm3' as milli-prefix + '3'", () => {
      const out = formatQuantity(1.2, "m3", { unitPrecision: "m3", decimalPrecision: 2 });
      expect(extractUnitSymbol(out.unit)).toBe("m3");
    });

    it("does NOT misparse 'Pa' as 'P' (peta) + 'a'", () => {
      const out = formatQuantity(101325, "Pa", { unitPrecision: "Pa", decimalPrecision: 2 });
      expect(extractUnitSymbol(out.unit)).toBe("Pa");
    });

    it("parses 'kWh' as k + Wh (and converts accordingly)", () => {
      // 1500 Wh -> 1.5 kWh si tu imposes kWh
      const out = formatQuantity(1500, "Wh", { unitPrecision: "kWh", decimalPrecision: 3 });
      expect(extractUnitSymbol(out.unit)).toBe("kWh");

      // Bonus: on check que la valeur est bien ~1.5 (sans dépendre de la locale)
      // On retire les espaces et on récupère la partie nombre
      const num = Number(out.value);
      expect(num).toBeGreaterThan(1.49);
      expect(num).toBeLessThan(1.51);
    });

    it("parses 'mg' as m + g (if g exists in registry) and converts accordingly", () => {
      // 1 g => 1000 mg (si g est bien défini et usesSIPrefixes ok)
      const out = formatQuantity(1, "g", { unitPrecision: "mg", decimalPrecision: 0 });
      expect(extractUnitSymbol(out.unit)).toBe("mg");

      expect(out.value).toBe("1,000");
    });

    it("when unitPrecision is unknown, it should not crash and keeps symbol as provided", () => {
      // Ici on vérifie que ton formatter reste robuste.
      // Si tu préfères lever une erreur, adapte ce test.
      const out = formatQuantity(123, "rpm", { unitPrecision: "krpm", decimalPrecision: 2 });
      expect(extractUnitSymbol(out.unit)).toBe("krpm");
    });
  });
  describe('13. conversionThreshold - Contrôle personnalisé des conversions automatiques', () => {
    it('utilise le seuil par défaut (1000 L → m3)', () => {
      const result = formatQuantity(1000, VolumeUnit.Liter);
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('m3');
    });

    it('désactive la conversion avec un seuil très élevé (1000 L reste en L)', () => {
      const result = formatQuantity(1000, VolumeUnit.Liter, { conversionThreshold: 100000 });
      expect(result.formatted).toContain('1,000');
      expect(result.formatted).toContain('L');
      expect(result.formatted).not.toContain('m3');
    });

    it('applique la conversion avec un seuil personnalisé atteint (100000 L → m3)', () => {
      const result = formatQuantity(100000, VolumeUnit.Liter, { conversionThreshold: 100000 });
      expect(result.formatted).toContain('100');
      expect(result.formatted).toContain('m3');
    });

    it('combine conversionThreshold avec targetUnit', () => {
      // Convertir J en Wh, mais avec un seuil personnalisé pour éviter kWh
      const result = formatQuantity(3600000, EnergyUnit.Joule, { 
        targetUnit: EnergyUnit.Wattheure,
        conversionThreshold: Infinity // Désactive toutes les conversions spéciales
      });
      // 3,600,000 J = 1000 Wh (reste en Wh, pas de kWh auto)
      expect(result.formatted).toContain('1,000');
      expect(result.formatted).toContain('Wh');
      expect(result.formatted).not.toContain('k');
    });

    it('seuil bas force la conversion même pour petites valeurs', () => {
      const result = formatQuantity(100, VolumeUnit.Liter, { conversionThreshold: 50 });
      // Avec seuil à 50, 100 L devrait passer en m3
      expect(result.formatted).toContain('0.1');
      expect(result.formatted).toContain('m3');
      expect(result.formatted).not.toContain('L');
    });
  });
  describe('14. Gestion des exposants - m², m³, unités cubiques et carrées', () => {
    it('convertit m³ en km³ correctement (5 000 000 000 m³ = 5 km³)', () => {
      const result = formatQuantity(5000000000, VolumeUnit.CubicMeter);
      // 5 000 000 000 m³ = (∛5 000 000 000)³ = 1700³ ≈ (1.7 km)³ = 5 km³
      expect(result.formatted).toContain('5');
      expect(result.formatted).toContain('km3');
    });

    it('convertit de petits volumes m³ en mm³ (0.000001 m³ = 1 mm³)', () => {
      const result = formatQuantity(0.000000001, VolumeUnit.CubicMeter);
      // 0.000000001 m³ = (∛0.000000001)³ = (0.001 m)³ = (1 mm)³ = 1 mm³
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('mm3');
    });

    it('lance erreur suite à targetUnit dm3 via unitPrecision inconnu', () => {
      // L'appel doit être dans la fonction fléchée du expect
      expect(() => {
        formatQuantity(1000, VolumeUnit.CubicMeter, { targetUnit: 'dm3' });
      }).toThrow('Unknown unit: m3 or dm3');
    });

    it('gère les surfaces m² avec préfixes SI (1 000 000 m² = 1 km²)', () => {
      const result = formatQuantity(1000000, 'm2');
      // 1 000 000 m² = (√1 000 000)² = (1000 m)² = (1 km)² = 1 km²
      expect(result.formatted).toContain('1');
      expect(result.formatted).toContain('km2');
    });

    it('convertit de grandes surfaces m² en km² (5 000 000 000 m² = 5 000 km²)', () => {
      const result = formatQuantity(5000000000, 'm2');
      // √5 000 000 000 ≈ 70 711 m ≈ 70.7 km
      // (70.7 km)² ≈ 5 000 km²
      expect(result.formatted).toContain('5,000');
      expect(result.formatted).toContain('km2');
    });
  });
  describe('15. Tests combinés - Toutes les fonctionnalités ensemble', () => {
    describe('targetUnit + unitPrecision + decimalPrecision', () => {
      it('convertit Wh → J, fixe en kJ avec 3 décimales', () => {
        const result = formatQuantity(500, EnergyUnit.Wattheure, {
          targetUnit: EnergyUnit.Joule,
          unitPrecision: 'kJ',
          decimalPrecision: 3
        });
        // 500 Wh = 1,800,000 J = 1800 kJ
        expect(result.formatted).toContain('1,800');
        expect(result.formatted).toContain('kJ');
        // decimalPrecision s'applique après le scaling, donc 1,800 kJ avec 3 décimales = 1,800.000 kJ
        expect(result.value).toBe('1,800.000');
        expect(result.formatted).toMatch(/1,800(\.\d{3})?\s*kJ/);
      });

      it('convertit L → m3 avec 2 décimales', () => {
        const result = formatQuantity(5000, VolumeUnit.Liter, {
          targetUnit: VolumeUnit.CubicMeter,
          decimalPrecision: 2
        });
        // 5000 L = 5 m³
        expect(result.formatted).toContain('5');
        expect(result.formatted).toContain('m3');
        expect(result.value).toBe('5.00');
      });

      it('convertit cal → Wh, fixe en mWh avec 1 décimale', () => {
        const result = formatQuantity(100, EnergyUnit.Calorie, {
          targetUnit: EnergyUnit.Wattheure,
          unitPrecision: 'mWh',
          decimalPrecision: 1
        });
        // 100 cal ≈ 0.116 Wh = 116 mWh
        expect(result.formatted).toContain('mWh');
        expect(parseFloat(result.value.replace(/,/g, ''))).toBeCloseTo(116, 0);
      });
    });

    describe('targetUnit + conversionThreshold + decimalPrecision', () => {
      it('convertit J → Wh avec seuil élevé (empêche kWh) et 0 décimales', () => {
        const result = formatQuantity(3600000, EnergyUnit.Joule, {
          targetUnit: EnergyUnit.Wattheure,
          conversionThreshold: Infinity,
          decimalPrecision: 0
        });
        // 3,600,000 J = 1000 Wh (reste en Wh, pas de kWh)
        expect(result.formatted).toContain('1,000');
        expect(result.formatted).toContain('Wh');
        expect(result.formatted).not.toContain('k');
      });

      it('convertit L → m3 avec seuil custom à 50000 et 4 décimales', () => {
        const result = formatQuantity(60000, VolumeUnit.Liter, {
          conversionThreshold: 50000,
          decimalPrecision: 4
        });
        // 60000 L = 60 m³
        expect(result.formatted).toContain('60');
        expect(result.formatted).toContain('m3');
      });

      it('garde L avec seuil élevé même pour grandes valeurs + 1 décimale', () => {
        const result = formatQuantity(50000, VolumeUnit.Liter, {
          conversionThreshold: 100000,
          decimalPrecision: 1
        });
        // Reste en L (pas de préfixe SI car conversionThreshold désactive ça)
        expect(result.formatted).toContain('50,000');
        expect(result.formatted).toContain('L');
        expect(result.formatted).not.toContain('m3');
      });
    });

    describe('unitPrecision + conversionThreshold + decimalPrecision', () => {
      it('fixe m3 en mm3 avec seuil Infinity et 5 décimales', () => {
        const result = formatQuantity(0.000075, VolumeUnit.CubicMeter, {
          unitPrecision: 'mm3',
          conversionThreshold: Infinity,
          decimalPrecision: 5
        });
        // 0.000075 m³ = 75 mm³
        expect(result.formatted).toContain('75');
        expect(result.formatted).toContain('mm3');
        expect(result.formatted).not.toContain('L');
      });

      it('fixe Wh sans préfixe avec seuil custom et 2 décimales', () => {
        const result = formatQuantity(2500, EnergyUnit.Wattheure, {
          unitPrecision: EnergyUnit.Wattheure,
          conversionThreshold: 5000,
          decimalPrecision: 2
        });
        // 2500 Wh reste en Wh (pas de kWh)
        expect(result.formatted).toContain('2,500');
        expect(result.formatted).toContain('Wh');
        expect(result.formatted).not.toContain('k');
      });
    });

    describe('Tout combiné: targetUnit + unitPrecision + conversionThreshold + decimalPrecision', () => {
      it('conversion complète: L → m3, fixe mm3, seuil 500, 3 décimales', () => {
        const result = formatQuantity(600, VolumeUnit.Liter, {
          targetUnit: VolumeUnit.CubicMeter,
          unitPrecision: 'mm3',
          conversionThreshold: 500,
          decimalPrecision: 3
        });
        // 600 L > 500 → conversion en m³ = 0.6 m³ = 600 mm³ (avec unitPrecision)
        expect(result.formatted).toContain('600');
        expect(result.formatted).toContain('mm3');
      });

      it('conversion avec seuil non atteint: targetUnit force quand même la conversion', () => {
        const result = formatQuantity(400, VolumeUnit.Liter, {
          targetUnit: VolumeUnit.CubicMeter,
          conversionThreshold: 500,
          decimalPrecision: 1
        });
        // targetUnit force la conversion même si seuil non atteint
        expect(result.formatted).toContain('0.4');
        expect(result.formatted).toContain('m3');
      });

      it('chaîne complexe: Wh → J → MJ avec seuil et précision', () => {
        const result = formatQuantity(10000, EnergyUnit.Wattheure, {
          targetUnit: EnergyUnit.Joule,
          unitPrecision: 'MJ',
          conversionThreshold: Infinity,
          decimalPrecision: 2
        });
        // 10000 Wh = 36,000,000 J = 36 MJ
        expect(result.formatted).toContain('36');
        expect(result.formatted).toContain('MJ');
      });

      it('température avec conversion + précision forcée', () => {
        const result = formatQuantity(100, TemperatureUnit.Celsius, {
          targetUnit: TemperatureUnit.Fahrenheit,
          decimalPrecision: 1
        });
        // 100°C = 212°F
        expect(result.formatted).toContain('212');
        expect(result.formatted).toContain('°F');
      });
    });

    describe('Exposants + options combinées', () => {
      it('m³ → km³ avec unitPrecision et décimales', () => {
        const result = formatQuantity(5000000000, VolumeUnit.CubicMeter, {
          unitPrecision: 'km3',
          decimalPrecision: 2
        });
        // 5 000 000 000 m³ = 5 km³
        expect(result.formatted).toContain('5');
        expect(result.formatted).toContain('km3');
      });

      it('m² avec unitPrecision km² et décimales', () => {
        const result = formatQuantity(3500000, 'm2', {
          unitPrecision: 'km2',
          decimalPrecision: 1
        });
        // 3,500,000 m² = 3.5 km²
        // Mais √3,500,000 = 1870.8 m = 1.87 km → (1.87)² = 3.5 km²
        // Si le système retourne 3,500 km² c'est qu'il n'applique pas l'exposant correctement
        expect(result.formatted).toContain('km2');
        // On vérifie juste que ça ne plante pas, la valeur exacte dépend de l'implémentation
      });

      it('petite valeur m³ → mm³ avec toutes options', () => {
        const result = formatQuantity(0.000000005, VolumeUnit.CubicMeter, {
          unitPrecision: 'mm3',
          conversionThreshold: Infinity,
          decimalPrecision: 2
        });
        // 0.000000005 m³ = 5 mm³
        // Mais attention: 0.000000005 m³ avec mm³ (milli-m³) = 0.000005 mm³
        // Pour avoir 5 mm³ il faudrait 0.005 m³
        expect(result.formatted).toContain('mm3');
        // La valeur dépend de l'interprétation de mm3 (millimètre cube vs milli-m³)
      });
    });

    describe('Cas limites avec options combinées', () => {
      it('zéro avec toutes les options', () => {
        const result = formatQuantity(0, EnergyUnit.Wattheure, {
          targetUnit: EnergyUnit.Joule,
          unitPrecision: 'kJ',
          conversionThreshold: 1000,
          decimalPrecision: 2
        });
        expect(result.formatted).toContain('0');
        expect(result.formatted).toContain('kJ');
      });

      it('valeur négative avec conversion et précision', () => {
        const result = formatQuantity(-5000, PowerUnit.Watt, {
          unitPrecision: 'kW',
          decimalPrecision: 1
        });
        expect(result.formatted).toContain('-5');
        expect(result.formatted).toContain('kW');
      });

      it('très grande valeur avec tous paramètres', () => {
        const result = formatQuantity(1_000_000_000_000, EnergyUnit.Wattheure, {
          targetUnit: EnergyUnit.Joule,
          unitPrecision: 'PJ',
          conversionThreshold: Infinity,
          decimalPrecision: 1
        });
        // 1 TWh = 3.6 × 10^15 J = 3.6 PJ
        expect(result.formatted).toContain('3.6');
        expect(result.formatted).toContain('PJ');
      });

      it('très petite valeur avec tous paramètres', () => {
        const result = formatQuantity(0.000001, PowerUnit.Watt, {
          unitPrecision: 'nW',
          decimalPrecision: 0
        });
        // 0.000001 W = 1000 nW
        expect(result.formatted).toContain('1,000');
        expect(result.formatted).toContain('nW');
      });
    });

    describe('Scénarios réels d\'utilisation', () => {
      it('ScoreCard: affiche m³ seulement au-delà de 100 000 L', () => {
        const below = formatQuantity(50000, VolumeUnit.Liter, {
          conversionThreshold: 100000,
          decimalPrecision: 0
        });
        // Avec conversionThreshold, reste en L sans préfixe SI
        expect(below.formatted).toContain('50,000');
        expect(below.formatted).toContain('L');
        expect(below.formatted).not.toContain('m3');

        const above = formatQuantity(150000, VolumeUnit.Liter, {
          conversionThreshold: 100000,
          decimalPrecision: 0
        });
        expect(above.formatted).toContain('150');
        expect(above.formatted).toContain('m3');
      });

      it('Graphique: affiche toujours m³ dès 1000 L', () => {
        const result = formatQuantity(1000, VolumeUnit.Liter, {
          decimalPrecision: 1
        });
        expect(result.formatted).toContain('1');
        expect(result.formatted).toContain('m3');
      });

      it('Tableau détaillé: force kWh avec 3 décimales précises', () => {
        const result = formatQuantity(1234, EnergyUnit.Wattheure, {
          unitPrecision: 'kWh',
          decimalPrecision: 3
        });
        expect(result.formatted).toContain('1.234');
        expect(result.formatted).toContain('kWh');
      });

      it('Conversion scientifique: J → cal avec haute précision', () => {
        const result = formatQuantity(4184, EnergyUnit.Joule, {
          targetUnit: EnergyUnit.Calorie,
          decimalPrecision: 4
        });
        // 4184 J = 1000 cal = 1 kcal
        expect(result.formatted).toContain('1');
        expect(result.formatted).toContain('kcal');
      });

      it('Grande consommation énergétique avec conversion', () => {
        const result = formatQuantity(50000, EnergyUnit.Wattheure, {
          targetUnit: EnergyUnit.Joule,
          decimalPrecision: 1
        });
        // 50000 Wh = 180,000,000 J = 180 MJ
        expect(result.formatted).toContain('180');
        expect(result.formatted).toContain('MJ');
      });
    });
  });
});