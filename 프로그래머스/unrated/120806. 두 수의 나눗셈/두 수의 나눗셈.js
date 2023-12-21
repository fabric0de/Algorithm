function solution(num1, num2) {
    if ( 0 <= num1 && num1 <= 100 ) {
        if ( 0 <= num2 && num2 <= 100 ) {
              var answer = Math.floor((num1 / num2) * 1000) ;
              return answer;
        }
    }
  
}