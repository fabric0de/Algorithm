function solution(a, b, n) {
    let answer = 0; 

    while (n >= a) {
        let exchangedCount = Math.floor(n / a) * b; 
        answer += exchangedCount;
        n = n - Math.floor(n / a) * a + exchangedCount; 
    }

    return answer;
}
