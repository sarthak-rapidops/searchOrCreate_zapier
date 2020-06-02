const ContactCreate = require('./creates/contact');
const ContactSearch = require('./searches/contact');

const addAuthHeader = (request, z, bundle) => {
  // Hard-coded auth header just for demo. DON'T do auth like this for your
  // production app!
  request.headers['Content-Type']= 'application/json';
  request.headers['sessionToken']= 'bbc9f361-9e78-11ea-8b98-3f60d8467ffd';
  request.headers['x-linkname']= 'dev7.salesmate.io';
  return request;
};

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  beforeRequest: [addAuthHeader],

  searches: { [ContactSearch.key]: ContactSearch },

  creates: { 
    [ContactCreate.key]: ContactCreate 
  },

  searchOrCreates: {
    [ContactSearch.key]: {
      // The key must match the search
      key: ContactSearch.key, // same as above
      display: {
        // The label shows up when the search-or-create checkbox is checked.
        // See https://cdn.zappy.app/5fc31d104c6bd0050c44510557b3b98f.png
        label: 'Find or Create a Contact',
        description: 'x', // this is ignored
      },
      search: ContactSearch.key,
      create: ContactCreate.key,
    },
  },
};
