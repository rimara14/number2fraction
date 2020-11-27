import { number2fraction } from './number-to-fraction';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Number to Fraction', () => {

  it('should be able to convert decimal number to fraction' , () => {
    expect(number2fraction(0.25)).to.equal('1/4');
    expect(number2fraction(0.5)).to.equal('1/2');
    expect(number2fraction(0.75)).to.equal('3/4');
    expect(number2fraction(0.667)).to.equal('667/1000');
    expect(number2fraction(0.333)).to.equal('333/1000');
    expect(number2fraction(1.66667)).to.equal('166667/100000');
  });


  it('should return its original value if not decimal' , () => {
    expect(number2fraction(1)).to.equal('1');
    expect(number2fraction(45)).to.equal('45');
    expect(number2fraction(4234234)).to.equal('4234234');
  });

});