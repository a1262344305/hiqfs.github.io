serverphp = "http://server-php.coding.io";
$(document).ready(function() {
    function init(argument) { //脚本初始化函数
        commitNum = 0; //评论偏移数
        CommentNum(0); //评论初始化
        json_comment(1); //评论加载
        window.id = 0; //页数初始化为零
        //htmlinit(); //处理图片和哈希资源
        var index = Math.floor(Math.random() * (11 - 1 + 1) + 1); //评论框随机背景
        $("#ti").css("background-image", "url(http://7xljsf.com1.z0.glb.clouddn.com/bk" + index + ".jpg)");
        //footer(); //底部加载脚本初始化
        if (window.status) { //服务器自动状态提醒
            $('status').text('已连接');
            $('status').css("background-color", "#0275d8");
        } else {
            websocketio();
        }
    }
    $(window).scroll(function() {
        //$(document).scrollTop() 获取垂直滚动的距离
        //$(document).scrollLeft() 这是获取水平滚动条的距离
        if ($(document).scrollTop() + 100 >= $(document).height() - $(window).height()) {
            if (Loading_xml(window.commentjson.responseJSON) == "<wbi></wbi>") {
                $("loading").remove();
                $('wbi').html("<span class=\"glyphicon glyphicon-exclamation-sign\" style=\"color: rgb(255, 140, 60);\">加载完毕</span>");
            } else {
                CommentNum(++window.id);
                $('#commit').append(Loading_xml(window.commentjson.responseJSON) + "<loading>Loading....</loading>");
                $("loading").remove();
                htmlinit();
            }
        }
    });
    init(); //脚本初始化
    htmlinit();
});

function commit() {
    $(document).ready(function() {
        comment = $.ajax({
            url: serverphp + "/read.php?line=1",
            cache: false,
            async: false,
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("commit").innerHTML = "<div class='comment' ><p> _(:qゝ∠)_  错误：加载超时，刷新看看....</p></div>";
            },
        });
        var com = comment.responseText;
        var commit = com.replace(/\n/g, "<br>");
        document.getElementById("commit").innerHTML = commit;
        htmlinit();
    });
}

function tijiaopost() {
    if (document.getElementById("ti").value) {
        tijiaopostand = $.ajax({
            url: serverphp + "/write.php",
            dataType: "json",
            type: "post",
            data: {
                comment: function(argument) {
                    tmpd = "";
                    for (var i = 0; i < document.getElementById("ti").value.length; i++) {
                        if (document.getElementById("ti").value.codePointAt(i) > 65535) {
                            tmpd += "&#" + document.getElementById("ti").value.codePointAt(i) + ";";
                            i++;
                        } else {
                            tmpd += String.fromCharCode(document.getElementById("ti").value.codePointAt(i));
                        }
                    } //哈哈，可以支持emoji了😆
                    window.tmop = tmpd;
                    return tmpd;
                }
            },
            success: function(data, textStatus, xhr) {
                if (data.status == "OK") {
                    alert("发送成功");
                    var text = [{
                        "comment": window.tmop,
                        "time": data.time
                    }, "duang"];
                    $('#commit').prepend(Loading_xml(text));
                    iosocket.send(JSON.stringify(text));
                    $("#ti").val("");
                    ++commitNum;
                    htmlinit();
                } else {
                    alert("额，发送失败   _(:qゝ∠)_  \n ", data);
                    console.log(data);
                }
                htmlinit();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
                alert("error");
            },
            async: "true",
            cache: "false"
        });
        return tijiaopostand;
    } else {
        alert("总得写些什么吧！");
    }
}

function htmlinit() {
    $(".comm").fadeIn(1500);
    $("[hash]").attr("src", function() {
        $("img[hash]").addClass("img");
        return "http://7xljsf.com1.z0.glb.clouddn.com/" + $(this).attr("hash");
    });
    $("[hash]").removeAttr("hash");
    $('.img').unbind("click"); //移除事件重新创建
    $(".img").click(function() {
        if ($(this).css("width") <= "100px") {
            $(this).css("width", "100%");
        } else {
            $(this).css("width", "100px");
        }
    });
}

function json_comment(id) {
    if (id == 1) {
        $('#commit').empty()
    } else {}
    console.log();
    $('#commit').html(Loading_xml(window.commentjson.responseJSON));
    //$('#commit').html(json_commentxml(commentjson.responseJSON,id));
    window.id = id;
}

function Loading_xml(argument) { //json生成评论返回dom
    if (argument.length - 1) {
        commithaed = "<div class='comm' style=\"display:none;\"><p>";
        commitzhon = "</p><time>";
        commitfooter = "</time><br></div>";
        var commenttmp = "";
        tiao = 0;
        for (i = tiao; i < tiao + argument.length - 1; i++) {
            commenttmp += commithaed + argument[i].comment;
            commenttmp += commitzhon
            commenttmp += argument[i].time + commitfooter;
        }
        xml = commenttmp.replace(/\n/g, "<br>");
        xml = emoji(xml);
        if (argument[argument.length - 1] == "duang") {} else {
            $('loadtime').text(argument[argument.length - 1] + "s");
        } //这里要duang一下
        return xml;
    } else {
        return "<wbi></wbi>";
    }
}

function emoji(argument) { //处理emoji表情
    text = argument.replace(/\&#[1-9]*;/g, function(emojicode) {
        var num = parseInt(emojicode.substring(2, emojicode.length - 1)).toString(16);
        if (num > "20e3" && num < "1f6c5") {
            return argument;
        } else {
            return "<img class=\"emojisize\" src=\"http://7u2f38.com5.z0.glb.clouddn.com/emoji" + num + ".png\"></img>";
        }
    });
    return text;
}

function websocketio() {
    iosocket = io.connect("http://jabin-nodejs.coding.io/");
    iosocket.on('connect', function() {
        $('status').text('已连接');
        window.status = 1;
        $('status').css("background-color", "#0275d8");
        iosocket.on('message', function(message) {
            var text = JSON.parse(message);
            $('#commit').prepend(Loading_xml(text));
            htmlinit();
        });
        iosocket.on('disconnect', function() {
            $('status').text('已断开');
            $('status').css("background-color", "#d9534f");
            window.status = 0;
        });
    });
}

function CommentNum(id) {
    Num = 25;
    start = id * Num;
    start = start + commitNum;
    window.commentjson = $.ajax({
        url: serverphp + "/jsonread.php?start=" + start + "\&num=" + Num,
        cache: false,
        async: false,
        dataType: "json",
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("加载失败.");
        },
    });
}
//蛋疼的封装了一堆函数
// Jquery Code
//开始处理点击事件
timetmp = (new Date).getTime() + 3000;
$("#jiao").click(function() {
    $(this).attr("disabled", true);
    $(this).css("background-color", "#6F6F6F");
    $(this).text("发送中...");
    if (timetmp >= (new Date).getTime()) {
        alert("发太快了哦");
    } else {
        tijiaopost();
        timetmp = (new Date).getTime() + 3000;
    }
    $(this).css("background-color", "#00a3cf");
    $(this).text("发送");
    $(this).attr("disabled", false);
});
