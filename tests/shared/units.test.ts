import { ref } from 'vue';
import { useUnitFormat } from '../../src/shared/foundation-shared-services/composables/useUnitFormat';

// Mock useAppLanguageCode with en-US (decimal separator ".")
jest.mock('../../src/shared/foundation-shared-services/composables/app', () => ({
  useAppLanguageCode: () => ({
    languageCode: { value: 'en-US' }
  })
}));

describe('useUnitFormat - v1 (préfixe SI naïf)', () => {
  const { format } = useUnitFormat();

  describe('Sélection du préfixe SI', () => {
    it('1000 Wh -> 1 kWh', () => {
      const result = format(1000, 'Wh');
      expect(result.formattedText.value).toBe('1 kWh');
      expect(result.formattedValue.value).toBe('1');
      expect(result.unit.value).toBe('kWh');
    });

    it('1 500 000 W -> 1.5 MW', () => {
      expect(format(1500000, 'W').formattedText.value).toBe('1.5 MW');
    });

    it('0.005 A -> 5 mA', () => {
      expect(format(0.005, 'A').formattedText.value).toBe('5 mA');
    });

    it('42 W -> 42 W (pas de préfixe)', () => {
      expect(format(42, 'W').formattedText.value).toBe('42 W');
    });

    it('0 W -> 0 W (unité de base)', () => {
      expect(format(0, 'W').formattedText.value).toBe('0 W');
    });

    it('gère les valeurs négatives (-2000 W -> -2 kW)', () => {
      expect(format(-2000, 'W').formattedText.value).toBe('-2 kW');
    });
  });

  describe('Précision', () => {
    it('precision: 0', () => {
      const { format } = useUnitFormat(0);
      expect(format(42, 'W').formattedText.value).toBe('42 W');
    });

    it('precision: 3', () => {
      const { format } = useUnitFormat(3);
      expect(format(1234, 'W').formattedText.value).toBe('1.234 kW');
    });

    it('sans précision -> défaut Intl (max 3 décimales)', () => {
      // 123456 W -> 123.456 kW
      expect(format(123456, 'W').formattedText.value).toBe('123.456 kW');
    });

    it('précision réactive (ref)', () => {
      const precision = ref<number | undefined>(0);
      const { format } = useUnitFormat(precision);
      const { formattedText } = format(1234, 'W');

      expect(formattedText.value).toBe('1 kW');

      precision.value = 3;
      expect(formattedText.value).toBe('1.234 kW');
    });
  });

  describe('Valeurs non finies', () => {
    it('Infinity -> -', () => {
      const result = format(Infinity, 'W');
      expect(result.formattedValue.value).toBe('-');
      expect(result.unit.value).toBe('');
      expect(result.formattedText.value).toBe('-');
    });

    it('NaN -> -', () => {
      expect(format(NaN, 'W').formattedText.value).toBe('-');
    });
  });

  describe('Unité arbitraire (mode naïf)', () => {
    it('préfixe appliqué à n\'importe quelle unité', () => {
      expect(format(1000, 'foo').formattedText.value).toBe('1 kfoo');
    });
  });

  describe('Réactivité', () => {
    it('recalcule formattedText quand la valeur (ref) change', () => {
      const power = ref(1000);
      const { formattedText } = format(power, 'W');

      expect(formattedText.value).toBe('1 kW');

      power.value = 1500000;
      expect(formattedText.value).toBe('1.5 MW');
    });

    it('recalcule quand l\'unité (ref) change', () => {
      const unit = ref('W');
      const { formattedText } = format(2000, unit);

      expect(formattedText.value).toBe('2 kW');

      unit.value = 'Wh';
      expect(formattedText.value).toBe('2 kWh');
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
   *     expect(format(1000, 'L').formattedText.value).toBe('1 m3');
   *   });
   *
   *   it('0.001 m3 -> 1 dm3', () => {
   *     expect(format(0.001, 'm3').formattedText.value).toBe('1 dm3');
   *   });
   *
   *   it('1000 kg -> 1 t', () => {
   *     expect(format(1000, 'kg').formattedText.value).toBe('1 t');
   *   });
   *
   *   // NOTE: à confirmer — 1 ha = 10 000 m², donc 1000 m² = 0.1 ha.
   *   // Seuil/unité cible à arbitrer lors de la v2.
   *   it('1000 m2 -> 1 ha', () => {
   *     expect(format(1000, 'm2').formattedText.value).toBe('1 ha');
   *   });
   * });
   */
});
