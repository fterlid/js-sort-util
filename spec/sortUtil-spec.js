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
});