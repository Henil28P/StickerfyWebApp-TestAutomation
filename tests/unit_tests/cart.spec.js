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

    // set up 2nd test to remove a sticker from the cart
    it('removes a sticker from the cart', function() {
        cart.add(product, product.id);
        cart.reduceByOne(product.id); // use reduceByOne() from cart model to decrease quantity by 1 of the product and remove sticker in the cart
        assert.deepEqual(cart.items, {}); // confirm that the cart is empty
        assert.equal(cart.totalPrice, 0); // confirm that the total price of cart is now 0 once emptied
    });

    // set up 3rd test to remove all quantities of a sticker from the cart
    it('remove all quantities of sticker from the cart', function() {
        // Add 2 stickers to cart firstly
        cart.add(product, product.id);
        cart.add(product, product.id);
        cart.removeItem(product.id); // remove the above 2 stickers added to cart
        assert.deepEqual(cart.items, {}); // confirm the cart is empty
        assert.equal(cart.totalPrice, 0); // confirm the total price of cart is 0
    });

    // Set up 4th test to generate an array of stickers in the cart
    it('returns an empty array', function() {
        assert.deepEqual(cart.generateArray(),[]); // the generateArray() from cart.js model stores an array of all the items adding to the cart essentially representing the shopping cart contents
        // Without adding any items first, the array begins as empty and confirm that by assertion
    });
  });
});
