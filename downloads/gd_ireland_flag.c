#include <stdio.h>
#include <gd.h>

#define WIDTH 900
#define HEIGHT 600
#define BLUE 0x005CBF    // Blue color
#define WHITE 0xFFFFFF   // White color
#define RED 0xED1C24     // Red color

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
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, BLUE);

    // Draw white part
    int whiteHeight = HEIGHT * 7 / 18;
    gdImageFilledRectangle(im, 0, HEIGHT / 2 - whiteHeight / 2, WIDTH - 1, HEIGHT / 2 + whiteHeight / 2 - 1, WHITE);

    // Draw red cross (left aligned)
    int crossWidth = WIDTH / 8; // Width of the cross
    int crossHeight = HEIGHT / 18; // Height of the cross
    int crossX = WIDTH / 10;  // Adjusted value to move the cross towards the left
    int crossY = (HEIGHT - crossHeight) / 2;

    gdImageFilledRectangle(im, crossX, 0, crossX + crossWidth - 1, HEIGHT - 1, RED); // Horizontal part of the cross
    gdImageFilledRectangle(im, crossX, crossY, WIDTH - 1, crossY + crossHeight - 1, RED); // Vertical part of the cross

    // Save the image
    gdImagePng(im, output);
    fclose(output);
    gdImageDestroy(im);
}

int main() {
    drawIcelandFlag();
    return 0;
}
