export const capNumberToString = (value: number, maximum: number = 99): string => {
  if (value > maximum) {
    return `${maximum}+`;
  }
  return `${value.toString()}`;
}

export const getBadgeFromNumber = (value: number, parenthesis: boolean = false, maximum: number = 99): string => {
  if (value < 1) {
    return "";
  }
  return parenthesis ? `(${capNumberToString(value, maximum)})` : capNumberToString(value, maximum);
}