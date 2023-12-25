#include <stdio.h> 

/* 
   用於存儲矩形寬度和高度的變數（以英寸為單位）
*/
int width;          
int height;         

int area;           /* 用於存儲矩形的面積的變數 */
int perimeter;      /* 用於存儲矩形的周長的變數 */

int main() {
    /* 為高度和寬度賦值 */
    height = 7;
    width = 5;

    /* 計算矩形的周長 */
    perimeter = 2 * (height + width);
    printf("矩形的周長 = %d 英寸\n", perimeter);

    /* 計算矩形的面積 */
    area = height * width;
    printf("矩形的面積 = %d 平方英寸\n", area);

    return 0;
}
