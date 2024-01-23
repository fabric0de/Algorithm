function solution(name, yearning, photo) {
    var answer = [];

    for (let i = 0; i < photo.length; i++) {
        let point = 0;
        for (let k = 0; k < photo[i].length; k++) {
            let index = name.indexOf(photo[i][k]);
            if (index !== -1) {
                point += yearning[index];
            }
        }
        answer.push(point);
    }
    return answer;
}
