'use strict';

function hasSameOrder(arrX, arrY){
    if (arrX instanceof Array === false 
        || arrY instanceof Array === false 
        || arrX.length !== arrY.length){
        return false;
    }
    
    for(let i = 0; i < arrX.length; i++){
        if (arrX[i] !== arrY[i]){
            return false;
        }
    }
    
    return true;
}

let arrayMatchers = {
    toHaveSameOrderAs: function(){
        return {
            compare: function(actual, expected){
                let result = {};
                result.pass = hasSameOrder(actual, expected);
                if (result.pass){
                    result.message = `Expected [ ${actual.toString()} ] NOT to have same order as [ ${expected.toString()} ]`;
                } else{
                    result.message = `Expected [ ${actual.toString()} ] to have same order as [ ${expected.toString()} ]`;
                }
                
                return result;
            }
        };
    }
};

export default arrayMatchers;