let box = [];
// postelement = document.getElementById('index');

async function fetchdata() {
    let apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await apiResponse.json();
    return data;
}
document.addEventListener('DOMContentLoaded' , async ()=>{
    box = await fetchdata();
    card(box);
})

function card(data) {
    const container = document.querySelector('.container');
    // let view = '';
    const generate = data.map(post => (
         `<div class="col-md-4 p-lg-4" data-index="${post.id}">
            <div class="card p-3 bg-white">
                <img src="paris.jpg" class="rounded" alt="cinque terre">
                <span style="color: brown">${post.id} </span>
                <h1 >${post.title}</h1>

                <p style="padding: 4px">${post.body}</p>
                <div class="btn-group col-1 pb-2">
                    <button type="button" class="btn btn-outline-secondary">view</button>
                    <button type="button" class="btn btn-outline-secondary">edit</button>
                    
                    

                </div>

            </div>
        </div>`));
    container.innerHTML = generate;

    }
    // box = data;
    // postelement.innerHTML = view;




document.getElementById('input').addEventListener('input', (event) => {
    const filterValue = +event.target.value;
    const newdata = [];

    box.filter((user) => {
        if(user.userId === filterValue)
            newdata.push(user)
    });
    card(newdata);

})


