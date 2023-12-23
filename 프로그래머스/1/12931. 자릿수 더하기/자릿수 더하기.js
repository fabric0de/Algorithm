function solution(n)
{
    var answer = 0;
    var strNum = String(n);
    
    for ( let i = 0; i < strNum.length; i++) {
        answer += parseInt(strNum[i]);
    }

    return answer;
}