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
        let historyH = $(secId).offset().top;
        let tabH = $('.tabBtn').innerHeight();
        console.log(secId, historyH, tabH)
        //탭 메뉴 전환 액션
        $('#History>section').not('.tabBtn').css({display: 'none'});
        $(secId).css({display: 'block'});
    });

    ///////////페이징 버튼
    $('.pagingBtn>ol>li').click(function(e){
        //초기 설정
        let pageNum = $(this).children("a").attr('href');
        let historyW = $(pageNum).position().left
        console.log(pageNum, historyW)
        //페이지 이동 액션
        $('section>div:last-child>ol').animate({marginLeft: '-=' + historyW + 'px'}, 800);
        return false;
    })
})