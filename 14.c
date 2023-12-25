#include <stdio.h>

int main() 
{
    // 宣告並初始化字符變數
    char char1 = 'X';
    char char2 = 'M';
    char char3 = 'L';

    // 印出原始和反轉後的字符
    printf("%c%c%c的反轉是%c%c%c\n",
        char1, char2, char3,
        char3, char2, char1);

    return 0;
}
