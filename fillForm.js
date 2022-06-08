const { Form } = require('./form.js');
const { Field } = require('./field.js');
const fs = require('fs');

const saveResponses = (responses) => {
  fs.writeFileSync('formInfo.json', JSON.stringify(responses), 'utf8');
  console.log('Thank you!!');
  process.exit();
};

function registerResponse(form, response) {
  form.fillCurrentField(response.trim());
  if (form.isComplete()) {
    saveResponses(form.getAllResponses());
  }
  console.log(form.getCurrentField().getPrompt());
}

const main = () => {
  process.stdin.setEncoding('utf8');

  const name = new Field('name', 'Please enter your name');
  const dob = new Field('dob', 'Please enter your DOB');
  const hobbies = new Field('hobbies', 'Please enter your hobbies');
  const phoneNo = new Field('phoneNo', 'Please enter your Phone Number');
  const form = new Form(name, dob, hobbies, phoneNo);

  console.log(form.getCurrentField().getPrompt());

  process.stdin.on('data', (response) => {
    registerResponse(form, response);
  });
};

main();

