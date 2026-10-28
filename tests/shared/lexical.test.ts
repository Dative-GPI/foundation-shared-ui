import { emptyLexicalState, isLexicalState } from '../../src/shared/foundation-shared-components/utils/lexical';

describe('isLexicalState', () => {
  test('should detect serialized and object Lexical states', () => {
    expect(isLexicalState(emptyLexicalState)).toBe(true);
    expect(isLexicalState(JSON.parse(emptyLexicalState))).toBe(true);
    expect(isLexicalState(`  ${emptyLexicalState}`)).toBe(true);
  });

  test('should not take markdown for a Lexical state', () => {
    for (const value of [null, '', '# Title', '{{name}} is here', '{ not json', '{"some":"json"}']) {
      expect(isLexicalState(value)).toBe(false);
    }
  });
});
