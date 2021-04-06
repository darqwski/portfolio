#!/bin/bash

echo "COPING FILES ..."
cd ../

mkdir .build/build/
cp -r build/ .build/build/
cd .build
echo "REMOVING UNNECESSARY FILES ..."

zip -rv build.zip build/
echo "CLEARING FOLDERS"
rm -rf build
