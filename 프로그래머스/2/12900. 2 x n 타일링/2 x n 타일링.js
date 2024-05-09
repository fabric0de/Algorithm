function solution(n) {
    var answer = 0;
    //점화식
    let arr = new Array(n).fill(0);

    arr[0] = 1;
    arr[1] = 2;

    for (let i = 2; i < n; i++) {
        let num = arr[i-1] + arr[i-2];
        arr[i] = num % 1000000007
    }

    answer = arr[n-1]

    return answer;
}
