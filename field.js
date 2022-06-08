class Field {
  #name;
  #prompt;
  #response;
  #validator;

  constructor(name, prompt, validator = () => true) {
    this.#name = name;
    this.#prompt = prompt;
    this.isValid = validator;
    this.#response = null;
  }

  fill(response) {
    this.#response = response;
  }

  getPrompt() {
    return this.#prompt;
  }

  isFilled() {
    return this.#response !== null;
  }

  getName() {
    return this.#name;
  }

  getResponse() {
    if (this.#name === 'hobbies') {
      return this.#response.split(',');
    }
    return this.#response;
  }
}

module.exports = { Field };
