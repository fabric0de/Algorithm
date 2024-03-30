function solution(numbers) {
    let answer = "";
    
    answer = numbers.map((x) => x + "")
        .sort((a,b) => b+a - (a+b))
        .join("");  //map사용과 함께 메서드체이닝 + sort함수 다루기
    
    return answer[0] === '0' ? '0' : answer;
}