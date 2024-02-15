function solution(N, stages) {
    let result = [];
    let length = stages.length;

    for (let i = 1; i <= N; i++) {
        let stageCount = stages.filter(stage => stage === i).length;
        let failureRate = stageCount / length;
        result.push([i, failureRate]);
        length -= stageCount; 
    }

    result.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    return result.map(item => item[0]);
}
