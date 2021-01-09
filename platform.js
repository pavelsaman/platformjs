class NoProcess extends Error {}

const _exist = propertyName => {
    if (typeof process === 'undefined')
        throw new NoProcess("No process defined!");
    if (!Object.prototype.hasOwnProperty.call(process, propertyName))
        throw new NoProcess(`No ${propertyName} defined!`);
};

const platform = () => {
    _exist('platform');
    return process.platform;
};

const architecture = () => {
    _exist('arch');
    return process.arch;
};

const isWindows = () => platform() === 'winn32';
const isNotWindows = () => !isWindows();
const eol = () => {
    return isWindows() ? '\r\n' : '\n';
};

const is64bit = () => {
    return /64/.test(architecture());
};

const is32bit = () => {
    return /32/.test(architecture());
};

module.exports = {
    platform,
    isWindows,
    isNotWindows,
    eol,
    architecture,
    arch: architecture,
    is64bit,
    is32bit,
    is64: is64bit,
    is32: is32bit
};
