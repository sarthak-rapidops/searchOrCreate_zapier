/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('contact', () => {
  test('create with a email', async () => {
    const bundle = { inputData: { firstName: 'testz', lastName: 'testz', email: 'testz@gmail.com', owner: 40, otherPhone: '9977552200' } };
    const result = await appTester(
      App.creates.contact.operation.perform,
      bundle
    );
    console.log(result)
    //expect(result.id).toBeTruthy();
   expect(result.Data.email).toBe('testz@gmail.com');
  });
});