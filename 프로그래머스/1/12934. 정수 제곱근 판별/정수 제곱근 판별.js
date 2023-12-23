function solution(n) {
    var answer = 0;
    
    let sqrt = Math.sqrt(n)
    console.log(sqrt);
    
    if(Number.isInteger(sqrt)) {
       answer = (sqrt+1)**2;
       } else {
           answer = -1;
       }
    
    return answer;
}