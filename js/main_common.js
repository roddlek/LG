$(function(){

    // 마우스를 오버했을 때 슬라이드 다운 함수
    function navSlide(){
        //보이지 않는 요소 처리
        $('#suNavBG').css('display', 'none');
        //
        $('.mainNav>div>nav>ul>li').on('mouseenter', function(){
            $('.mainNav').stop().animate({height: 260 + 'px'}, 600);
            $('.subNav').hide();
            $(this).children('.subNav').show();
        });
        $('.mainNav>div>nav>ul>li').on('mouseleave', function(){
            $('.mainNav').stop().animate({height: 60 + 'px'}, 600);
        });
    }
    // 반응형 - 마우스를 오버했을 때 슬라이드 다운 함수
    function navSlideM(){
        $('.mainNav>div>nav, #suNavBG').css('display', 'none');
        //열기, 닫기 버튼 클릭 이벤트 함수
        $('.mobileBtn').on('click', function(){
            $('.mainNav>div>nav, #suNavBG').css('display', 'block');
        });
        $('.closeBtn').on('click', function(){
            $('.mainNav>div>nav, #suNavBG').css('display', 'none');
        });
        //
        $('.subNav').hide();
        $('.mainNav>div>nav>ul>li').on('mouseenter', function(){
            $(this).children('.subNav').stop().slideDown('slow');
        });
        $('.mainNav>div>nav>ul>li').on('mouseleave', function(){
            $(this).children('.subNav').stop().slideUp('slow');
        });
    }

    //반응형  맞춤
    const screen = $(window).innerWidth();
    function screenResize(){
        $(window).on('resize', function(){
            if(screen <= 980){
                navSlideM();
                //$('div>nav').load(window.location.href + ' div>nav');
                location.reload();
            }else{
                navSlide();
            }
        })
    }
    function screenLoad(){
        //console.log(screen);
        $(window).on('load', function(){
            if(screen > 980){
                //기존 + 리사이즈 조건 충족
                navSlide();
            }else{
                navSlideM();
            }
        })
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
    //screenResize();
    topBtn();
    siteMenu();
})