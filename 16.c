#include <stdio.h>

int main() {
   int radius;      /* 用於存儲圓的半徑的變數 */
   float area, perimeter;    /* 用於存儲圓的面積和周長的變數 */ 
   radius = 6;      /* 將半徑賦值為6 */

   /* 計算圓的周長 */
   perimeter = 2 * 3.14 * radius;
   printf("圓的周長 = %f 英寸\n", perimeter);

   /* 計算圓的面積 */
   area = 3.14 * radius * radius;
   printf("圓的面積 = %f 平方英寸\n", area);

   return 0;
}