const MinusOperator = "-";

/**
 * Splits an expression by operators while keeping unary minus signs.
 */
const splitByOperators = (expression: string): string[] => {
  const tokens: string[] = [];
  let current = '';
  let expectOperand = true;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if ('+-*/'.includes(char)) {
      const isUnaryMinus = char === '-' && expectOperand;
      if (isUnaryMinus) {
        current += char;
        expectOperand = true;
      } else {
        if (expectOperand) {
          // 2 consecutive operators or operator at the start
          return [];
        }
        if (current !== '') {
          tokens.push(current);
          current = '';
        }
        tokens.push(char);
        expectOperand = true;
      }
    } else {
      current += char;
      expectOperand = false;
    }
  }
  if (current !== '') {
    tokens.push(current);
  }
  return tokens;
};

// Matches a nested block of parenthesis
const parenthesisRegex = new RegExp(/\([^)(]+\)/gm);

// Match a positive decimal number
const decimalRegex = new RegExp(/^\d+(.\d+)?$/gm);

const validateBlock = (block: string, operands: string[] = [], variables: string[] = []) => {
  // Remove parenthesis from the block
  block = block.replaceAll("(", "").replaceAll(")", "");

  // Split block on operators (Leave negative signs)
  const tokens = splitByOperators(block);
  if (tokens.length === 0) {
    return false;
  }
  const components = tokens.filter(token => !'+-*/'.includes(token));

  // Check if each bit is a valid operand
  for (let i = 0; i < components.length; i++) {
    // Remove negative sign
    if (components[i].startsWith(MinusOperator)) {
        components[i] = components[i].substring(1);
    }
    if (!operands.includes(components[i]) && !variables.includes(components[i]) && !components[i].match(decimalRegex)) {
        return false;
    }
  }
  return true;
}

export const validateOperation = (rawOperation: string, operands: string[] = [], variables: string[] = []) => {
  // Remove spaces
  let operation = rawOperation.replaceAll(" ", "");

  // Check parenthesis
  const parenthesis: number[] = [];

  for (let i = 0; i < operation.length; i++) {
    if (operation[i] == '(') {
      parenthesis.push(i);
    }
    else if (operation[i] == ')') {
      if (parenthesis.length > 0) {
        if (i == parenthesis.pop()! + 1) {
          return false;
        }
      }
      else {
        return false;
      }
    }
  }
  if (parenthesis.length > 0) {
    return false;
  }

  // Check each block between parenthesis
  let match = operation.match(parenthesisRegex);

  while (match?.[0]) {
    if (!validateBlock(match[0], operands, variables)) {
      return false;
    }
    operation = operation.replace(match[0], "1");
    match = operation.match(parenthesisRegex);
  }
  return validateBlock(operation, operands, variables);
}