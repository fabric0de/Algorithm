function solution(num) {
    var answer = 0;
    let i = 1;
    while( i <= 500) {
            console.log('test');
            if (num == 1) {
                return answer = i-1;
            } else if ( i == 500){
                return answer = -1;
            }
        
            if ( num % 2 == 0) {
                num = num / 2;
            } else {
                num = num * 3 + 1;
            }
            i++;
        } 
        
}