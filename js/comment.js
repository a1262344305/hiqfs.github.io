var serverphp = "-http://server-php.coding.io";
function jsonhook(){
  window.commentjson=$.ajax({
        url:serverphp+"/jsonread.php",
        cache:false,
        async:false,
        dataType: "json",
        error:function (XMLHttpRequest, textStatus, errorThrown){
          document.getElementById("commit").innerHTML="<div class='comment' ><p>/(ㄒoㄒ)/~~ 加载失败....</p></div>";
    },
  });
/*  window.cron=$.ajax({
        url:serverphp+"/cron.php",
        cache:false,
        async:false,
        dataType: "json"
  }).responseJSON;*/
}
$(document).ready(function() {
  function init(argument) {
    jsonhook();
    json_comment(1);
    window.id=1;
  }init();
});
function commit() {
  $(document).ready(function() {
  comment=$.ajax({
    url:serverphp+"/read.php?line=1",
    cache:false,
    async:false,
    error:function (XMLHttpRequest, textStatus, errorThrown){
      document.getElementById("commit").innerHTML="<div class='comment' ><p> _(:qゝ∠)_  错误：加载超时，刷新看看....</p></div>";
    },
  });
  var com = comment.responseText;
  var commit = com.replace(/\n/g,"<br>");
  document.getElementById("commit").innerHTML=commit;
  imm();
  });
}
  function tijiaopost() {
    if (document.getElementById("ti").value) {
    tijiaopostand = $.ajax({
      url:serverphp+"/write.php",
      type:"post",
      data:{
        comment:function(argument){
          tmpd="";
          for(var i = 0; i < document.getElementById("ti").value.length; i++){
            if(document.getElementById("ti").value.codePointAt(i)>65535){
              tmpd+="&#"+document.getElementById("ti").value.codePointAt(i)+";";
              i++;
            }else{
              tmpd+=String.fromCharCode(document.getElementById("ti").value.codePointAt(i));
            }
          }//哈哈，可以支持emoji了😆
          return tmpd;
        }
      },
      success:function(data,textStatus) {
        if(data=="OK"){
          alert("发送成功");
          $("#ti").val("");
          jsonhook();
          json_comment(window.id);
        }else {
          alert("额，发送失败   _(:qゝ∠)_  \n ",data);
          console.log(data);
        }
        imm();
      },
      error:function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
        alert("error");
      },
      async:"true",
      cache:"false"
    });
    return tijiaopostand;
  }else {
    alert("总得写些什么吧！");
  }
}
function ye(id,http) {
  $('#commit').empty()
  $('#commit').html(function(){
    if(http=="json"){
      json_comment(id);
    }else {
      sitehttp = serverphp+"/read.php?line=";
      comment=$.ajax({url:sitehttp+id,cache:false,async:false});
      var com = comment.responseText;
      var commit = com.replace(/\n/g,"<br>");
      return commit;
    }
  });
  imm();
}
function imm(argument) {
$(document).ready(function(){
    $("im").html(function() {
      $(this).append("</im>")
      return "<img src='"+"http://7xljsf.com1.z0.glb.clouddn.com/"+$(this).attr("hash")+"' onclick='daa(\""+$(this).attr("hash")+"\")'></img>";
    });
});
}
function json_comment(id) {
  $('#commit').empty()
  $('#commit').html(json_commentxml(commentjson.responseJSON,id));
  window.id=id;
}
function json_commentxml(argument,mnum) {
  commithaed="<div class='comm'><div class='com'><comment><p>";
  commitzhon="</p></comment><time>";
  commitfooter="</time><br></div></div>";
  var commenttmp="";
  tiao=mnum-1;
  numm=argument.length-1;
  tiao=tiao*10;
  for(i=tiao;i<=tiao+10;i++){
    if(i<numm&&i>=0){
      commenttmp+=commithaed+argument[i].comment;
      commenttmp+=commitzhon
      commenttmp+=argument[i].time+commitfooter;
    }else {
    }
  }
  xml=commenttmp.replace(/\n/g,"<br>");
  //开始处理分页
  num=Math.ceil((argument.length-1)/10);
    tmp="";
    su=0;
    dome=0;
    tmp+="<ys><ye>总共有:"+num+"页</ye></br>";
        if(mnum<=6){
          su=1;
          dome=11;
        }else if(mnum>6){
          su=mnum-5;
          dome=mnum+parseInt(5);
        }
        if (dome>num) {
          dome=num;
        }
        if(dome<=11){
          $su=1;
        }
        if(mnum>=num-5){
          su=num-11;
          dome=num;
        }
        if(mnum!=1){tmp+="<a onclick='ye(1,\"json\");'>首页</a>"}
          for(i=su;i<=dome;i++){
            if(i<=num&&i>0){
              if(i==mnum)
              tmp+="<ci>"+i+"</ci> ";
              else
              tmp+="<a onclick='ye("+i+",\"json\");'>"+i+"</a> ";
            }
          }
          if(mnum!=num){tmp+="<a onclick='ye("+num+",\"json\");'>尾页</a>"}
      tmp+="<chu><br>后台服务器处理时间:"+argument[argument.length-1]+"秒</chu></ys>";
    xml+=tmp;
  return xml;
}
function daa(argument) {
  if($("[src$='"+argument+"']").css("width")<="100px"){
    $("[src$='"+argument+"']").css("width","auto");
    $("[src$='"+argument+"']").css("height","auto");
  }
  else {
    $("[src$='"+argument+"']").css("width","100px");
    $("[src$='"+argument+"']").css("height","100px");
  }
}
function cornd(){
  cron=$.ajax({
        url:serverphp+"/cron.php",
        cache:false,
        async:false,
        dataType: "json"
  }).responseJSON;
  if(window.cron<cron){
  }//这里的1000表示1秒有1000毫秒,1分钟有60秒,5表示总共5分钟
}
function AsciiToUnicode() {
    if (document.getElementById('content').value == '') {
	alert('文本框中没有代码！');
	return;
	}
    document.getElementById('result').value = '';
	for (var i = 0; i < document.getElementById('content').value.length; i++)
	    result.value += '&#' + document.getElementById('content').value.charCodeAt(i) + ';';
	document.getElementById('content').focus();
}
/*
$("#comment").ajaxSubmit({
                    type: 'post',
                    url: "http://127.0.0.1:8080/write.php" ,
                    success: function(data){
                        alert( "success");
                        //$( "#wfAuditForm").resetForm();
                    },
                    error: function(XmlHttpRequest, textStatus, errorThrown){
                        alert( "error");
                    }
                });
*/
