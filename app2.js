// items data
const titles = ['title1', 'title2', 'title3', 'title4', 'title5'];
const prices = [1, 2, 3, 4, 5,];
const images = [
  'https://www.w3schools.com/howto/img_snow.jpg',
  'https://cdn.pixabay.com/photo/2017/05/05/17/06/mountain-2287731_960_720.jpg',
  'https://www.camperland.net/app/public/images/img-gallary/img_woods.jpg',
  'https://www.catster.com/wp-content/uploads/2016/06/vet-anemia-cat-TN-600x400.jpg',
  'https://www.port.ac.uk/-/media/images/news-events-and-blogs/news/2019/july/puppy-dog-eyes-muscles-600x400.ashx',
]

// append first element on page
document.querySelector('.product-tabs-brief-info').remove();
let soruceEle = document.querySelector('.product-details-info')
let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.textContent = 'Widget Header'
h1.id = 'header'
div.id = 'amitay'
div.appendChild(h1);
div.style.cssText = "padding: 86px 86px 86px 30px;position: relative;top: 50px;"
soruceEle.parentNode.insertBefore(div, soruceEle.nextSibling)


let amitay = document.getElementById('amitay');
const container = document.createElement('div');
container.id = 'container'
amitay.appendChild(container)



function appendContainer() {
  let containerNode =
    `<div class="arrows">
        <i onclick="leftClick()" class="left"></i>
        <i onclick="rightClick()" class="right"></i>
        </div>
      <div id="cards-list">
    </div>`
  container.insertAdjacentHTML("beforeend", containerNode);
}


function appendItems() {
  const cardsList = document.getElementById("cards-list");
  for (i = 0; i < titles.length; i++) {
    let cardNode =
      `<div id="card${[i + 1]}" class="card">
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

document.body.addEventListener('click', arrowFun)

function arrowFun(e) {
  let elmnt = document.getElementById("container");
  if (e.target.className === 'right') {
    elmnt.scrollLeft += 430;
  }
  else if (e.target.className === 'left') {
    elmnt.scrollLeft -= 430;
  }
}




