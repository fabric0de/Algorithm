function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        let sqrtI = Math.sqrt(i);
        for (let k = 1; k <= sqrtI; k++) {
            if (i % k === 0) {
                if (i / k === k) { 
                    count++;
                } else {
                    count += 2;
                }
            }
        }
        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
}
