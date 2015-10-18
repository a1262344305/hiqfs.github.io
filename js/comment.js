
function comment(){
  comment=$.ajax({url:"http://server-php.coding.io/read.php",async:false});
  var com = comment.responseText;
  var commit = com.split("|");
  $(document).ready(function() {
    document.getElementById("commit").innerHTML=commit;
  });
}
comment();
function tijiaopost() {
  tijiaopost = $.ajax({
    url:"http://server-php.coding.io/write.php",
    type:"post",
    dataType:"text",
    data:{comment:document.getElementById("ti").value},
    success:function(data) {
      alert("success");
      comment();
    },
    error:function (data) {
      alert("error");
    },
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
