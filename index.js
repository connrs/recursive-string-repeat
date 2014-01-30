function repeat(num, str) {
    num = Number(num);

    if (num === 0) {
        return '';
    }

    return repeat(num >>> 1, str + str) + (num & 1 ? str : '');
}

module.exports = repeat;
