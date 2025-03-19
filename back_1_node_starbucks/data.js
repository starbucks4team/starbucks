const products = [
  {
    prodNo: 'C0001',
    prodType: '콜드브루',
    prodName: '나이트로 바닐라 크림',
    prodEngName: 'Nitro Vanilla Cream',
    prodDescription:
      '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!',
    prodPrice: 1500,
    prodInfo: {
      volume: 355,
      kcal: 80,
      fat: 2,
      sugar: 10,
      caffeine: 232,
      protein: 1,
      sodium: 40,
      alergy: '우유',
    },
  },
  {
    prodNo: 'C0002',
    prodType: '브루드 커피',
    prodName: '아이스 커피',
    prodEngName: 'Iced Coffee',
    prodDescription:
      '시즌에 어울리는 원두 종류를 선정하여 드립 방식으로 추출한 후 얼음과 함께 제공하는 커피로, 원두 커피의 풍부하고 깔끔한 맛을 느끼실 수 있습니다.',
    prodPrice: 1500,
    prodInfo: {
      volume: 355,
      kcal: 10,
      fat: 0,
      sugar: 0,
      caffeine: 140,
      protein: 1,
      sodium: 0,
      alergy: '없음',
    },
  },
  {
    prodNo: 'C0003',
    prodType: '에스프레소',
    prodName: '카페 라떼',
    prodEngName: 'Caffe Latte',
    prodDescription:
      '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼',
    prodPrice: 2000,
    prodInfo: {
      volume: 355,
      kcal: 180,
      fat: 5,
      sugar: 13,
      caffeine: 75,
      protein: 10,
      sodium: 115,
      alergy: '우유',
    },
  },
];

const carts = [
  { prodNo: 'C0001', count: 2 },
  { prodNo: 'C0003', count: 1 },
];

module.exports = { products, carts };
