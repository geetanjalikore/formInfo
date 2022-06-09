const assert = require('assert');
const { MultiLineField } = require('../src/multiLineField.js');

describe('MultiLineField', () => {
  describe('getPrompt', () => {
    it('should give first line prompt of relative field', () => {
      const address = new MultiLineField('address', ['Enter address line 1']);
      assert.strictEqual(address.getPrompt(), 'Enter address line 1');
    });

    it('should give next prompt when first line is filled', () => {
      const prompts = ['Enter address line 1', 'Enter address line 2'];
      const address = new MultiLineField('address', prompts);
      address.fill('block 12');
      assert.strictEqual(address.getPrompt(), 'Enter address line 2');
    });
  });

  describe('getName', () => {
    it('should give name of relative field', () => {
      const address = new MultiLineField('address', ['Enter address']);
      assert.strictEqual(address.getName(), 'address');
    });
  });

  describe('fill', () => {
    it('should fill the field for first prompt with provided response', () => {
      const address = new MultiLineField('address', ['address line 1']);
      address.fill('block 12');
      assert.strictEqual(address.getResponse(), 'block 12');
    });

    it('should fill the field for next prompt with provided response', () => {
      const address = new MultiLineField('address', ['line 1', 'line 2']);
      address.fill('block 12');
      address.fill('KA');
      assert.strictEqual(address.getResponse(), 'block 12\nKA');
    });
  });

  describe('isFilled', () => {
    it('should return true if every line of field is filled', () => {
      const address = new MultiLineField('address', ['line 1', 'line2']);
      address.fill('block 2');
      address.fill('KA');
      assert.strictEqual(address.isFilled(), true);
    });

    it('should return false if any line of field is not filled', () => {
      const address = new MultiLineField('address', ['line 1', 'line 2']);
      address.fill('block 2');
      assert.strictEqual(address.isFilled(), false);
    });
  });
});
