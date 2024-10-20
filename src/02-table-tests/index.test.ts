import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 4, b: 5, action: Action.Multiply, expected: 20 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },
  { a: 1, b: 0, action: Action.Divide, expected: Infinity },
  { a: 'invalid', b: 2, action: Action.Add, expected: null },
  { a: 1, b: 'invalid', action: Action.Subtract, expected: null },
  { a: 1, b: 2, action: 'invalid', expected: null },
];

describe('simpleCalculator', () => {
  it.each(testCases)(
    'should return $expected for $a $action $b',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
