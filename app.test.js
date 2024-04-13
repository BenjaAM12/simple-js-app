const sayHello = require('./app');

test('sayHello returns Hello, world!', () => {
  expect(sayHello()).toBe("Hello, world!");
});
