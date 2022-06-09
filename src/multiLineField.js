class MultiLineField {
  #name;
  #prompts;
  #responses;
  #validator;

  constructor(name, prompts, validator = () => true) {
    this.#name = name;
    this.#prompts = prompts;
    this.isValid = validator;
    this.#responses = [];
  }

  fill(response) {
    this.#responses.push(response);
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }

  getName() {
    return this.#name;
  }

  getResponse() {
    return this.#responses.join('\n');
  }
}

module.exports = { MultiLineField };
