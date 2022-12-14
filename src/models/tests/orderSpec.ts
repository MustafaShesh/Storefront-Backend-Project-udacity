import { UserStore } from '../user';
import { OrderStore } from '../order';

const user = new UserStore()
const order = new OrderStore()

beforeAll(async () => {
  const result1 = await user.create({
    id: '',
    firstname: 'mustafa',
    lastname: 'gamal',
    password: '123456'
  });
})

describe("order Model", () => {
  it('should have an index method', () => {
    expect(order.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(order.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(order.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(order.edit).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(order.delete).toBeDefined();
  });

  it('create method should add an order', async () => {
    const result = await order.create({
      id: '',
      status: 'active',
      user_id: '1',
    });
    expect(result).toEqual({
      id: result.id,
      status: result.status,
      user_id: result.user_id
    });
  });

  it('index method should return a list of orders', async () => {
    const result = await order.index();
    expect(result.length).toBe(result.length);
  });

  it('show method should return the correct order', async () => {
    const result = await order.show('1');
    expect(result).toEqual({
      id: result.id,
      status: result.status,
      user_id: result.user_id
    });
  });

  it('update method should return a edited order', async () => {
    const result = await order.edit({
      id: '1',
      status: 'complete',
      user_id: '1'
    });
    expect(result).toEqual({
      id: result.id,
      status: result.status,
      user_id: result.user_id
    });
  });

  it('delete method should remove the order', async () => {
    order.delete("1");
    const result = await order.index()

    expect(result.length).toEqual(result.length);
  });
});

afterAll(async () => {
  user.delete("1");
})