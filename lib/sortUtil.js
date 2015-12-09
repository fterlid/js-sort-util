'use strict';
import Comparer from './comparer';
import Mapper from './mapper';

let sort = function(arr, propertyPath) {
    if (arr == null || arr instanceof Array === false) {
        throw new Error('sort: argument "arr" must be an Array');
    }

    if (propertyPath != null && typeof propertyPath !== 'string') {
        throw new Error('sort: argument "propertyPath" must be a string if provided');
    }

    let keys = Mapper.mapKeys(arr, propertyPath);
    keys.sort(Comparer.stableCompare);

    return keys.map(el => arr[el.index]);
};

export default {
    sort
};