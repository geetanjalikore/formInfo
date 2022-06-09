const assert = require('assert');
const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const { registerResponse } = require('../src/fillForm');

describe('registerResponse', () => {
  it('Should register the response for a field of form', () => {
    const name = new Field('name', 'Enter name');
    const form = new Form(name);
    const cb = () => { };
    registerResponse(form, 'abin', cb, cb);
    assert.deepStrictEqual(form.getAllResponses(), { name: 'abin' });
  });

  it('Should register only valid response when validator is provided', () => {
    const isLongerThan5 = (response) => response.length > 4;
    const name = new Field('name', 'Enter name', isLongerThan5);
    const form = new Form(name);
    const cb = () => { };
    registerResponse(form, 'chhavi', cb, cb);
    assert.deepStrictEqual(form.getAllResponses(), { name: 'chhavi' });
  });

  it('Should not register invalid response', () => {
    const isLongerThan5 = (response) => response.length > 4;
    const name = new Field('name', 'Enter name', isLongerThan5);
    const form = new Form(name);
    const cb = () => { };
    registerResponse(form, 'abin', cb, cb);
    assert.deepStrictEqual(form.getAllResponses(), { name: null });
  });
});
