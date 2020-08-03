$(function(){
    //轮播控制
    $('#myCarousel').carousel({
        interval: 5000
    })

    $('#myCarousel').hammer().on('swipeleft', function(){
		$(this).carousel('next');
	});
 
	$('#myCarousel').hammer().on('swiperight', function(){
		$(this).carousel('prev');
	});

    //公告上下滚动
    var num=$(".scroll-notice ul").find("li").length;
    
    if (num>1) {
        setInterval(function(){ 
            $('.scroll-notice ul').animate({
                marginTop:"-0.26rem"
            },500,function(){
                $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
            });
        }, 4000);
    }
    //顶部搜索栏效果
    $(window).scroll(function(){
        var top = $(".header").offset().top;
        var scrollTop = $(window).scrollTop();
        
        if(top>0){
            $(".hicon").hide();
            $(".header").addClass("header-scroll");
        }else{
            $(".hicon").show();
            $(".header").removeClass("header-scroll");
        }
    })
})