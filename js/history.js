$(function(){
    ///////////탭메뉴 컨텐츠 전환 액션
    //초기 설정
    $('#tab1').css({display: 'block'});
    $('.tabBtn>ul>li').first().addClass('clicked');
    //탭 메뉴 클릭 함수
    $('.tabBtn>ul>li').on('click', function(e){
        //클래스 설정
        $('.tabBtn>ul>li').removeClass('clicked');
        $(this).addClass('clicked');
        //초기 설정
        let secId = $(this).children("a").attr('href');
        //height 값 가져오기
        let headerH = $('#History>header').outerHeight(true);
        //탭 메뉴 전환 액션
        $('#History>section').not('.tabBtn').css({display: 'none'});
        $(secId).css({display: 'block'});
        //탭 메뉴 스크롤 액션
        $('html, body').animate({scrollTop: headerH + 'px'}, 800);
    });

    ///////////페이징 버튼
    $('.pagingBtn>ol>li').click(function(e){
        //초기 설정
        let pageNum = $(this).children("a").attr('href');
        let historyW = $(pageNum).position().left
        console.log(pageNum, historyW)
        //페이지 이동 액션
        $('section>div:last-child>ol:not(:animated)').animate({marginLeft: '-=' + historyW + 'px'}, 1000);
        // if(pageNum = '#1947'){
        //     $('section>div:last-child>ol').css({marginLeft: 0})
        // }
        return false;
    })
})