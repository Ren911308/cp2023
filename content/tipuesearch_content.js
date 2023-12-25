var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n   \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n   \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n   \n    return 0;\n} \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n \nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_usa_flag(img);\n \n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n}\n \nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n \n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n \n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n \n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n \n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n \n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n \n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n \n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n \n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n \n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n \n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n \n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n \n    draw_japan_flag(img);\n \n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n \n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n \n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n \n    return 0;\n}\n \nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n \n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n \nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w10', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe . \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n \n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n \n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n \n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n \n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n \n        t += dt;\n    }\n \n    // Close the data file\n    fclose(outputFile);\n \n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n \n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n \n    return 0;\n} \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '\t#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n \nfprintf(stderr, "Error opening the output file.\\n");\n \nreturn 1;\n    }\n    \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n    \n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n    \n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n \n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n \n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n \n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n \n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 4; i++) {\n        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);\n        gdImagePolygon(img, points, 4, black);\n    }\n \n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 12; i++) {\n        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n        rotateFilledPolygon(500, 200, 30.0, points2, 4);\n        gdImageFilledPolygon(img, points2, 4, red);\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n} \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'W13', 'text': '一開始都聽不懂老師的意思，只能不停地向同學請教，想辦法不要落後，努力跟上進度，抱持虛心求教的心態，為了要提升自己的能力，就要一直反覆看老師上課影的片，很常遇到不懂的問題，不知該如何解決就會去問ChatGPT，雖然到現在還是會常常看不懂問題在哪裡，但是只要一步一腳印地去尋找問題，就會發現一點之蛛絲馬跡，然後再去解決問題，在解決不了就只能去尋求同學的幫助，雖然我很想問同組的，但是同組不太會只能跟不同組的虛心求教，也學到一些之前從未接觸到的東西，例如:近端、遠端、架設個人網站，帶著隨身碟就可以編輯網站等。\xa0 \xa0 \xa0計算機這一門課，不只可以寫程式還可以了解程式。還可以培養讓我有自行解決問題的能力，真的獲益良多，雖然有些時候還是不得不尋求幫助，但也是不得已的時候會這麼做，不然一定是自己想辦法去解決，還能提升邏輯思考的能力，還有就算做錯只要留下記錄，搞不好會在不知不覺間開閉自己的道路，就像威爾鋼，就是這麼被發明出來的，可能乍看之下沒有什麼，其實可能有其他用處，真是受益匪淺。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'w15', 'text': '\n', 'tags': '', 'url': 'w15.html'}, {'title': 'ANSIC', 'text': '1. \n #include <stdio.h>\n\nint main()  \n{\n    // 印出姓名\n    printf("姓名   : Alexandra Abramov\\n"); \n\n    // 印出出生日期\n    printf("生日   : 1975年7月14日\\n"); \n\n    // 印出手機號碼\n    printf("手機   : 99-9999999999\\n"); \n\n    // 表示程式成功執行\n    return 0; \n}\n \n \n 2. \n #include <stdio.h>\n\nint main(int argc, char** argv) {\n    // 檢查 C 標準版本\n    #if __STDC_VERSION__ >=  201710L\n        printf("我們使用的是 C18 標準！\\n");\n    #elif __STDC_VERSION__ >= 201112L\n        printf("我們使用的是 C11 標準！\\n");\n    #elif __STDC_VERSION__ >= 199901L\n        printf("我們使用的是 C99 標準！\\n");\n    #else\n        printf("我們使用的是 C89/C90 標準！\\n");\n    #endif\n\n    // 表示程式成功執行\n    return 0;\n}\n \n \n 3. \n #include <stdio.h> \n int main()  {  // 印出一行井字號  printf("######\\n"); \n // 印出一個單獨的井字號  printf("#\\n"); \n // 印出一個單獨的井字號  printf("#\\n"); \n // 印出一行井字號  printf("#####\\n"); \n // 印出一個單獨的井字號  printf("#\\n"); \n // 印出一個單獨的井字號  printf("#\\n"); \n // 印出一個單獨的井字號  printf("#\\n"); \n return 0; } \n \n 4. \n #include <stdio.h> \n int main()  {  // 宣告並初始化字符變數  char char1 = \'X\';  char char2 = \'M\';  char char3 = \'L\'; \n // 印出原始和反轉後的字符  printf("%c%c%c的反轉是%c%c%c\\n",  char1, char2, char3,  char3, char2, char1); \n return 0; } \n \n 5. \n #include <stdio.h> \n /*   用於存儲矩形寬度和高度的變數（以英寸為單位） */ int width;  int height; \n int area; /* 用於存儲矩形的面積的變數 */ int perimeter; /* 用於存儲矩形的周長的變數 */ \n int main() {  /* 為高度和寬度賦值 */  height = 7;  width = 5; \n /* 計算矩形的周長 */  perimeter = 2 * (height + width);  printf("矩形的周長 = %d 英寸\\n", perimeter); \n /* 計算矩形的面積 */  area = height * width;  printf("矩形的面積 = %d 平方英寸\\n", area); \n return 0; } \n \n 6. \n #include <stdio.h> \n int main() {  int radius; /* 用於存儲圓的半徑的變數 */  float area, perimeter; /* 用於存儲圓的面積和周長的變數 */   radius = 6; /* 將半徑賦值為6 */ \n /* 計算圓的周長 */  perimeter = 2 * 3.14 * radius;  printf("圓的周長 = %f 英寸\\n", perimeter); \n /* 計算圓的面積 */  area = 3.14 * radius * radius;  printf("圓的面積 = %f 平方英寸\\n", area); \n return 0; } \n \n 7. \n #include <stdio.h> \n int main() {  int a = 125, b = 12345; /* 宣告並初始化整數變數 */  long ax = 1234567890; /* 宣告並初始化長整數變數 */  short s = 4043; /* 宣告並初始化短整數變數 */  float x = 2.13459; /* 宣告並初始化浮點數變數 */  double dx = 1.1415927; /* 宣告並初始化雙精度變數 */  char c = \'W\'; /* 宣告並初始化字符變數 */  unsigned long ux = 2541567890; /* 宣告並初始化無符號長整數變數 */ \n /* 各種算術運算和類型轉換 */  printf("a + c = %d\\n", a + c);  printf("x + c = %f\\n", x + c);  printf("dx + x = %f\\n", dx + x);  printf("((int) dx) + ax = %ld\\n", ((int) dx) + ax);  printf("a + x = %f\\n", a + x);  printf("s + b = %d\\n", s + b);  printf("ax + b = %ld\\n", ax + b);  printf("s + c = %hd\\n", s + c);  printf("ax + c = %ld\\n", ax + c);  printf("ax + ux = %lu\\n", ax + ux); \n return 0; } \n \n 8. \n #include <stdio.h> \n int main() {  int days, years, weeks; \n days = 1329; // 總天數 \n // 將天數轉換為年、周和天  years = days / 365; // 計算年數  weeks = (days % 365) / 7; // 計算周數  days = days - ((years * 365) + (weeks * 7)); // 計算剩餘天數 \n // 印出結果  printf("年數: %d\\n", years);  printf("周數: %d\\n", weeks);  printf("天數: %d \\n", days); \n return 0; } \n \n 9. \n #include <stdio.h> \n int main() {  int days, years, weeks; \n days = 1329; // 總天數 \n // 將天數轉換為年、周和天  years = days / 365; // 計算年數  weeks = (days % 365) / 7; // 計算周數  days = days - ((years * 365) + (weeks * 7)); // 計算剩餘天數 \n // 印出結果  printf("年數: %d\\n", years);  printf("周數: %d\\n", weeks);  printf("天數: %d \\n", days); \n return 0; } \n \n 10. \n #include <stdio.h> \n int main()  {  int x, y, result; // 宣告兩個整數及其乘積的變數 \n // 提示使用者輸入並將其存儲在 \'x\'  printf("\\n輸入第一個整數：");   scanf("%d", &x); \n // 提示使用者輸入並將其存儲在 \'y\'  printf("輸入第二個整數：");  scanf("%d", &y); \n result = x * y; // 計算 \'x\' 和 \'y\' 的乘積 \n // 印出乘積  printf("上述兩個整數的乘積 = %d\\n", result); } \n \n', 'tags': '', 'url': 'ANSIC.html'}, {'title': 'C.EX', 'text': '1. \n #include <stdio.h>\nvoid main()\n{\n /* 印出 Hello */\nprintf("Hello World!");\n} \n \n 2. \n #include <stdio.h>\nint main()\n{\n/* 印出 Hello World! Bye Bye */\nprintf("Hello World! ");\nprintf("Bye ");\nprintf("Bye");\nreturn 0;\n} \n \n 3. \n #include <stdio.h> int main() { int a = 1; int A = 8; int b = 2, c; c = A - a + b; /* 輸出 a, A, b, c 到螢幕 */ printf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c ); return 0; } \n \n 4. \n #include <stdio.h>\nvoid main()\n{\nfloat a = 0.5;\ndouble b = 1.2;\nint c = 3;\nb = b + a + c;\n/* 輸出 a, b, c 到螢幕 */\nprintf( " a = %3.1f, b = %3.1f, c = %d ", a ,b, c );\n}\n \n \n 5. \n #include <stdio.h>\nint main()\n{\nchar x, y;\nx = \'a\';\ny = (char)97;\n/* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */\nprintf( " x = %c, y = %c, ASCII of y = %d", x, y, y );\nreturn 0;\n} \n \n 6. \n #include <stdio.h>\n\nint main()\n{\n    int a = 64;\n    int b = 0x40;\n    long c = 64L;\n    printf("%d, %d, %ld", a, b, c);\n    return 0;\n} \n \n 7. \n #include <stdio.h>\nint main()\n{\nint i;\nprintf("Input an integer:");\nscanf( "%d", &i ); /* ch 前面加個 &(位址運算元) */\nprintf( "the number is %d", i );\nreturn 0;\n} \n \n 8. \n #include<stdio.h>\nint main()\n{\nint a,b;\na = 10; b = 3;\nprintf( "%d \\n", a * b );\nprintf( "%d \\n", a / b );\nprintf( "%d \\n", a + b );\nprintf( "%d \\n", a - b );\nprintf( "%d \\n", a % b );\nreturn 0;\n} \n \n 9. \n #include <stdio.h>\nint main()\n{\nint a = 10, b = 5;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nprintf( "\\n" );\nb = 10;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nreturn 0;\n} \n \n 10. \n #include<stdio.h>\nvoid main()\n{\nint a,b;\na = 15;\nb = 1;\nprintf("%d \\n", a | b ); /* a OR b */\nprintf("%d \\n", a & b ); /* a AND b */\nprintf("%d \\n", a ^ b ); /* a XOR b */\nprintf("%d \\n", a << 1 ); /* a 位元左移 1 位 */\nprintf("%d \\n", a >> 1 ); /* a 位元右移一位 */\nprintf("%d \\n", ~a ); /* A 的補數運算 */\n} \n', 'tags': '', 'url': 'C.EX.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};