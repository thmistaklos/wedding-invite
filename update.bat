@echo off
REM =========================================
REM  Update and deploy Sophia & Alexander Wedding website
REM =========================================

REM Change to your project directory (update path if needed)
cd /d "C:\Users\Shooter\Desktop\wedding invt"

echo =========================================
echo Pulling latest changes from GitHub...
git pull origin main

echo =========================================
echo Installing dependencies (if new ones were added)...
npm install

echo =========================================
echo Building the project...
npm run build

echo =========================================
echo Deploying to GitHub Pages...
npm run deploy

echo =========================================
echo Committing source changes to main branch...
git add .
git commit -m "Update website"
git push origin main

echo =========================================
echo Done! Your wedding invite should be live at:
echo https://thmistaklos.github.io/wedding-invite/
pause
