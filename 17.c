#include <stdio.h>

int main()
{
    int a = 125, b = 12345;        /* 宣告並初始化整數變數 */
    long ax = 1234567890;          /* 宣告並初始化長整數變數 */
    short s = 4043;                /* 宣告並初始化短整數變數 */
    float x = 2.13459;             /* 宣告並初始化浮點數變數 */
    double dx = 1.1415927;         /* 宣告並初始化雙精度變數 */
    char c = 'W';                  /* 宣告並初始化字符變數 */
    unsigned long ux = 2541567890; /* 宣告並初始化無符號長整數變數 */

    /* 各種算術運算和類型轉換 */
    printf("a + c =  %d\n", a + c);
    printf("x + c = %f\n", x + c);
    printf("dx + x = %f\n", dx + x);
    printf("((int) dx) + ax =  %ld\n", ((int) dx) + ax);
    printf("a + x = %f\n", a + x);
    printf("s + b =  %d\n", s + b);
    printf("ax + b = %ld\n", ax + b);
    printf("s + c =  %hd\n", s + c);
    printf("ax + c = %ld\n", ax + c);
    printf("ax + ux = %lu\n", ax + ux);

    return 0;
}
