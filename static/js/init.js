$("document").ready(function() {
    //$('#bar').load("/bar.html");
    hius();
    ash();
    //mobile();
    $("#musica").click(function() {
        if ($(this).css("left") == "0px") {
            $(this).animate({ left: '280px' });
            $("#musicd").animate({ left: "0px" });
        } else {
            $("#musicd").animate({ left: "-280px" });
            $(this).animate({ left: '0px' });
        }
    });
});

function mobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $("#musica").css("display", "none");
        return true;
    } else {
        //$("#musica").css("display","none");
        //$("#root").css("background-image", "url(http:\/\/qqfs.qiniudn.com/background.png)");
        return false;
    }
}
mobile();

function hitokoto(hi) {
    $('#hitokoto').empty();
    if (hi.source) {
        text = "<p>" + hi.hitokoto + "<br>来自：" + hi.source + "</p>";
    } else {
        text = "<p>" + hi.hitokoto + "</p>";
    }
    $('#hitokoto').html(text);
}

function delete_us() {
    var us = document.getElementById('root');
    var usid = document.getElementById('us');
    us.removeChild(usid);
}

function hius() {
    var hjs = document.createElement('script');
    hjs.setAttribute('id', 'us');
    //同步bug
    //hjs.setAttribute('async', 'async');
    hjs.setAttribute('src', 'http://api.hitokoto.us/rand?encode=jsc');
    document.body.appendChild(hjs);
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
//baidufen();

function bar(argument) {
    $("#hcond").show();
    if (argument == "1") {
        if ($(document).scrollTop() > $(window).height()) {
            $('#b3').show("100");
        }
    } else {
        $('#b3').hide("100");
    }
    $("#ping").hide();
    $(window).unbind();
    $("body,html").unbind();
    $("#b3").unbind();
    $("about").hide();
    switch (argument) {
        case '1':
            $("#commitload").show();
            $("#ping").show();
            $("#hcond").animate({ marginTop: '100px' });
            $("#b1").addClass(function() {
                $("li a").removeClass("active");
                return "active";
            });
            $("title").html("喵窝留言板⊙ω⊙");
            $("#title").html("喵窝留言板⊙ω⊙");
            $("#ping").show();
            window.location.hash = "cping";
            init_comment();
            init();
            sjmo();
            $("#commitload").hide();
            $('body,html').animate({ scrollTop: window.heighttmp }, 400);
            break;
        case '2':
            $("#hcond").hide();
            $("#b2").addClass(function() {
                $("li a").removeClass("active");
                return "active";
            });
            $("title").html("关于喵窝");
            $("about").show();
            window.location.hash = "cabout";
            break;
        case 'home':
            $("#hcond").animate({ marginTop: '200px' });
            $("#home").addClass(function() {
                $("li a").removeClass("active");
                return "active";
            });
            $("title").html("喵窝");
            $("#title").html("欢迎来到喵窝∩ω∩");
            window.location.hash = "";
            break;
        default:
            window.location.href = "/";
    }
    hius();
    delete_us();
}

function cping() {
    $("#commitload").show();
    $("#ping").show();
    $("#hcond").animate({ marginTop: '100px' });
    $("#b1").addClass(function() {
        $("li a").removeClass("active");
        return "active";
    });
    $("title").html("喵窝留言板⊙ω⊙");
    $("#title").html("喵窝留言板⊙ω⊙");
    $("#ping").show();
    init_comment();
    init();
    $("#commitload").hide();
    sjmo();
    $('body,html').animate({ scrollTop: window.heighttmp }, 400);
}

function cabout() {
    $("#hcond").show();
    $('#b3').hide("100");
    //$("#ping").empty();
    $(window).unbind();
    $("body,html").unbind();
    $("#b3").unbind();
    $("#hcond").hide();
    $("#b2").addClass(function() {
        $("li a").removeClass("active");
        return "active";
    });
    $("title").html("关于喵窝");
    $("about").show();

}

function chome() {
    $("#hcond").animate({ marginTop: '200px' });
    $("#home").addClass(function() {
        $("li a").removeClass("active");
        return "active";
    });
    $("title").html("喵窝");
    $("#title").html("欢迎来到喵窝∩ω∩");
    window.location.hash = "";
}

function urlchenge() {
    $("#hcond").show();
    if (window.location.hash == "#cping") {
        if ($(document).scrollTop() > $(window).height()) {
            $('#b3').show("100");
        }
    } else {
        $('#b3').hide("100");
    }
    $("#ping").hide();
    $(window).unbind();
    $("body,html").unbind();
    $("#b3").unbind();
    $("about").hide();
    ash();
}

function ash() {
    if (window.location.hash == "") {
        chome();
    }
    if (window.location.hash == "#cping") {
        cping();
    }
    if (window.location.hash == "#cabout") {
        cabout();
    }
    //$youziku.load("#hcond h1", "6a165ede1020463ba4351d8e1771839f", "DroidSans");
    //$youziku.draw();
}
