#include <stdio.h>
#include <stdlib.h>
#include <gd.h>

#define WIDTH 600
#define HEIGHT 400

void drawAustrianFlag(gdImagePtr im) {
    // Set background color (White)
    int white = gdImageColorAllocate(im, 255, 255, 255);
    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT, white);

    int stripeHeight = HEIGHT / 3;

    // Top stripe (Red)
    int red = gdImageColorAllocate(im, 237, 41, 57);
    gdImageFilledRectangle(im, 0, 0, WIDTH, stripeHeight, red);

    // Middle stripe (White)
    gdImageFilledRectangle(im, 0, stripeHeight, WIDTH, 2 * stripeHeight, white);

    // Bottom stripe (Red)
    gdImageFilledRectangle(im, 0, 2 * stripeHeight, WIDTH, HEIGHT, red);
}

int main() {
    gdImagePtr im;
    FILE *out;

    im = gdImageCreate(WIDTH, HEIGHT);
    if (im == NULL) {
        fprintf(stderr, "Cannot create GD image\n");
        return 1;
    }

    drawAustrianFlag(im);

    out = fopen("austrian_flag.png", "wb");
    if (out == NULL) {
        fprintf(stderr, "Cannot create output file\n");
        gdImageDestroy(im);
        return 1;
    }

    gdImagePng(im, out);
    fclose(out);
    gdImageDestroy(im);

    printf("Austrian flag created: austrian_flag.png\n");

    return 0;
}

