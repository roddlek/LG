$(function(){
    ///////////스크롤 버튼 클릭 액션
    function scrollBtn(){
        //클래스 초기 설정
        $('.srollBtn>ul>li>a').first().addClass('clicked');

        $('.srollBtn>ul>li>a').on('click', function(){
            //초기 설정
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $(this).addClass('clicked');
    
            let secH = $('.srollBtn').innerHeight();
            let secId = $(this).attr('href');
            let secTop = $(secId).offset().top;
            //스크롤 액션
            $('html, body').animate({scrollTop: secTop - secH + 'px'}, 800);
        });
    }

    ///////////스크롤 액션
    $(window).scroll(function(){
        //초기 설정
        let num = $(document).scrollTop();
        //조건식
        if(num < 1425){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').first().addClass('clicked');
        }else if(num > 1425 && num < 2900){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').eq(1).addClass('clicked');
        }else if(num > 2900){
            $('.srollBtn>ul>li>a').removeClass('clicked');
            $('.srollBtn>ul>li>a').last().addClass('clicked');
        }
    });

    ///////////모달창
    function modal(){
        //초기 설정
        $('#modalBG').css({display: 'none'});
        $('.LGWayModal').css({display: 'none'});
        //클릭 이벤트
        $('#LGWayManage>div>p').click(function(e){
            let modalNum = $(this).index()
            //console.log(modalNum);
            if(modalNum == 0){
                $('#modalBG').css({display: 'block'});
                $('.LGWayModal').first().css({display: 'block'});
                $('.LGWayModal>p').click(function(e){
                    $('#modalBG').css({display: 'none'});
                    $('.LGWayModal').css({display: 'none'});
                });
            }else if(modalNum == 2){
                $('#modalBG').css({display: 'block'});
                $('.LGWayModal').last().css({display: 'block'});
                $('.LGWayModal>p').click(function(e){
                    $('#modalBG').css({display: 'none'});
                    $('.LGWayModal').css({display: 'none'});
                });
            }
        })
    }

    scrollBtn();
    modal();
})