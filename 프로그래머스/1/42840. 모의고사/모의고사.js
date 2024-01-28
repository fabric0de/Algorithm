function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let scores = [0, 0, 0];
    
    let answer = [];
    
    answers.forEach((answer, i) => {
        if (answer === patterns[0][i % patterns[0].length]) scores[0]++;
        if (answer === patterns[1][i % patterns[1].length]) scores[1]++;
        if (answer === patterns[2][i % patterns[2].length]) scores[2]++;
    });

    const maxScore = Math.max(...scores);
    

    scores.forEach((score, index) => {
        if (score === maxScore) {
            answer.push(index + 1);
        }
    });

    return answer;
}
