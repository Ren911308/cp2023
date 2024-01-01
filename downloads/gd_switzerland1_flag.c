#include <stdio.h>
#include <gd.h>

int main() {
    gdImagePtr im;
    FILE *pngout;

    int size = 200;    // 图像宽度和高度

    im = gdImageCreateTrueColor(size, size);

    // 定义瑞士国旗的颜色
    int red = gdImageColorAllocate(im, 255, 0, 0);        // 红色
    int white = gdImageColorAllocate(im, 255, 255, 255);  // 白色

    // 填充红色背景
    gdImageFilledRectangle(im, 0, 0, size - 1, size - 1, red);

    int crossSize = 100; // 十字的大小

    // 计算十字的位置，使其置中
    int crossPosX = (size - crossSize) / 2;
    int crossPosY = (size - crossSize) / 2;

    // 确保十字的中心点在画布中
    crossPosX += (crossSize % 2 == 0) ? 0 : 1;
    crossPosY += (crossSize % 2 == 0) ? 0 : 1;

    // 繪製十字的水平線條
    gdImageFilledRectangle(im, crossPosX, (size - 20) / 2, crossPosX + crossSize - 1, (size + 20) / 2 - 1, white);
    // 繪製十字的垂直線條
    gdImageFilledRectangle(im, (size - 20) / 2, crossPosY, (size + 20) / 2 - 1, crossPosY + crossSize - 1, white);

    // 寫入 PNG 檔案
    pngout = fopen("swiss_flag.png", "wb");
    gdImagePng(im, pngout);
    fclose(pngout);

    // 釋放記憶體
    gdImageDestroy(im);

    return 0;
}
