function solution(numbers, num1, num2) {
    var answer = [];
    if ( 2 <= numbers.length && numbers.length <= 30 ) {
        for ( i = 0; i < numbers.length; i++ ) {
            if ( 0 <= numbers[i] && numbers[i] <= 1000 ){
                if ( 0 <= num1 && num1 < num2 && num2 < numbers.length ) {
                    answer = numbers.slice(num1,num2+1);   
                }
            }
        }
    }
    return answer;
}