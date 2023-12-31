#include <stdio.h>
#include <gd.h>

int main() {
    gdImagePtr im;
    FILE *pngout;

    int width = 900;  // 圖像寬度
    int height = 600; // 圖像高度

    im = gdImageCreateTrueColor(width, height);

    // 定義愛爾蘭國旗的顏色
    int green = gdImageColorAllocate(im, 0, 155, 72);    // 綠色
    int white = gdImageColorAllocate(im, 255, 255, 255); // 白色
    int orange = gdImageColorAllocate(im, 255, 127, 0);  // 橙色

    // 填充綠色背景
    gdImageFilledRectangle(im, 0, 0, width - 1, height - 1, white);

    int stripeWidth = width / 3;

    // 繪製左邊的綠色條紋
    gdImageFilledRectangle(im, 0, 0, stripeWidth - 1, height - 1, green);

    // 繪製中間的白色條紋
    gdImageFilledRectangle(im, stripeWidth, 0, stripeWidth * 2 - 1, height - 1, white);

    // 繪製右邊的橙色條紋
    gdImageFilledRectangle(im, stripeWidth * 2, 0, width - 1, height - 1, orange);

    // 寫入 PNG 檔案
    pngout = fopen("ireland_flag.png", "wb");
    gdImagePng(im, pngout);
    fclose(pngout);

    // 釋放記憶體
    gdImageDestroy(im);

    return 0;
}
