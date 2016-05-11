#!/bin/sh
#!/bin/sh
time=$(date)
echo "$time $1" > ./static/text/version.txt
git add --all .
git commit -m "$time $1"
git pull
git push github master
git push origin master
git push gitlab master 
#自动部署代码
