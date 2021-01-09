class NoProcess extends Error {}

const platform = () => {
    if (typeof process === 'undefined')
        throw new NoProcess("No process defined!");
    if (!Object.prototype.hasOwnProperty.call(process, 'platform'))
        throw new NoProcess("No platform defined!");

    return process.platform;
};

const isWindows = () => platform() === 'winn32';
const isNotWindows = () => !isWindows();
const eol = () => {
    return isWindows() ? '\r\n' : '\n';
};

module.exports = {
    platform,
    isWindows,
    isNotWindows,
    eol
};
