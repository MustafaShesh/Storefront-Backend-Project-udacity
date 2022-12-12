import { UserStore } from '../user';

const user = new UserStore()

describe("User Model", () => {
  it('should have an index method', () => {
    expect(user.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(user.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(user.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(user.edit).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(user.delete).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await user.create({
      id: 1,
      firstname: 'mustafa',
      lastname: 'gamal',
      password: '123'
    });
    expect(result).toEqual({
      id: 1,
      firstname: 'mustafa',
      lastname: 'gamal',
      password: '123'
    });
  });

  it('index method should return a list of users', async () => {
    const result = await user.index();
    expect(result).toEqual([{
      id: 1,
      firstname: 'mustafa',
      lastname: 'gamal',
      password: '123'
    }]);
  });

  it('show method should return the correct user', async () => {
    const result = await user.show("1");
    expect(result).toEqual({
      id: 1,
      firstname: 'mustafa',
      lastname: 'gamal',
      password: '123'
    });
  });

  it('delete method should remove the user', async () => {
    user.delete("1");
    const result = await user.index()

    expect(result).toEqual([]);
  });
});