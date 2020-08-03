$(function(){
    // 地址管理-选择
    // 设置为默认
    $(".check").click(function(){
        $(this).addClass("check-right");
        $(this).parent().find(".default").html("默认地址");
        $(this).parent().parent().siblings().find(".check").removeClass("check-right");
        $(this).parent().parent().siblings().find(".default").html("设为默认");
    })
    // 生活圈
    // 点击查看更多
    var slideHeight = 66; 
    var defHeight = $('.life-word-con').height();
    if(defHeight >= slideHeight){
    $('.life-word-con').css('height' , slideHeight + 'px');
    $('.life-more span').html('查看更多');
    $('.life-more span').click(function(){
    var curHeight = $('.life-word-con').height();
    if(curHeight == slideHeight){
        $('.life-word-con').animate({
        height: defHeight
        }, 100);//运动时间
        $('.life-more span').html('收回');
    }else{
        $('.life-word-con').animate({
        height: slideHeight
        }, 100);//运动时间
        $('.life-more span').html('查看更多');
    }
    return false;
    });  
    }
    // 登录
    //清空输入框
    $(".clear").click(function(){
        $(".password").val("");
    })
    //隐藏内容
    var a = 0 ; 
    $(".eyes").click(function(){
        if(a==0){
            $(".password").prop("type","password");
            a = 1;
            return false;
        }else{
            $(".password").prop("type","text");
            a = 0;
            return false;
        }
    })
    //商品详情
    //倒计时
    var starttime = new Date("2021/11/20");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    $('.timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
  }, 1000);
    //购物车结算
    //加的效果
    $(".add").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
    });
    //减的效果
    $(".jian").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $(this).next().val(num);
    });
    // 全选和取消全选
    $("#all").on('click',function() {  
        $("input[name='select-radio']").prop("checked", this.checked);  
    });  
    $("input[name='select-radio']").on('click',function() {  
        var $subs = $("input[name='select-radio']");  
        $("#all").prop("checked" , $subs.length == $subs.filter(":checked").length ? true :false);  
    }); 
    //全部订单
    $(".total-select li span").click(function(){
        $(this).addClass("total-select-on");
        $(this).parent().siblings().find("span").removeClass("total-select-on");
    })
    //支付方式
    $(".pay-money-check").click(function(){
        $(this).addClass("check-right");
        $(this).parent().siblings().find(".pay-money-check").removeClass("check-right");
    })
    //生活圈-新建
    $(".life-textarea").keyup(function(){
        var len = $(this).val().length;
        if(len > 999){
            $(this).val($(this).val().substring(0,1000));
            alert("超出字数！")
            $(".life-wordnum span").text(0);
        }
        var num = len;
        if(num<0){
            $(".life-wordnum span").text(0);
        }else{
            $(".life-wordnum span").text(num);
        }
    })
    //地址管理-选择删除效果
    $(".delete").click(function(){
        $(this).parent().remove();
    })
    //我的收藏-选择删除效果
    $(".my-collection-delete").click(function(){
        $(this).parent().remove();
    })
    //商品详情轮播控制
    $('#myCarousel').carousel({
        interval: 5000
    })
    $('#myCarousel').hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });

    $('#myCarousel').hammer().on('swiperight', function(){
        $(this).carousel('prev');
    });

})

