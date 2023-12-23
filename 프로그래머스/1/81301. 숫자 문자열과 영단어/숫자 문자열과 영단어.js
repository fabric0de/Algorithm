function solution(s) {
    var answer = s;
    var strNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',                    'eight', 'nine'];
    
    for ( i = 0; i < strNum.length; i++ ) {
          var arr = answer.split(strNum[i]);
          answer = arr.join(i);
     }
    answer = Number(answer);
    return answer;
}