function link(text){
  var url='ws://0.0.0.0:2347';
  socket=new WebSocket(url);
  socket.onopen=function(){
    console.log('连接成功');
  };
  socket.onmessage=function(msg){
    console.log('获得消息:'+msg.data);
    console.log(msg);
  };
}link("啦啦");
