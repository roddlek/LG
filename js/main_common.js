$(function(){
    $('.subNav').hide();
    ///////////네비게이션
    $('header>div>nav>ul>li').on('mouseover', function(){
        $('header').animate({height: 260 + 'px'}, 600);
        $(this).siblings('ul').show();
        
    });
    $('header>div>nav>ul').on('mouseleave', function(){
        $('header').animate({height: 60 + 'px'}, 600);
    });

    ///////////푸터
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