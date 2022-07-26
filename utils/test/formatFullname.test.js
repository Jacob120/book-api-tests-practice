const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return an error if  arg is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(12)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function () {})).to.equal('Error');
  });
  it('should return an error if arg length is 0', () => {
    expect(formatFullName()).to.equal('Error');
  });
  it('should return correct name', () => {
    expect(formatFullName('JOHN DOE')).to.equal('John Doe');
    expect(formatFullName('jOhN doe')).to.equal('John Doe');
    expect(formatFullName('john doe')).to.equal('John Doe');
  });
  it('should return an error if there is more than 1 first name and 1 last name', () => {
    expect(formatFullName('JOHN DOE doe')).to.equal('Error');
    expect(formatFullName('jOhN doe test')).to.equal('Error');
  });
});
