function tokenand(argument) {
  token=$.ajax({url:"http://server-php.coding.io/token.php",async:false});
   $("#token").val(token.responseText);
  return token.responseText;
}tokenand();
function UpladFile() {
    var fileObj = document.getElementById("qifile").files[0]; // 获取文件对象
    var FileController = "http://upload.qiniu.com/";                    // 接收上传文件的后台地址
    var form = new FormData();
    //form.append("kay","key()");
    form.append("token", tokenand());                        // 可以增加表单数据
    form.append("file", fileObj);                           // 文件对象
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", function(evt){
          if (a < fileNum && a != fileNum) {
        //此处的evt就是文件上传的所有信息。                
        //evt.lengthComputable,文件是否是空
        if (evt.lengthComputable) {
            //evt.loaded：文件上传的大小   evt.total：文件总的大小      
            console.warn(evt.loaded);
            var percentComplete = Math.round((evt.loaded) * 100 / evt.total);
            //加载进度条，同时显示信息                    
            document.getElementById("" + a + "").innerHTML = percentComplete.toString() + '%';
            document.getElementById("num" + a + "").value = percentComplete / 100;
            //如果上传的结果是100时才让加载下一个文件。如果不够100会继续上传原来的文档。                    
        }
    }
    }, false);
    xhr.open("post", FileController, true);
    xhr.onload = function () {
        alert("上传完成!");
        console.log(xhr.responseText);
        var tmp=eval("(" + xhr.responseText + ")");
        $("update").append("服务器资源地址:http://7xljsf.com1.z0.glb.clouddn.com/"+tmp.hash+"<br>");
    };
    xhr.send(form);
}
function key(argument) {
  var filename=document.getElementById("qifile").value;
  var filename=filename.split('\\');//注split可以用字符或字符串分割
  var my=filename[filename.length-1];//这就是要取得的图片名称
  return my;
}