function hitokoto(hi) {
  $('#hitokoto').empty();
  $('#hitokoto').html(hi.hitokoto);
}
function hius() {
  setTimeout(function(){
    var hjs=document.createElement('script');
    hjs.setAttribute('src','http://api.hitokoto.us/rand?encode=jsc');
    document.body.appendChild(hjs);
  },100);
}
hius();
