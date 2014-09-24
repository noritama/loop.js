var Loop = require('../loop');

var lop = new Loop();

var array = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    { a: 5, b: 6 },
    { a: 7, b: 8 },
    { a: 9, b: 10 },
];

lop.each(array, function(d, i) {
    d.idx = i;
}, function() {
    console.log('finish!', array);
});
