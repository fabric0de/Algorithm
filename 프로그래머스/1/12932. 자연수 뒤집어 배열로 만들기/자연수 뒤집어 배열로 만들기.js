function solution(n) {
    var answer = [];
    var array = [...n.toString()];
    
    answer = Array.from(array);
    
    answer = answer.map(Number).reverse();
    
    return answer;
}