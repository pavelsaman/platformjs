/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { isWindows, isNotWindows } = require('../platform');

const { expect } = chai;

suite('isNotWindows()', function () {

    test('return boolean', function () {
        expect(typeof isNotWindows()).to.equal('boolean');
    });

    test('!isWindows() === isNotWindows()', function () {
        expect(!isWindows()).to.equal(isNotWindows());
    });

    test('throws, no platform', function () {
        const backup = process.platform;
        delete process.platform;
        expect(isNotWindows).to.throw(/No platform defined/);
        process.platform = backup;
    });
});
