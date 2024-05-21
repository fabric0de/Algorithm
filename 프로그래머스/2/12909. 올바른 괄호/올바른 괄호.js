function solution(s){
    var answer = true;
    let num = 0;
    const len = s.length;
    
    if (s[0] !== '(') {
            return false;
        } else if (s[len-1] !== ')') {
            return false;
        } else if (len % 2 !== 0) {
            return false;
        }
    
    for (let char of s) {
        
        if (char === '(') {
            num += 1;
        } else if (char === ')') {
            num -= 1;
        }
        
        if (num < 0 ) {
            return false;
        }
    }

    if (num !== 0) {
        return false;
    }
    
    
    return answer;
}