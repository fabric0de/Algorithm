function solution(nums) {
    var answer = 0;
    
    const poke = nums.length / 2
    
    const set = new Set(nums)
    const uniqueArr = [...set]
    const uniqueArrLength = uniqueArr.length
    
    if (uniqueArrLength < poke) {
        answer = uniqueArrLength
    } else {
        answer = poke
    }
    
    
    return answer;
}