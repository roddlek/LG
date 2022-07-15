$(function(){
    ///////////스크롤 버튼 클릭 액션
    //클래스 초기 설정
    $('.srollBtn ul>li>a').first().addClass('clicked');
    $('.srollBtn ul>li>a').on('click', function(e){
        //초기 설정
        $('.srollBtn>ul>li>a').removeClass('clicked');
        $(this).addClass('clicked');

        let secH = $('.srollBtn').innerHeight();
        let secId = $(this).attr('href');
        let secTop = $(secId).offset().top;

        //스크롤 액션
        $('html, body').animate({scrollTop: secTop - secH + 'px'}, 800);
    });

    ///////////스크롤 액션
    $(window).scroll(function(){
        //초기 설정
        let num = $(document).scrollTop();
        console.log(num)
        //조건식
        if(num < 1530){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').first().addClass('clicked');
        }else if(num > 1530 && num < 2210){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').eq(1).addClass('clicked');
        }else if(num > 2210){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').last().addClass('clicked');
        }
    })
})