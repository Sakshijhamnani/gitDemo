const newInputElement=document.createElement('input')
newInputElement.type='text'
newInputElement.placeholder='Fruit Description ....'
newInputElement.id='description'
newInputElement.name='description'

const form=document.querySelector('form')
const button=document.querySelector('button')
form.insertBefore(newInputElement, button)


// Show the fruit description in Italics in the nwxt line
const fruits=document.querySelector('.fruits')

form.addEventListener('submit', function(event){
  event.preventDefault();
  const input1=document.getElementById('fruit-to-add')
  const input2=document.getElementById('description')

  const para=document.createElement('p')
  const paraText=document.createTextNode(input2.value)
  para.style="font-style:italic";
  para.appendChild(paraText)
  
  const newLi=document.createElement('li')
  const newLiText=document.createTextNode(input1.value)
  newLi.appendChild(newLiText)
  newLi.appendChild(para)
  newLi.className='fruit'

  const newDeleteBtn=document.createElement('button')
  const newDeleteBtnText=document.createTextNode('x');
  newDeleteBtn.appendChild(newDeleteBtnText)
  newDeleteBtn.className='delete-btn'
  newLi.appendChild(newDeleteBtn)

  fruits.appendChild(newLi)
  console.log(newLi)
})

//delete
fruits.addEventListener('click', function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
    }
})

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
document.getElementById('filter').addEventListener('keyup', function (event) {
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll('.fruits li');
for(let i=0; i<listItems.length; i++){
const currentFruitText =  listItems[i].firstChild.textContent.toLowerCase();
const currentFruitDescription = listItems[i].firstElementChild.firstChild.textContent.toLowerCase();   
if((currentFruitText.indexOf(searchTerm) === -1) && (currentFruitDescription.includes(searchTerm) === false)){
  listItems[i].style.display = 'none';
}else{
  listItems[i].style.display = 'flex';
   }
}
});