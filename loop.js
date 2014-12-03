'use strict';

var EventEmitter = require('events').EventEmitter;

function Loop() {
}

module.exports = new Loop();

Loop.prototype.count = function(n, fn, cb) {
    var event = new EventEmitter();
    event.on('count', function(_n) {
        if (_n >= n) {
            return cb();
        }

        fn(_n);

        setImmediate(function() {
            event.emit('count', ++_n);
        });
    });

    event.emit('count', 0);
};

Loop.prototype.each = function(ary, fn, cb) {
    var event = new EventEmitter();
    event.on('each', function(_n) {
        if (_n >= ary.length) {
            return cb();
        }

        fn(ary[_n], _n);

        setImmediate(function() {
            event.emit('each', ++_n);
        });
    });

    event.emit('each', 0);
};

Loop.prototype.map = function(map, fn, cb) {
    var event = new EventEmitter();
    var keys = Object.keys(map);
    event.on('map', function(_n) {
        var key = keys[_n];
        if (!map[key]) {
            return cb();
        }

        fn(map[key], key);

        setImmediate(function() {
            event.emit('map', ++_n);
        });
    });

    event.emit('map', 0);
};
