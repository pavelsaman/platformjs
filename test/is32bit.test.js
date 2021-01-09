/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { is32bit } = require('../platform');

const { expect } = chai;

suite('is32bit()', function () {

    test('return boolean', function () {
        expect(typeof is32bit()).to.equal('boolean');
    });

    test('throws, no arch', function () {
        const backup = process.arch;
        delete process.arch;
        expect(is32bit).to.throw(/No arch defined/);
        process.arch = backup;
    });
});
