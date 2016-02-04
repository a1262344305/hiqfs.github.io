    $(document).ready(function(){
        // 第一步：从业务服务器获得“上传凭证”，并且把上传凭证赋值给表单元素
        $.post("http://server-php.coding.io/token.php",{},function(token){
            $("#uploadToken").val(token);
        });
        // 第二步：绑定提交按钮，把上传凭证、图片和其他信息上传到七牛云存储服务器上
        $("#btnSubmit").bind("click",function(){
            var token = $("#uploadToken").val();
            var file  = $("#file").val();

            $.ajax({
                type:"POST",
                url:"http://upload.qiniu.com",
                data:{"token":token,"file":file},  
                dataType:"json",
                success:function(result,data,xhr){
                    console.log(result);
                    console.log(data);
                    console.log(xhr);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
                alert("error");
            }
            });

        });
    });