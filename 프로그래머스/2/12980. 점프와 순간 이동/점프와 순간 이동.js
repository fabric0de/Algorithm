function solution(n)
{
    var ans = 0;
    // 2의 배수는 1 
    while(n  !== 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            ans += 1;
        }
    }

    return ans;
}
