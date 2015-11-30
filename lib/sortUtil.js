'use strict';

function compare(a, b, propName){
    if (propName != null && typeof propName === 'string'){
        a = a[propName];
        b = b[propName];
    }
    if (typeof a === 'string'){
        return a.localeCompare(b);
    }
    
    return a - b;
}

function sort(arr, propName){
    let sortedArray = arr.map(el => el);
    return sortedArray.sort((a, b) =>compare(a, b, propName));
}

export default {
    sort
};