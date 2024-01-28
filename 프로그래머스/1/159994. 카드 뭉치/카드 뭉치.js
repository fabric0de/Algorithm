function solution(cards1, cards2, goal) {
    var answer = '';
    let index1 = 0, index2 = 0;

    for (let word of goal) {
        if (index1 < cards1.length && word === cards1[index1]) {
            index1++;
        } else if (index2 < cards2.length && word === cards2[index2]) {
            index2++;
        } else {
            answer = "No";
            return answer;
        }
    }

    answer = "Yes";
    return answer;
}