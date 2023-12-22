function solution(num_list) {
    var answer = [];
    var count1 = 0;
    var count2 = 0;
    if ( 1 <= num_list.length && num_list.length <= 100 ) {
        for ( i = 0; i < num_list.length; i++ ) {
            if ( 0 <= num_list[i] && num_list[i] <= 1000  ) {
                if ( num_list[i] % 2 == 0 ) {
                    count1 += 1;
                } else {
                    count2 += 1;
                }
            }
        }
    }
    answer.push(count1,count2);
    return answer;
}