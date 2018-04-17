const expect = require('expect');
const {Users} = require('./users.js');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node'
    }];
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kristjan',
      room: 'The Office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () => {
    var userId = '1';
    var userToRemove = users.removeUser(userId);

    expect(userToRemove.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(typeof user).toBe('undefined');
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('Should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);
    expect(typeof user).toBe('undefined');
  });

  it('Should return names who are inside Node chat room', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike', 'Julie']);

  });

  it('Should return names who are inside React chat room', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Jen']);

  });
});
