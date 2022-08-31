const modal = document.querySelector('#lgtiModal');
//초기 설정 값
const currentIdx = 0;
const endIdx = 9;
//data
const listData = window.testList;
const resultData = window.testResult;
//점수 담을 공간
const rateBox = [];

function endPlay(){
    //선택자 정리
    const titleR = document.querySelector('.resultTitle');
    const textR = document.querySelector('.resultText');

    const closeBtn = document.querySelector('#lgtiModal>ul:last-child>li:first-child');
    closeBtn.addEventListener('click', (e) => {
        modal.style.display = 'none';
        window.location.reload();
    })

    //점수 계산
    const sum = rateBox.reduce(function(acc, curr){
        return acc + curr;
    });

    if(sum <= 15){
        titleR.innerHTML = resultData[0].title;
        textR.innerHTML = resultData[0].text;
    }else if(sum > 15 && sum <= 26){
        titleR.innerHTML = resultData[1].title;
        textR.innerHTML = resultData[1].text;
    }else if(sum > 26 && sum <= 30){
        titleR.innerHTML = resultData[2].title;
        textR.innerHTML = resultData[2].text;
    }else if(sum > 30 && sum <= 45){
        titleR.innerHTML = resultData[3].title;
        textR.innerHTML = resultData[3].text;
    }

    modal.style.display = 'block';
}

/**
 * 
 * @param {string} answerText 질문에 대한 답
 * @param {string} answerRate 결과 산출을 위한 점수 
 * @param {number} num 증가하는 초기값
 */
function addAnswer(answerText, answerRate, num){
    //기본 설정
    const answer = document.querySelector('.A');
    const aList = document.createElement('button');

    //클래스, 속성 추가
    aList.classList.add('aList');
    aList.setAttribute('value', answerRate);
    const attr = aList.getAttribute('value');

    //답 버튼 삽입
    answer.appendChild(aList);

    //받은 parameter들을 innerHTML
    aList.innerHTML = answerText;

    //마우스 클릭 이벤트에 대한 함수
    aList.addEventListener('click', function(e){
        //진행 상태
        let status = document.querySelector('.status>i');
        status.innerHTML = '0' + (num + 2);

        //답 리스트 리셋
        const allA = document.querySelectorAll('.aList');
        for(let i = 0; i < allA.length; i++){
            allA[i].disabled = true;
            allA[i].remove();
        }

        //점수계산 세팅
        rateBox.push(Number(attr));
        console.log(rateBox);
        
        //기본 함수 실행
        play(++num);
    }, false)
}


function play(num){
    if(num === endIdx){
        endPlay();
    }

    const question = document.querySelector('.Q');
    question.innerHTML = listData[num].q;
    
    for(let i in listData[num].a){
        //반복문으로 도는 데이터들을 parameter로 전달
        addAnswer(listData[num].a[i].answer, listData[num].a[i].rate, num);
    }
}

play(currentIdx);