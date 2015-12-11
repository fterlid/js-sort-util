'use strict';
import Comparer from './comparer';
import Mapper from './mapper';

let sort = function(arr, propertyPath) {
    let keys = Mapper.mapKeys(arr, propertyPath);
    keys.sort(Comparer.compareAsc);

    return keys.map(el => arr[el.index]);
};

export default {
    sort
};