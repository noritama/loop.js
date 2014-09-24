var Loop = require('../loop');

var lop = new Loop();

lop.count(10, function(n) {
    console.log(n);
}, function() {
    console.log('finish!');
});
