import React from 'react';
import { isValidLuhn } from './isValidLuhn';

describe('isValidLuhn', () => {
  it('should return true for valid Luhn numbers', () => {
    expect(isValidLuhn('4539 1488 0343 6467')).toBe(true);
    expect(isValidLuhn('4485275742308327')).toBe(true);
    expect(isValidLuhn('4485 2757 4230 8327')).toBe(true);
    expect(isValidLuhn('12345678903555')).toBe(true);
  });

  it('should return false for invalid Luhn numbers', () => {
    expect(isValidLuhn('4539 1488 0343 6468')).toBe(false);
    expect(isValidLuhn('4485275742308328')).toBe(false);
    expect(isValidLuhn('12345678903554')).toBe(false);
    expect(isValidLuhn('')).toBe(false);
  });

  it('should return false for non-numeric characters', () => {
    expect(isValidLuhn('abcd efgh ijkl mnop')).toBe(false);
    expect(isValidLuhn('1234abcd5678')).toBe(false);
  });
});

