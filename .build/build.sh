#!/bin/bash

echo "COPING FILES ..."
cd ../
rm -rf build.zip

mkdir .build/build/
cp index.php build/index.php
rm build/index.html
cp -r build/ .build/build/
cd .build
echo "REMOVING UNNECESSARY FILES ..."
zip -rv build.zip build/
echo "CLEARING FOLDERS"
rm -rf build
