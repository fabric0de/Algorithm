function solution(n, k) {
    var answer = 0;
    if ( 0 < n && n < 1000 ) {
        if ( Math.floor(n/10) <= k && k < 1000 ) {
           console.log("test")
            k -= Math.floor(n/10) 
            answer += n*12000
            answer += k*2000
        }
    }
    return answer;
}