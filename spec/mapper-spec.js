'use strict';
import Mapper from '../lib/mapper';

describe('mapKeys function', () => {
    it('maps keys from arrays with simple valued elements', () => {
        let mapped = Mapper.mapKeys(['z', 'y', 'x']);
        
        expect(mapped).toContain({ index: 0, key: 'z' });
        expect(mapped).toContain({ index: 1, key: 'y' });
        expect(mapped).toContain({ index: 2, key: 'x' });
    });
    
    it('maps keys from array of objects on a named property', () => {
        let obj0 = { prop: 'z' };
        let obj1 = { prop: 'y' };
        let obj2 = { prop: 'x' };
        
        let mapped = Mapper.mapKeys([obj0, obj1, obj2], 'prop');
        
        expect(mapped).toContain({ index: 0, key: 'z' });
        expect(mapped).toContain({ index: 1, key: 'y' });
        expect(mapped).toContain({ index: 2, key: 'x' });
    });
    
    it('maps keys from array of objects on a nested, named property', () => {
        let obj0 = { prop: {nested: 'z'} };
        let obj1 = { prop: {nested: 'y'} };
        let obj2 = { prop: {nested: 'x'} };

        let mapped = Mapper.mapKeys([obj0, obj1, obj2], 'prop.nested');
        
        expect(mapped).toContain({ index: 0, key: 'z' });
        expect(mapped).toContain({ index: 1, key: 'y' });
        expect(mapped).toContain({ index: 2, key: 'x' });
    });
});