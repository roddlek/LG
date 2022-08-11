const allTabBtn = document.querySelectorAll('.tabBtn>ul>li');
allTabBtn.forEach( (item) => {
    item.addEventListener('click', function(e){
        //아이디 값 얻기
        let aId = this.querySelector('a').getAttribute('href');
        //콘텐츠 선택자 정리
        let sec = document.querySelector(aId);
        const secDiv = sec.querySelector('div:nth-child(4)');
        let secOl = sec.querySelector('div:nth-child(4)>ol');

        
        //스크롤 이벤트
        window.addEventListener('scroll', function(e){
            //숨어있는 콘텐츠 크기 계싼
            let scrollWidth = secOl.offsetWidth - secDiv.clientWidth;

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
                    secOl.style.marginLeft = (-1 * contentScroll) + 'px';
                }

                function onMouseUp(e){
                    document.removeEventListener('mouseup', onMouseUp);
                    document.removeEventListener('mousemove', onMouseMove);
                }
            }

            scrollBar.addEventListener('mousedown', mouseMove);

            scrollBar.ondragstart = function(){
                return false;
            }
        })

    });
})