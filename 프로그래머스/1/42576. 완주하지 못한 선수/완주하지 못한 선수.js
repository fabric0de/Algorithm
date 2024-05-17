function solution(participant, completion) {
    const map = new Map();

    // 참가자들의 이름과 등장 횟수를 맵에 저장
    for (const name of participant) {
        map.set(name, (map.get(name) || 0) + 1);
    }

    // 완주한 선수들의 이름으로 맵에서 해당 이름의 횟수를 감소
    for (const name of completion) {
        map.set(name, map.get(name) - 1);
    }

    // 맵을 순회하면서 값이 0보다 큰 첫 번째 키(참가자)를 반환
    for (const [name, count] of map) {
        if (count > 0) {
            return name;
        }
    }
}