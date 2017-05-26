$(function(){
    $('.shaoma>p>i').click(function(){
        $('.shaoma').hide();
    })
    // 当鼠标焦点集中到input上时 让input的边框变色

    $('#one').focus(function(){
        
        $('.one').css({border:"2px solid #22AC69"})
        
    }).blur(function(){
        // 当失去焦点时 让隐藏的div显示
         var value=$(this).val();
         if(value!=""){
            $('.login').css({height:'431px'})
            $('#san').show();
         }else if(value==""){
            $('#san').hide();
            $('.login').css({height:'368px'})
         }
        $('.one').css({border:"2px solid #ddd"})

    })
    $('#two').focus(function(){
        $('.two').css({border:"2px solid #22AC69"})
    }).blur(function(){
        // 当失去焦点时 让隐藏的div显示
         var value=$(this).val();
         if(value!=""){
            $('.login').css({height:'431px'});
            
            $('#san').show();
         }else if(value==""){
            $('#san').hide();
            $('.login').css({height:'368px'})
         }
        $('.two').css({border:"2px solid #ddd"})
    })
    $('#si').focus(function(){
        $('.san').css({border:"2px solid #22AC69"})
    }).blur(function(){
        $('.san').css({border:"2px solid #ddd"})
    })

    // 鼠标移入让图片移动
    $('.ma').mouseenter(function(){
        $('.ma_one').animate({marginLeft:'30px'});
        $('.ma_two').fadeIn();
    }).mouseleave(function(){
        $('.ma_one').animate({marginLeft:'80px'});
        $('.ma_two').fadeOut();
    })

    // 点击.erweima让login隐藏 让login1显示
    $('.erweima').click(function(){
        $('.login').hide();
        $('.login1').show();
    })
    $('.erweima1').click(function(){
        $('.login1').hide();
        $('.login').show();
    })
    // 当鼠标移入li时 让边框变色 p标签的颜色变色 span里的背景图片变色
    $('.question ul li').mouseenter(function(){
        var n=$(this).index();
        console.log(n);
        m=n+1;
        $(this).css({border:'1px solid #22AC69'});
        $('.question ul li:nth-child('+m+') p').css({color:'#22AC69'});
        $('.question ul li:nth-of-type('+m+') span').css({background:'url(./image/q_'+m+'.png)'});
    }).mouseleave(function(){
        $(this).css({border:''});
        $('.question ul li:nth-child('+m+') p').css({color:''});
        $('.question ul li:nth-of-type('+m+') span').css({background:''});
    })
})