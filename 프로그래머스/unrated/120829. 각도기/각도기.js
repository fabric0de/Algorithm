function solution(angle) {
    if ( 0 < angle && angle < 90 ){
         var answer = 1;
         return answer;
    } else if ( angle == 90 ) {
        var answer = 2;
        return answer;
    } else if ( 90 < angle && angle < 180 ){
        var answer = 3;
        return answer;
    } else if ( angle == 180) {
        var answer = 4;
        return answer;
    }
   
}