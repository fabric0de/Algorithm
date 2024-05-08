function solution(skill, skill_trees) {
    var answer = 0;

    for (let key of skill_trees) {

        let result = key.split("").filter((value) =>  
                                          skill.indexOf(value) > -1).join("");
        console.log(skill + ":::" + result);
        console.log(skill.indexOf(result)); 
        if (skill.indexOf(result) === 0 ) answer++;
    }

    return answer;
}