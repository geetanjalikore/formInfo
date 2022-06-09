const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

describe('Form', () => {
  describe('fillCurrentField', () => {
    it('should fill the current field with response', () => {
      const name = new Field('name', 'Enter name');
      const form = new Form(name);
      form.fillCurrentField('abin');
      assert.deepStrictEqual(form.getAllResponses(), { name: 'abin' });
    });
  });

  describe('getCurrentField', () => {
    it('Should give first field as current field', () => {
      const name = new Field('name', 'Enter name');
      const form = new Form(name);
      assert.deepStrictEqual(form.getCurrentField(), name);
    });

    it('Should give next field after filling the first field', () => {
      const name = new Field('name', 'Enter name');
      const dob = new Field('dob', 'Enter DOB');
      const form = new Form(name, dob);
      form.fillCurrentField('abin');
      assert.deepStrictEqual(form.getCurrentField(), dob);
    });
  });
});
