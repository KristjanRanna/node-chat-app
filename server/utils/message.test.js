var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var res = generateMessage('Kristjan', 'Some text here');

    expect(res.from).toEqual('Kristjan');
    expect(res.text).toEqual('Some text here');
    expect(typeof res.createdAt).toBe('number');
  });
});
