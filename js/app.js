document.getElementById("btnAdd").addEventListener('click',addList);
//아이디가 btnAdd인 요소에 접근하여 이벤트 리스너를 추가한다.
// 클릭하면 addList함수를 실행하는 이벤트 리스너를 추가한다.



function addList() {

    var inputVal = document.querySelector('.text-basic')
    //querySelector는 클래스나 아이디를 가리지 않는다.
    if(inputVal.value == '' || inputVal.value == ' ') {
        alert("값을 입력하세요")
        return //함수 종료
    }

    /*
    두개의 td에 각각 체크박스와 입력한 내용을 넣고
    그 td를 tr안에 넣는다.
    완성된 tr을 listBody 안에 넣으면 끝
    */

    //데이터 유효성 통과

    var my_tr = document.createElement("tr")
    var td01 = document.createElement("td")
    var my_input = document.createElement('input')

    my_input.setAttribute('type','checkbox')
    my_input.setAttribute('class','btn-chk')
    td01.appendChild(my_input)

    var td02 = document.createElement("td")
    td02.innerText = inputVal.value

    my_tr.appendChild(td01)

    my_tr.appendChild(td02)

    my_tr.setAttribute('class','my-tr')

    var listBody = document.getElementById("listBody") //tbody에 접근

    listBody.appendChild(my_tr)

    inputVal.value = null //input 값 초기화

    // 마지막 삭제 : 길이 -1 그 자식 요소 삭제
    // 모두 삭제 : 반복문, 반목문으로 계속 삭제(while, break)
    // 선택 삭제 : 체크박스 어떤 항목이 체크 되었는지 인식, 체크된 박스가 몇번재 tr인지

}

document.getElementById("DeleteSel").addEventListener('click',delSel);

function delSel() {

    var chkbox = document.querySelectorAll('#listBody .btn-chk')
    var listbody = document.getElementById("listBody")

    for(var i in chkbox) {

        if(chkbox[i].checked) {
            listbody.removeChild(chkbox[i].parentNode.parentNode)

        }
    }
    
}



document.getElementById("btnDelLast").addEventListener('click',delLast);

function delLast() {

    var listChild = listBody.children
    var lastIdx = listBody.children.length-1

    listBody.removeChild(listChild[lastIdx])
}


document.getElementById("btnDelAll").addEventListener('click',delAll);

function delAll() {

    //listBody.remove() - 이는 listBody 자체를 없애기 때문에 추가도 하지 못한다.

    listBody.innerHTML = "" 
    
    //반복문과 removeChild를 써서 제거 가능
    // list body내용 전체를 삭제할 수도 있음

}


//https://2boki.tistory.com/142