/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { isWindows } = require('../platform');

const { expect } = chai;

suite('isWindows()', function () {

    test('return boolean', function () {
        expect(typeof isWindows()).to.equal('boolean');
    });

    test('throws, no platform', function () {
        const backup = process.platform;
        delete process.platform;
        expect(isWindows).to.throw(/No platform defined/);
        process.platform = backup;
    });
});
