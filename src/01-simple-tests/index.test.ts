import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 15,
      b: 3,
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(18);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 15,
      b: 3,
      action: Action.Subtract,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(12);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 15,
      b: 3,
      action: Action.Multiply,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(45);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 15,
      b: 3,
      action: Action.Divide,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 15,
      b: 3,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(3375);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 15,
      b: 3,
      action: 'invalid' as Action,
    };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: 'invalid',
      b: 3,
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });
});
