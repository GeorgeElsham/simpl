const { Events } = require('../connection')

exports.get = (uuid) => {
    Events.findOne(uuid);
}

exports.create = (data) => {
    Events.create(data);
}