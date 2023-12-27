function solution(t, p) {
    let answer = 0;
    let pNum = parseInt(p); 

    for (let i = 0; i <= t.length - p.length; i++) {
        let sub = t.substr(i, p.length); 
        let subNum = parseInt(sub); 

        if (subNum <= pNum) {
            answer += 1;
        }
    }

    return answer;
}
