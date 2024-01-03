function solution(left, right) {
    var answer = 0;
    
    for ( let i = left; i <= right; i++ ) {
        var count = 0;
        
       for ( let k = 1; k <= i; k++ ) {
           if ( i % k === 0 ) {
               count += 1;
           }
           if ( k == i && count % 2 == 0  ) {
               answer += i;
           } else if ( k == i && count % 2 != 0 ) {
               answer -= i;
           }
           
       }
    }
    return answer;
}