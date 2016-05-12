#!/bin/sh
#!/bin/sh
time=$(date)
echo "$time $1" > ./static/text/version.txt
git add --all .
git commit -m "$time $1"
git pull
sed -i "s/\/static/http:\/\/7xsbbu.com1.z0.glb.clouddn.com\/static/g" index.html #使用七牛cdn减速服务
git push github master
git push origin master
git push gitlab master 
sed -i "s/http:\/\/7xsbbu.com1.z0.glb.clouddn.com\/static/\/static/g" index.html #变为dev状态
#自动部署代码
