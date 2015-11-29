'use strict';

import SortUtil from '../lib/sortUtil';

describe('Sort utility tests', function(){
	it('sorts an array of strings in ascending, alphabetical order', function(){
		let sorted = SortUtil.sort(['b', 'a', 'c', 'ab']);
		
		expect(sorted[0]).toBe('a');
		expect(sorted[1]).toBe('ab');
		expect(sorted[2]).toBe('b');
		expect(sorted[3]).toBe('c');
	});
	
	it('does not change the order of the original array', function(){
		let unsorted = ['b', 'a', 'c', 'ab'];
		let sorted = SortUtil.sort(unsorted);
		
		expect(unsorted[0]).toBe('b');
		expect(unsorted[1]).toBe('a');
		expect(unsorted[2]).toBe('c');
		expect(unsorted[3]).toBe('ab');
	});
	
	it('returns a new array', function(){
		let unsorted = ['b', 'a', 'c', 'ab'];
		let sorted = SortUtil.sort(unsorted);
		
		expect(unsorted).not.toBe(sorted);
	});
});