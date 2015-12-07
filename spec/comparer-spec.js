'use strict';
import Comparer from '../lib/comparer';

describe('compare function', () => {
    
    it('compares letter strings in ascending, alphabetical order', () => {
        expect(Comparer.compare('a', 'b')).toBeLessThan(0);
        expect(Comparer.compare('b', 'a')).toBeGreaterThan(0);
        expect(Comparer.compare('z', 'z')).toBe(0);
    });
    
    it('compares numbers in ascending, numerical order', () => {
        expect(Comparer.compare(1, 3)).toBeLessThan(0);
        expect(Comparer.compare(5, 4)).toBeGreaterThan(0);
        expect(Comparer.compare(42, 42)).toBe(0);
    });
});

describe('stableCompare function', () => {
    
    it('compares letter strings in ascending, alphabetical order', () => {
        expect(Comparer.stableCompare({key: 'a', index: 2}, {key: 'b', index: 1})).toBeLessThan(0);
        expect(Comparer.stableCompare({key: 'd', index: 2}, {key: 'c', index: 3})).toBeGreaterThan(0);
    });
    
    it('compares equal letter strings according to index in ascending order', () => {
        expect(Comparer.stableCompare({key: 'a', index: 1}, {key: 'a', index: 2})).toBeLessThan(0);
        expect(Comparer.stableCompare({key: 'a', index: 4}, {key: 'a', index: 3})).toBeGreaterThan(0);
        expect(Comparer.stableCompare({key: 'a', index: 2}, {key: 'a', index: 2})).toBe(0);
    });
    
    it('compares numbers in ascending, numerical order', () => {
        expect(Comparer.stableCompare({key: 1, index: 2}, {key: 3, index: 1})).toBeLessThan(0);
        expect(Comparer.stableCompare({key: 5, index: 2}, {key: 4, index: 3})).toBeGreaterThan(0);
        expect(Comparer.stableCompare({key: 42, index: 2}, {key: 42, index: 2})).toBe(0);
    });
    
    it('compares equal numbers according to index in ascending order', () => {
        expect(Comparer.stableCompare({key: 42, index: 1}, {key: 42, index: 2})).toBeLessThan(0);
        expect(Comparer.stableCompare({key: 42, index: 4}, {key: 42, index: 3})).toBeGreaterThan(0);
        expect(Comparer.stableCompare({key: 42, index: 2}, {key: 42, index: 2})).toBe(0);
    });
});