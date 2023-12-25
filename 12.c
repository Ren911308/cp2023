#include <stdio.h>

int main(int argc, char** argv) {
    // 檢查 C 標準版本
    #if __STDC_VERSION__ >=  201710L
        printf("我們使用的是 C18 標準！\n");
    #elif __STDC_VERSION__ >= 201112L
        printf("我們使用的是 C11 標準！\n");
    #elif __STDC_VERSION__ >= 199901L
        printf("我們使用的是 C99 標準！\n");
    #else
        printf("我們使用的是 C89/C90 標準！\n");
    #endif

    // 表示程式成功執行
    return 0;
}
