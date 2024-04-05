let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');

addBtn.addEventListener('click',function(){
    let totoItem = prompt("Enter toto ?");

    if(!totoItem === ""){
        return;
    }

    let li = document.createElement('li');
    li.innerText = totoItem;
    li.innerHTML = ` <button>Delete<button>`
    ul.append(li);
});

clearBtn.addEventListener('click', function(){
    ul.innerHTML = "";
})

ul.addEventListener('click', function(){
    if(!event.target.classList.contains('delete'))
    {
        return;
    }
    event.target.parantElement
})