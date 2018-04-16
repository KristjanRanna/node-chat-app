var moment = require('moment');

// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));

new Date().getTime();

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
