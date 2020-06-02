const perform = async (z, bundle) => {
  const response = await z.request({
      method: 'POST',
      url: 'https://apis-dev.salesmate.io/v3/contacts/',
      body: {
          firstName: bundle.inputData.firstName,
          lastName: bundle.inputData.lastName,
          email: bundle.inputData.email,
          owner: bundle.inputData.owner,
          otherPhone: bundle.inputData.otherPhone
      },
  })
  return response.data;
};

module.exports = {
  key: 'contact',
  noun: 'Contact',

  display: {
      label: 'Create Contact',
      description: 'Create a Contact',
  },
  operation: {
      inputFields: [
          {key: 'firstName', required: true},
          {key: 'lastName', required: true},
          {key: 'email', required: true},
          {key: 'owner', required: true},
          {key: 'otherPhone', required: true},
      ],
      perform,

      sample: {
          firstName: 'zapier',
          lastName: 'zapier',
          email: 'zapier@gmail.com',
          owner: 'Sarthak Shah',
          otherPhone: '9876543210'
      },
  },
};