const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { products, carts } = require('./data');

app.use(cors());

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



app.get('/products', (req, res) => {
  //   res.send('아메리카노, 아이스아메리카노, 라테');
  console.log('GET: /products');
  const products = [
    { prodNo: 'C0001', prodName: '카페 아메리카노' },
    { prodNo: 'C0002', prodName: '아이스 카페 아메리카노' },
    { prodNo: 'C0003', prodName: '카푸치노' },
    { prodNo: 'C0004', prodName: '아이스 카페 라떼' },
    { prodNo: 'C0005', prodName: '콜드 브루 몰트' },
    { prodNo: 'C0006', prodName: '아이스 라벤더 카페 브레베' },
    { prodNo: 'C0007', prodName: '스타벅스 1호점 크림 라떼' },
  ];
  res.json(products);
});

app.get('/orderhistory', (req, res) => {
  console.log('GET: /orderhistory');
  const orderhistory = [
    {
      orderNo: '97',
      orderDate: '2025-03-07',
      prodNos: ['C001', 'C002'],
      prodNames: ['아메리카노', '라테'],
      prices: ['1000', '1000'],
      quantities: ['1', '1'],
    },
    {
      orderNo: '46',
      orderDate: '2025-03-07',
      prodNos: ['C001', 'C002'],
      prodNames: ['아메리카노'],
      prices: ['1000'],
      quantities: ['1'],
    },
    {
      orderNo: '12',
      orderDate: '2025-03-01',
      prodNos: ['C002'],
      prodNames: ['라테'],
      prices: ['1000'],
      quantities: ['1'],
    },
  ];
  res.json(orderhistory);
});

app.listen(port, () => {
  console.log(`port ${port}: listening...`);
});
