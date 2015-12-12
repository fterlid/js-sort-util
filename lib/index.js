'use strict';
import Sorter from './sorter'; 

let _validateArray = function (arr) {
    if (arr == null || arr instanceof Array === false) {
        throw new Error('sort: Expected an Array as first argument.');
    }
};

let _validateKeyPath = function (propertyPath) {
    if (propertyPath != null && typeof propertyPath !== 'string') {
        throw new Error('sort: Expected a string as second argument.');
    }
};

let _ensureAscendingArg = function (ascending) {
    if (ascending == null) {
        return true;
    }
    else if (typeof ascending !== 'boolean') {
        throw new Error('sort: Expected a boolean as third argument.');
    }
    
    return ascending;
};

export default {
    sort: function (arrayToSort, pathToKeyProperty, ascending) {
        _validateArray(arrayToSort);
        _validateKeyPath(pathToKeyProperty);
        ascending = _ensureAscendingArg(ascending);
        
        return Sorter.sort(arrayToSort, pathToKeyProperty, ascending);
    }
};