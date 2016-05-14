#!/bin/sh
curl \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/tether/1.2.0/js/tether.min.js \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/socket.io/1.4.5/socket.io.min.js > ./static/js/web.i.js
curl \
http://hiqfs.file.alimmdn.com/font.css \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css \
http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/tether/1.2.0/css/tether.min.css \
 | sed  "s/..\/fonts\//http:\/\/7u2f38.com1.z0.glb.clouddn.com\/ajax\/libs\/font-awesome\/4.6.2\/fonts\//g" \
 > ./static/css/web.i.css
cleancss  --s1 ./static/css/web.i.css ./static/css/master.css > ./static/css/web.css
uglifyjs --no-copyright ./static/js/web.i.js ./static/js/commit.dev.js ./static/js/init.js > ./static/js/web.js 
rm ./static/js/web.i.js
rm ./static/css/web.i.css
echo ok