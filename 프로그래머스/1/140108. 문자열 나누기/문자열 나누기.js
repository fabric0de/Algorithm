function solution(s) {
    let count = 0; // 분해한 문자열의 개수
    let i = 0;
    while (i < s.length) {
        let char = s[i]; // 현재 기준 문자
        let countX = 0; // 기준 문자 횟수
        let countOther = 0; // 기준 문자가 아닌 다른 문자 횟수

        while (i < s.length && countX >= countOther) {
            if (s[i] === char) {
                countX++;
            } else {
                countOther++;
            }
            // 두 횟수가 같아지면 분리 지점
            if (countX === countOther) {
                count++; // 분해한 문자열의 개수 증가
                break; 
            }
            i++; 
        }
        // 문자열 끝 도달
        if (i === s.length && countX !== countOther) {
            count++; 
        }
        i++; 
    }

    return count;
}
