function solution(numbers) {
    var answer = 0;
    for ( i = 0; i < numbers.length; i++ ) {
        if ( 0 <= numbers[i] && numbers[i] <= 10000 ) {
            if ( 0 <= numbers.length && numbers.length <= 100) {
                numbers.sort((a,b) => b - a);
                answer = numbers[0]*numbers[1];
            }
        }
    }
    
    return answer;
}