let form=document.querySelector('form');
let fruits=document.querySelector('.fruits')

//add
form.addEventListener('submit',function(event){
    event.preventDefault();
    const input =document.querySelector('#fruit-to-add')
    const newLi=document.createElement('li')
    newLi.innerHTML=input.value+'<button class="delete-btn">X</button><button class="edit-btn">Edit</button>'
    newLi.className='fruit'
    fruits.appendChild(newLi)
})

// //delete
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToBeDeleted=event.target.parentElement;
        fruits.removeChild(fruitToBeDeleted)
    }
});
