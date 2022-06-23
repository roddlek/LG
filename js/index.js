$(function(){
    ///////////갤러리
    //사이즈 정리
    let liWidth = $('#gallery>div>ul>li').width();
    //초기 설정
    $('#gallery>div>ul>li:last').prependTo('#gallery>div>ul');
    $('#gallery>div>ul').css('margin-left', '-' + liWidth + 'px');
    //갤러리 애니메이션
    function gallery(){
        //타이틀 초기 설정
        $('#gallery>div>ul>li>a').not('#gallery>div>ul>li>a:eq(1)').fadeOut();
        //이미지
        $('#gallery>div>ul').animate({marginLeft: '-=' + liWidth + 'px'}, 600, function(){
            $('#gallery>div>ul>li:first').appendTo('#gallery>div>ul');
            $('#gallery>div>ul').css('margin-left', '-' + liWidth + 'px');
            //타이틀
            $('#gallery>div>ul>li>a').fadeIn();
        });
        //슬라이드 버튼
    }
    //갤러리 타이머
    function timer(){
        move = setInterval(gallery, 3500);
    }
    timer();


    ///////////슬라이드 버튼
    //초기 설정
    $('#slideBtn>a:first').css({width: '60px',
                                borderRadius: '15px 15px'})
    let slideNum = $('#slideBtn>a').length;
    //
    function slideButton(){
        for(let i = 1; i<slideNum ; i++){
            $('#slideBtn>a').css({width: '16px', height: '16px'})
        }
        $('#slideBtn>a:eq(' + slideNum + ')').animate({width: '60px', borderRadius: '15px 15px'}, 600)
    }
    //슬라이드 버튼 타이머
    // function slideTimer(){
    //     slide = setInterval(slideButton, 3500)
    // }
    // slideTimer();
})