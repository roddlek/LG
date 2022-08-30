//선택자 정리
const allTabBtn = document.querySelectorAll('.tabBtn>ul>li');
const secDiv = document.querySelector('#tab1>div:nth-child(4)');
const secOl = document.querySelector('#tab1>div:nth-child(4)>ol');

//첫 로딩 때 실행될 스크롤 이벤트 함수
scrollEvent(secDiv, secOl);

//연혁 탭 메뉴 클릭할 때 실행될 스크롤 이벤트 함수
allTabBtn.forEach( (item) => {
    item.addEventListener('click', function(e){
        //아이디 값 얻기
        let aId = this.querySelector('a').getAttribute('href');
        //콘텐츠 선택자 정리
        let sec = document.querySelector(aId);
        let div = sec.querySelector('div:nth-child(4)');
        let ol = sec.querySelector('div:nth-child(4)>ol');

        scrollEvent(div, ol);
    });
})

//스크롤 이벤트
function scrollEvent(a, b){
    window.addEventListener('scroll', function(){
        //숨어있는 콘텐츠 크기 계싼
        let scrollWidth = b.offsetWidth - a.clientWidth;

        //스크롤 바
        const scrollBar = document.querySelector('.scrollBar>div>span');

        function mouseMove(e){
            let thumbX = e.clientX;
            let leftX = scrollBar.getBoundingClientRect().left;
            let moveX = thumbX - leftX;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(e){
                e.preventDefault();
                
                const scrollBox = document.querySelector('.scrollBar>div');

                let newThumbX = e.clientX - moveX - leftX;
                let rightScroll = scrollBox.clientWidth - scrollBar.offsetWidth;

                if(newThumbX < 0){
                    newThumbX = 0;
                }else if(newThumbX > rightScroll){
                    newThumbX = rightScroll;
                }

                scrollBar.style.left = newThumbX + 'px';

                let contentScroll = (scrollWidth / 400) * newThumbX;
                b.style.marginLeft = (-1 * contentScroll) + 'px';
            }

            function onMouseUp(){
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        }

        scrollBar.addEventListener('mousedown', mouseMove);

        scrollBar.ondragstart = function(){
            return false;
        }
    })
}