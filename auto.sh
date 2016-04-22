#!/bin/sh
#!/bin/sh
time=$(date)
echo $time > ./static/text/version.txt
git add --all .
git commit -m "$time $1"
git pull
git push github master
git push origin master
#自动部署代码
