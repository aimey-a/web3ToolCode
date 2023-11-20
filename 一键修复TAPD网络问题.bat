@echo off
%1 mshta vbscript:createobject("shell.application").shellexecute("%~s0","::","","runas",1)(window.close)&exit
cd /d %~dp0 

set var1=0
set var2=0
for /f "tokens=*" %%c in (C:\Windows\System32\drivers\etc\hosts) do (
    echo %%c | findstr "static-fe.tapd.cn" >nul
    if errorlevel 1 (
      set var2=1
    ) else (
      set var1=1
    )
)
if %var1% == 0 (
  echo. >> C:\Windows\System32\drivers\etc\hosts
  echo 125.77.29.221 static-fe.tapd.cn >> C:\Windows\System32\drivers\etc\hosts
  echo "Redirect tapd asset cdn."
) else (
  set var1=1
)

echo "Refresh local network dns."
ipconfig /flushdns

start https://tapd.cn
echo "TAPD network issue has been fixed."

pause
