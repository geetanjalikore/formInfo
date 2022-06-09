const saveResponses = (responses, writeFile) => {
  writeFile('formInfo.json', JSON.stringify(responses), 'utf8');
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

function registerResponse(form, response, log, writeFile) {
  if (!form.getCurrentField().isValid(response)) {
    log('Invalid response');
    log(form.getCurrentField().getPrompt());
    return;
  }

  form.fillCurrentField(response);
  if (form.isComplete()) {
    saveResponses(form.getAllResponses(), writeFile);
    log('Thank you!!');
    process.stdin.destroy();
    return;
  }

  log(form.getCurrentField().getPrompt());
}

module.exports = {
  registerResponse,
  isNotEmpty,
  validateName,
  validatePhoneNo,
  isYyyyMmDd
};
