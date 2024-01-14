#include <stdio.h>
#include <gd.h>

int main() {
    int width = 900; // 画布宽度
    int height = 600; // 画布高度

    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 定义法国国旗颜色
    int blue = gdImageColorAllocate(img, 0, 35, 149);  // RGB颜色代码
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 239, 65, 53);

    // 填充法国国旗
    gdImageFilledRectangle(img, 0, 0, width / 3, height, blue);
    gdImageFilledRectangle(img, width / 3, 0, 2 * width / 3, height, white);
    gdImageFilledRectangle(img, 2 * width / 3, 0, width, height, red);

    // 保存图片
    FILE *outfile;
    outfile = fopen("french_flag.png", "wb");
    gdImagePng(img, outfile);
    fclose(outfile);

    // 释放内存
    gdImageDestroy(img);

    return 0;
}
