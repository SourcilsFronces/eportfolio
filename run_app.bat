@echo off
echo ==========================================
echo Setting up and starting your E-Portfolio...
echo ==========================================

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting development server...
echo Press Ctrl+C to stop the server.
echo.
call npm run dev
pause
