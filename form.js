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
