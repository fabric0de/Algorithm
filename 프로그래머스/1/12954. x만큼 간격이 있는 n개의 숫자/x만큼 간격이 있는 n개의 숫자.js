function solution(x, n) {
    var answer = [];
    var sum = x-x;
    for (i = 0; i < n; i++) {
        sum += x;
        answer.push(sum);
    }
    return answer;
}