function solution(nums) {
    var answer = 0;
    let selectCnt = nums.length / 2;
    
    const set = new Set(nums);

    const uniqueArr = [...set];
    
    for ( let i = 0; i < selectCnt; i++ ) {
        if (uniqueArr[i]) {
            answer += 1;
        }
    }
    
    return answer;
}