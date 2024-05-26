function solution(progresses, speeds) {
    let answer = [];
    let workDays = [];
    
    
    for (let i = 0; i < progresses.length; i++) {
        let remainingWork = 100 - progresses[i];
        let daysNeeded = Math.ceil(remainingWork / speeds[i]);
        workDays.push(daysNeeded);
    }
    
    while (workDays.length > 0) {
        
        let currentDeployDay = workDays.shift();
        let featuresCount = 1;
        
        while (workDays.length > 0 && workDays[0] <= currentDeployDay) {
            featuresCount++;
            workDays.shift();
        }
        
        answer.push(featuresCount);
    }
    
    return answer;
}





