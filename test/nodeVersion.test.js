/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { nodeVersion } = require('../platform');

const { expect } = chai;

suite('nodeVersion()', function () {

    test('return string', function () {
        expect(typeof nodeVersion()).to.equal('string');
    });

    test('return version string', function () {
        expect(nodeVersion()).to.match(/^v/);
    });

    test('throws, no version', function () {
        const backup = process.version;
        delete process.version;
        expect(nodeVersion).to.throw(/No version defined/);
        process.version = backup;
    });
});
