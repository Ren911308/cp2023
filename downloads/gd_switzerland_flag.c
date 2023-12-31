#include <stdio.h>
#include <gd.h>

int main() {
    gdImagePtr im;
    FILE *pngout;

    int width = 300;  // 設定圖像寬度
    int height = 200; // 設定圖像高度

    /* 創建一個新的 300x200 圖像 */
    im = gdImageCreateTrueColor(width, height);

    /* 定義瑞士國旗的顏色 */
    int red = gdImageColorAllocate(im, 255, 0, 0);  // 紅色
    int white = gdImageColorAllocate(im, 255, 255, 255);  // 白色

    /* 繪製瑞士國旗，紅色背景 */
    gdImageFilledRectangle(im, 0, 0, width - 1, height - 1, red);

    /* 繪製白色十字 */
    int crossWidth = 20;
    int crossHeight = 120;
    int crossPosX = (width - crossWidth) / 2;
    int crossPosY = (height - crossHeight) / 2;

    gdImageFilledRectangle(im, crossPosX, 0, crossPosX + crossWidth - 1, height - 1, white);
    gdImageFilledRectangle(im, 0, crossPosY, width - 1, crossPosY + crossHeight - 1, white);

    /* 寫入 PNG 檔案 */
    pngout = fopen("swiss_flag.png", "wb");
    gdImagePng(im, pngout);
    fclose(pngout);

    /* 釋放記憶體 */
    gdImageDestroy(im);

    return 0;
}
