'use strict';
import Comparer from './comparer';
import Mapper from './mapper';

let sort = function(arr, propertyPath, ascending) {
    let keys = Mapper.mapKeys(arr, propertyPath);
    
    if (ascending) {
        keys.sort(Comparer.compareAsc);
    }
    else {
        keys.sort(Comparer.compareDesc);
    }

    return keys.map(el => arr[el.index]);
};

export default {
    sort
};