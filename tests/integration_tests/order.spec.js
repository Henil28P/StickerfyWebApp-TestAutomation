const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;
let chai = require('chai');
let chaiHttp = require('chai-http'); // chaihttp is an assertion library
let app = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Shopping cart', () => {

  describe('order test suite', () => {

    // beforeEach() block below creates a new model for the cart and a product
    beforeEach(() => {
      cart = new Cart({});
      product = new Product({
        "imagePath": "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_large.png?v=1571606093",
        "title": "Happy",
        "price":5});
    });

    // This test automates completing an order
    it('completes an order', (done) => {
      chai.request(app) // to open up the dev server for incoming requests and listen to them as they're being sent
      .get('/checkout') // sends a GET request to the checkout endpoint
      // call a checkout REST endpoint from routes/index.js file where all the REST endpoints are defined
      // the checkout endpoint in routes/index.js takes what's in the cart and allows the order of what's in the cart to be completed
      .end((err, res) => { // wait for the response to be complete and listen out for any errors
        res.should.have.status(200); // confirm that the response should have status code of 200 indicating that the checkout action was complete and order was successful
      done(); // close the connection to the server
    });
  });

});

});
