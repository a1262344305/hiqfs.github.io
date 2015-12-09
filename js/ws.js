function link(text){
  var url='ws://192.168.1.8:2347';
  socket=new WebSocket(url);
  socket.onopen=function(){
    console.log('连接成功');
  };
  socket.onmessage=function(msg){
    console.log('获得消息:'+msg.data);
    socket.send("ddadas");
    console.log(msg);
  };
}link("啦啦");
