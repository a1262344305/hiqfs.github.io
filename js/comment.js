$(document).ready(function() {
comment=$.ajax({url:"http://server-php.coding.io/read.php?line=1",cache:false,async:false});
var com = comment.responseText;
var commit = com.replace(/\n/g,"<br>");
document.getElementById("commit").innerHTML=commit;
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
          comment=$.ajax({url:"http://server-php.coding.io/read.php?line=1",cache:false,async:false});
          var com = comment.responseText;
          var commit = com.replace(/\n/g,"<br>");
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
    return tijiaopostand;
  }else {
    alert("总得写些什么吧！");
  }
}
function ye(id) {
  $('#commit').empty()
  $('#commit').html(function(){
    comment=$.ajax({url:"http://server-php.coding.io/read.php?line="+id,cache:false,async:false});
    var com = comment.responseText;
    var commit = com.replace(/\n/g,"<br>");
    return commit;
  });
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
