var serverphp = "http://server-php.coding.io";
function commit() {
  $(document).ready(function() {
  comment=$.ajax({
    url:serverphp+"/read.php?line=1",
    cache:false,
    async:false,
    dataType: "json",
    error:function (XMLHttpRequest, textStatus, errorThrown){
      document.getElementById("commit").innerHTML="<div class='comment' ><p>/(ㄒoㄒ)/~~ 加载失败....</p></div>";
    },
  });
  var com = comment.responseText;
  var commit = com.replace(/\n/g,"<br>");
  document.getElementById("commit").innerHTML=commit;
  imm();
  });
}commit();
  function tijiaopost() {
    if (document.getElementById("ti").value) {
    tijiaopostand = $.ajax({
      url:serverphp+"/write.php",
      type:"post",
      data:{comment:document.getElementById("ti").value},
      success:function(data,textStatus) {
        alert("发送成功");
        $("#ti").val("");
        $('#commit').empty()
        $('#commit').html(function(){
          comment=$.ajax({url:serverphp+"/read.php?line=1",cache:false,async:false});
          var com = comment.responseText;
          var commit = com.replace(/\n/g,"<br>");
          return commit;
        });
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
      sitehttp = serverphp+"/jsonread.php?line=";
    }else {
      sitehttp = serverphp+"/read.php?line=";
    }
    comment=$.ajax({url:sitehttp+id,cache:false,async:false});
    var com = comment.responseText;
    var commit = com.replace(/\n/g,"<br>");
    return commit;
  });
  imm();
}
function imm(argument) {
$(document).ready(function(){
    $("im").html(function() {
      $(this).append("</im>")
      return "<img src='"+"http://7xljsf.com1.z0.glb.clouddn.com/"+$(this).attr("hash")+"' onclick='daa()'></img>";
    });
});
}
function json_comment(id) {
  $('#commit').empty()
  $('#commit').html(function(){
    comment=$.ajax({
      url:serverphp+"/jsonread.php",
      cache:false,
      async:false,
      dataType: "json",
      error:function (XMLHttpRequest, textStatus, errorThrown){
        document.getElementById("commit").innerHTML="<div class='comment' ><p>/(ㄒoㄒ)/~~ 加载失败....</p></div>";
      },
    });
    mnum=1;
    return json_commentxml(comment.responseJSON,mnum);
  });
}
function json_commentxml(argument,mnum) {
  commithaed="<div class='comm'><div class='com'><comment><p>";
  commitzhon="</p></comment><time>";
  commitfooter="</time><br></div></div>";
  var commenttmp="";
  tiao=argument.length-1;
  for(i=mnum;i<=mnum+10;i++){
    if(i<=tiao&&i>0){
      commenttmp+=commithaed+argument[i].comment;
      commenttmp+=commitzhon
      commenttmp+=argument[i].time+commitfooter;
    }else {
    }
  }
  xml=commenttmp;
  num=Math.ceil((argument.length-1)/10);
  xml+=$("ys").html(function() {
    tmp="";
    tmp+=$("ye").htm(function(){
        return "总共有:"+num+"页";
      });
    tmp+=$("num").htm(function(){
        if(mnum<=6){
          su=1;
          dome=11;
        }else if(mnum>6){
          su-=5;
          dome+=5;
        }if (dome>num) {
          dome=num;
        }
        if(dome<=11){
          $su=1;
        }
        if(mnum>=num-5){
          su=num-11;
          dome=num;
        }
        if(mnum!=1){tmp+="<a onclick='ye('1');'>首页</a>"}
          for(i=su;i<=dome;i++){
            if(i<=num&&i>0){
              if(i==mnum)
              tmp+="<ci>"+i+"</ci> ";
              else
              tmp+="<a onclick='ye(\""+i+"\");'>"+i+"</a> ";
            }
          }
          if(mnum!=num){tmp+="<a onclick='ye('"+num+"');'>尾页</a>"}
          return tmp;
        });
      tmp+=$("chu").htm(function(){
        return "<br>后台服务器处理时间:"+argument[argument.length]+"秒";
      });
    return tmp;
  });
  return xml;
  // body...
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
