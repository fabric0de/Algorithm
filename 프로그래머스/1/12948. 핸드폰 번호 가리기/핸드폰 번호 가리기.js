function solution(phone_number) {
    var answer = '';
    var length = phone_number.length;
    for ( i = 0; i < phone_number.length-4; i++) {
        console.log('test')
        answer += '*';
    }
    phone_number = phone_number.substr(length-4, length);
    return answer += phone_number;
    
}