const Cart = require('../../models/cart');
const Product = require('../../models/product');
const assert = require('assert');

let cart;
let product;

describe('Shopping cart', function() {

  describe('shopping cart model', () => {

    // beforeEach() block sets up a model for a cart and a product
    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
        "title": "Happy",
        "description": "Happy",
        "price":5});
    });

    // set up 1st test to add a sticker to the cart
    it('adds a sticker to the cart', function() {
      cart.add(product, product.id); // call add() method of cart model to add specific sticker (defined in productkey above) to user cart
      assert.equal(cart.totalPrice, 5); // confirm that the cart price is equal to 5 which is price of product defined above
    });
  });
});
