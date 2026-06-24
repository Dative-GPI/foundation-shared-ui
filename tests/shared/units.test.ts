import { useUnitFormatter } from '../../src/shared/foundation-shared-services/composables/useUnitFormatter';

// Mock useAppLanguageCode with en-US (decimal separator ".")
jest.mock('@dative-gpi/foundation-shared-services/composables', () => ({
  useAppLanguageCode: () => ({
    languageCode: { value: 'en-US' }
  })
}));

describe('useUnitFormatter - v1 (préfixe SI naïf)', () => {
  const { formatQuantity } = useUnitFormatter();

  describe('Sélection du préfixe SI', () => {
    it('1000 Wh -> 1.00 kWh', () => {
      const result = formatQuantity(1000, 'Wh');
      expect(result.formatted).toBe('1.00 kWh');
      expect(result.value).toBe('1.00');
      expect(result.unit).toBe('kWh');
    });

    it('1 500 000 W -> 1.50 MW', () => {
      expect(formatQuantity(1500000, 'W').formatted).toBe('1.50 MW');
    });

    it('0.005 A -> 5.00 mA', () => {
      expect(formatQuantity(0.005, 'A').formatted).toBe('5.00 mA');
    });

    it('42 W -> 42.00 W (pas de préfixe)', () => {
      expect(formatQuantity(42, 'W').formatted).toBe('42.00 W');
    });

    it('0 W -> 0.00 W (unité de base)', () => {
      expect(formatQuantity(0, 'W').formatted).toBe('0.00 W');
    });

    it('gère les valeurs négatives (-2000 W -> -2.00 kW)', () => {
      expect(formatQuantity(-2000, 'W').formatted).toBe('-2.00 kW');
    });
  });

  describe('Précision', () => {
    it('precision: 0', () => {
      expect(formatQuantity(42, 'W', { precision: 0 }).formatted).toBe('42 W');
    });

    it('precision: 3', () => {
      expect(formatQuantity(1234, 'W', { precision: 3 }).formatted).toBe('1.234 kW');
    });
  });

  describe('Valeurs non finies', () => {
    it('Infinity -> —', () => {
      const result = formatQuantity(Infinity, 'W');
      expect(result).toEqual({ formatted: '—', value: '—', unit: '' });
    });

    it('NaN -> —', () => {
      expect(formatQuantity(NaN, 'W').formatted).toBe('—');
    });
  });

  describe('Unité arbitraire (mode naïf)', () => {
    it('préfixe appliqué à n\'importe quelle unité', () => {
      expect(formatQuantity(1000, 'foo').formatted).toBe('1.00 kfoo');
    });
  });

  /*
   * =====================================================================
   * v2 — Conversions spéciales (NON IMPLÉMENTÉ)
   * ---------------------------------------------------------------------
   * Ces tests décrivent le comportement attendu pour la v2 : au-delà du
   * simple préfixe SI, certaines unités doivent basculer vers une unité
   * "métier" plus lisible selon des seuils.
   *
   * Volontairement commentés pour ne pas casser la pipeline de build.
   * À décommenter et valider lors de l'implémentation de la v2.
   * =====================================================================
   *
   * describe('v2 - Conversions spéciales', () => {
   *   it('1000 L -> 1 m3', () => {
   *     expect(formatQuantity(1000, 'L').formatted).toBe('1.00 m3');
   *   });
   *
   *   it('0.001 m3 -> 1 dm3', () => {
   *     expect(formatQuantity(0.001, 'm3').formatted).toBe('1.00 dm3');
   *   });
   *
   *   it('1000 kg -> 1 t', () => {
   *     expect(formatQuantity(1000, 'kg').formatted).toBe('1.00 t');
   *   });
   *
   *   // NOTE: à confirmer — 1 ha = 10 000 m², donc 1000 m² = 0.1 ha.
   *   // Seuil/unité cible à arbitrer lors de la v2.
   *   it('1000 m2 -> 1 ha', () => {
   *     expect(formatQuantity(1000, 'm2').formatted).toBe('1.00 ha');
   *   });
   * });
   */
});
