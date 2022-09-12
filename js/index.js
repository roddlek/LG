$(function(){
    //초기 설정
    let liWidth = $('#gallery>div>ul>li').width();
    $('#gallery>div>ul>li:last').prependTo('#gallery>div>ul');
    $('#gallery>div>ul').css('margin-left', '-' + liWidth + 'px');
    
    ///////////갤러리
    function gallery(){
        $('#gallery>div>ul>li>a').not('#gallery>div>ul>li>a:eq(1)').fadeOut();
        //애니메이션
        $('#gallery>div>ul').animate({marginLeft: '-=' + liWidth + 'px'}, 600, function(){
            $('#gallery>div>ul>li:first').appendTo('#gallery>div>ul');
            $('#gallery>div>ul').css('margin-left', '-' + liWidth + 'px');
            $('#gallery>div>ul>li>a').fadeIn();
        });

        //슬라이드 버튼
        $('#slideBtn>a').click(function(){
            let slideIndex = $(this).index() + 1;
            //console.log(slideIndex);
            if(slideIndex < 4){
                $('#gallery>div>ul').css('margin-left', '-' + (liWidth * slideIndex)  + 'px');
            }else if(slideIndex = 4){
                $('#gallery>div>ul').css('margin-left', '-' + liWidth *(slideIndex - 4)  + 'px');
            }
        })
    }

    //갤러리 타이머
    function timer(){
        move = setInterval(gallery, 3500);
    }
    timer();
})