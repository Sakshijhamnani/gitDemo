//create Element
const para=document.createElement('p')
const heading=document.createElement('h3')

//create Text Node
const paraText=document.createTextNode('Total Fruits: 4');
const headingText=document.createTextNode("Buy high quality organic fruits online")
//append child
para.appendChild(paraText);
heading.appendChild(headingText);

const divs=document.getElementsByTagName('div')
const secondDiv = divs[1];
const firstDiv = divs[0]

secondDiv.append(para);
para.id="fruits-total"

firstDiv.append(heading)
heading.style.fontStyle = "italic"