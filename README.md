[![Travis CI Test Status](https://travis-ci.org/connrs/recursive-string-repeat.png)](https://travis-ci.org/connrs/recursive-string-repeat)

A simple test to see if I could use recursion to implement the stringRepeat method from Axel's blog post on [repeating strings efficiently](http://www.2ality.com/2014/01/efficient-string-repeat.html)

    function repeat(num, str) {
        num = Number(num);
    
        if (num === 0) {
            return '';
        }
    
        return repeat(num >>> 1, str + str) + (num & 1 ? str : '');
    }
