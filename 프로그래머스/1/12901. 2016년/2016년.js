function solution(a, b) {
    let answer = '';
    let date = `2016-${a}-${b}`;
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    const dayOfWeek = new Date(date).getDay(); 
    
    answer = week[dayOfWeek];
    
    return answer;
}