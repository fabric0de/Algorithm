function solution(k, m, score) {
    var answer = 0;
    let box = Math.ceil(score.length / m); 
    let sortApple = score.sort((a, b) => b - a); 

    for (let i = 0; i < box; i++) {
        let currentBox = sortApple.slice(i * m, (i + 1) * m);
        if (currentBox.length === m) {
            answer += currentBox[currentBox.length - 1] * m;  
        }
    }

    return answer;
}
