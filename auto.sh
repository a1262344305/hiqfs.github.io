#!/bin/sh
git add --all .
git commit -m "$(date) $1"
git push github master
git push origin master
#自动部署代码
