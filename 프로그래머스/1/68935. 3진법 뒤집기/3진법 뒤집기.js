function solution(n) {
    let answer = 0;
    
    const trinary = n.toString(3);
    
    const reverse = trinary.split("").reverse().join("");
    
    answer = parseInt(reverse, 3);
    
    return answer;
}