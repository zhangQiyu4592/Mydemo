/**
 * Created by lovo_bdk on 15-12-17.
 */
!(function(win, doc) {
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth = window.innerWidth;//获取屏幕视口宽度
        console.log(winWidth);
        doc.documentElement.style.fontSize = (winWidth / 1080) * 100 + 'px';//改变html的fontsize
        //（设备宽度/设计稿宽度）*100+px
    }
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;

    win.addEventListener(evt, function() { // orientationchange：横屏竖屏切换时触发    resize：视口宽度改变时触发事件
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);


    win.addEventListener("pageshow", function(e) { //显示页面时触pageshow事件
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    //初始化
    setFontSize();
}(window, document));