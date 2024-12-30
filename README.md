# StickerfyWebApp-TestAutomation

An Automation Software Testing project for Stickerfy shopping cart Web Application (written in Node.js) to test its functionalities of features and user interaction components on the web of ordering stickers.

# Test Web Application

Stickerfy: https://stickerfy.herokuapp.com/

- Allows users to order stickers
- Simple web app written in Node.js - see the stickers available on the home page, select the one they want and add it to their cart, then checkout.

# Unit tests

- Critical to the success of an application
- Ensure functionality works
- Lightning fast
- Test only 1 thing

For this project:

- All the unit tests in the `tests/unit_tests` directory are written in "Mocha" which is a popular JavaScript testing framework.
- Mocha tests are written in a behavior-driven development (BDD) way where tests are defined in terms of behaviour and helps to structure tests in an organised way.
- To run the unit tests of this project: execute `$ npm run unit-test` command on the terminal from the root location of project.

# Integration tests

- Integration tests help to provide confidence that all parts of an application work seamlessly together.
- Integration tests focus on the whole application working together and can detect unexpected failures where one part of the app is fixed and another is broken.
- Some parts of the application can only be tested as part of a bigger process.
- Integration tests should cover important cross-module processes.
- Another Mocha test written in a BDD way to describe orders of stickers.
- Chai is an assertion library and chaiHttp is a plugin which provides functionality to do integration testing.
- To run the integration tests of this project: execute `$ npm run integration-test` command on the terminal from the root location of project.
