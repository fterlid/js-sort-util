'use strict';
import ArrayMatchers from './helpers/arrayMatchers';
import SortUtil from '../lib/sortUtil';

describe('Sort function', () => {
    beforeEach(() => {
        jasmine.addMatchers(ArrayMatchers);
    });
    
    it('sorts string array in ascending, alphabetical order', () => {
        let sorted = SortUtil.sort(['b', 'a', 'c', 'ab']);
        
        expect(sorted).toHaveSameOrderAs(['a', 'ab', 'b', 'c']);
    });
    
    it('sorts number array in ascending, numerical order', () => {
        let sorted = SortUtil.sort([Infinity, 3, 0, 0.5, -2, -Infinity, -3]);

        expect(sorted).toHaveSameOrderAs([-Infinity, -3, -2, 0, 0.5, 3, Infinity]);
    });
    
    it('returns a new array', () => {
        let unsorted = ['b', 'a', 'c', 'ab'];
        let sorted = SortUtil.sort(unsorted);
        
        expect(unsorted).not.toBe(sorted);
    });
	
    it('does not change the order of the original array', () => {
        let unsorted = ['b', 'a', 'c', 'ab'];
        SortUtil.sort(unsorted);
        
        expect(unsorted).toHaveSameOrderAs(['b', 'a', 'c', 'ab']);
    });
    
    it('can sort objects on a named property', () => {
        let obj1 = { prop: 1 };
        let obj2 = { prop: 2 };
        let obj3 = { prop: 3 };
        let unsorted = [obj3, obj1, obj2];
        
        let sorted = SortUtil.sort(unsorted, 'prop');
        
        expect(sorted).toHaveSameOrderAs([obj1, obj2, obj3]);
    });
    
    it('can sort objects on a nested, named property', () => {
        let obj1 = { prop: {nested: 1} };
        let obj2 = { prop: {nested: 2} };
        let obj3 = { prop: {nested: 3} };
        let unsorted = [obj3, obj1, obj2];
        
        let sorted = SortUtil.sort(unsorted, 'prop.nested');
        
        expect(sorted).toHaveSameOrderAs([obj1, obj2, obj3]);
    });
    
    it('throws if first argument is not an Array', () => {
        let expectedErrorText = 'sort: argument "arr" must be an Array';
        let arg = undefined;
        let callSort = () => SortUtil.sort(arg);
        
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = null;
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 'a string';
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 42;
        expect(callSort).toThrowError(expectedErrorText);
    });
    
    it('throws if propertyPath argument is provided and is not a string', () => {
        let expectedErrorText = 'sort: argument "propertyPath" must be a string if provided';
        let arg = [];
        let callSort = () => SortUtil.sort([], arg);
        
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = {};
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 42;
        expect(callSort).toThrowError(expectedErrorText);
    });
});