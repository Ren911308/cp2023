#include <stdio.h>
#include <gd.h>

int main() {
    int width = 600; // 画布宽度
    int height = 400; // 画布高度

    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 定义尼日利亚国旗颜色
    int green = gdImageColorAllocate(img, 0, 128, 0);  // RGB颜色代码
    int white = gdImageColorAllocate(img, 255, 255, 255);

    // 填充尼日利亚国旗
    gdImageFilledRectangle(img, 0, 0, width / 3, height, green);
    gdImageFilledRectangle(img, width / 3, 0, 2 * width / 3, height, white);
    gdImageFilledRectangle(img, 2 * width / 3, 0, width, height, green);

    // 保存图片
    FILE *outfile;
    outfile = fopen("nigeria_flag.png", "wb");
    gdImagePng(img, outfile);
    fclose(outfile);

    // 释放内存
    gdImageDestroy(img);

    return 0;
}
