/* eslint-disable no-process-exit */
const validateName = (name) => {
  const regEx = /^[A-Za-z]{5,}$/;
  return regEx.test(name);
};

const validateDob = (dob) => {
  const regEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  return regEx.test(dob);
};

const validatePhoneNo = (contact) => {
  const regEx = /^\d{10}$/;
  return regEx.test(contact);
};

class Form {
  #fields;
  #currentField;
  constructor(...fields) {
    this.#fields = fields;
    this.#currentField = 0;
  }

  getCurrentField() {
    return this.#fields[this.#currentField];
  }

  fillCurrentField(response) {
    this.getCurrentField().fill(response);
    this.#currentField++;
  }

  isComplete() {
    return this.#fields.every((field) => field.isFilled());
  }

  getAllResponses() {
    const responses = {};
    this.#fields.forEach(field => {
      responses[field.getName()] = field.getResponse();
    });
    return responses;
  }
}

module.exports = { Form };
