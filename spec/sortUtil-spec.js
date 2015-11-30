'use strict';

import SortUtil from '../lib/sortUtil';

describe('Sort function', function(){
    it('sorts string array in ascending, alphabetical order', function(){
        let sorted = SortUtil.sort(['b', 'a', 'c', 'ab']);
        
        expect(sorted[0]).toBe('a');
        expect(sorted[1]).toBe('ab');
        expect(sorted[2]).toBe('b');
        expect(sorted[3]).toBe('c');
    });
    
    it('sorts number array in ascending, numerical order', function(){
        let sorted = SortUtil.sort([Infinity, 3, 0, 0.5, -2, -Infinity, -3]);
        console.log(sorted);
        
        expect(sorted[0]).toBe(-Infinity);
        expect(sorted[1]).toBe(-3);
        expect(sorted[2]).toBe(-2);
        expect(sorted[3]).toBe(0);
        expect(sorted[4]).toBe(0.5);
        expect(sorted[5]).toBe(3);
        expect(sorted[6]).toBe(Infinity);
    });
    
    it('returns a new array', function(){
        let unsorted = ['b', 'a', 'c', 'ab'];
        let sorted = SortUtil.sort(unsorted);
        
        expect(unsorted).not.toBe(sorted);
    });
	
    it('does not change the order of the original array', function(){
        let unsorted = ['b', 'a', 'c', 'ab'];
        SortUtil.sort(unsorted);
        
        expect(unsorted[0]).toBe('b');
        expect(unsorted[1]).toBe('a');
        expect(unsorted[2]).toBe('c');
        expect(unsorted[3]).toBe('ab');
    });
});