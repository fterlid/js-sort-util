'use strict';
import Comparer from './comparer';

function getPropNames(propertyPath) {
    if (propertyPath != null) {
        return propertyPath.split('.');
    }
    
    return null;
}

function compare(a, b, props) {
    if (props != null) {
        props.forEach(p => {
            a = a[p];
            b = b[p];
        });
    }
    
    return Comparer.compare(a, b);
}

function sort(arr, propertyPath) {
    if (arr == null || arr instanceof Array === false) {
        throw new Error('sort: argument "arr" must be an Array');
    }
    
    if (propertyPath != null && typeof propertyPath !== 'string') {
        throw new Error('sort: argument "propertyPath" must be a string if provided');
    }
    
    let sortedArray = arr.map(el => el);
    let props = getPropNames(propertyPath);
    
    return sortedArray.sort((a, b) => compare(a, b, props));
}

export default {
    sort
};