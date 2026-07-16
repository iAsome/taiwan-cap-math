@echo off
setlocal
start "" /B node "%~dp0..\tools\cap8-r4\serve-chinese-r4.mjs"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4173/%E5%9C%8B%E6%96%87%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/"
