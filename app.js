console.log('hello Simon');
document.querySelector('.product-tabs-brief-info').remove();
let soruceEle = document.querySelector('.product-details-info')

let div = document.createElement('div');
div.className = 'amitay'
div.style.cssText = "border: 10px solid red;padding: 86px 86px 86px 30px;position: relative;top: 500px;margin-bottom: 500px;"


let div2 = document.createElement('div');
div2.className = 'test'
div2.style.cssText = "border: 10px solid blue;padding: 12px;width: 100px;height: 100px;"
div.appendChild(div2);

soruceEle.parentNode.insertBefore(div, soruceEle.nextSibling)
