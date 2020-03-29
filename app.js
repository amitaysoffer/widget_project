document.querySelector('.product-tabs-brief-info').remove();
let soruceEle = document.querySelector('.product-details-info')

let div = document.createElement('div');
div.className = 'amitay'
div.style.cssText = "border: 10px solid red;padding: 86px 86px 86px 30px;position: relative;top: 500px;margin-bottom: 500px;"

soruceEle.parentNode.insertBefore(div, soruceEle.nextSibling)

// items data
const titles = ['title1','title2','title3','title4','title5'];
const prices = [1,2,3,4,5,];
const images = [
  'https://www.w3schools.com/howto/img_snow.jpg',
  'https://cdn.pixabay.com/photo/2017/05/05/17/06/mountain-2287731_960_720.jpg',
  'https://www.camperland.net/app/public/images/img-gallary/img_woods.jpg',
  'https://www.catster.com/wp-content/uploads/2016/06/vet-anemia-cat-TN-600x400.jpg',
  'https://www.port.ac.uk/-/media/images/news-events-and-blogs/news/2019/july/puppy-dog-eyes-muscles-600x400.ashx',
]
 
// UI Elements
let div = document.createElement('div');
div.id = 'container'
const amitay = document.querySelector('.amitay')
amitay.appendChild(div);


function appendContainer() {
  const amitay = document.getElementsByClassName("amitay");
  let containerNode = 
      `<div id="container">
      <div class="header">
        <h1> Widget Header </h1>
      </div>
        <i onclick="leftClick()" class="left"></i>
        <i onclick="rightClick()" class="right"></i>
      <div id="cards-list">
    </div>
  </div>`
  div.appendChild(containerNode)
}


function appendItems() {
const cardsList = document.getElementById("cards-list");
for (i = 0; i < titles.length; i++) {
  let cardNode =
      `<div id="card${[i+1]}" class="card">
  <div class="card-image">
  <img src=${images[i]} alt="Mountain">
    </div>
  <div class="card-content">
  <h3>${titles[i]}</h3>
  <h3>I cost: ${prices[i]}£</h3>
  </div>
  </div>
  </div>`
  cardsList.insertAdjacentHTML("beforeend", cardNode);  
  }
}


appendContainer();
appendItems();

// arrow functions
function rightClick() {
  var elmnt = document.getElementById("container");
  elmnt.scrollLeft += 100;
}
function leftClick() {
  var elmnt = document.getElementById("container");
  elmnt.scrollLeft -= 100;
};


