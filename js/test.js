// const liWidth = document.querySelector('#test ul>li').offsetWidth;
// const ul = document.querySelector('#test ul');
// const li = document.querySelectorAll('#test ul li');
//초기 설정 값
const currentIdx = 0;
const endIdx = 8;
//data
const listData = window.testList;
const resultData = window.testResult;

//답 리스트 추가하기
function addAnswer(asw, rate, num){
    const divA = document.querySelector('.answer');
    const dd = document.createElement('dd');
    dd.classList.add('answerList');
    dd.setAttribute('value', rate);
    divA.appendChild(dd);
    dd.innerHTML = asw;

    //점수 계산 함수
    // function sumValue(e){
    //    let sumRoom = [];
    //     const getValue = dd.getAttribute('value');
    //     console.log(getValue);
    // }
    // dd.addEventListener('click', sumValue);
    
    //답 리스트 숨기기
    const nextBtn = document.querySelector('#test>div>div>p');
    nextBtn.addEventListener('click', function(e){
        const ddChildren = document.querySelectorAll('.answerList');
        for(let i = 0; i < ddChildren.length; i++){
            ddChildren[i].remove();
        }
        list(++num);
        
    })
}

//질문 리스트 추가하기
function list(num){
    const dtQ = document.querySelector('.question');
    dtQ.innerHTML = listData[num].q;
    for(let i in listData[num].a){
        addAnswer(listData[num].a[i].answer, listData[num].a[i].rate, num);
    }
}
list(currentIdx);



// function nextBtnClick(num){
//     let idx = num + 1;
//     li.forEach(function(item){
//         let span = '<span><i>0' + idx + '</i>/09</span>';
//         item.innerHTML = span;
//     })

//     //동적 UX
//     ul.style.marginLeft = -num * liWidth + 'px';
// }

// nextBtn.addEventListener('click', function(e){
//     nextBtnClick(currentIdx += 1)
// })