async function getProducts(url) {
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

window.onload = async () => {
  importPage('header');
  importPage('footer');
  let result = await getProducts('http://127.0.0.1:3000/products');
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    let container = document.querySelector('#products-container');
    //products/detail?prodNo=${result[i].prodNo}
    let template = `
        <a href="http://127.0.0.1:5500/front/screen/product-detail.html" class="product">
            <img class="product-img" src="../assets/products_img/${result[i].prodNo}.jpg" />
            <div class="product-name">${result[i].prodName}</div>
        </a>`;
    container.innerHTML += template;
  }
};
