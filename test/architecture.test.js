/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { architecture } = require('../platform');
const { archsOptions } = require('./archs');

const { expect } = chai;

suite('architecture()', function () {

    test('return string', function () {
        expect(typeof architecture()).to.equal('string');
    });

    test('return allowed option', function () {
        expect(archsOptions.includes(architecture())).to.equal(true);
    });

    test('throws, no arch', function () {
        const backup = process.arch;
        delete process.arch;
        expect(architecture).to.throw(/No arch defined/);
        process.arch = backup;
    });
});
