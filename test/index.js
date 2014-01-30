var repeat = require('..');
var test = require('tape');

test('0', function (t) {
    t.plan(1);
    t.equal('', repeat(0, ''));
});

test('1', function (t) {
    t.plan(1);
    t.equal('a', repeat(1, 'a'));
});

test('2', function (t) {
    t.plan(1);
    t.equal('aa', repeat(2, 'a'));
});

test('3', function (t) {
    t.plan(1);
    t.equal('aaa', repeat(3, 'a'));
});

test('4', function (t) {
    t.plan(1);
    t.equal(repeat(4, 'a'), 'aaaa');
});

test('5', function (t) {
    t.plan(1);
    t.equal('aaaaa', repeat(5, 'a'));
});

test('6', function (t) {
    t.plan(1);
    t.equal('aaaaaa', repeat(6, 'a'));
});

test('7', function (t) {
    t.plan(1);
    t.equal('aaaaaaa', repeat(7, 'a'));
});

test('8', function (t) {
    t.plan(1);
    t.equal('aaaaaaaa', repeat(8, 'a'));
});

test('10', function (t) {
    t.plan(1);
    t.equal('aaaaaaaaaa', repeat(10, 'a'));
});

test('100', function (t) {
    t.plan(1);
    t.equal('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', repeat(100, 'a'));
});

test('1000', function (t) {
    t.plan(1);
    t.equal('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', repeat(1000, 'a'));
});
