var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var res = generateMessage('Kristjan', 'Some text here');

    expect(res.from).toEqual('Kristjan');
    expect(res.text).toEqual('Some text here');
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    var from = 'Kristjan';
    var latitude = 1;
    var longitude = 2;

    var url = `https://www.google.com/maps?q=1,2`
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toEqual(url);
    expect(url).toEqual(message.url);

  });
});
