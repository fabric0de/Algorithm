function solution(citations) {
    var answer = 0;
    var n = citations.length;
    citations = citations.sort((a,b) => b-a);
  
    for (let i = 0; i < n; i++) {
        let h = i + 1;
         
        if (citations[i] >= h) {
            answer = h;
        }
    }
    return answer;
}