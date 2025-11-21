@echo off
echo Starting Local Portfolio Preview...
echo.
echo NOTE: Modular JavaScript files require a local web server to work due to browser security (CORS).
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not found in your PATH.
    echo Please install Python or use a VS Code extension like "Live Server".
    pause
    exit /b
)

echo Starting Python HTTP Server on port 8000...
echo Opening http://localhost:8000 in your browser...
start http://localhost:8000
python -m http.server 8000
pause
