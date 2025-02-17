/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init
    
    const increment = () => {
        return ++num
    }

    const reset = () => {
        return num = init
    }

    const decrement = () => {
        return --num
    }

    return {increment, reset, decrement}
};