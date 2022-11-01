import { sum } from './index';

describe('sum()', () => {
  it('adds two number', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
