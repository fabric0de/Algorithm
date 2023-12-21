function solution(strlist) {
    var answer = [];
    for (i = 0; i < strlist.length; i++){
        if ( 1 <= strlist[i].length && strlist[i].length <= 100 ) {
           answer.push(strlist[i].length);
        }
    }
    return answer;
}