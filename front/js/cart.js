async function init() {
  try {
    importPage('header');
    importPage('footer');
    const response = await fetch('http://localhost:3000/cart');
    const datas = await response.json();
    let html = '';
    let sum = 0;
    datas.forEach((item, index) => {
      console.log(item);
      sum += item.prodPrice * item.count;
      html += `<div class="item"><img src="../assets/products_img/${item.prodNo}.jpg" /><div class="info"><div id="prodName">${item.prodName}</div><div id="prodPrice">${item.prodPrice}원</div><div  id="count">수량 : ${item.count}</div></div></div>`;
    });
    document.querySelector('#items').innerHTML = html;
    document.querySelector('#price-sum').innerText = `${sum}원`;
  } catch (err) {
    console.error(err);
  }
}

window.onload = function () {
  init();
};
