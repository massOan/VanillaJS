

const dataList = ["내용1", "내용2", "내용3", "내용4"];
const listContainer = document.getElementById("todo-list");

function render() {
    listContainer.innerHTML = ""; // 목록 초기화
    dataList.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        listContainer.appendChild(li);
    });
}

document.getElementById("all").addEventListener("click", () => {
    console.log("all")
})

document.getElementById("progress").addEventListener("click", () => {
    console.log("progress")
})

document.getElementById("completed").addEventListener("click", () => {
    console.log("completed")
})

document.getElementById("add-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.getElementById("input-form");
    if (input.value) {
        dataList.push(input.value);
        input.value = ""; // 입력창 비우기
        render(); // 화면 갱신
        console.log(dataList);
    }
})

// 초기 렌더링 실행
render();


/**
 * 할 일 목록 (To-Do List)
 *
 * 구현해야 할 기능:
 * 1. 할 일 추가
 * 2. 할 일 삭제
 * 3. 완료 체크/해제
 * 4. LocalStorage 저장/불러오기
 * 5. 필터링 (전체/진행중/완료)
 */

// TODO: 여기서부터 코드를 작성해보세요!

// 힌트 1: 먼저 필요한 DOM 요소들을 선택하세요
// const todoInput = document.querySelector('...');
// const todoList = document.querySelector('...');

// 힌트 2: 할 일 데이터를 저장할 배열을 만드세요
// let todos = [];

// 힌트 3: 할 일을 추가하는 함수를 만드세요
// function addTodo() { ... }

// 힌트 4: 화면에 할 일 목록을 그리는 함수를 만드세요
// function renderTodos() { ... }

// 힌트 5: LocalStorage에 저장/불러오기 함수를 만드세요
// function saveTodos() { ... }
// function loadTodos() { ... }
