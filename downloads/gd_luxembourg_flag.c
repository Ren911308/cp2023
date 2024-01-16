#include <stdio.h>
#include <gd.h>

int main() {
    int width = 600; // 画布宽度
    int height = 400; // 画布高度

    gdImagePtr img = gdImageCreateTrueColor(width, height);

    // 定义盧森堡國旗颜色
    int red = gdImageColorAllocate(img, 206, 17, 38);  // RGB颜色代码
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int lightBlue = gdImageColorAllocate(img, 153, 194, 224);  // 淡藍色

    // 填充盧森堡國旗
    gdImageFilledRectangle(img, 0, 0, width, height / 3, red);
    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, white);
    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, lightBlue);

    // 保存图片
    FILE *outfile;
    outfile = fopen("luxembourg_flag.png", "wb");
    gdImagePng(img, outfile);
    fclose(outfile);

    // 释放内存
    gdImageDestroy(img);

    return 0;
}
