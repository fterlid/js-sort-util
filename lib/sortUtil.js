'use strict';

function compare(a, b){
    if (typeof a === 'string'){
        return a.localeCompare(b);
    }
    
    return a - b;
}

function sort(arr){
    let sortedArray = arr.map(el => el);
    return sortedArray.sort(compare);
}

export default {
    sort
};