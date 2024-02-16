function solution(lottos, win_nums) {
    var answer = [];
    
    let zeroCount = lottos.filter(element => 0 === element).length; //0 갯수 구하기
    let notZeroCount = lottos.filter(x => win_nums.includes(x)).length; 
    //교집합 갯수 구하기
    
    let maxRank = 0;
    let minRank = 0;
    maxRank = 7 - (zeroCount + notZeroCount);
    minRank = 7 - notZeroCount;
    
    if (notZeroCount === 0) {
        minRank = 6;
    }
    if (zeroCount + notZeroCount === 0) {
        maxRank = 6;
    }
    answer.push(maxRank, minRank);
    
    return answer;
}