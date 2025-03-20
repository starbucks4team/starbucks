async function init() {
  try {
    const response = await fetch('http://localhost:3000/product/C0001');
    const datas = await response.json();
    document.querySelector('h1').innerText = datas.prodType;
    document.querySelector('#title').innerText = datas.prodName;
    document.querySelector('#comment').innerText = datas.prodDescription;
    document.querySelector('#comment2').innerText = datas.prodDescription;
    document.querySelector('#eng-title').innerText = datas.prodEngName;
    document.querySelector('#volume').innerText = datas.prodInfo.volume;
    document.querySelector('#fat').innerText = datas.prodInfo.fat;
    document.querySelector('#kcal').innerText = datas.prodInfo.kcal;
    document.querySelector('#sugar').innerText = datas.prodInfo.sugar;
    document.querySelector('#caffeine').innerText = datas.prodInfo.caffeine;
    document.querySelector('#protein').innerText = datas.prodInfo.protein;
    document.querySelector('#sodium').innerText = datas.prodInfo.sodium;
    document.querySelector('#alergy').innerText = datas.prodInfo.alergy;
    document.querySelector(
      '#image>img'
    ).src = `../assets/products_img/${datas.prodNo}.jpg`;
  } catch (err) {
    console.error(err);
  }
}

window.onload = function () {
  init();
  importPage('header');
  importPage('footer');
  document.querySelector('.fl button').addEventListener('click', function () {
    item = document.getElementById('title').innerText;
    cnt = document.querySelector('input').value;
    alert(`장바구니에 ${item}을 ${cnt}개 담으시겠습니까?`);
  });
};
