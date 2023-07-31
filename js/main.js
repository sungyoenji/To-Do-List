let taskInput = document.getElementById('task_input')
let addBtn = document.getElementById('add_btn')

let tabs = document.querySelectorAll('.bottom_btn>.left>button')
console.log(tabs)

console.log(taskInput)
console.log(addBtn)

let arrList = [] //데이터 들어갈 배열

let filterList = [] //진행중인 데이터 배열

let type = 'all'


//키보드 입력 (enter)이벤트
taskInput.addEventListener('keydown',function(e){
    if(e.keyCode == 13)
    taskAdd()
})

addBtn.addEventListener('click',taskAdd);

for(let i=0;i<tabs.length;i++){
    
    tabs[i].addEventListener('click',function(e){
        console.log('클릭')
        filter(e)
    })
}

function taskAdd(){
    console.log('클릭')
    let task = {
        id:Date.now(),
        data:taskInput.value,
        complete:false
    }
    arrList.push(task)
    taskInput.value = '' //enter
    console.log(arrList)
    listView()
}

function listView(){

    let resList = []
    if(type == 'all'){
        resList = arrList
    }else if(type == 'notdone'){
        resList = filterList
    }
    

    let result = '';
    for(let i=0;i<resList.length;i++){
        if(resList[i].complete == true){
            result += `
        
            <div class="list_all">
                  <div class="left done">
                      <input type="checkbox" class="item" checked> ${resList[i].data}
                  </div>
                   <div class="but_del">
                   <button type="button" class="check" onclick='toggleComplet(${resList[i].id})'>체크</button>
                        <button type="button" class="del" onclick='deleteTask(${resList[i].id})'>삭제</button>
                  </div>
             </div>`
        }else{
            result += `
        
            <div class="list_all">
                  <div class="left">
                      <input type="checkbox" class="item"> ${resList[i].data}
                  </div>
                   <div class="but_del">
                   <button type="button" class="check" onclick='toggleComplet(${resList[i].id})'>체크</button>
                        <button type="button" class="del" onclick='deleteTask(${resList[i].id})'>삭제</button>
                  </div>
             </div>`
        }
        // result += `
        
        // <div class="list_all">
        //       <div class="left">
        //           <input type="checkbox" class="item"> ${arrList[i].data}
        //       </div>
        //        <div class="but_del">
        //        <button type="button" class="check" onclick='toggleComplet(${arrList[i].id})'>체크</button>
        //             <button type="button" class="del" onclick='deleteTask(${arrList[i].id})'>삭제</button>
        //       </div>
        //  </div>`
    }
    document.getElementById('list_wrap').innerHTML = result
}
//해당 번째의 삭제버튼 클릭시 삭제
function deleteTask(id){
    console.log('삭제')
    console.log(id)
    for(let i=0;i<arrList.length;i++){
        if(arrList[i].id == id){
            arrList.splice(i,1)
            break;
        }
    }
    listView()
    console.log(arrList)
}

//전체삭제버튼 클릭하면
// let arrList = []
// 배열에 기억된 값 html 요소에 출력
function remove(id){
    console.log('삭제')
    console.log(id)
    for(let i=0;i<arrList.length;i++){
         arrList = []
        } 
         listView()
        console.log(arrList)
    }

    function toggleComplet(id){
        console.log('체크',id)
        for(let i=0;i<arrList.length;i++){
            if(arrList[i].id == id){
                arrList[i].complete = !arrList[i].complete
                break;
            }
        }
        console.log(arrList)
        listView()
    }
  
    //필터링 되는 함수
function filter(e){
    type = e.target.id
    console.log(e.target.id)

    filterList = []

    if(type == 'all'){
        listView()
    }else if(type == 'notdone'){
        for(let i=0;i<arrList.length;i++){
            if(arrList[i].complete == false){
                filterList.push(arrList[i])
            }
        }
    }
    console.log(filterList)
    listView()
}


//선택된 tab메뉴에 on class 추가할 때
for(let i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',function(e){
        for(let j=0;j<tabs.length;j++){
            tabs[j].classList.remove('on')
        }
        e.target.classList.add('on')
    })
}


