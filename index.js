const text=document.getElementById('main-heading')
text.innerHTML='Fruit World'
text.style.color='orange'

const heading=document.getElementById('header')
heading.style.backgroundColor='green'
heading.style.borderBottom='2px solid orange'

const secondheading=document.getElementById('basket-heading')
secondheading.style.color='green'

  const thanksDiv = document.getElementById("thanks");
  const paragraphElement = document.createElement("p");
  const textNode = document.createTextNode("Please visit us again");
  paragraphElement.appendChild(textNode);
  thanksDiv.appendChild(paragraphElement);


let fruit=document.getElementsByClassName('fruit')
fruit[2].style.backgroundColor='yellow'

for(let i=0;i<fruit.length;i++){
  fruit[i].style.fontWeight='bold'
}


//GetElementsByTagName
let listItems=document.getElementsByTagName('li')
listItems[4].style.color='blue'


for(let i=0;i<listItems.length;i++){
   listItems[i].style.fontStyle='italic'
}