function solution(s) {
    // Map 객체 자료 참고
    let lastChar = new Map();
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (lastChar.has(char)) {
            
            result.push(i - lastChar.get(char));
        } else {
            
            result.push(-1);
        }
        lastChar.set(char, i); 
    }

    return result;
}
