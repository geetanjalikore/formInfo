class Field {
  #name;
  #prompt;
  #response;

  constructor(name, prompt) {
    this.#name = name;
    this.#prompt = prompt;
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
}

module.exports = { Field };
