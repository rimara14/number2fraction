import { fraction2number } from './fraction-to-number';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Fraction to Number', () => {

  it('should be able to convert fraction to number' , () => {
    expect(fraction2number('1/2')).to.equal(0.5);
    expect(fraction2number('1/4')).to.equal(0.25);
    expect(fraction2number('3/4')).to.equal(0.75);
    expect(fraction2number('2/3').toFixed(3)).to.equal('0.667');
    expect(fraction2number('1/3').toFixed(3)).to.equal('0.333');
    expect(fraction2number('12321/3123321').toFixed(6)).to.equal('0.003945');
    expect(fraction2number('5/3').toFixed(5)).to.equal('1.66667');
    expect(fraction2number('9999999/222').toFixed(8)).to.equal('45045.04054054');
  });


  it('should throw error if given value is not fraction' , () => {
    expect(() => fraction2number('4')).to.throw('input is not a fraction');
  });

});