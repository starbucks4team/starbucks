const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { products, carts } = require('./data');
app.use(cors());

//get 요청이 되었을 때 할 일
app.get('/', (req, res) => {
  res.send('WELCOME');
});
//app.post()

app.get('/product', (req, res) => {
  //   res.send('아메리카노, 아이스아메리카노, 라떼');
  //   const products = [
  //     { prodNo: 'C0001', prodName: '아메리카노', prodPrice: 1500 },
  //     { prodNo: 'C0002', prodName: '아이스아메리카노', prodPrice: 1500 },
  //     { prodNo: 'C0003', prodName: '라떼', prodPrice: 2000 },
  //   ];

  res.json(products);
});

app.get('/product/:prodNo', (req, res) => {
  //   res.send(`${req.params.prodNo}상품의 상세내용입니다.`);
  console.log(req.params.prodNo);
  let index = products.find((x) => x.prodNo == req.params.prodNo);
  console.log(index);
  res.json(index);
});

app.get('/cart', (req, res) => {
  let cart = [];
  carts.forEach((item, index) => {
    cart.push(item);
    let product = products.find((x) => x.prodNo == item.prodNo);
    cart[index].prodName = product.prodName;
    cart[index].prodPrice = product.prodPrice;
    console.log(cart);
  });
  res.json(cart);
});

app.listen(port, () => {
  console.log('3000번 포트에서 backend server 실행중...');
});
