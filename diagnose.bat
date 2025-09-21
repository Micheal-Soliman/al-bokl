@echo off
echo Dr. Al-Bokl Website Diagnostics
echo ===============================
echo.

echo Checking Node.js version...
node --version
echo.

echo Checking npm version...
npm --version
echo.

echo Checking package.json...
if exist package.json (
    echo ✓ package.json found
) else (
    echo ✗ package.json not found
)
echo.

echo Checking dependencies...
if exist node_modules (
    echo ✓ node_modules folder exists
) else (
    echo ✗ node_modules folder not found - run 'npm install'
)
echo.

echo Checking key files...
if exist src\app\page.js (
    echo ✓ Main page.js found
) else (
    echo ✗ Main page.js not found
)

if exist src\app\layout.js (
    echo ✓ Root layout.js found
) else (
    echo ✗ Root layout.js not found
)

if exist src\app\globals.css (
    echo ✓ Global CSS found
) else (
    echo ✗ Global CSS not found
)
echo.

echo Checking Next.js config...
if exist next.config.mjs (
    echo ✓ next.config.mjs found
) else (
    echo ✗ next.config.mjs not found
)
echo.

echo Running lint check...
npm run lint --silent
echo.

echo Diagnostics complete!
pause
