import { ProductStore } from '../product';

const product = new ProductStore()

describe("product Model", () => {
  it('should have an index method', () => {
    expect(product.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(product.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(product.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(product.edit).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(product.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await product.create({
      id: 1,
      name: 'Hat',
      price: 25,
      category: 'clothes'
    });
    expect(result).toEqual({
      id: 1,
      name: 'Hat',
      price: 25,
      category: 'clothes'
    });
  });

  it('index method should return a list of products', async () => {
    const result = await product.index();
    expect(result).toEqual([{
      id: 1,
      name: 'Hat',
      price: 25,
      category: 'clothes'
    }]);
  });

  it('show method should return the correct product', async () => {
    const result = await product.show('1');
    expect(result).toEqual({
      id: 1,
      name: 'Hat',
      price: 25,
      category: 'clothes'
    });
  });

  it('delete method should remove the product', async () => {
    product.delete('1');
    const result = await product.index()

    expect(result).toEqual([]);
  });
});