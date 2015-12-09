'use strict';

function _getPropertyNames(propertyPath) {
    if (propertyPath != null) {
        return propertyPath.split('.');
    }
    
    return null;
}

function _getKey(element, propertyNames) {
    if (propertyNames != null) {
        propertyNames.forEach(p => element = element[p]);
    }
    
    return element;
}

let mapKeys = function (arr, pathToKeyProp) {
    let propNames = _getPropertyNames(pathToKeyProp);

    return arr.map((el, i) => ({
        index: i,
        key: _getKey(el, propNames)
    }));
};

export default {
    mapKeys
};