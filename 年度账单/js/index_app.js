var appId = '10319',
    yname = 'https://test-events.pingan.com.cn:41443',
    mname = 'http://test-events.pingan.com.cn:41080',
    dzlurl = window.location.href,
    login = '1',
    data_id,
    tag,
    total_worth;

//isLogin();
login_app();
shareapp();
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
                if (data_id == '1' || data_id == '2'||tag =='1') {
                    location.href='patoa://pingan.com/web?userLevel=2&url=https%3A%2F%2Ftest-events.pingan.com.cn%3A41443%2Fh5%2FNdzd2017%2Findex_app.html';
                };
                

            }else if (status === "SUCCESS") {
                if (tag == '1') {
                    location.href = yname+'/h5/Ndzd2017/page_app.html';
                };
                login = '3';
                //拿数据
                tempdata();
                
            }
        }
    });
}
function login_app(){
        YztApp.getNativeInfo(function(data){
            if (JSON.stringify(data) != '') {
                avoidLoading(JSON.stringify(data));
            };
            
        });
        function avoidLoading(nativeInfo) {
            $.ajax({
                url: yname + '/api/appLogin',
                type: 'get',
                dataType: 'jsonp',
                jsonp:'callback',
                data: {
                    terminal: "app",
                    content: nativeInfo
                },
                success: function (data) {
                    var status=data.status;
                    if (status === "SUCCESS") {
                        //alert('获取登录成功');
                    } else if (status === "FAILE") {
                        //alert('获取登录失败');
                    } else {
                        alert(data.message);
                    }
                    isLogin();
                }
            });
        }
    }
//
$('.test-btn').click(function(){
    tag = $('.test-btn').attr('tag');
    isLogin();
});
// $('.test-btn').click(function(){
//     window.location.href = yname+'/h5/Ndzd2017/page_app.html';
// });
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
                //alert(total_worth);
                $('.worth').html("￥"+total_worth+"亿");
                shareapp();
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

//分享
function shareapp(){
    var shareData = {
        "title":encodeURI("一账通2017理财账单"),
        "content":encodeURI("什么？我十年后的身价竟然有"+total_worth+"亿？！"),
        "href":encodeURI(mname+"/h5/Ndzd2017/share.html?prize="+total_worth),
        "imgUrl":encodeURI(yname+"/h5/Ndzd2017/images/page-title.jpg?v=2323")
    };
    App.call(["showRightBarButtonItem"], null, null,{"show":true} );//打开默认分享
    //必须写上，页面初次加载完成时获取
   
     YztApp.configureShare(shareData, true, function() {
        console.log('success');

    }, function() {
        console.log('error');

    },true);
    
   YztApp.configureRightBtns([{
        name:'member_right_share',
        isImage:'1',
        url:''
    }]);
} 
