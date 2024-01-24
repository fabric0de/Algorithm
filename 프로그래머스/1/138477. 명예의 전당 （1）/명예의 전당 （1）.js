function solution(k, score) {
    var answer = [];
    var rank = [];
    
    for (let i = 0; i < score.length; i++) {
        rank.push(score[i]);
        if (k < rank.length) {
            rank.sort((a, b) => a - b);
            answer.push(rank[i-k+1])
        } else {
            rank.sort((a, b) => a - b);
            answer.push(rank[0])
        }
    }
    console.log(rank)

    return answer;
}