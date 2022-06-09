const { Form } = require('./src/form.js');
const { Field } = require('./src/field.js');
const { MultiLineField } = require('./src/multiLineField.js');
const { validateName,
  isYyyyMmDd,
  isNotEmpty,
  validatePhoneNo,
  registerResponse } = require('./src/fillForm.js');

const main = () => {
  process.stdin.setEncoding('utf8');

  const name = new Field('name', 'Enter name', validateName);
  const dob = new Field('dob', 'Enter DOB', isYyyyMmDd);
  const hobbies = new Field('hobbies', 'Enter hobbies', isNotEmpty);
  const phoneNo = new Field('phoneNo', 'Enter Phone Number', validatePhoneNo);
  const addressPrompts = ['Enter address line 1', 'Enter address line 2'];
  const address = new MultiLineField('address', addressPrompts, isNotEmpty);

  const form = new Form(name, dob, hobbies, phoneNo, address);

  console.log(form.getCurrentField().getPrompt());
  process.stdin.on('data', (response) => {
    registerResponse(form, response.trim(), console.log);
  });
};

main();
