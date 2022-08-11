//스크롤 퍼센트 이벤트
window.addEventListener('scroll', function(e){
    //콘텐츠
    const contentBox = document.querySelector('section>div:nth-child(4)');
    const content = document.querySelector('section>div:nth-child(4)>ol');
    //숨어있는 콘텐츠 크기 계싼
    let scrollWidth = content.offsetWidth - contentBox.clientWidth;

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
            //const content = document.querySelector('section>div:nth-child(4)>ol');

            let newThumbX = e.clientX - moveX - leftX;
            let rightScroll = scrollBox.clientWidth - scrollBar.offsetWidth;

            if(newThumbX < 0){
                newThumbX = 0;
            }else if(newThumbX > rightScroll){
                newThumbX = rightScroll;
            }

            scrollBar.style.left = newThumbX + 'px';

            let contentScroll = (scrollWidth / 400) * newThumbX;
            content.style.marginLeft = (-1 * contentScroll) + 'px';
            console.log(contentScroll);
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