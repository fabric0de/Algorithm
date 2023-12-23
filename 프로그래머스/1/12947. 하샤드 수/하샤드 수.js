function solution(x) {
    var answer = true;
    var arr = [...x.toString()];
    var sum = 0;
    for (i = 0;  i < arr.length; i++ ) {
        sum += Number(arr[i]);
    }
    if ( x % sum !== 0) {
        answer = false;
    }
    return answer;
}