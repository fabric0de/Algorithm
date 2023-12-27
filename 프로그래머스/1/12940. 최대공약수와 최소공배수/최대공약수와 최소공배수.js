function solution(n, m) {
    let answer = [];
    console.log(Math.min(n,m))
    //최대공약수 구하기
    for ( let i=1; i <= Math.min(n, m); i++ ) {
        if (n % i == 0 && m % i == 0 ) {
            answer[0] = i; 
        }
    }
    //최소공배수
    answer[1] = n * m / answer[0];
    
    return answer;
}