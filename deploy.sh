#!/bin/bash

rm -rf ../arslan-gait.github.io/*
cp -r ./build/ ../arslan-gait.github.io
cd ../arslan-gait.github.io
git add -A
git commit -m "rebuild"
git push