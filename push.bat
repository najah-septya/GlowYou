@echo off
title Push GlowYou to GitHub
set PATH=C:\Users\najah\AppData\Local\Programs\Git\cmd;%PATH%
echo ========================================================
echo        Sedang melakukan push GlowYou ke GitHub...
echo ========================================================
echo.
git push -u origin main --force
echo.
echo ========================================================
echo Selesai! Tekan tombol apa saja untuk menutup jendela ini.
echo ========================================================
pause

