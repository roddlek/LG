$(function(){

    // 마우스를 오버했을 때 슬라이드 다운 함수
    function navSlide(){
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
    }
    function mediaQuery(){
        console.log('hi')
    }

    //반응형  맞춤
    function screenLoad(){
        const screen = $(window).innerWidth();
        if(screen > 980){
            navSlide();
        }else{
            mediaQuery();
        }
    }

    // 탑버튼 클릭했을 때 scrollTop 초기화 함수
    function topBtn(){
        $('aside').click(function(e){
            $('html, body').animate({scrollTop: 0}, 600);
        })
    }

    // 푸터 관련 사이트 메뉴창 투글 함수
    function siteMenu (){
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
    }

    //navSlide();
    screenLoad();
    topBtn();
    siteMenu();
})