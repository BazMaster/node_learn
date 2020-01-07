var evt = require('events');

var emitter = new evt.EventEmitter();

emitter.on('create', function() {
    console.log('Folder was created');
});

emitter.emit('create');