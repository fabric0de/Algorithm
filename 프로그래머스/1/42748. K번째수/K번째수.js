function solution(array, commands) {
    return commands.map(([start, end, k]) => { //map + 구조분해할당
        const newArr = array.slice(start - 1, end).sort((a, b) => a - b);
        
        return newArr[k - 1];
    });
}
