'use strict';
import ArrayMatchers from './helpers/arrayMatchers';
import Sorter from '../lib/sorter';

describe('Sort function', () => {
    beforeEach(() => {
        jasmine.addMatchers(ArrayMatchers);
    });
    
    it('sorts string array in ascending, alphabetical order', () => {
        let sorted = Sorter.sort(['b', 'a', 'c', 'ab'], null, true);
        
        expect(sorted).toHaveSameOrderAs(['a', 'ab', 'b', 'c']);
    });
    
    it('sorts number array in ascending, numerical order', () => {
        let sorted = Sorter.sort([Infinity, 3, 0, 0.5, -2, -Infinity, -3], null, true);

        expect(sorted).toHaveSameOrderAs([-Infinity, -3, -2, 0, 0.5, 3, Infinity]);
    });
    
    it('returns a new array', () => {
        let unsorted = ['b', 'a', 'c', 'ab'];
        let sorted = Sorter.sort(unsorted, null, true);
        
        expect(unsorted).not.toBe(sorted);
    });
	
    it('does not change the order of the original array', () => {
        let unsorted = ['b', 'a', 'c', 'ab'];
        Sorter.sort(unsorted, null, true);
        
        expect(unsorted).toHaveSameOrderAs(['b', 'a', 'c', 'ab']);
    });
    
    it('can sort objects on a named property', () => {
        let obj1 = { prop: 1 };
        let obj2 = { prop: 2 };
        let obj3 = { prop: 3 };
        let unsorted = [obj3, obj1, obj2];
        
        let sorted = Sorter.sort(unsorted, 'prop', true);
        
        expect(sorted).toHaveSameOrderAs([obj1, obj2, obj3]);
    });
    
    it('can sort objects on a nested, named property', () => {
        let obj1 = { prop: {nested: 1} };
        let obj2 = { prop: {nested: 2} };
        let obj3 = { prop: {nested: 3} };
        let unsorted = [obj3, obj1, obj2];
        
        let sorted = Sorter.sort(unsorted, 'prop.nested', true);
        
        expect(sorted).toHaveSameOrderAs([obj1, obj2, obj3]);
    });
    
    it('can run on an array of mixed types without failing miserably', () => {
        let unsorted = [1, 'a', null, undefined, NaN, Infinity, {}, [], function () { }];

        expect(() => Sorter.sort(unsorted, null, true)).not.toThrowError();
    });
    
    it('can sort in descending order', () => {
        let sorted = Sorter.sort(['b', 'a', 'c', 'ab'], null, false);
        
        expect(sorted).toHaveSameOrderAs(['c', 'b', 'ab', 'a']);
    });
    
    it('performs a stable sort', () => {
        let obj1 = { prop: 1 };
        let obj2 = { prop: 42 };
        let obj3 = { prop: 42 };
        let unsorted = [obj3, obj1, obj2];
        
        let sorted = Sorter.sort(unsorted, 'prop', true);
        
        expect(sorted).toHaveSameOrderAs([obj1, obj3, obj2]);
    });
});