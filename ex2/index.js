const { KhmerDate } = require('./lib')

const date = new KhmerDate();

console.log(date.check(new Date("Feb 02 2021 ")));