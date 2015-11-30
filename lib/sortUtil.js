'use strict';

function getProps(propertyPath){
    if (propertyPath != null && typeof propertyPath === 'string'){
        return propertyPath.split('.')
    }
    
    return null;
}

function compare(a, b, props){
    if (props != null){
        props.forEach(p => {
            a = a[p];
            b = b[p];
        });
    }
    
    if (typeof a === 'string'){
        return a.localeCompare(b);
    }
    
    return a - b;
}

function sort(arr, propertyPath){
    let sortedArray = arr.map(el => el);
    let props = getProps(propertyPath);
    
    return sortedArray.sort((a, b) =>compare(a, b, props));
}

export default {
    sort
};