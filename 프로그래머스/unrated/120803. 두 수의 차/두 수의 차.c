#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    if(-50000 <= num1 && num1 <= 50000){
        if(-50000 <= num2 && num2 <= 50000) {
            int answer = num1 - num2;
            return answer;

        }
    }
}