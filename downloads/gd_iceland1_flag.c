#include <stdio.h>
#include <gd.h>

#define WIDTH 100
#define HEIGHT 72
#define BLUE 0x02529C    // Blue color
#define WHITE 0xFFFFFF   // White color
#define RED 0xDC1E35     // Red color

void drawIcelandFlag() {
    gdImagePtr im;
    FILE *output;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    output = fopen("iceland_flag.png", "wb");

    // Allocate colors
    int blueIndex = gdImageColorAllocate(im, (BLUE >> 16) & 0xFF, (BLUE >> 8) & 0xFF, BLUE & 0xFF);
    int whiteIndex = gdImageColorAllocate(im, (WHITE >> 16) & 0xFF, (WHITE >> 8) & 0xFF, WHITE & 0xFF);
    int redIndex = gdImageColorAllocate(im, (RED >> 16) & 0xFF, (RED >> 8) & 0xFF, RED & 0xFF);

    // Draw blue part (background)
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, blueIndex);

    // Draw white vertical stripe
    gdImageFilledRectangle(im, 18, 0, 18 + 16 - 1, HEIGHT - 1, whiteIndex);

    // Draw white horizontal stripe
    gdImageFilledRectangle(im, 0, 28, WIDTH - 1, 28 + 16 - 1, whiteIndex);

    // Draw red vertical stripe
    gdImageFilledRectangle(im, 22, 0, 22 + 8 - 1, HEIGHT - 1, redIndex);

    // Draw red horizontal stripe
    gdImageFilledRectangle(im, 0, 32, WIDTH - 1, 32 + 8 - 1, redIndex);

    // Save the image
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

int main() {
    drawIcelandFlag();
    return 0;
}
