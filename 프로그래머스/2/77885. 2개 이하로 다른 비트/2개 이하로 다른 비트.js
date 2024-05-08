function solution(numbers) {
    var answer = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            answer.push(numbers[i] + 1);
        } else {
            let number = "0" + numbers[i].toString(2); 
            let idx = number.lastIndexOf("01");        
            let prefix = number.substring(0, idx);     
            let suffix = number.substring(idx + 2);    

            let modified = prefix + "10" + suffix.replace(/1/g, "0").replace(/0/g, "1");
            let changeS = parseInt(modified, 2);
            
            answer.push(changeS);
        }
    }

    return answer;
}
