function solution(n, m, section) {
    
    section.sort((a, b) => a - b);

    let paintCount = 0; 
    let i = 0; 

    while (i < section.length) {
        
        let start = section[i]; 
        let end = start + m - 1; 
        
        while (i < section.length && section[i] <= end) {
            i++;
        }
 
        paintCount++;
    }

    return paintCount; 
}
