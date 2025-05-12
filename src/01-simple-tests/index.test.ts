// Uncomment the code below and write your tests
// import { simpleCalculator, Action } from './index';

import { Action, simpleCalculator } from '01-simple-tests';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 1, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: -1, b: 2, action: Action.Add })).toBe(1);
    expect(simpleCalculator({ a: 1, b: -2, action: Action.Add })).toBe(-1);
    expect(simpleCalculator({ a: -1, b: -2, action: Action.Add })).toBe(-3);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Add })).toBe(0);
    expect(simpleCalculator({ a: 0, b: 1, action: Action.Add })).toBe(1);
    expect(simpleCalculator({ a: 1, b: 0, action: Action.Add })).toBe(1);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 1, action: Action.Subtract })).toBe(1);
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Subtract })).toBe(-1);
    expect(simpleCalculator({ a: -1, b: 2, action: Action.Subtract })).toBe(-3);
    expect(simpleCalculator({ a: 1, b: -2, action: Action.Subtract })).toBe(3);
    expect(simpleCalculator({ a: -1, b: -2, action: Action.Subtract })).toBe(1);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 0, b: 1, action: Action.Subtract })).toBe(-1);
    expect(simpleCalculator({ a: 1, b: 0, action: Action.Subtract })).toBe(1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 3, b: 2, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: -2, b: 3, action: Action.Multiply })).toBe(-6);
    expect(simpleCalculator({ a: 2, b: -3, action: Action.Multiply })).toBe(-6);
    expect(simpleCalculator({ a: -2, b: -3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 0, b: 3, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 2, b: 0, action: Action.Multiply })).toBe(0);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 6, b: 3, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 3, b: 6, action: Action.Divide })).toBe(0.5);
    expect(simpleCalculator({ a: -6, b: 3, action: Action.Divide })).toBe(-2);
    expect(simpleCalculator({ a: 6, b: -3, action: Action.Divide })).toBe(-2);
    expect(simpleCalculator({ a: 0, b: 3, action: Action.Divide })).toBe(0);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(simpleCalculator({ a: 1, b: 6, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(simpleCalculator({ a: 2, b: -1, action: Action.Exponentiate })).toBe(
      0.5,
    );
    expect(simpleCalculator({ a: -2, b: 2, action: Action.Exponentiate })).toBe(
      4,
    );
    expect(simpleCalculator({ a: -2, b: 3, action: Action.Exponentiate })).toBe(
      -8,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: 'invalid' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: 'invalid', b: 3, action: Action.Add })).toBe(
      null,
    );
    expect(simpleCalculator({ a: 2, b: 'invalid', action: Action.Add })).toBe(
      null,
    );
    expect(simpleCalculator({ a: null, b: null, action: Action.Add })).toBe(
      null,
    );
  });
});
