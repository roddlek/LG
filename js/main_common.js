$(function(){
    ///////////네비게이션
    $('#suNavBG').css('display', 'none');
    //console.log(screen)
    $('.mainNav>div>nav>ul>li').on('mouseenter', function(){
        $('.mainNav').stop().animate({height: 260 + 'px'}, 600);
        $('.subNav').hide();
        $(this).children('.subNav').show();
    });
    $('.mainNav>div>nav>ul>li').on('mouseleave', function(){
        $('.mainNav').stop().animate({height: 60 + 'px'}, 600);
    });
    //반응형 맞춤
    const screen = $(window).innerWidth();
    $(window).resize(function(){
        if(screen <= 980){
            $('.mainNav>div>nav>ul>li').on('mouseenter', function(){
                $('.subNav').stop().slideDown();
            });
            $('.mainNav>div>nav>ul>li').on('mouseleave', function(){
                $('.subNav').stop().slideUp();
            });
        }
    })


    ///////////탑버튼
    $('aside').click(function(e){
        $('html, body').animate({scrollTop: 0}, 600);
    })
   
    ///////////푸터
    $('#siteBtn>ul').hide();
    $('#siteBtn>button').on('click', function(){
        $('#siteBtn>ul').toggle();

        let block = $(this).siblings('ul.siteBtn').css('display');
        //console.log(block);
        if(block == 'block'){
            $('#siteBtn>button>span:last-child').css('transform','rotate(' + 180 + 'deg)');
        }else if(block == 'none'){
            $('#siteBtn>button>span:last-child').css('transform','rotate(' + 0 + 'deg)');
        }
    })
})