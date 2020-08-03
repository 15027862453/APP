// 计算rem基准字体大小
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientHeight;
            if (!clientWidth) return;
            if (clientWidth > 1920) {
                docEl.style.fontSize = '100px'; //1rem  = 100px
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function(){
    //切换栏效果
    $(".nav li").click(function(){
        $(this).addClass("nav-active").siblings().removeClass("nav-active");
    })
})

