function link(text){
  var url='ws://192.168.1.8:7500';
  socket=new WebSocket(url);
  socket.onopen=function(){
    log('连接成功');
  };
  socket.onmessage=function(msg){
    console.log('获得消息:'+msg.data);
    console.log(msg);
  };
}link("啦啦");
