#include <stdio.h>

int main() 
{
    int x, y, result; // 宣告兩個整數及其乘積的變數

    // 提示使用者輸入並將其存儲在 'x'
    printf("\n輸入第一個整數："); 
    scanf("%d", &x);

    // 提示使用者輸入並將其存儲在 'y'
    printf("輸入第二個整數：");
    scanf("%d", &y);

    result = x * y; // 計算 'x' 和 'y' 的乘積

    // 印出乘積
    printf("上述兩個整數的乘積 = %d\n", result);
}
