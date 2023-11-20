@echo off
%1 mshta vbscript:createobject("shell.application").shellexecute("%~s0","::","","runas",1)(window.close)&exit
cd /d %~dp0 

rem -----------------------过滤含英文字母、逗号、感叹号、等号、及定义字符串的行----------------------------
set filename=C:\Windows\System32\drivers\etc\hosts
set str1=static-fe.tapd.cn
findstr /r /v "%str1%" %filename% > C:\Windows\System32\drivers\etc\hosts
rem ---------------------------------------------------------------------
pause
