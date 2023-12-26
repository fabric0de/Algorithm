function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);

    if (arr.length > 1) {
        answer = arr.filter(item => item !== min);
    } else {
        answer = [-1];
    }

    return answer;
}
