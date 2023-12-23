function solution(s){
    var answer = true;
    var countP = 0;
    var countY = 0;
    for (i = 0; i < s.length; i++ ) {
        if ( s[i].toUpperCase() == "P" ) {
            countP += 1;
        } else if ( s[i].toUpperCase() == "Y" ) {
            countY += 1;
        }
    }
    if (countP !== countY){
        var answer = false;       
    }

    return answer;
}