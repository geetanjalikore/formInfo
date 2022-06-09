const assert = require('assert');
const { Field } = require('../src/field.js');

describe('Field', () => {
  describe('getPrompt', () => {
    it('should give prompt of relative field', () => {
      const name = new Field('name', 'Enter name');
      assert.strictEqual(name.getPrompt(), 'Enter name');
    });
  });

  describe('getName', () => {
    it('should give name of relative field', () => {
      const name = new Field('name', 'Enter name');
      assert.strictEqual(name.getName(), 'name');
    });
  });

  describe('fill', () => {
    it('should fill the field with provided response', () => {
      const name = new Field('name', 'Enter name');
      name.fill('abin');
      assert.strictEqual(name.getResponse(), 'abin');
    });
  });

  describe('isFilled', () => {
    it('should return true if field is filled', () => {
      const name = new Field('name', 'Enter name');
      name.fill('abin');
      assert.strictEqual(name.isFilled(), true);
    });

    it('should return false if field is not filled', () => {
      const name = new Field('name', 'Enter name');
      assert.strictEqual(name.isFilled(), false);
    });
  });
});
