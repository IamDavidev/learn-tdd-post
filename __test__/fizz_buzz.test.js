import { describe, it, expect } from 'vitest';

function fizz_buzz(number) {
  if (typeof number !== 'number') throw new Error('parameter is required');
  if (isNaN(number)) throw new Error('Invalid type')

  if (number % 3 === 0) return 'fizz'

  return number

}

describe('fizz buzz', () => {
  it('shoulbe be  a function ', () => {
    expect(typeof fizz_buzz).toBe('function');
  });

  it('should throw if noty is provided as parameter', () => {
    expect(() => fizz_buzz()).toThrow(/required/);
  });

  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizz_buzz(NaN)).toThrow(/Invalid type/)
  })

  it('should return number if number not if is not visible by 3 or 5', () => {
    const number = 1
    expect(fizz_buzz(number)).toBe(number)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizz_buzz(3)).toBe('fizz')
  })

  it('shuold return "fizz" if number provided  is multiple of 3 ', () => {
    expect(fizz_buzz(6)).toBe('fizz')
    expect(fizz_buzz(12)).toBe('fizz')
    expect(fizz_buzz(18)).toBe('fizz')
    expect(fizz_buzz(21)).toBe('fizz')
    expect(fizz_buzz(24)).toBe('fizz')

  })

});

