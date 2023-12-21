function solution(numbers) {
    var answer = 0;
    var sum = 0;
    for ( i = 0; i < numbers.length; i++ ) {
    if ( 0 <= numbers[i] && numbers[i] <= 1000 ) {
        if ( 1 <= numbers.length && numbers.length <= 100 )  {
                sum += numbers[i]
            }
        }
    answer = sum/numbers.length;   
    }
    return answer;
}