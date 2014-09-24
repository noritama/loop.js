var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Loop() {
    EventEmitter.call(this);
}

util.inherits(Loop, EventEmitter);

module.exports = Loop;

Loop.prototype.count = function(n, fn, cb) {
    var self = this;
    self.on('count', function(_n) {
        if (_n >= n) {
            return cb();
        }

        fn(_n);

        setImmediate(function() {
            self.emit('count', ++_n);
        });
    });

    self.emit('count', 0);
};

Loop.prototype.each = function(ary, fn, cb) {
    var self = this;
    self.on('each', function(_n) {
        if (_n >= ary.length) {
            return cb();
        }

        fn(ary[_n], _n);

        setImmediate(function() {
            self.emit('each', ++_n);
        });
    });

    self.emit('each', 0);
};

Loop.prototype.map = function(map, fn, cb) {
    var keys = Object.keys(map);
    var self = this;
    self.on('map', function(_n) {
        var key = keys[_n];
        if (!map[key]) {
            return cb();
        }

        fn(map[key], key);

        setImmediate(function() {
            self.emit('map', ++_n);
        });
    });

    self.emit('map', 0);
};
