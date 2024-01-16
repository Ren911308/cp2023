#include <stdio.h>
#include <gd.h>

int main() {
    int width = 600; // 画布宽度
    int height = 400; // 画布高度

    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 定义匈牙利国旗颜色
    int red = gdImageColorAllocate(img, 195, 0, 47);  // RGB颜色代码
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int green = gdImageColorAllocate(img, 0, 128, 0);

    // 填充匈牙利国旗
    gdImageFilledRectangle(img, 0, 0, width, height / 3, red);
    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, white);
    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, green);

    // 保存图片
    FILE *outfile;
    outfile = fopen("hungary_flag.png", "wb");
    gdImagePng(img, outfile);
    fclose(outfile);

    // 释放内存
    gdImageDestroy(img);

    return 0;
}
