var appId = '10319',
    yname = 'http://test-events.pingan.com.cn:41080',
    dzlurl = window.location.href,
    login = '1',
    data_id,
    tag,
    total_worth;

isLogin();
//判断是否登陆
function isLogin(){
    $.ajax({
        url:yname+'/api/isLogin',
        type:'get',
        dataType:'jsonp',
        jsonp:'callback',
        data:{

        },
        success:function(data){
            var status = data.status;
            if (status === "NEED_LOGIN") {
                login = '2';
                if (data_id == '1' || data_id == '2' || tag == '1') {
                    getloginUrl();
                };
                

            }else if (status === "SUCCESS") {
                if (tag == '1') {
                    window.location.href = yname+'/h5/Ndzd2017/index_page.html';
                };
                login = '3';
                //拿数据
                tempdata();
            }
        }
    });
}
//
function getloginUrl(){
    $.ajax({
        url:yname+'/api/loginUrl',
        type:'get',
        dataType:'jsonp',
        jsonp:'callback',
        data:{
            'pcflag' : 'wap',
            'appId' : appId,
            'backUrl' : dzlurl
        },
        success:function(data){
            var status = data.status;
            var loginUrl = data.attributes.url;
            if (status === "SUCCESS") {
                window.location.href = loginUrl;
            }else if(status === "FAILE"){
                alert(data.message);
            }
        }
    });
}
//点击登录可查看
$('.btn-login').click(function(){
    data_id = $('.btn-login').attr('data-id');
    isLogin();
});
//截取数字
function paraNum(num){
    var a = String(num);
    var b = a.length;
    var c = a.substring(0,b-4);
    return c || 0;
}
//用户信息
function tempdata(){
    $.ajax({
        url:yname+'/api/tempdata/query',
        type:'GET',
        dataType:'jsonp',
        jsonp:'callback',
        data:{

        },
        success:function(data){
            var status = data.status;
            if (status == "NEED_LOGIN") {

            }else if(status == "SUCCESS"){
                var total = data.attributes.tempdata.Order_amt,//2016年投资总额
                    numberO = data.attributes.tempdata.Order_cnt,//2016年投资笔数
                    amount = data.attributes.tempdata.Prod_cnt,//2016年投资产品数量
                    category = data.attributes.tempdata.Category_cnt;//2016年投资产品类别数量
                var total_amt = paraNum(total);
                $('.sixMoney').html(total_amt);
                $('.sixProduct').html(amount);
                $('.sixTrad').html(numberO);
                //身价计算
                var total_t = (100000000+((Number(total)+11235813)*11)*23)*58/13;
                    total_worth = paraNumber(total_t);
                $('.worth').html("￥"+total_worth+"亿");
            }else if(status == "FAILE"){

            }
        }
    });
}
//截取数字
function paraNumber(v){
    var a = String(v);
    if (a.indexOf('.') > -1) {
        var b = a.split('.');
        var c = b[0].split("").reverse();
        var d = c.splice(8,0,".");
        //console.log(c);
        var e = c.reverse().join("");
        var f = Math.round(e*100)*0.01;
        return f || 0;
    };
}
//点击立即测测
$('.test-btn').click(function(){
    tag = $('.test-btn').attr('tag');
    isLogin();
});

var getElem = document.querySelectorAll.bind(document),
    getEle = document.querySelector.bind(document),
    show = function(dom){
        dom.style.display = 'block';
    },
    hide = function(dom){
        dom.style.display = 'none';
    };
//横屏竖屏
window.addEventListener('orientationchange', function(event){
    if ( window.orientation == 180 || window.orientation==0 ) {
        show(getElem('.portrait')[0]);
        hide(getElem('.landscape')[0]);
    }
    if( window.orientation == 90 || window.orientation == -90 ) {
        show(getElem('.landscape')[0]);
        hide(getElem('.portrait')[0]);
    }
});

signature();
//
function signature(){
    $.ajax({
        url : yname + '/api/wechat/jsapi/signature',
        type : 'get',
        dataType : 'jsonp',
        jsonp:'callback',
        data : {
            url : window.location.href
        },success : function(data){
            switch(data.status){
                case 'SUCCESS' :
                    configAppId = data.attributes.config.appid;
                    configTimestamp = data.attributes.config.timestamp;
                    configNoncestr = data.attributes.config.noncestr;
                    configSignature = data.attributes.config.signature;
                    wechatShare();
                break;
                default :
            }
        }
    })
}
//分享微信
function wechatShare(){
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: configAppId, // 必填，公众号的唯一标识
        timestamp: configTimestamp, // 必填，生成签名的时间戳
        nonceStr: configNoncestr, // 必填，生成签名的随机串
        signature: configSignature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title: '一账通2017理财账单', // 分享标题
            link: yname+'/h5/Ndzd2017/share.html', // 分享链接
            imgUrl: yname+'/h5/Ndzd2017/images/page-title.jpg?v=123', // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                window.location.href = yname + '/h5/Ndzd2017/index.html';
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
                window.location.href = yname + '/h5/Ndzd2017/index.html';
            }
        });
        wx.onMenuShareAppMessage({
        title:'一账通2017理财账单',//分享标题
        desc:'什么？我十年后的身价竟然有这么高？！',//分享描述
        link:yname+'/h5/Ndzd2017/share.html',//分享链接
        imgUrl:yname+'/h5/Ndzd2017/images/page-title.jpg?v=123',//分享图标
        type:'link',//分享类型，music,video或link,不填默认为link
        dataUrl:'',//如果type是music或video，则要提供数据链接，默认为空
        success:function(){
            //用户确认分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        },
        cancel:function(){
            //用户取消分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        }

        });
        wx.onMenuShareQQ({
        title:'一账通2017理财账单',//分享标题
        desc:'什么？我十年后的身价竟然有这么高？！',//分享描述
        link:yname+'/h5/Ndzd2017/share.html',//分享链接
        imgUrl:yname+'/h5/Ndzd2017/images/page-title.jpg?v=123',//分享图标
        type:'link',//分享类型，music,video或link,不填默认为link
        dataUrl:'',//如果type是music或video，则要提供数据链接，默认为空
        success:function(){
            //用户确认分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        },
        cancel:function(){
            //用户取消分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        }

        });
        wx.onMenuShareQZone({
        title:'一账通2017理财账单',//分享标题
        desc:'什么？我十年后的身价竟然有这么高？！',//分享描述
        link:yname+'/h5/Ndzd2017/share.html',//分享链接
        imgUrl:yname+'/h5/Ndzd2017/images/page-title.jpg?v=123',//分享图标
        type:'link',//分享类型，music,video或link,不填默认为link
        dataUrl:'',//如果type是music或video，则要提供数据链接，默认为空
        success:function(){
            //用户确认分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        },
        cancel:function(){
            //用户取消分享后执行的回调函数
            window.location.href=yname+'/h5/Ndzd2017/index.html';
        }

        });

    });

    /*
    wx.error(function(res){
        //alert('res',JSON.stringify(res));
    });*/
}