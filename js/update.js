function tokenand(argument) {
  token=$.ajax({url:"http://server-php.coding.io/token.php",async:false});
   $("#token").val(token.responseText);
  return token.responseText;
}
tokenand();
/*
function update(argument) {
  update= $.ajax({
     url: "http://upload.qiniu.com/",
     type: "POST",
     enctype: 'multipart/form-data',
     data: {
       token:tokenand(),
       file: document.getElementById("qifile").files[0],
     },
     success: function () {
       alert("Data Uploaded: ");
     }
  });
}
*/
function UpladFile() {
    var fileObj = document.getElementById("qifile").files[0]; // 获取文件对象
    var FileController = "http://upload.qiniu.com/";                    // 接收上传文件的后台地址
    var form = new FormData();
    form.append("kay",key());
    form.append("token", tokenand());                        // 可以增加表单数据
    form.append("file", fileObj);                           // 文件对象
    var xhr = new XMLHttpRequest();
    xhr.open("post", FileController, true);
    xhr.onload = function () {
        alert("上传完成!");
    };
    xhr.send(form);
}
