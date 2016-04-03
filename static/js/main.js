require.config({
    baseUrl: "http://7u2f38.com1.z0.glb.clouddn.com/ajax/libs/",
    paths: {
        "jquery": "jquery/3.0.0-beta1/jquery",
        "socket.io":"socket.io/1.4.5/socket.io.min",
        "bootstrap":"twitter-bootstrap/4.0.0-alpha/js/bootstrap.min",
        "tether":"tether/1.2.0/js/tether.min",
        "init":"//js/init"
    },
    shim: {
    	'init':{
    		deps: ['jquery'],
    	},
　　　　'socket.io': {
　　　　　　deps: ['jquery'],
　　　　}
　　}
});
require(['jquery', 'socket.io',"init",'tether','bootstrap'], function (jquery, socketio,tether,bootstrap){
	console.log("yes");
	alert("加载成功！");
});
