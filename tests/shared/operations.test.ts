import { validateOperation } from '../../src/shared/foundation-shared-components/utils/operations';

describe('validateOperation', () => {
  const operands = ['1', '2', '3', '4', '5', '10'];
  const variables = ['x', 'y', 'z'];

  test('should validate simple addition', () => {
    expect(validateOperation('1+2', operands, variables)).toBe(true);
  });

  test('should validate nested parentheses', () => {
    expect(validateOperation('(1+2)*(3+4)', operands, variables)).toBe(true);
  });

  test('should validate operation with variables', () => {
    expect(validateOperation('x*y+2', operands, variables)).toBe(true);
  });

  test('should validate negative numbers', () => {
    expect(validateOperation('-2+3', operands, variables)).toBe(true);
    expect(validateOperation('3*-2', operands, variables)).toBe(true);
  });

  test('should reject operation with unknown variable', () => {
    expect(validateOperation('a+2', operands, variables)).toBe(false);
  });

  test('should reject operation with malformed parentheses', () => {
    expect(validateOperation('(1+2)) + 3', operands, variables)).toBe(false);
    expect(validateOperation('(1+2', operands, variables)).toBe(false);
    expect(validateOperation('1+()', operands, variables)).toBe(false);
  });

  test('should reject if parentheses are empty or only contain operators', () => {
    expect(validateOperation('()+2', operands, variables)).toBe(false);
    expect(validateOperation('(*2)', operands, variables)).toBe(false);
  });

  test('should validate decimal values', () => {
    expect(validateOperation('1.5+2.3', ['1.5', '2.3'], variables)).toBe(true);
  });

  test('should reject invalid decimals or malformed expressions', () => {
    expect(validateOperation('1..2+3', operands, variables)).toBe(false);
    expect(validateOperation('1+*2', operands, variables)).toBe(false);
    expect(validateOperation('--2+3', operands, variables)).toBe(false);
  });

  test('should ignore spaces', () => {
    expect(validateOperation(' 1 + ( 2 * 3 ) ', operands, variables)).toBe(true);
  });

  test('should validate subtraction with lookbehind', () => {
    expect(validateOperation('5-2', operands, variables)).toBe(true);
    expect(validateOperation('10-(3+2)', operands, variables)).toBe(true);
  });

  test('should validate negative numbers with lookbehind after operator', () => {
    expect(validateOperation('3*-2', operands, variables)).toBe(true); // multiplication avec négatif
    expect(validateOperation('(4+2)/-3', operands, variables)).toBe(true); // division avec négatif
  });

  test('should validate chained operations mixing negative numbers and subtraction', () => {
    expect(validateOperation('10--5', operands, variables)).toBe(true); // double négation : 10 - (-5)
    expect(validateOperation('--5+3', operands, variables)).toBe(false); // double unary minus → invalide selon tes règles
  });

  test('should reject malformed negative signs', () => {
    expect(validateOperation('5---2', operands, variables)).toBe(false); // trop de minus
    expect(validateOperation('3*/-2', operands, variables)).toBe(false); // opérateur invalide suivi d un négatif
  });

  test('should validate expressions using variables with negative values', () => {
    expect(validateOperation('-x+y', operands, variables)).toBe(true);
    expect(validateOperation('x*-y', operands, variables)).toBe(true);
  });

});
