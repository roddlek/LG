$(function(){
    ///////////네비게이션
    $('header>div>nav>ul:first>li').on('mouseover', function(){
        $('div.subNav').hide();
        $(this).children('div.subNav').slideDown();
        $(this).children('div.subNav').stop();
    });
    $('div.subNav').on('mouseleave', function(){
        $(this).slideUp();
    });

   
    ///////////푸터
    $('#siteBtn>ul').hide();
    $('#siteBtn>button').on('click', function(){
        $('#siteBtn>ul').toggle();
        $('#siteBtn>button>span:last-child').css('transform','rotate(180deg)')
        // $('#siteBtn>button>span:last>img').css({'transform': 'rotate(' + 180 + 'deg)'});
        // $('#siteBtn>button').on('click', function(){
        //     $('#siteBtn>ul').hide();
        // })
    })
})