function solution(array, height) {
    var answer = 0;
    if (1 <= array.length && array.length <= 100){
        if ( 1 <= height && height <= 200 ) {
            for (i = 0; i < array.length; i++ ) {
                if ( 1 <= array[i] && array[i] <= 200) {
                    if ( height < array[i]){
                        answer += 1;
                    }
                }
            }
        }
    }
    return answer;
}