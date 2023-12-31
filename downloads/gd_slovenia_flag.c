#include <stdio.h>
#include <gd.h>

#define WIDTH 600
#define HEIGHT 400
#define WHITE 0xFFFFFF   // White color
#define BLUE 0x0052A5    // Blue color
#define RED 0xED1C24     // Red color

void drawSloveniaFlag() {
    gdImagePtr im;
    FILE *output;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    output = fopen("slovenia_flag.png", "wb");

    // Allocate colors
    int whiteIndex = gdImageColorAllocate(im, (WHITE >> 16) & 0xFF, (WHITE >> 8) & 0xFF, WHITE & 0xFF);
    int blueIndex = gdImageColorAllocate(im, (BLUE >> 16) & 0xFF, (BLUE >> 8) & 0xFF, BLUE & 0xFF);
    int redIndex = gdImageColorAllocate(im, (RED >> 16) & 0xFF, (RED >> 8) & 0xFF, RED & 0xFF);

    // Draw blue part (upper part)
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT / 2 - 1, blueIndex);

    // Draw red part (lower part)
    gdImageFilledRectangle(im, 0, HEIGHT / 2, WIDTH - 1, HEIGHT - 1, redIndex);

    // Save the image
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

int main() {
    drawSloveniaFlag();
    return 0;
}
