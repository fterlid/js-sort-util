'use strict';
import Comparer from '../lib/comparer';

describe('compare function', () => {
    
    it('compares letter strings in ascending, alphabetical order', () => {
        expect(Comparer.compare({key: 'a', index: 2}, {key: 'b', index: 1})).toBeLessThan(0);
        expect(Comparer.compare({key: 'd', index: 2}, {key: 'c', index: 3})).toBeGreaterThan(0);
    });
    
    it('compares equal letter strings according to index in ascending order', () => {
        expect(Comparer.compare({key: 'a', index: 1}, {key: 'a', index: 2})).toBeLessThan(0);
        expect(Comparer.compare({key: 'a', index: 4}, {key: 'a', index: 3})).toBeGreaterThan(0);
        expect(Comparer.compare({key: 'a', index: 2}, {key: 'a', index: 2})).toBe(0);
    });
    
    it('compares number strings in ascending, numerical order', () => {
        expect(Comparer.compare({ key: '2', index: 2 }, { key: '10', index: 1 })).toBeLessThan(0);
        expect(Comparer.compare({ key: '40', index: 2 }, { key: '3', index: 3 })).toBeGreaterThan(0);
        expect(Comparer.compare({ key: '5', index: 8 }, { key: '5', index: 8 })).toBe(0);
    });
    
    it('compares number strings and numbers in ascending, numerical order', () => {
        expect(Comparer.compare({ key: '2', index: 2 }, { key: 10, index: 1 })).toBeLessThan(0);
        expect(Comparer.compare({ key: 2, index: 2 }, { key: '10', index: 1 })).toBeLessThan(0);
        
        expect(Comparer.compare({ key: '40', index: 2 }, { key: 3, index: 3 })).toBeGreaterThan(0);
        expect(Comparer.compare({ key: 40, index: 2 }, { key: '3', index: 3 })).toBeGreaterThan(0);
        
        expect(Comparer.compare({ key: '5', index: 8 }, { key: 5, index: 8 })).toBe(0);
        expect(Comparer.compare({ key: 5, index: 8 }, { key: '5', index: 8 })).toBe(0);
    });
    
    it('compares numbers in ascending, numerical order', () => {
        expect(Comparer.compare({key: 1, index: 2}, {key: 3, index: 1})).toBeLessThan(0);
        expect(Comparer.compare({key: 5, index: 2}, {key: 4, index: 3})).toBeGreaterThan(0);
        expect(Comparer.compare({key: 42, index: 2}, {key: 42, index: 2})).toBe(0);
    });
    
    it('compares equal numbers according to index in ascending order', () => {
        expect(Comparer.compare({key: 42, index: 1}, {key: 42, index: 2})).toBeLessThan(0);
        expect(Comparer.compare({key: 42, index: 4}, {key: 42, index: 3})).toBeGreaterThan(0);
        expect(Comparer.compare({key: 42, index: 2}, {key: 42, index: 2})).toBe(0);
    });
});