/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { is64bit } = require('../platform');

const { expect } = chai;

suite('is64bit()', function () {

    test('return boolean', function () {
        expect(typeof is64bit()).to.equal('boolean');
    });

    test('throws, no arch', function () {
        const backup = process.arch;
        delete process.arch;
        expect(is64bit).to.throw(/No arch defined/);
        process.arch = backup;
    });
});
