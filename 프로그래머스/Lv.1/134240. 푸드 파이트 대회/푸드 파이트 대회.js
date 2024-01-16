function solution(food) {
    let result = "";
    let leftSide = ""; 
    let rightSide = ""; 

   
    for (let i = 1; i < food.length; i++) {
        let half = Math.floor(food[i] / 2); 

        leftSide += (i.toString()).repeat(half);
        rightSide = (i.toString()).repeat(half) + rightSide;
    }

    result = leftSide + "0" + rightSide;

    return result;
}

