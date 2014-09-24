var Loop = require('../loop');

var lop = new Loop();

var map = {
    a: {},
    b: {},
    c: {},
    d: {},
    e: {},
};

lop.map(map, function(d, k) {
    d.key = k;
}, function() {
    console.log('finish!', map);
});
