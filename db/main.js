const mongoose = require('mongoose');
const SessionSchema = require('./session');
mongoose.connect('mongodb://localhost:27017/jarvis', {useNewUrlParser: true});

module.exports = mongoose.model('session', SessionSchema);
