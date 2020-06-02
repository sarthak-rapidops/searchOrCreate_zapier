const perform = async (z, bundle) => {
  const response = await z.request({
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'sessionToken': 'bbc9f361-9e78-11ea-8b98-3f60d8467ffd',
        'x-linkname': 'dev7.salesmate.io',
      },
      url: "https://apis-dev.salesmate.io/v3/contacts/search?rows=25&from=0&sortBy=&sortOrder=",
      body: {
          fields:[
            'firstName',
            'lastName',
            'email'
          ],
        "query": {
            "group":{
              "rules":[{
                    "condition": "EQUALS",
                    "moduleName":"Contact",
                    "field": {
                        "fieldName": "email"
                    },
                    "data": bundle.inputData.email
              }]
            }
          }
        //email: bundle.inputData.email,
    },
  });
  console.log(response.data.Data.data)
  //console.log(response.ResponseError.content.Error.Name)
  return response.data.Data.data;
};
module.exports = {
  key: 'contact',
  noun: 'Contact',
  display: {
      label: 'Find Contact',
      description: 'Find a Contact',
  },
  operation: {
      inputFields: [
          {
              key: 'email',
              required: true,
              helpText: 'Find the Contact with this email.',
          }
      ],
      perform,
      sample: {
          email: 'test@gmail.com'
      },
  },
};