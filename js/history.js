$(function(){
    //클릭 꾸밈 초기 설정
    $('#tab1').css({display: 'block'});
    $('.tabBtn>ul>li').first().addClass('clicked');


    //탭 메뉴 클릭 함수
    function tabClick(){
        $('.tabBtn>ul>li').on('click', function(){
            //클릭 꾸밈 설정
            $('.tabBtn>ul>li').removeClass('clicked');
            $(this).addClass('clicked');

            let secId = $(this).children("a").attr('href');
            let headerH = $('#History>header').outerHeight(true);

            //탭 메뉴 클릭 전환 액션
            $('#History>section').not('.tabBtn').css({display: 'none'});
            $(secId).css({display: 'block'});
   
            //탭 메뉴 스크롤 액션
            $('html, body').animate({scrollTop: headerH + 'px'}, 800);
         })
    }

    $('.tabBtn>ul>li').on('click', function(){
        tabClick();
    });


    //페이징 버튼 클릭 이벤트 함수
    function pagingBtn(){
        $('.pagingBtn>ol>li').on('click', function(){
            let pageNum = $(this).children("a").attr('href');
            let historyW = $(pageNum).position().left

            //페이지 이동 액션
            $('section>div:nth-child(4)>ol:not(:animated)').animate({marginLeft: '-=' + historyW + 'px'}, 1000);
            return false;
        })
    }

    $('.pagingBtn>ol>li').click(function(){
        pagingBtn();
    });
})