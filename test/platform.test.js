/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { platform } = require('../platform');
const { platformOptions } = require('./platforms');

const { expect } = chai;

suite('platform()', function () {

    test('return string', function () {
        expect(typeof platform()).to.equal('string');
    });

    test('return allowed option', function () {
        expect(platformOptions.includes(platform())).to.equal(true);
    });

    test('throws, no platform', function () {
        const backup = process.platform;
        delete process.platform;
        expect(platform).to.throw(/No platform defined/);
        process.platform = backup;
    });
});
