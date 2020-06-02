/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('contact', () => {
  test('search by email', async () => {
    const bundle = { inputData: { email: 'vivek@gmail.com' } };
    const results = await appTester(
      App.searches.contact.operation.perform,
      bundle
    );
    console.log("result",results)
   expect(results.length).toBeGreaterThan(0);

    const firstContact = results[0];
    console.log("first",firstContact)
    expect(firstContact).toMatchObject({
      email: 'vivek@gmail.com',
    });
  });
});
