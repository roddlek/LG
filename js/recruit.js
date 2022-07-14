$(function(){
    $('#lgtiModal').css('display', 'none');
    $('#test ul>li>dl>dd').click(function(e){
        $('#test ul>li>dl>dd').css('cursor', 'pointer');
        $('#test ul>li>dl>dd').removeClass('clicked');
        $(this).addClass('clicked');
    });

    // 다음으로 넘어가기 버튼
    $('#test>div>div>p').on('mouseEnter', function(e){
        $(this).css({backgroundColor: '#af0046', color: '#fff'});
    })
})