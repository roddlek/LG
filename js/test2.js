//초기 설정 값
const currentIdx = 0;
const endIdx = 8;
//data
const listData = window.testList;
const resultData = window.testResult;

const rateBox = [];

function endPlay(){
    const sum = rateBox.reduce(function(acc, curr){
        return acc + curr;
    });
    console.log(sum);
}

function addAnswer(answerText, answerRate, num){
    //기본 설정
    const answer = document.querySelector('.A');
    const aList = document.createElement('button');
    //클래스, 속성 추가
    aList.classList.add('aList');
    aList.setAttribute('value', answerRate);
    const attr = aList.getAttribute('value');
    //answer.classList.add('fadeIn');
    //답 버튼 삽입
    answer.appendChild(aList);
    //받은 parameter들을 innerHTML
    aList.innerHTML = answerText;

    //마우스 클릭 이벤트에 대한 함수
    aList.addEventListener('click', function(e){
        //진행 상태
        const status = document.querySelector('.status>i');
        status.innerHTML = '0' + (num + 2);

        //답 리스트 리셋
        const allA = document.querySelectorAll('.aList');
        for(let i = 0; i < allA.length; i++){
            allA[i].disabled = true;
            //answer.style.animation = 'fadeOut 0.5s';
            allA[i].remove();
        }

        // setTimeout(() => {
        //     for(let i = 0; i < allA.length; i++){
        //         answer.style.animation = 'fadeOut 0.5s';
        //         allA[i].remove();
        //     }
        // }, 450);

        //점수계산 세팅
        rateBox.push(Number(attr));
        console.log(rateBox);
        
        //기본 함수 실행
        play(++num);
    }, false)
}

function play(num){
    const question = document.querySelector('.Q');
    question.innerHTML = listData[num].q;
    for(let i in listData[num].a){
        //반복문으로 도는 데이터들을 parameter로 전달
        addAnswer(listData[num].a[i].answer, listData[num].a[i].rate, num);
    }

    if(num === endIdx){
        endPlay();
    }
}

play(currentIdx);