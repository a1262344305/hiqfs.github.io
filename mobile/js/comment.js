$(document).ready(function() {
comment=$.ajax({url:"http://server-php.coding.io/read.php",async:false});
var com = comment.responseText;
//var commit = com.split("|");
document.getElementById("commit").innerHTML=com;
});
  function tijiaopost() {
    if (document.getElementById("ti").value) {
    tijiaopostand = $.ajax({
      url:"http://server-php.coding.io/write.php",
      type:"post",
      data:{comment:document.getElementById("ti").value},
      success:function(data,textStatus) {
        alert("success");
        $('#commit').empty()
        $('#commit').html(function(){
          comment=$.ajax({url:"http://server-php.coding.io/read.php",async:false});
          var com = comment.responseText;
          var commit = com.split("|");
          return commit;
        });
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
  }else {
    alert("总得写些什么吧！");
  }
  }
