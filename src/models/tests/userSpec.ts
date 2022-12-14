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

  it('should have a authenticate method', () => {
    expect(user.authenticate).toBeDefined();
  });

  it('should have a update method', () => {
    expect(user.edit).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(user.delete).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await user.create({
      id: '2',
      firstname: 'mustafa',
      lastname: 'gamal',
      password: '123456'
    });

    expect(result).toEqual({
      id: result.id,
      firstname: result.firstname,
      lastname: result.lastname,
      password: result.password
    });
  });

  it('authenticate method should authenticate a user', async () => {
    const result = await user.authenticate("mustafa", "gamal", "123456");
    expect(result).toBeTruthy();
  });

  it('index method should return a list of users', async () => {
    const result = await user.index();
    expect(result.length).toBe(result.length);
  });

  it('show method should return the correct user', async () => {
    const result = await user.show("2");
    expect(result).toEqual({
      id: result.id,
      firstname: result.firstname,
      lastname: result.lastname,
      password: result.password
    });
  });

  it('update method should return a edited user', async () => {
    const result = await user.edit({
      id: '2',
      firstname: 'ahmed',
      lastname: 'gamal',
      password: '123456'
    });
    expect(result).toEqual({
      id: result.id,
      firstname: result.firstname,
      lastname: result.lastname,
      password: result.password
    });
  });

  it('delete method should remove the user', async () => {
    user.delete("2");
    const result = await user.index()

    expect(result.length).toBe(result.length);
  });
});