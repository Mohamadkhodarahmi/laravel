
let mainData
async function  getData(){
    mainData = await fetch("./data/todo.json")

    mainData = await mainData.json()

}

const todoTask =  (todo) => {
    const content = document.querySelector('.container')
    let view = '';

    todo.forEach(tod => {
        view += `<div id="${tod.id}" >
            <input id="task${tod.id}" type="checkbox" onchange="hand(${tod.id},${tod.completed})" ${tod.completed == true ? 'checked' : ''} />
            <label For="task${tod.id}">${tod.title} </label>
        </div>`
    })
    content.innerHTML = view;
}

window.addEventListener('load', async () => {

    await getData()
    if(mainData.length == 0){
        localStorage.setItem('data' , JSON.stringify(mainData))
    }

    const localData =  JSON.parse(localStorage.getItem('data'))

    console.log(localData)

    todoTask(localData)

})

function hand(id , completed ){
    const local = JSON.parse(localStorage.getItem('data'))
    local.map(loc=>{
        if (loc.id === id){
            loc.completed = !completed;
            console.log(loc.completed)


        }

    })
    localStorage.setItem('data' , JSON.stringify(local))

}


