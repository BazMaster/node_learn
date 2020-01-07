var evt = require('events');

function ReadFile() {
    this.file = '';
}

ReadFile.prototype = new evt.EventEmitter();

ReadFile.prototype.readDataFromFile = function(path, callback) {
    this.file = path;
    if (typeof callback == 'function') {
        this.on('readData', callback)
    }
    this._read();
}

ReadFile.prototype._read = function() {
    console.log('Loading...');
    var someDateFromFile = 'TextTextText';
    console.log('Data was read');
    this.emit('readData', someDateFromFile);
}

module.exports.Reader = ReadFile;