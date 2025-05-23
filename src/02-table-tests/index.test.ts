// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  // continue cases for other actions
  { a: -1, b: 2, action: Action.Add, expected: 1 },
  { a: 1, b: -2, action: Action.Add, expected: -1 },
  { a: -1, b: -2, action: Action.Add, expected: -3 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },
  { a: 0, b: 1, action: Action.Add, expected: 1 },
  { a: 1, b: 0, action: Action.Add, expected: 1 },

  // for subtract
  { a: 2, b: 1, action: Action.Subtract, expected: 1 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: -1, b: 2, action: Action.Subtract, expected: -3 },
  { a: 1, b: -2, action: Action.Subtract, expected: 3 },
  { a: -1, b: -2, action: Action.Subtract, expected: 1 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
  { a: 0, b: 1, action: Action.Subtract, expected: -1 },
  { a: 1, b: 0, action: Action.Subtract, expected: 1 },

  // for multiply
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },
  { a: 2, b: -3, action: Action.Multiply, expected: -6 },
  { a: -2, b: -3, action: Action.Multiply, expected: 6 },
  { a: 0, b: 0, action: Action.Multiply, expected: 0 },
  { a: 0, b: 3, action: Action.Multiply, expected: 0 },
  { a: 2, b: 0, action: Action.Multiply, expected: 0 },

  // for divide
  { a: 6, b: 3, action: Action.Divide, expected: 2 },
  { a: 3, b: 6, action: Action.Divide, expected: 0.5 },
  { a: -6, b: 3, action: Action.Divide, expected: -2 },
  { a: 6, b: -3, action: Action.Divide, expected: -2 },
  { a: 0, b: 3, action: Action.Divide, expected: 0 },

  // for exponentiate
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 1, b: 6, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: -1, action: Action.Exponentiate, expected: 0.5 },
  { a: -2, b: 3, action: Action.Exponentiate, expected: -8 },
  { a: -2, b: 2, action: Action.Exponentiate, expected: 4 },

  // for invalid cases
  { a: 'invalid', b: 2, action: Action.Add, expected: null },
  { a: 2, b: 'invalid', action: Action.Add, expected: null },
  { a: 'invalid', b: 'invalid', action: Action.Add, expected: null },
  { a: 2, b: 2, action: 'invalid', expected: null },
];

describe('simpleCalculator', () => {
  // Consider to use Jest table tests API to test all cases above
  test.each(testCases)(
    'should calculate $action of $a and $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
