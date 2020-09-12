// mock 数据在这个文件中写
// var Mock = require('../../node_modules/mockjs/dist/mock');
var Mock = require('mockjs')
Mock.mock(/\/init/, {
  code: 1,
  isLogin: true,
  'nickname|1-10': '我们',
  bookList: ['书籍', '书籍', '书籍', '书籍', '书籍', '书籍']
})
Mock.mock(/\/myprize/, {
  isLogin: true,
  prizeList: [
    { prizeId: 2, prizeName: '狗年公仔' },
    { prizeId: 2, prizeName: '狗年公仔' },
    { prizeId: 2, prizeName: '狗年公仔' },
    { prizeId: 2, prizeName: '狗年公仔' }
  ]
})
