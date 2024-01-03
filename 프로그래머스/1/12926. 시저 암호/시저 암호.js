function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= 'a' && char <= 'z') {
            
            let shifted = ((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26) + 'a'.charCodeAt(0);
            answer += String.fromCharCode(shifted);
        } else if (char >= 'A' && char <= 'Z') {
            
            let shifted = ((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26) + 'A'.charCodeAt(0);
            answer += String.fromCharCode(shifted);
        } else {
            
            answer += char;
        }
    }

    return answer;
}
