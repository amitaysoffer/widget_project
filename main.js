
// Items data
const titles = [
  '11 GREAT PLACES TO RENT A SUMMER LAKE HOUSE',
  'Hike the Skåneleden trails Like you never seen before', 
  'HOLIDAYS AND SHORT BREAKS IN THE UKS MOST BEAUTIFUL FORESTS', 
  'The 24 Best Island Beaches in the World', 
  'The Most Beautiful Sunsets In The World', 
  'DISCOVER THE MAGIC OF THE OCEAN'
];
const prices = [999, 649, 499, 1149, 789, 1399];
const images = [
  'https://totalcarpmagazine.com/images/styles/600_wide/public/1219venue.Bobs-Hordle-2.jpg',
  'https://cdn.pixabay.com/photo/2017/05/05/17/06/mountain-2287731_960_720.jpg',
  'https://www.camperland.net/app/public/images/img-gallary/img_woods.jpg',
  'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/spice-island-beach-resort/media/Spice-Island-Resort-Gallery-7-5727c9800888f.jpg',
  'https://www.staycoastalvacations.com/sites/nscv/files/styles/600x400/public/paragraphs/images/callouts/left/oceanside-beach.jpg',
  'https://marinelodgezanzibar.com/wp-content/uploads/2019/05/DivePointZnz-58-600x400.jpg'
]
const links = [
  'https://www.tripadvisor.com/VacationRentalsBlog/2016/04/11/11-best-places-rent-summer-lake-house/',
  'https://visitskane.com/outdoors-adventure/hike-skaneleden-trails?gclid=Cj0KCQjwjoH0BRD6ARIsAEWO9DsjmJ_XojF7F07a7DBnL40pMzwB-4rFddwcrvz1tOevhI3-lt6R7FsaAhbcEALw_wcB',
  'https://www.forestholidays.co.uk/',
  'https://www.cntraveler.com/galleries/2015-02-24/top-10-most-beautiful-island-beaches-hawaii-australia',
  'https://www.forbes.com/sites/laurabegleybloom/2018/06/28/the-most-beautiful-sunsets-in-the-world/',
  'http://freediving-coron.com/?gclid=Cj0KCQjwjoH0BRD6ARIsAEWO9DvlIYSSYn5o-1KZwRKkQVv_C6D1Uu21_TDtVdlQxbTakKtn-VuRAbsaAphXEALw_wcB'
];

// append wrapper on page
document.querySelector('.product-tabs-brief-info').remove();
const sourceElem = document.querySelector('.product-details-info');
let div = document.createElement('div');
div.id = 'wrapper'
sourceElem.parentNode.insertBefore(div, sourceElem.nextSibling);

// Create container element
const wrapper = document.getElementById('wrapper');
const container = document.createElement('div');
container.id = 'container'
wrapper.appendChild(container)


// append nodes
function appendContainer() {
  let headerNode = `<h1 id="header">You may be interested in...<h1>`
  let containerNode =
    `<div class="arrows">
        <i class="left"></i>
        <i class="right"></i>
        </div>
      <div id="cards-list">
    </div>`
  container.insertAdjacentHTML("afterbegin", headerNode);  
  container.insertAdjacentHTML("beforeend", containerNode);
}

// Initiate data
function appendItems() {
  const cardsList = document.getElementById("cards-list");
  for (i = 0; i < titles.length; i++) {
    let cardNode =
      `<div id="card${[i + 1]}" class="card">
  <div class="card-image">
  <a href=${links[i]} target="_blank">
  <img src=${images[i]}>
    </div>
  <div class="card-content">
  <h4 id="title">${titles[i]}</h4>
  <h4 id="price">From: ${prices[i]}£</h4>
  </a>
  </div>
  </div>
  </div>`
    cardsList.insertAdjacentHTML("beforeend", cardNode);
  }
}

// Invoke functions
appendContainer();
appendItems();

// Arrows functionality
document.body.addEventListener('click', arrowFun)
function arrowFun(e) {
  let elmnt = document.getElementById("container");
  if (e.target.className === 'right') {
    elmnt.scrollLeft += 400;
  }
  else if (e.target.className === 'left') {
    elmnt.scrollLeft -= 400;
  }
}
