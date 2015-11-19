function hitokoto(hi) {
  $('#hitokoto').empty();
  $('#hitokoto').html(hi.hitokoto);
}
function delete_us() {
  var us=document.getElementById('root');
  var usid=document.getElementById('us')
  us.removeChild(usid);
}
function hius() {
  setTimeout(function(){
    var hjs=document.createElement('script');
    hjs.setAttribute('id','us');
    hjs.setAttribute('src','http://api.hitokoto.us/rand?encode=jsc');
    document.body.appendChild(hjs);
  },100);
}
function mobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    }
    else {
      window.location.href='/';
    }
}
//mobile();
