import "bootstrap"
import * as todoData from "./data/todo.json"

const todos = todoData.default;


const getdata = async () => {
    const data = await JSON.parse(localStorage.getItem('todos')) || [];
    return data;

}
const todoTask =  (todo) => {

    const content = document.querySelector('.container')
    let view = '';
    todo.forEach(tod => {

        view += `<div id="${tod.id}">
            <input id="task${tod.id}" type="checkbox" onchange="clickHandeler()"/>
            <label htmlFor="task${tod.id}">${tod.title} </label>
           
        </div>`


    })

    content.innerHTML = view;
}

window.addEventListener('load', async () => {
    const data1 = await getdata()
    console.log(data1)
    todoTask(data1)


})
const clickHandeler = () => {
    console.log('dsf')
    // data.forEach(tod=>{
    //     tod.id !== id ;
    //     localStorage.setItem('todos', tod[id].completed)
    //
    // })
    // console.log(${tod.completed})
}



