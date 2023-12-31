#include <stdio.h>
#include <gd.h>

#define WIDTH 900
#define HEIGHT 600
#define RED 0xBF0A30    // Red color
#define BLUE 0x00008C   // Blue color
#define WHITE 0xFFFFFF  // White color

void drawSerbiaFlag() {
    gdImagePtr im;
    FILE *output;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    output = fopen("serbia_flag.png", "wb");

    // Allocate colors
    int redIndex = gdImageColorAllocate(im, (RED >> 16) & 0xFF, (RED >> 8) & 0xFF, RED & 0xFF);
    int blueIndex = gdImageColorAllocate(im, (BLUE >> 16) & 0xFF, (BLUE >> 8) & 0xFF, BLUE & 0xFF);
    int whiteIndex = gdImageColorAllocate(im, (WHITE >> 16) & 0xFF, (WHITE >> 8) & 0xFF, WHITE & 0xFF);

    // Draw red part
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT / 2 - 1, redIndex);

    // Draw blue part
    gdImageFilledRectangle(im, 0, HEIGHT / 2, WIDTH - 1, HEIGHT - 1, blueIndex);

    // Save the image
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

int main() {
    drawSerbiaFlag();
    return 0;
