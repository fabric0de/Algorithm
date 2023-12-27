function solution(n) {
    var answer = [];
    
    function move(n, start, to, via) {
        if (n === 1) {
            answer.push([start, to]);
        } else {
            move(n - 1, start, via, to);
            answer.push([start, to]);
            move(n - 1, via, to, start);
        }
    }
    move(n, 1, 3, 2);
    return answer;
}
