function solution(nums) {
    const uniqueArrLength = new Set(nums).size;  
    const poke = nums.length / 2;                
    return Math.min(uniqueArrLength, poke);      
}
