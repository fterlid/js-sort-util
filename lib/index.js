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

export default {
    sort: function (arrayToSort, pathToKeyProperty) {
        _validateArray(arrayToSort);
        _validateKeyPath(pathToKeyProperty);
        
        return Sorter.sort(arrayToSort, pathToKeyProperty);
    }
};