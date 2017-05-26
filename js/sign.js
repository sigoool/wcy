$(function(){
    // 设置焦点集中在表单上时 让p 边框变色
    $('#p_one').focus(function(){
        $('.p_one').css({border:"1px solid #22AC69"});
    }).blur(function(){
        $('.p_one').css({border:""});
    })
    // 设置焦点集中在表单上时 让p 边框变色
    $('#p_two').focus(function(){
        $('.p_two').css({border:"1px solid #22AC69"});
    }).blur(function(){
        $('.p_two').css({border:""});
    })
    // 设置焦点集中在表单上时 让p 边框变色
    $('#p_san').focus(function(){
        console.log(11);
        $('.p_san_span').css({border:"1px solid #22AC69"});
    }).blur(function(){
        console.log(22);
        $('.p_san_span').css({border:""});
    })
})