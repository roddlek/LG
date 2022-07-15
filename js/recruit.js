$(function(){
    $('#lgtiModal').css('display', 'none');
    $('#test ul>li>dl>dd').click(function(e){
        $('#test ul>li>dl>dd').css('cursor', 'pointer');
        $('#test ul>li>dl>dd').removeClass('clicked');
        $(this).addClass('clicked');
    });

    // 다음으로 넘어가기 버튼
    $('#test>div>div>p').hover(function(){
        $(this).css({backgroundColor: '#af0046', color: '#fff'})},
        function(){
            $(this).css({backgroundColor: '#dedede', color: '#656565'})
        }
    );

    //변수로 관리
    let num = 0;
    $('#test>div>div>p:not(animated)').click(function(e){
        $('#test ul>li').animate({marginLeft: -550 + 'px'}, 600);
        num += 1;
        //console.log(num)
    });

    function addA(answerText){
        let answerBox = $('.answer');
        let a = $.parseHTML('<dd></dd>');
        a.prependTo(answerBox);
        a.html(answerText);
    }

    function addQ(num){
        $('.question').html(testList[num].q);
        for(let i in testList[num].a){
            addA(testList[num].a[i].answer);
        }
    }
    addQ(num);




    // function addA(answerText){
    //     let answerBox = document.querySelector('.answer');
    //     let a = document.createElement('dd');
    //     a.prependTo(answerBox);
    //     a.innerHTML = answerText;
    // }

    // function addQ(num){
    //     let q = document.querySelector('.question');
    //     q.innerHTML = testList[num].q;

    //     for(let i in testList[num].a){
    //         addA(testList[num].a[i].answer);
    //     }
    // }

    // addQ(num);
})