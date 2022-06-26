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

        let block = $(this).siblings('ul.siteBtn').css('display');
        //console.log(block);
        if(block == 'block'){
            $('#siteBtn>button>span:last-child').css('transform','rotate(' + 180 + 'deg)');
        }else if(block == 'none'){
            $('#siteBtn>button>span:last-child').css('transform','rotate(' + 0 + 'deg)');
        }
    })
})