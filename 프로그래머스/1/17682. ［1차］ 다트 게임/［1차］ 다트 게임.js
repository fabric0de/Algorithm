function solution(dartResult) {
    var answer = 0;
    // 정규 표현식으로 점수, 보너스, 옵션 분리
    const regex = /(\d+)([SDT])([*#]?)/g;
    let scores = [];

    dartResult.replace(regex, (match, score, bonus, option) => {
        let point = parseInt(score); // 점수 변환

        // 보너스에 따른 점수 계산
        switch (bonus) {
            case 'S': point = point; break;
            case 'D': point = Math.pow(point, 2); break;
            case 'T': point = Math.pow(point, 3); break;
        }

        // 옵션 적용
        if (option === '*') {
            point *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2; // 이전 점수도 2배
            }
        } else if (option === '#') {
            point *= -1;
        }

        scores.push(point);
    });

    // 점수 합산 후 반환
    answer = scores.reduce((acc, curr) => acc + curr, 0);
    
    return answer;
}
