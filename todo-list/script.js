
// TodoItem 객체 배열로 dataList 생성
const dataList = [
    new TodoItem("할일1"),
    new TodoItem("할일2"),
    new TodoItem("할일3"),
    new TodoItem("할일4")
];

function TodoItem(TodoName) {
    this.todoName = TodoName;
    this.isCompleted = false;

}

const deleteList = [];
const listContainer = document.getElementById("todo-list");

// 렌더링 함수
// 렌더링 함수 - dataList를 기반으로 화면에 표시
function render() {
    listContainer.innerHTML = ""; // 목록 초기화
    dataList.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-item";
        li.dataset.index = index;

        // 체크박스
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        // 텍스트
        const span = document.createElement("span");
        span.className = "list-item-text";
        span.textContent = item.todoName; // 객체의 todoName 사용

        const statusSpan = document.createElement("span");
        statusSpan.className = "list-item-status";
        statusSpan.textContent = item.isCompleted ? "완료" : "진행중";

        const completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = "완료";

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(statusSpan);
        li.appendChild(completeButton);
        listContainer.appendChild(li);
    });
}


// 추가 버튼 이벤트
document.getElementById("add-btn").addEventListener("click", (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    const input = document.getElementById("input-form");
    if (input.value) {
        dataList.push(new TodoItem(input.value)); // TodoItem 객체로 추가
        input.value = ""; // 입력창 비우기
        render(); // 화면 갱신
        console.log(dataList);
    }
})

// 삭제 버튼 이벤트 - deleteList에 있는 항목들을 dataList에서 삭제
document.getElementById("delete-btn").addEventListener("click", (e) => {
    e.preventDefault();

    if (deleteList.length === 0) {
        alert("삭제할 항목을 체크해주세요!");
        return;
    }

    // deleteList에 있는 TodoItem 객체들을 dataList에서 제거
    for (let i = dataList.length - 1; i >= 0; i--) {
        if (deleteList.includes(dataList[i])) {
            dataList.splice(i, 1);
        }
    }

    // deleteList 초기화
    deleteList.length = 0;

    render(); // 화면 갱신
    console.log("삭제 후 dataList:", dataList);
})

// 체크박스 이벤트 - 이벤트 위임을 사용하여 체크된 항목을 deleteList에 추가/제거
document.getElementById("todo-list").addEventListener("change", (e) => {
    // 클릭된 요소가 체크박스인지 확인
    if (e.target.classList.contains("checkbox")) {
        const li = e.target.closest(".list-item"); // 체크박스의 부모 li 찾기
        const clickedIndex = parseInt(li.dataset.index);
        const clickedItem = dataList[clickedIndex]; // TodoItem 객체

        if (e.target.checked) {
            // 체크되면 deleteList에 추가
            deleteList.push(clickedItem);
            console.log("추가됨:", clickedItem.todoName);
        } else {
            // 체크 해제되면 deleteList에서 제거
            const idx = deleteList.indexOf(clickedItem);
            if (idx > -1) {
                deleteList.splice(idx, 1);
            }
            console.log("제거됨:", clickedItem.todoName);
        }
        console.log("현재 deleteList:", deleteList);
    }
});


document.getElementById("todo-list").addEventListener("click", (e) => {
    // 클릭된 요소가 li인지 확인 (이벤트 위임)
    if (e.target.tagName === "LI") {
        const clickedIndex = parseInt(e.target.dataset.index); // data-index에서 인덱스 가져오기
        const clickedText = dataList[clickedIndex];
        alert(clickedText);
        console.log("선택된 아이템:", clickedText);
        console.log("인덱스:", clickedIndex);
    }


    if (e.target.classList.contains("complete-btn")) {
        e.stopPropagation(); // ✅ 클릭이 위로 전달되는 것 방지(안전)

        // ✅ 버튼엔 data-index가 없으니 li에서 가져오기
        const li = e.target.closest(".list-item");
        const clickedIndex = parseInt(li.dataset.index);

        // ✅ TodoItem이 아니라 dataList를 수정
        dataList[clickedIndex].isCompleted = true;

        alert(clickedIndex + 1 + "번째 아이템 할일 완료");
        render();
    }
});

// 초기 렌더링 실행
render();


/**
 * 할 일 목록 (To-Do List)
 *
 * 구현해야 할 기능:
 * 1. 할 일 추가 ✅
 * 2. 할 일 삭제 ✅
 * 3. 완료 체크/해제 ✅
 * 4. 필터링 (전체/진행중/완료)
 */
