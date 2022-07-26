$(function(){
    $('#lgtiModal').css('display', 'none');
    $('.answerList').click(function(e){
        $('.answerList').css('cursor', 'pointer');
        $('.answerList').removeClass('clicked');
        $(this).addClass('clicked');
    });

    // 다음으로 넘어가기 버튼
    $('#test>div>div>p').hover(function(){
        $(this).css({backgroundColor: '#af0046', color: '#fff'})},
        function(){
            $(this).css({backgroundColor: '#dedede', color: '#656565'})
        }
    );
})