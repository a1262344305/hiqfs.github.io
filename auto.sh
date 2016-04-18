#!/bin/sh
#!/bin/sh
time=$(date)
echo $time > ./text/version.txt
git add --all .
git commit -m "$time $1"
git push github master
git push origin master
#自动部署代码
