#include <stdio.h>
#include <stdlib.h>
#include <gd.h>

#define WIDTH 600
#define HEIGHT 400

void drawDutchFlag(gdImagePtr im) {
    // Set background color (White)
    int white = gdImageColorAllocate(im, 255, 255, 255);
    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT, white);

    int stripeWidth = WIDTH / 3;

    // Left stripe (Blue)
    int blue = gdImageColorAllocate(im, 33, 70, 139);
    gdImageFilledRectangle(im, 0, 0, stripeWidth, HEIGHT, blue);

    // Middle stripe (White)
    gdImageFilledRectangle(im, stripeWidth, 0, 2 * stripeWidth, HEIGHT, white);

    // Right stripe (Red)
    int red = gdImageColorAllocate(im, 174, 28, 40);
    gdImageFilledRectangle(im, 2 * stripeWidth, 0, WIDTH, HEIGHT, red);
}

int main() {
    gdImagePtr im;
    FILE *out;

    im = gdImageCreate(WIDTH, HEIGHT);
    if (im == NULL) {
        fprintf(stderr, "Cannot create GD image\n");
        return 1;
    }

    drawDutchFlag(im);

    out = fopen("dutch_flag_swapped.png", "wb");
    if (out == NULL) {
        fprintf(stderr, "Cannot create output file\n");
        gdImageDestroy(im);
        return 1;
    }

    gdImagePng(im, out);
    fclose(out);
    gdImageDestroy(im);

    printf("Dutch flag created (swapped colors): dutch_flag_swapped.png\n");

    return 0;
}
