import { OrderStore } from '../order';

const order = new OrderStore()

describe("Order Model", () => {
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

  it('create method should add a order', async () => {
    const result = await order.create({
      id: '',
      status: 'active',
      user_id: '1'
    });
    expect(result).toEqual({
      id: result.id,
      status: result.status,
      user_id: result.user_id,
    });
  });

  it('show method should return the correct order', async () => {
    const result = await order.show('1');
    expect(result).toEqual({
      id: result.id,
      status: result.status,
      user_id: result.user_id,
    });
  });

  it('delete method should remove the product', async () => {
    order.delete("1");
    const result = await order.index()

    expect(result).toEqual([]);
  });
});