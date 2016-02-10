$("document").ready(function() {
    //$('#bar').load("/bar.html");
    hius();
});

function mobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $("#root").css("background-color", "#FFF");
        return true;
    } else {
        $("#root").css("background-image", "url(http:\/\/qqfs.qiniudn.com/background.png)");
        return false;
    }
} //mobile();
function hitokoto(hi) {
    $('#hitokoto').empty();
    if (hi.source) {
        text = "<p>" + hi.hitokoto + "<br>来自：" + hi.source + "</p>";
    } else {
        text = hi.hitokoto;
    }
    $('#hitokoto').html(text);
}

function delete_us() {
    var us = document.getElementById('root');
    var usid = document.getElementById('us')
    us.removeChild(usid);
}

function hius() {
    setTimeout(function() {
        var hjs = document.createElement('script');
        hjs.setAttribute('id', 'us');
        //同步bug
        //hjs.setAttribute('async', 'async');
        hjs.setAttribute('src', 'http://api.hitokoto.us/rand?encode=jsc');
        document.body.appendChild(hjs);
    }, 100);
}

function baidufen(argument) { //百度分享
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16"
        },
        "slide": {
            "type": "slide",
            "bdImg": "0",
            "bdPos": "right",
            "bdTop": "190.5"
        }
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
}
baidufen();

function bar(argument) {
    switch (argument) {
        case '1':
            $('xmd').load('lyb.html', function(response, status, xhr) {
                if (status == "success") {
                    hius();
                    $("#b1").addClass(function() {
                        $("li a").removeClass("active");
                        return "active";
                    });
                    $("title").html("喵窝留言板⊙ω⊙");
                    delete_us();
                } else {
                    alert("加载失败  _(:qゝ∠)_  \n错误代码:" + xhr.status);
                    console.log(xhr);
                }
            });
            break;
        case '2':
            $('xmd').load('About.htm');
            hius();
            $("#b2").addClass(function() {
                $("li a").removeClass("active");
                return "active";
            });
            $("title").html("关于喵窝");
            delete_us();
            break;
        default:
            window.location.href = "/";
    }
}
