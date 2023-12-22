function solution(array, n) {
    var answer = 0;
    if ( 1 <= array.length && array.length <= 100 ) {
       
        for ( i = 0; i < array.length; i++ ){
            if ( 0 <= array[i] && array[i] <= 1000 ) {
                
                if ( array[i] == n) {
                    answer += 1;
                }
            }    
        }
        
    }
    return answer;
}