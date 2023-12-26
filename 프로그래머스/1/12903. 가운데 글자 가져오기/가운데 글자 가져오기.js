function solution(s) {
    var answer = '';
    var length = s.length;
    if (length % 2 == 1){
        length = Math.floor(length / 2);
        answer = s[length];
    } else {
        length = Math.floor(length / 2);
        answer = s[length-1];
        answer += s[length];
    }
    return answer;
}