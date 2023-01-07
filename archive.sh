#!/usr/bin/env sh

PROJECT_NAME=`cat package.json | grep name | awk -F '"' '{print $4}'`
# abort on errors
set -e

if ! [ -x "$(command -v npm)" ]; then
    echo 'Error: npm is not installed.' >&2
    exit 1
fi

# clean
npm run clean
# navigate into the build output directory
cd ../
tar -czf "$PROJECT_NAME".tar.gz "$PROJECT_NAME"
mv "$PROJECT_NAME".tar.gz "$PROJECT_NAME"
cd -