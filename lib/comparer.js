'use strict';

let compare = function (a, b) {
    let order = 0;
    if (typeof a.key === 'string') {
        order = a.key.localeCompare(b.key);
    }
    else {
        order = a.key - b.key;
    }

    if (order === 0) {
        order = a.index - b.index;
    }

    return order;
};

export default {
    compare
};