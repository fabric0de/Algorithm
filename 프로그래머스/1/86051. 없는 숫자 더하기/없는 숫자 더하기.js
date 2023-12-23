function solution(numbers) {
    var answer = 0;
    
    numbers = numbers.sort();
    
    for (i = 0; i <= 9; i++) {
        if ( numbers.includes(i) === false){
            answer += i;
        }
    }
    
    return answer;
}