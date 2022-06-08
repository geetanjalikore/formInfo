const { Form } = require('./form.js');
const { Field } = require('./field.js');
const fs = require('fs');

const saveResponses = (responses) => {
  fs.writeFileSync('formInfo.json', JSON.stringify(responses), 'utf8');
  console.log('Thank you!!');
  process.exit();
};

const validateName = (name) => {
  const regEx = /^[A-Za-z]{5,}$/;
  return regEx.test(name);
};

const isYyyyMmDd = (dob) => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  return regEx.test(dob);
};

const validatePhoneNo = (contact) => {
  const regEx = /^\d{10}$/;
  return regEx.test(contact);
};

const isNotEmpty = (response) => {
  return response.length > 0;
};

function registerResponse(form, response) {
  let currentField = form.getCurrentField();

  if (!currentField.isValid(response)) {
    console.log('Invalid response');
    console.log(currentField.getPrompt());
    return;
  }

  form.fillCurrentField(response);
  if (form.isComplete()) {
    saveResponses(form.getAllResponses());
  }

  currentField = form.getCurrentField();
  console.log(currentField.getPrompt());
}

const main = () => {
  process.stdin.setEncoding('utf8');

  const name = new Field('name', 'Enter name', validateName);
  const dob = new Field('dob', 'Enter DOB', isYyyyMmDd);
  const hobbies = new Field('hobbies', 'Enter hobbies', isNotEmpty);
  const phoneNo = new Field('phoneNo', 'Enter Phone Number', validatePhoneNo);
  const form = new Form(name, dob, hobbies, phoneNo);

  console.log(form.getCurrentField().getPrompt());

  process.stdin.on('data', (response) => {
    registerResponse(form, response.trim());
  });
};

main();
