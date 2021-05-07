/**
 * Created by Administrator on 2017/6/4.
 */
$(function() {
    //显示回到顶部&导航固定
    var sheigh=document.documentElement.clientHeight-70;
    function showTotop(){
        $(window).scroll(function(){
            var scrolltop=$(window).scrollTop();
            if(scrolltop>=sheigh){
                $('#toTop').fadeIn();
                $("#nav-bar").addClass("fixed");
            }else{
                $('#toTop').fadeOut();
                $("#nav-bar").removeClass("fixed");
            }
        })
    }
    //回到顶部
    showTotop();
    $("#toTop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    //小导航切换
    $(".nav-more").bind("click",function(){
        $(".nav-xs-ul").slideToggle(300);

    });
    var section2H=$('#section2').offset().top-180;
    var section3H=$('#section3').offset().top-180;
    var section4H=$('#section4').offset().top-180;
    var section7H=$('#section7').offset().top-180;
    var arr=[section2H,section3H,section4H,section7H]
    $(".nav-ul li").bind('click',function(){
       var index=$(this).index();
        $('.nav-ul li').eq(index)
            .addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: arr[index],
        }, 700);
        $('.nav-xs-ul li').eq(index).addClass('active').siblings().removeClass('active');
    });

    //动画部分
    $('.fades').addClass('fadesin');
    //$(' h2.fade').addClass('fadein1');
    //$(' h3.fade').addClass('fadein2');
    //$(' span.fade').addClass('fadein3');
    $(window).scroll(function(){
       var s=$(window).scrollTop();
        if (s > (section7H - 600)) {
            $('.nav-ul li:last-child').addClass('active').siblings().removeClass('active');
            $('.nav-xs-ul li:last-child').addClass('active').siblings().removeClass('active');
            $('#section7').addClass('active');
        } else if (s > section2H && s <= section3H) {
            $('.nav-ul li:first-child').addClass('active').siblings().removeClass('active');
            $('.nav-xs-ul li:first-child').addClass('active').siblings().removeClass('active');
            $('#section2').addClass('active');
        } else if (s > section3H && s <= section4H) {
            $('.nav-ul li').eq(1).addClass('active').siblings().removeClass('active');
            $('.nav-xs-ul li').eq(1).addClass('active').siblings().removeClass('active');
            $('#section3').addClass('active');
        } else if (s > section4H && s <= section7H) {
            $('.nav-ul li').eq(2).addClass('active').siblings().removeClass('active');
            $('.nav-xs-ul li').eq(2).addClass('active').siblings().removeClass('active');
            $('#section4').addClass('active');
        }
    });


});
$(window).resize(function (){
    var wid = $(window).width();
    if(wid>788){
        $(".nav-xs-ul").hide();
    }
});