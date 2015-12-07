'use strict';
import Comparer from '../lib/comparer';

describe('Sort function', () => {
    
    it('compare letter strings in ascending, alphabetical order', () => {
        expect(Comparer.compare('a', 'b')).toBeLessThan(0);
        expect(Comparer.compare('b', 'a')).toBeGreaterThan(0);
        expect(Comparer.compare('z', 'z')).toBe(0);
    });
    
    it('compare numbers in ascending, numerical order', () => {
        expect(Comparer.compare(1, 3)).toBeLessThan(0);
        expect(Comparer.compare(5, 4)).toBeGreaterThan(0);
        expect(Comparer.compare(42, 42)).toBe(0);
    });
});