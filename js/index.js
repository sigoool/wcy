$(function(){

    $('.ru').mouseover(function(){
        $('.hover').show();
        $('.car').css({'background-color':'white'});
    }).mouseout(function(){
        $('.hover').hide();
        $('.car').css({'background-color':'#f9f9f9'});
    });
    

    $('.nav_left').mouseover(function(){
        $('.nav_left>div').removeClass('bianse');
        $('.nav_left>div').addClass('bian');
    }).mouseout(function(){
        $('.nav_left>div').removeClass('bian');
        $('.nav_left>div').addClass('bianse');
    });


    $('.nav_hover>ul>li').mouseenter(function(){
        $('.nav_er_hover:animated').stop().hide();
        var num=$(this).index();
        // $('.nav_er_hover:animated').stop();
        $('.nav_hover>ul>li>a').eq(num).css({color:'green'});
        
        // console.log(num);
        $('.nav_er_hover').eq(num).fadeIn();
        
    }).mouseleave(function(){
        $('.nav_er_hover:animated').stop().hide();
        var num=$(this).index();
       
        $('.nav_hover>ul>li>a').eq(num).css({color:''});
        $('.nav_er_hover').eq(num).slideUp();
        
    })
    // 设置轮播图 
    // 设置定时器
    
    $('.tupian').hide();
    $('.tupian').eq(0).show();
    var i=0;
    var run=null;
    function dingshi(){
        run=setInterval(function(){
            // 定时器开始时让所有的图片隐藏 让下一张图片显示
        $('.tupian').hide();
        // 定时器开始的时候让所有圆点隐藏  让下一个圆点显示
        $('.s_dian>ul>li').css({backgroundColor:""});
        i++;
        if(i>=6){
            i=0;
        }
        
        $('.tupian').eq(i).fadeIn(2000);
         $('.s_dian>ul>li').eq(i).css({backgroundColor:"white"});
    },5000)
    }
    dingshi();
   
    // 默认让点击的块的颜色为无色
    $('.left').css({background:'rgba(0,0,0,0)'});
    $('.right').css({background:'rgba(0,0,0,0)'});
    // 让第一个圆点变色
    $('.s_dian>ul>li').eq(0).css({backgroundColor:"white"});
     // 设置鼠标移入section事件
    $('.section_banxin').mouseenter(function(){
        // 鼠标移入版心 点击的块变色
        clearInterval(run);
        $('.left').css({background:'rgba(0,0,0,0.5)'});
        $('.right').css({background:'rgba(0,0,0,0.5)'});
    }).mouseleave(function(){
        // 鼠标移出版心 点击的块变无色
        $('.left').css({background:'rgba(0,0,0,0)'});
        $('.right').css({background:'rgba(0,0,0,0)'});
        // 鼠标移除后让定时器开始
        dingshi();
    })

    // 设置右边点击切换图片事件
    $('.right').click(function(){
        // 点击的时候让所有图片隐藏 让下一张图片显示
        $('.tupian').hide();
        // 点击的时候让圆点隐藏 让下一个圆点显示
        $('.s_dian>ul>li').css({backgroundColor:""});
        i++;
        if(i>=6){
            i=0;
        }
        console.log(i);
        $('.s_dian>ul>li').eq(i).css({backgroundColor:"white"});
        $('.tupian').eq(i).fadeIn();
    })
    // 设置左边点击切换图片事件
    $('.left').click(function(){
        // 点击的时候让所有图片隐藏 让下一张图片显示
        $('.tupian').hide();
        // 点击的时候让圆点隐藏 让下一个圆点显示
        $('.s_dian>ul>li').css({backgroundColor:""});
        i--;
        if(i<0){
            i=5;
        }
        console.log(i);
        $('.s_dian>ul>li').eq(i).css({backgroundColor:"white"});
        $('.tupian').eq(i).fadeIn();
    })
    // 设置圆点点击事件
    $('.s_dian>ul>li').click(function(){
        // 先隐藏掉第几张图片
        // 点击的时候让所有图片隐藏 让下一张图片显示
        $('.tupian').hide();
        // 点击的时候让圆点隐藏 让下一个圆点显示
        $('.s_dian>ul>li').css({backgroundColor:""});
        i=$(this).index();
        // 当点击到第几个圆点时 让第几个圆点显示 让第几张图片显示
        $('.s_dian>ul>li').eq(i).css({backgroundColor:"white"});
        $('.tupian').eq(i).fadeIn();
    })
    // 轮播图结束

    // 底部图片流开始 当鼠标移入时让li产生阴影
    $('.di_liu_one>li').mouseenter(function(){
        
        var num=$(this).index();
        if(num==0){
            $('.di_liu_one>li').eq(num).css({boxShadow:'5px 0px 5px #ddd'});
        }else if(num==3){
            $('.di_liu_one>li').eq(num).css({boxShadow:'-5px 0px 5px #ddd'});
        }else{
            $('.di_liu_one>li').eq(num).css({boxShadow:'5px 0px 5px #ddd,-5px 0px 5px #ddd'});
        }
    }).mouseleave(function(){
        $(this).css({boxShadow:''});
    });

    $('.di_liu_two>li').mouseenter(function(){
        
        var num=$(this).index();
        if(num==0){
            $('.di_liu_two>li').eq(num).css({boxShadow:'5px 0px 5px #ddd'});
        }else if(num==2){
            $('.di_liu_two>li').eq(num).css({boxShadow:'-5px 0px 5px #ddd'});
        }else{
            $('.di_liu_two>li').eq(num).css({boxShadow:'5px 0px 5px #ddd,-5px 0px 5px #ddd'});
        }
    }).mouseleave(function(){
        $(this).css({boxShadow:''});
    });
    // 设置当鼠标以上图片时变透明度
    $('.neirong_one_center>li').mouseenter(function(){
        
         $(this).fadeTo('fast',0.9);
    }).mouseleave(function(){
        $(this).fadeTo('fast',1);
    })
    $('.neirong_one_left>li').mouseenter(function(){
        
         $(this).fadeTo('fast',0.9);
    }).mouseleave(function(){
        $(this).fadeTo('fast',1);
    })
    // 设置鼠标点击楼层改变
    // 设置鼠标移入移出事件
    $('.tiao>ul>li').mouseenter(function(){
        $(this).css({backgroundColor:"#F5F5F5"})
    }).mouseleave(function(){
        $(this).css({backgroundColor:"white"})
    })
    // 设置点击事件
    var j=0;
    var target=0;
    var speed=10;
    var run=null;
            // console.log(top);
    $(window).scroll(function(){
    $('.tiao>ul>li').eq(0).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:1200});
    })
    $('.tiao>ul>li').eq(1).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:1840});
    })  
    $('.tiao>ul>li').eq(2).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:2443});
    })
    $('.tiao>ul>li').eq(3).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:3047});
    })
    $('.tiao>ul>li').eq(4).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:3660});
    })
    $('.tiao>ul>li').eq(5).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:4261});
    })
    
        })    
    // 初始化让楼层隐藏
    $('.tiao').hide();
    // 滚动条监听事件
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=700){
           $('.tiao').show(); 
        }else{
            $('.tiao').hide();
        }
})
})
