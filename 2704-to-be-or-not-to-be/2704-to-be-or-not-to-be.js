/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    const toBe = (val2) => {
        if (val !== val2) {
            throw new Error("Not Equal")
        } else {
            return true
        }
    }

    const notToBe = (val2) => {
        if (val === val2) {
            throw new Error("Equal")
        } else {
            return true
        }
    }

    return {toBe, notToBe}
};


 
 
 