@echo off
echo Building Dr. Al-Bokl Medical Website...
echo.
echo Installing dependencies...
npm install
echo.
echo Running build process...
npm run build
echo.
if %errorlevel% equ 0 (
    echo Build completed successfully!
    echo Starting production server...
    npm start
) else (
    echo Build failed! Check the errors above.
)
pause
