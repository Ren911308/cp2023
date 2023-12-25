#include <stdio.h>

int main()
{
    int days, years, weeks;

    days = 1329; // 總天數

    // 將天數轉換為年、周和天
    years = days / 365; // 計算年數
    weeks = (days % 365) / 7; // 計算周數
    days = days - ((years * 365) + (weeks * 7)); // 計算剩餘天數

    // 印出結果
    printf("年數: %d\n", years);
    printf("周數: %d\n", weeks);
    printf("天數: %d \n", days);

    return 0;
}
