'use strict';
import Facade from '../lib/index';

describe('Sort function', () => {
    it('throws if first argument is not an Array', () => {
        let expectedErrorText = 'sort: Expected an Array as first argument.';
        let arg = undefined;
        let callSort = () => Facade.sort(arg);
        
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = null;
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 'a string';
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 42;
        expect(callSort).toThrowError(expectedErrorText);
    });
    
    it('throws if propertyPath argument is provided and is not a string', () => {
        let expectedErrorText = 'sort: Expected a string as second argument.';
        let arg = [];
        let callSort = () => Facade.sort([], arg);
        
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = {};
        expect(callSort).toThrowError(expectedErrorText);
        
        arg = 42;
        expect(callSort).toThrowError(expectedErrorText);
    });
});