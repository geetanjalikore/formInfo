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

  describe('getAllResponses', () => {
    it('should give all the field names and responses of whole form ', () => {
      const name = new Field('name', 'Enter name');
      const dob = new Field('dob', 'Enter DOB');
      const form = new Form(name, dob);
      form.fillCurrentField('abin');
      form.fillCurrentField('2022-02-12');
      assert.deepStrictEqual(form.getAllResponses(), { name: 'abin', dob: '2022-02-12' });
    });
  });

  describe('isComplete', () => {
    it('Should return true when all fields of form are filled', () => {
      const name = new Field('name', 'Enter name');
      const dob = new Field('dob', 'Enter DOB');
      const form = new Form(name, dob);
      form.fillCurrentField('abin');
      form.fillCurrentField('2022-02-12');
      assert.strictEqual(form.isComplete(), true);
    });

    it('Should return false when all fields of form are not filled', () => {
      const name = new Field('name', 'Enter name');
      const form = new Form(name);
      assert.strictEqual(form.isComplete(), false);
    });
  });
});
