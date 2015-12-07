'use strict';

function compare(a, b) {
    if (typeof a === 'string') {
        return a.localeCompare(b);
    }
    
    return a - b;
}

export default {
    compare
};