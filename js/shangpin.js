$(function(){
    // 设置滚动条监听事件
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=1000){
            $('.dingwei').show();
        }else{
            $('.dingwei').hide();
        }
    })



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
    // 放大镜效果
    $('.sec_left_pic').mousemove(function(e){
        $('.big').show();
        $('.small').show();
        var x=e.pageX-$(this).offset().left-$('.small').width()/2;
        var y=e.pageY-$(this).offset().top-$('.small').height()/2;
        var xx=$(this).width()-$('.small').width();
        var yy=$(this).height()-$('.small').height();
        // 获取大图与小图的比例
        var biliw=$('.big_one_pic').width()/$('.small_one_pic').width();
        var bilih=$('.big_one_pic').height()/$('.small_one_pic').height();
        // console.log(biliw);
        // console.log(bilih);
        // console.log(x+'----'+y);
        // 判断鼠标焦点是否出了.sec_left_pic 出的话就让焦点停在边界上
        if(x<=0){
            x=0;
        } 
        if(y<=0){
            y=0;
        }
        if(x>=xx){
            x=xx;
        }
        if(y>=yy){
            y=yy;
        }
        $('.small').css({left:x,top:y});
        $('.big').scrollLeft(x*biliw);
        $('.big').scrollTop(y*bilih);
    }).mouseout(function(){
        $('.big').hide();
        $('.small').hide();
    })


    // 设置点击小图让大图变成小图
    $('.sec_left_ul>ul>li').mouseover(function(){
        var num=$(this).index();
        num=num+1;
        $('.small_one_pic').attr('src','./image/sec_left_'+num+'.jpg');
        $('.big_one_pic').attr('src','./image/sec_left_one_'+num+'.jpg');
    })
    
    // 设置当鼠标移入back时 背景变色 添加字体
    $('.back>ul>li').eq(0).mouseenter(function(){
        $(this).css({backgroundColor:'#838484'});
        $(this).text('微信关注').css({color:'white',fontSize:'13px',textAlign:'center'});
        $('.weixing').show();
    }).mouseout(function(){
        $(this).css({backgroundColor:''});
        $(this).text('');
        $('.weixing').hide();
    })
    $('.back>ul>li').eq(1).mouseenter(function(){
        $(this).css({backgroundColor:'#838484'});
        $(this).text('手机商城').css({color:'white',fontSize:'13px',textAlign:'center'});
    }).mouseout(function(){
        $(this).css({backgroundColor:''});
        $(this).text('');
    })
    $('.back>ul>li').eq(2).mouseenter(function(){
        $(this).css({backgroundColor:'#838484'});
        $(this).text('返回顶部').css({color:'white',fontSize:'13px',textAlign:'center'});
    }).mouseout(function(){
        $(this).css({backgroundColor:''});
        $(this).text('');
    })
    // 设置滚动条监听事件
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        $('.back>ul>li').eq(2).click(function(){
        $('body,html').stop();
        $('body,html').animate({scrollTop:0})
         })   
    })
    // 设置鼠标点击事件 当鼠标点击li时让li的边框变色 让 li里的字的颜色变色
    $('.txt_one_one>ul>li').click(function(){
        $('.txt_one_one>ul>li').css({border:''});
        // $('.txt_one_one>ul>li').eq(2).css({border:'1px solid #ccc'});
        // $('.txt_one_one>ul>li').eq(2).children('a').css({color:'#ccc'});
        $(this).css({border:'1px solid #FD532D'});
        $('.txt_one_one>ul>li>a').css({color:''});
        $(this).children('a').css({color: '#FD532D'});

    })
    // 设置鼠标点击事件 点击鼠标让 input的值改变
    $('.add').click(function(){
        var num=$('.addinput').val();
        num--;
        if(num<=0){
            alert('数量不能为0');
            num=1;
        }
        $('.addinput').val(num);
    })

     $('.jiajia').click(function(){
        var num=$('.addinput').val();
        num++;
        if(num>=6){
            num=5;
            alert('限购5件');
        }
        $('.addinput').val(num);
    })
        $('.dizhi_div_one').show();
        $('.dizhi_div_two').hide();
        $('.dizhi_div_san').hide();
     // 设置鼠标点击事件隐藏div
     $('.dizhi_span').click(function(){
        $('.dizhi').hide();
     })
     // 设置鼠标点击事件改变div大小
     $('.dizhi_top_two').click(function(){
        $('.dizhi').css({height:'200px'})
        $('.dizhi_div_one').hide();
        $('.dizhi_div_two').show();
        $('.dizhi_div_san').hide();
     })
     // 设置鼠标点击事件改变div大小
     $('.dizhi_top_one').click(function(){
        $('.dizhi').css({height:'250px'})
        $('.dizhi_div_one').show();
        $('.dizhi_div_two').hide();
        $('.dizhi_div_san').hide();
     })
     // 设置鼠标点击事件改变div大小
     $('.dizhi_top_san').click(function(){
        $('.dizhi').css({height:'120px'})
        $('.dizhi_div_san').show();
        $('.dizhi_div_two').hide();
        $('.dizhi_div_one').hide();
     })
     // 设置鼠标点击事件显示div
     $('.dianshow').click(function(){
        $('.dizhi').show();
     })
})
