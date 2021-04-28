cd domains/dariuszcabala.pl/public_html/
ls
rm index.html
rm main.bundle.js
rm bundle.js
rm project-images -rf
unzip build.zip
mkdir project-images
mv build/project-images/*.* project-images/
rm build/project-images -rf
mv build/* ./
rm build -rf
rm index.html
rm build.zip
