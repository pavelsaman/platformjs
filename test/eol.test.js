/* eslint-disable
   max-lines-per-function,
   max-nested-callbacks,
   no-empty-function,
   no-magic-numbers,
   prefer-arrow-callback
*/
const chai = require('chai');
const { eol } = require('../platform');

const { expect } = chai;

suite('eol()', function () {

    test('throws, no platform', function () {
        const backup = process.platform;
        delete process.platform;
        expect(eol).to.throw(/No platform defined/);
        process.platform = backup;
    });
});
