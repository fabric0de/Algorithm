function solution(participant, completion) {
    var answer = '';
    const duplicate = {}
    const complete = {}
    participant.forEach((x) => { 
        duplicate[x] = (duplicate[x] || 0)+1; 
    });
    completion.forEach((x) => { 
        complete[x] = (complete[x] || 0)+1; 
    });
     
    for (let key of participant) {
        if (duplicate[key] !== complete[key]) {
        return key;
    }
  }
}