/* * * CONFIGURATION VARIABLES * * */
//var disqus_shortname = 'jaberz';
/* * * DON'T EDIT BELOW THIS LINE * * */
/*(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = "/js/disqus_embed.js";
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
*/
//多说
/*var duoshuoQuery = {short_name:"hifs"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0]
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();*/
//end
/*
var ua = navigator.userAgent.toLowerCase();
if(ua.match(/Mobile/i)=={"mobile"}) {
  window.location.href='mobile';
} else if(ua.match(/Mobile/i)=={""}){
}else{
}*/
function mobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href='mobile';
    }
    else {
    }
}
mobile();
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
hius();
//百度分享
  window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"0","bdPos":"left","bdTop":"190.5"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
//end
$(document).ready(function(){
    document.getElementById("footer").innerHTML="<div class="
      +"footer"
      +"><a href="
      +"http://hifs.tk"
      +">hifs.tk"
      +" "
      +"</a><a href="
      +"mailto:i@hifs.tk"
      +">联系我</a> <a href="
      +"http://hifs.tk/About.htm"
      +">关于我</a><p>"
      +"life,love,linux"
      +"</p></div>";
});
//document.getElementById("footer").innerHTML="<div class="+"footer"+"><a href="+"http://hifs.tk"+">hifs.tk"+" "+"</a><a href="+"mailto:i@hifs.tk"+">联系我</a> <a href="+"http://hifs.tk/About.htm"+">关于我</a><p style='color: darkslategray; font-family: "+"clicker script"+","+"segoe script"+","+"Comic Sans MS"+"; font-size: 28px; margin-top: 1px; text-shadow: none;'>"+"life,love,linux"+"</p></div>";
/* htmlobj=$.ajax({url:"http://server-php.coding.io/imgaddress.php",async:true});
var address=htmlobj.responseText;
var arr = address.split("<br>");
var index = Math.floor(Math.random() * arr.length);
index-=1;
if (index==-1) {
  index+=1;
}
document.write('<style>body{background-image:url(' + arr[index] + ')}</style>');*/
